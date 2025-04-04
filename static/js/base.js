// Base JavaScript for all pages

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mainNav = document.querySelector(".main-nav")

  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (mainNav && mainNav.classList.contains("active")) {
      if (!event.target.closest(".main-nav") && !event.target.closest(".mobile-menu-toggle")) {
        mainNav.classList.remove("active")
      }
    }
  })

  // Dropdown menus for mobile
  const dropdowns = document.querySelectorAll(".dropdown")

  if (window.innerWidth <= 992) {
    dropdowns.forEach((dropdown) => {
      const link = dropdown.querySelector("a")
      const menu = dropdown.querySelector(".dropdown-menu")

      if (link && menu) {
        link.addEventListener("click", (e) => {
          if (window.innerWidth <= 992) {
            e.preventDefault()
            menu.style.display = menu.style.display === "block" ? "none" : "block"
          }
        })
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")

      if (targetId !== "#" && document.querySelector(targetId)) {
        e.preventDefault()

        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Add active class to current page in navigation
  const currentLocation = window.location.pathname
  const navLinks = document.querySelectorAll(".main-nav a")

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href")

    if (linkPath === currentLocation || (currentLocation.includes(linkPath) && linkPath !== "/")) {
      link.classList.add("active")
    }
  })
})

