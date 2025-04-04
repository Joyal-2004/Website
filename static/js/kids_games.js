// Kids Games page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Game card animations on scroll
  const gameCards = document.querySelectorAll(".game-card")

  function animateGameCards() {
    gameCards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (cardPosition < screenPosition) {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  gameCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Add scroll event listener
  window.addEventListener("scroll", animateGameCards)

  // Initial check
  animateGameCards()

  // Benefit card animations
  const benefitCards = document.querySelectorAll(".benefit-card")

  function animateBenefitCards() {
    benefitCards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (cardPosition < screenPosition) {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  benefitCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Add scroll event listener
  window.addEventListener("scroll", animateBenefitCards)

  // Initial check
  animateBenefitCards()

  // Coming soon section animation
  const comingSoonContainer = document.querySelector(".coming-soon-container")

  function animateComingSoon() {
    if (comingSoonContainer) {
      const containerPosition = comingSoonContainer.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (containerPosition < screenPosition) {
        comingSoonContainer.style.opacity = "1"
        comingSoonContainer.style.transform = "translateY(0)"
      }
    }
  }

  // Set initial state for animation
  if (comingSoonContainer) {
    comingSoonContainer.style.opacity = "0"
    comingSoonContainer.style.transform = "translateY(20px)"
    comingSoonContainer.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  }

  // Add scroll event listener
  window.addEventListener("scroll", animateComingSoon)

  // Initial check
  animateComingSoon()
})

