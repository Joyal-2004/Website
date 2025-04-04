// Resources page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-btn")
  const sections = document.querySelectorAll("#knowledge-base, #learning-modules, #conservation-news")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and hide all sections
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      sections.forEach((section) => (section.style.display = "none"))

      // Add active class to clicked button
      button.classList.add("active")

      // Show corresponding section
      const targetId = button.getAttribute("data-tab")
      document.getElementById(targetId).style.display = "block"

      // Smooth scroll to section
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth", block: "start" })
    })
  })

  // Handle direct links to tabs (e.g., from navbar)
  const handleHashChange = () => {
    const hash = window.location.hash.substring(1)
    if (hash && ["knowledge-base", "learning-modules", "conservation-news"].includes(hash)) {
      // Find the corresponding tab button and click it
      const tabButton = document.querySelector(`.tab-btn[data-tab="${hash}"]`)
      if (tabButton) {
        tabButton.click()
      }
    }
  }

  // Check hash on page load
  handleHashChange()

  // Listen for hash changes
  window.addEventListener("hashchange", handleHashChange)

  // Category box animations on scroll
  const categoryBoxes = document.querySelectorAll(".category-box")

  function checkCategoryBoxes() {
    categoryBoxes.forEach((box) => {
      const boxPosition = box.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (boxPosition < screenPosition) {
        box.style.opacity = "1"
        box.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  categoryBoxes.forEach((box) => {
    box.style.opacity = "0"
    box.style.transform = "translateY(20px)"
    box.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Add scroll event listener
  window.addEventListener("scroll", checkCategoryBoxes)

  // Initial check
  checkCategoryBoxes()

  // Module and news card animations
  const animateCards = (cards) => {
    function checkCards() {
      cards.forEach((card) => {
        const cardPosition = card.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.3

        if (cardPosition < screenPosition) {
          card.style.opacity = "1"
          card.style.transform = "translateY(0)"
        }
      })
    }

    // Set initial state
    cards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })

    // Add scroll listener
    window.addEventListener("scroll", checkCards)

    // Initial check
    checkCards()
  }

  // Animate module cards
  const moduleCards = document.querySelectorAll(".module-card")
  if (moduleCards.length > 0) {
    animateCards(moduleCards)
  }

  // Animate news cards
  const newsCards = document.querySelectorAll(".news-card")
  if (newsCards.length > 0) {
    animateCards(newsCards)
  }
})

