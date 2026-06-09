/**
 * PATS Dashboard Auth Wrapper
 *
 * Include this script at the top of every dashboard page.
 * It checks for a valid session and redirects to login if needed.
 * Also injects a user badge + logout button + theme toggle into the nav bar.
 */
(function() {
  "use strict";

  var AUTH_BASE = "https://standing-malamute-183.convex.site";
  var LOGIN_PATH = "/login.html";
  var VERIFY_TIMEOUT = 5000; // ms

  // Pages that don't require auth
  var PUBLIC_PAGES = ["/login.html", "/auth-callback.html"];
  var currentPath = window.location.pathname;
  for (var i = 0; i < PUBLIC_PAGES.length; i++) {
    if (currentPath === PUBLIC_PAGES[i]) return;
  }

  // Hide page content until auth check completes
  document.documentElement.style.opacity = "0";
  document.documentElement.style.transition = "opacity 0.3s ease";

  var token = localStorage.getItem("pats_session_token");

  if (!token) {
    window.location.href = LOGIN_PATH + "?redirect=" + encodeURIComponent(currentPath);
    return;
  }

  // Verify session
  var controller = new AbortController();
  var timeoutId = setTimeout(function() { controller.abort(); }, VERIFY_TIMEOUT);

  fetch(AUTH_BASE + "/auth/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token }),
    signal: controller.signal,
  })
  .then(function(r) { return r.json(); })
  .then(function(data) {
    clearTimeout(timeoutId);
    if (data.valid && data.user) {
      localStorage.setItem("pats_user", JSON.stringify(data.user));
      window.__PATS_USER = data.user;
      showPage();
      injectNavControls(data.user);
      applyRoleGating(data.user);
    } else {
      localStorage.removeItem("pats_session_token");
      localStorage.removeItem("pats_user");
      window.location.href = LOGIN_PATH + "?redirect=" + encodeURIComponent(currentPath);
    }
  })
  .catch(function() {
    clearTimeout(timeoutId);
    // Network error - try cached user info
    var cached = localStorage.getItem("pats_user");
    if (cached) {
      try {
        var user = JSON.parse(cached);
        window.__PATS_USER = user;
        showPage();
        injectNavControls(user);
        applyRoleGating(user);
      } catch (e) {
        window.location.href = LOGIN_PATH + "?redirect=" + encodeURIComponent(currentPath);
      }
    } else {
      window.location.href = LOGIN_PATH + "?redirect=" + encodeURIComponent(currentPath);
    }
  });

  function showPage() {
    document.documentElement.style.opacity = "1";
    // Enable smooth transitions after initial paint
    setTimeout(function() {
      document.documentElement.classList.add("theme-transition");
    }, 300);
  }

  function injectNavControls(user) {
    // Find the nav bar
    var nav = document.querySelector("nav");
    if (!nav) return;

    // Tag the nav logo for theme swapping
    var navLogo = nav.querySelector("img");
    if (navLogo && !navLogo.hasAttribute("data-logo")) {
      navLogo.setAttribute("data-logo", "");
      // Apply correct logo for current theme
      var currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      navLogo.src = currentTheme === "dark" ? "/assets/logo-white.png" : "/assets/logo.png";
    }

    // Create controls container (right side of nav)
    var controls = document.createElement("div");
    controls.style.cssText = "display:flex;align-items:center;gap:8px;margin-left:auto;";

    // Theme toggle button
    var themeBtn = document.createElement("button");
    themeBtn.className = "theme-toggle-btn";
    var currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    themeBtn.innerHTML = currentTheme === "dark" ? window.patsTheme.SUN_ICON : window.patsTheme.MOON_ICON;
    themeBtn.title = currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    themeBtn.addEventListener("click", function() {
      window.patsTheme.toggle();
    });
    controls.appendChild(themeBtn);

    // Avatar
    if (user.avatarUrl) {
      var img = document.createElement("img");
      img.src = user.avatarUrl;
      img.style.cssText = "width:28px;height:28px;border-radius:50%;border:1px solid rgba(128,128,128,0.3);";
      img.alt = user.displayName;
      controls.appendChild(img);
    }

    // Name + role
    var nameEl = document.createElement("span");
    nameEl.style.cssText = "font-size:12px;color:inherit;opacity:0.7;";
    nameEl.textContent = user.displayName;
    if (user.role === "owner") {
      nameEl.innerHTML += " <span style='color:#4a90e2;font-size:10px;background:rgba(74,144,226,0.15);padding:2px 6px;border-radius:4px;'>OWNER</span>";
    }
    controls.appendChild(nameEl);

    // Logout button
    var logoutBtn = document.createElement("button");
    logoutBtn.textContent = "Sign Out";
    logoutBtn.style.cssText = "background:transparent;border:1px solid rgba(128,128,128,0.2);color:inherit;opacity:0.5;padding:4px 10px;border-radius:4px;font-size:11px;cursor:pointer;margin-left:4px;transition:all 0.2s;";
    logoutBtn.addEventListener("mouseover", function() { this.style.borderColor = "rgba(255,59,48,0.5)"; this.style.color = "#ff6b6b"; this.style.opacity = "1"; });
    logoutBtn.addEventListener("mouseout", function() { this.style.borderColor = "rgba(128,128,128,0.2)"; this.style.color = "inherit"; this.style.opacity = "0.5"; });
    logoutBtn.addEventListener("click", function() {
      fetch(AUTH_BASE + "/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: localStorage.getItem("pats_session_token") }),
      }).catch(function() {});
      localStorage.removeItem("pats_session_token");
      localStorage.removeItem("pats_user");
      window.location.href = "/login.html";
    });
    controls.appendChild(logoutBtn);

    nav.appendChild(controls);
  }

  function applyRoleGating(user) {
    // Elements with data-role-min="owner" are hidden unless user is owner
    var gated = document.querySelectorAll("[data-role-min]");
    for (var j = 0; j < gated.length; j++) {
      var minRole = gated[j].getAttribute("data-role-min");
      if (minRole === "owner" && user.role !== "owner") {
        gated[j].style.display = "none";
      }
      if (minRole === "manager" && user.role === "staff") {
        gated[j].style.display = "none";
      }
    }
    // Expose role for page-level JS
    window.__PATS_ROLE = user.role;
  }
})();
