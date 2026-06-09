/**
 * PATS Dashboard Theme System
 * 
 * Include this script at the TOP of every page (before styles render).
 * Sets data-theme attribute on <html> immediately to prevent flash.
 * Provides window.patsTheme.toggle() and window.patsTheme.get().
 */
(function() {
  "use strict";

  var STORAGE_KEY = "pats_theme";
  var DEFAULT_THEME = "light";

  function getPreferred() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
    // Respect system preference, fallback to light
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return DEFAULT_THEME;
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    // Swap logo images
    var logos = document.querySelectorAll("img[data-logo]");
    for (var i = 0; i < logos.length; i++) {
      logos[i].src = theme === "dark" ? "/assets/logo-white.png" : "/assets/logo.png";
    }
    // Update toggle button icons
    var toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    for (var j = 0; j < toggleBtns.length; j++) {
      toggleBtns[j].innerHTML = theme === "dark" ? SUN_ICON : MOON_ICON;
      toggleBtns[j].title = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    }
  }

  function toggle() {
    var current = document.documentElement.getAttribute("data-theme") || getPreferred();
    apply(current === "dark" ? "light" : "dark");
  }

  var SUN_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  var MOON_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  // Apply immediately before paint
  var theme = getPreferred();
  document.documentElement.setAttribute("data-theme", theme);

  // Re-apply after DOM ready (for logo swaps etc)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() { apply(theme); });
  } else {
    apply(theme);
  }

  // Expose API
  window.patsTheme = {
    get: function() { return document.documentElement.getAttribute("data-theme") || getPreferred(); },
    toggle: toggle,
    apply: apply,
    SUN_ICON: SUN_ICON,
    MOON_ICON: MOON_ICON
  };
})();
