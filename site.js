(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#main-nav");
  const navigationLinks = [...(navigation?.querySelectorAll('a[href^="#"]') ?? [])];
  const navigationSections = navigationLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setMenuOpen = (open) => {
    menuButton?.setAttribute("aria-expanded", String(open));
    menuButton?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    navigation?.classList.toggle("is-open", open);
  };

  menuButton?.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navigation?.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      setMenuOpen(false);
      setActiveSection(link.hash.slice(1));
    });
  });

  const setActiveSection = (sectionId) => {
    navigationLinks.forEach((link) => {
      if (link.hash === `#${sectionId}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  let activeFrame = 0;
  const updateActiveSection = () => {
    if (activeFrame) return;
    activeFrame = window.requestAnimationFrame(() => {
      activeFrame = 0;
      const marker = window.scrollY + Math.min(window.innerHeight * 0.32, 240);
      const currentSection = navigationSections.reduce((current, section) => {
        return section.offsetTop <= marker ? section : current;
      }, navigationSections[0]);
      if (currentSection) setActiveSection(currentSection.id);
    });
  };

  window.addEventListener("scroll", updateActiveSection, { passive: true });
  window.addEventListener("resize", updateActiveSection);
  updateActiveSection();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

})();
