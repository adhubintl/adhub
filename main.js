document.addEventListener("DOMContentLoaded", function () {
  const servicesSection = document.querySelector(".marketing-container");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function checkVisibility() {
    if (isElementInViewport(servicesSection)) {
      servicesSection.classList.add("visible");
    }
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("load", checkVisibility); // trigger on load in case it's already visible
});
