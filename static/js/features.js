// Features page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Testimonial slider functionality
  const testimonialCards = document.querySelectorAll(".testimonial-card")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  let currentTestimonialIndex = 0

  // Hide all testimonials except the first one
  if (testimonialCards.length > 1) {
    for (let i = 1; i < testimonialCards.length; i++) {
      testimonialCards[i].style.display = "none"
    }
  }

  // Next button functionality
  if (nextBtn && testimonialCards.length > 1) {
    nextBtn.addEventListener("click", () => {
      testimonialCards[currentTestimonialIndex].style.display = "none"
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialCards.length
      testimonialCards[currentTestimonialIndex].style.display = "block"
    })
  }

  // Previous button functionality
  if (prevBtn && testimonialCards.length > 1) {
    prevBtn.addEventListener("click", () => {
      testimonialCards[currentTestimonialIndex].style.display = "none"
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialCards.length) % testimonialCards.length
      testimonialCards[currentTestimonialIndex].style.display = "block"
    })
  }

  // Feature category box animations on scroll
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

  // Benefit card animations on scroll
  const benefitCards = document.querySelectorAll(".benefit-card")

  function checkBenefitCards() {
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
  window.addEventListener("scroll", checkBenefitCards)

  // Initial check
  checkBenefitCards()
})

