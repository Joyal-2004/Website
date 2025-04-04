// Learning Resources page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Age filter functionality
  const ageFilters = document.querySelectorAll(".age-filter")
  const resourceBoxes = document.querySelectorAll(".resource-box")

  ageFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      // Remove active class from all filters
      ageFilters.forEach((f) => f.classList.remove("active"))

      // Add active class to clicked filter
      filter.classList.add("active")

      // Get selected age group
      const selectedAge = filter.getAttribute("data-age")

      // Show/hide resource boxes based on selected age
      resourceBoxes.forEach((box) => {
        if (selectedAge === "all") {
          box.style.display = "flex"
        } else {
          const ageGroups = box.getAttribute("data-age")
          if (ageGroups && ageGroups.includes(selectedAge)) {
            box.style.display = "flex"
          } else {
            box.style.display = "none"
          }
        }
      })
    })
  })

  // Resource box animations on scroll
  function animateResourceBoxes() {
    resourceBoxes.forEach((box) => {
      const boxPosition = box.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (boxPosition < screenPosition) {
        box.style.opacity = "1"
        box.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  resourceBoxes.forEach((box) => {
    box.style.opacity = "0"
    box.style.transform = "translateY(20px)"
    box.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Add scroll event listener
  window.addEventListener("scroll", animateResourceBoxes)

  // Initial check
  animateResourceBoxes()

  // Category header animations
  const categoryHeaders = document.querySelectorAll(".category-header")

  function animateCategoryHeaders() {
    categoryHeaders.forEach((header) => {
      const headerPosition = header.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (headerPosition < screenPosition) {
        header.style.opacity = "1"
        header.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  categoryHeaders.forEach((header) => {
    header.style.opacity = "0"
    header.style.transform = "translateY(20px)"
    header.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Add scroll event listener
  window.addEventListener("scroll", animateCategoryHeaders)

  // Initial check
  animateCategoryHeaders()
})

