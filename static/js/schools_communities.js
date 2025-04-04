// Schools & Communities page specific JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Feature card hover effects
  const featureCards = document.querySelectorAll(".feature-card")

  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("hover")
      this.style.transform = "translateY(-5px)"
      this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)"
    })

    card.addEventListener("mouseleave", function () {
      this.classList.remove("hover")
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "var(--box-shadow)"
    })
  })

  // Showcase card hover effects
  const showcaseCards = document.querySelectorAll(".showcase-card")

  showcaseCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("hover")
      this.style.transform = "translateY(-5px)"
      this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)"
    })

    card.addEventListener("mouseleave", function () {
      this.classList.remove("hover")
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "var(--box-shadow)"
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

  // Collaboration feature hover effects
  const collabFeatures = document.querySelectorAll(".collab-feature")

  collabFeatures.forEach((feature) => {
    feature.addEventListener("mouseenter", function () {
      this.classList.add("hover")
      this.style.transform = "translateY(-5px)"
      this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)"
    })

    feature.addEventListener("mouseleave", function () {
      this.classList.remove("hover")
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "var(--box-shadow)"
    })
  })

  // Resource card hover effects
  const resourceCards = document.querySelectorAll(".resource-card")

  resourceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("hover")
      this.style.transform = "translateY(-5px)"
      this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)"
    })

    card.addEventListener("mouseleave", function () {
      this.classList.remove("hover")
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "var(--box-shadow)"
    })
  })

  // View profile buttons
  const viewProfileButtons = document.querySelectorAll(".showcase-card .btn-outline")

  viewProfileButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const profileName = this.closest(".showcase-content").querySelector("h3").textContent

      // In a real application, you would navigate to the profile page
      // For now, we'll just show an alert
      alert(`Viewing profile for: ${profileName}`)
    })
  })

  // Collaboration opportunities button
  const collaborationButton = document.querySelector(".collaboration-content .btn-secondary")

  if (collaborationButton) {
    collaborationButton.addEventListener("click", (e) => {
      e.preventDefault()

      // In a real application, you would navigate to the collaboration page
      // For now, we'll just show an alert
      alert("Exploring collaboration opportunities between schools and communities.")
    })
  }

  // Resource access buttons
  const resourceButtons = document.querySelectorAll(".resource-card .btn-outline")

  resourceButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const resourceType = this.closest(".resource-card").querySelector("h3").textContent

      // In a real application, you would navigate to the resource page
      // For now, we'll just show an alert
      alert(`Accessing resource: ${resourceType}`)
    })
  })

  // Mobile responsiveness for story slides
  function adjustStorySlides() {
    if (window.innerWidth < 992) {
      storySlides.forEach((slide) => {
        slide.style.gridTemplateColumns = "1fr"
      })
    } else {
      storySlides.forEach((slide) => {
        slide.style.gridTemplateColumns = "1fr 2fr"
      })
    }
  }

  // Call on load
  if (storySlides.length > 0) {
    adjustStorySlides()

    // Call on resize
    window.addEventListener("resize", adjustStorySlides)
  }
})

