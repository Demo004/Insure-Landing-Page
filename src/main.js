// modern-normalize
import "../style/modern-normalize.css";

// main-style
import "../style/style.css";

// components
import "../style/components/header.css";
import "../style/components/blog.css";
import "../style/components/acct.css";

// utility
import "../style/utility.css";

// ### scroll behavior
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// ### For auto closing menu on click
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("check");
  const menuLinks = document.querySelectorAll(".header__menu a");

  menuLinks.forEach(link => {
      link.addEventListener("click", () => {
          checkbox.checked = false; // Uncheck the checkbox to close the menu
      });
  });
});

