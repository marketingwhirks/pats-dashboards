/**
 * PATS Dashboards - Shared Navigation Component
 *
 * Single source of truth for the nav bar across all dashboard pages.
 * Include this script in the <head> or at the top of <body>.
 * Auto-detects active page and includes theme toggle.
 */
(function () {
  "use strict";

  var NAV_LINKS = [
    { href: "/index.html", label: "Automation Scorecard", aliases: ["/", "/index.html"] },
    { href: "/activity.html", label: "Monthly Activity" },
    { href: "/connections.html", label: "QBO Connections" },
    { href: "/fee-analysis.html", label: "Fee Analysis" },
    { href: "/admin.html", label: "Admin" },
  ];

  function buildNav() {
    var currentPath = window.location.pathname;

    var nav = document.createElement("nav");
    nav.id = "pats-main-nav";
    nav.style.cssText =
      "display:flex;align-items:center;gap:8px;padding:12px 20px;" +
      "background:rgba(26,31,46,0.95);border-bottom:1px solid rgba(74,144,226,0.2);";

    // Logo link
    var logoLink = document.createElement("a");
    logoLink.href = "/";
    logoLink.style.cssText = "margin-right:16px;display:flex;align-items:center;text-decoration:none;";
    var logoImg = document.createElement("img");
    logoImg.setAttribute("data-logo", "");
    // Let theme.js handle the right logo variant
    var theme = document.documentElement.getAttribute("data-theme") || "dark";
    logoImg.src = theme === "dark" ? "/assets/logo-white.png" : "/assets/logo.png";
    logoImg.alt = "Patrick Accounting";
    logoImg.style.height = "28px";
    logoLink.appendChild(logoImg);
    nav.appendChild(logoLink);

    // Page links
    for (var i = 0; i < NAV_LINKS.length; i++) {
      var link = NAV_LINKS[i];
      var aliases = link.aliases || [link.href];
      var isActive = false;
      for (var j = 0; j < aliases.length; j++) {
        if (currentPath === aliases[j]) { isActive = true; break; }
      }

      var a = document.createElement("a");
      a.href = link.href;
      a.textContent = link.label;
      a.style.cssText =
        "padding:6px 12px;border-radius:6px;font-size:13px;font-weight:500;text-decoration:none;transition:all 0.2s;";

      if (isActive) {
        a.style.color = "#fff";
        a.style.background = "rgba(74,144,226,0.15)";
        a.style.border = "1px solid rgba(74,144,226,0.3)";
      } else {
        a.style.color = "#a0a0a0";
        a.style.background = "transparent";
        a.style.border = "1px solid transparent";
      }

      nav.appendChild(a);
    }

    // Spacer
    var spacer = document.createElement("div");
    spacer.style.flex = "1";
    nav.appendChild(spacer);

    // Theme toggle button
    if (window.patsTheme) {
      var toggleBtn = document.createElement("button");
      toggleBtn.className = "theme-toggle-btn";
      toggleBtn.onclick = function () { window.patsTheme.toggle(); };
      toggleBtn.title = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
      toggleBtn.innerHTML = theme === "dark" ? window.patsTheme.SUN_ICON : window.patsTheme.MOON_ICON;
      nav.appendChild(toggleBtn);
    }

    return nav;
  }

  // Insert nav at the top of <body> when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      document.body.insertBefore(buildNav(), document.body.firstChild);
    });
  } else {
    document.body.insertBefore(buildNav(), document.body.firstChild);
  }
})();
