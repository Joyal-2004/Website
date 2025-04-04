// Common JavaScript for all pages

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const header = document.querySelector("header")

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      header.classList.toggle("mobile-menu-active")
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (header.classList.contains("mobile-menu-active") && !event.target.closest("header")) {
      header.classList.remove("mobile-menu-active")
    }
  })

  // Dropdown menu accessibility
  const dropdowns = document.querySelectorAll(".dropdown")

  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector("a")
    const menu = dropdown.querySelector(".dropdown-menu")

    if (link && menu) {
      // Add aria attributes
      link.setAttribute("aria-haspopup", "true")
      link.setAttribute("aria-expanded", "false")
      menu.setAttribute("aria-label", "submenu")

      // Toggle on click for mobile
      link.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault()
          this.setAttribute("aria-expanded", this.getAttribute("aria-expanded") === "true" ? "false" : "true")
          dropdown.classList.toggle("active")
        }
      })

      // Keyboard navigation
      link.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          this.setAttribute("aria-expanded", "true")
          dropdown.classList.add("active")
          menu.querySelector("a").focus()
        }
      })

      // Close dropdown when focus leaves
      dropdown.addEventListener("focusout", (e) => {
        if (!dropdown.contains(e.relatedTarget)) {
          link.setAttribute("aria-expanded", "false")
          dropdown.classList.remove("active")
        }
      })
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        e.preventDefault()
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })

  // Form validation
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      let isValid = true
      const requiredFields = form.querySelectorAll("[required]")

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false
          field.classList.add("error")

          // Create error message if it doesn't exist
          let errorMessage = field.nextElementSibling
          if (!errorMessage || !errorMessage.classList.contains("error-message")) {
            errorMessage = document.createElement("div")
            errorMessage.classList.add("error-message")
            errorMessage.textContent = "This field is required"
            field.parentNode.insertBefore(errorMessage, field.nextSibling)
          }
        } else {
          field.classList.remove("error")
          const errorMessage = field.nextElementSibling
          if (errorMessage && errorMessage.classList.contains("error-message")) {
            errorMessage.remove()
          }
        }
      })

      if (!isValid) {
        e.preventDefault()
      }
    })
  })
})

