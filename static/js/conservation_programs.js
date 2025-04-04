// Conservation Programs page specific JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Program card hover effects
  const programCards = document.querySelectorAll(".program-card")

  programCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("hover")
    })

    card.addEventListener("mouseleave", function () {
      this.classList.remove("hover")
    })
  })

  // Category card hover effects
  const categoryCards = document.querySelectorAll(".category-card")

  categoryCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("hover")
      const link = this.querySelector(".category-link")
      if (link) {
        link.style.gap = "0.75rem"
      }
    })

    card.addEventListener("mouseleave", function () {
      this.classList.remove("hover")
      const link = this.querySelector(".category-link")
      if (link) {
        link.style.gap = "0.5rem"
      }
    })
  })

  // Success stories slider functionality
  const storySlides = document.querySelectorAll(".story-slide")
  const prevButton = document.querySelector(".prev-slide")
  const nextButton = document.querySelector(".next-slide")
  let currentSlide = 0

  if (storySlides.length > 0 && prevButton && nextButton) {
    // Hide all slides except the first one
    storySlides.forEach((slide, index) => {
      if (index !== 0) {
        slide.style.display = "none"
      }
    })

    // Function to show a specific slide
    function showSlide(index) {
      // Hide all slides
      storySlides.forEach((slide) => {
        slide.style.display = "none"
      })

      // Show the selected slide
      storySlides[index].style.display = "grid"

      // Add fade-in animation
      storySlides[index].classList.add("fade-in")
      setTimeout(() => {
        storySlides[index].classList.remove("fade-in")
      }, 500)
    }

    // Event listeners for navigation buttons
    prevButton.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + storySlides.length) % storySlides.length
      showSlide(currentSlide)
    })

    nextButton.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % storySlides.length
      showSlide(currentSlide)
    })

    // Auto-rotate slides every 7 seconds
    setInterval(() => {
      currentSlide = (currentSlide + 1) % storySlides.length
      showSlide(currentSlide)
    }, 7000)
  }

  // Interactive map functionality
  const mapContainer = document.querySelector(".map-container")

  if (mapContainer) {
    // In a real application, you would initialize a map library like Leaflet or Google Maps
    // For now, we'll just add a click event to simulate interaction
    mapContainer.addEventListener("click", () => {
      alert("In a real application, this would be an interactive map showing program locations worldwide.")
    })
  }

  // Enrollment options hover effects
  const enrollmentOptions = document.querySelectorAll(".enrollment-option")

  enrollmentOptions.forEach((option) => {
    option.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
    })

    option.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
    })
  })

  // Smooth scrolling for steps navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")
      if (targetId !== "#") {
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          e.preventDefault()
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Mobile responsiveness for steps
  function adjustSteps() {
    const steps = document.querySelectorAll(".step")

    if (window.innerWidth < 768) {
      steps.forEach((step) => {
        step.style.flexDirection = "column"
        step.style.textAlign = "center"
      })
    } else {
      steps.forEach((step) => {
        step.style.flexDirection = "row"
        step.style.textAlign = "left"
      })
    }
  }

  // Call on load
  adjustSteps()

  // Call on resize
  window.addEventListener("resize", adjustSteps)
})

