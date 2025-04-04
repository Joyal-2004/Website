// Pricing page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Pricing toggle functionality
  const pricingToggle = document.getElementById("pricing-toggle")
  const monthlyLabels = document.querySelectorAll(".pricing-toggle-label")
  const monthlyPrices = document.querySelectorAll(".price-monthly")
  const yearlyPrices = document.querySelectorAll(".price-yearly")
  const savingsBadges = document.querySelectorAll(".savings-badge")

  if (pricingToggle) {
    pricingToggle.addEventListener("change", function () {
      // Toggle active class on labels
      monthlyLabels.forEach((label) => {
        label.classList.toggle("active")
      })

      if (this.checked) {
        // Yearly pricing
        monthlyPrices.forEach((price) => (price.style.display = "none"))
        yearlyPrices.forEach((price) => (price.style.display = "block"))
        savingsBadges.forEach((badge) => (badge.style.display = "block"))
      } else {
        // Monthly pricing
        monthlyPrices.forEach((price) => (price.style.display = "block"))
        yearlyPrices.forEach((price) => (price.style.display = "none"))
        savingsBadges.forEach((badge) => (badge.style.display = "none"))
      }
    })
  }

  // Initialize pricing display based on toggle state
  const initializePricing = () => {
    if (pricingToggle && pricingToggle.checked) {
      monthlyLabels.forEach((label, index) => {
        if (index === 1) {
          label.classList.add("active")
        } else {
          label.classList.remove("active")
        }
      })
      monthlyPrices.forEach((price) => (price.style.display = "none"))
      yearlyPrices.forEach((price) => (price.style.display = "block"))
      savingsBadges.forEach((badge) => (badge.style.display = "block"))
    } else {
      monthlyLabels.forEach((label, index) => {
        if (index === 0) {
          label.classList.add("active")
        } else {
          label.classList.remove("active")
        }
      })
      monthlyPrices.forEach((price) => (price.style.display = "block"))
      yearlyPrices.forEach((price) => (price.style.display = "none"))
      savingsBadges.forEach((badge) => (badge.style.display = "none"))
    }
  }

  // Call initialization
  initializePricing()

  // Pricing card hover effects
  const pricingCards = document.querySelectorAll(".pricing-card")

  pricingCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      pricingCards.forEach((c) => c.classList.remove("highlighted"))
      this.classList.add("highlighted")
    })
  })

  // Reset on mouse leave from pricing section
  const pricingSection = document.querySelector(".pricing-section")
  if (pricingSection) {
    pricingSection.addEventListener("mouseleave", () => {
      pricingCards.forEach((card) => card.classList.remove("highlighted"))
      // Highlight recommended plan if exists
      const recommendedCard = document.querySelector(".pricing-card.recommended")
      if (recommendedCard) {
        recommendedCard.classList.add("highlighted")
      }
    })

    // Initially highlight recommended plan if exists
    const recommendedCard = document.querySelector(".pricing-card.recommended")
    if (recommendedCard) {
      recommendedCard.classList.add("highlighted")
    }
  }

  // Custom plan calculator
  const sliders = document.querySelectorAll(".custom-plan-slider")
  const totalPriceElement = document.querySelector(".custom-plan-total")

  if (sliders.length > 0 && totalPriceElement) {
    // Base price
    const basePrice = 50

    // Update total price based on slider values
    function updateTotalPrice() {
      let total = basePrice

      sliders.forEach((slider) => {
        const value = Number.parseInt(slider.value)
        const pricePerUnit = Number.parseFloat(slider.dataset.pricePerUnit || 0)
        total += value * pricePerUnit
      })

      totalPriceElement.textContent = `$${total.toFixed(2)}`
    }

    // Add event listeners to sliders
    sliders.forEach((slider) => {
      const valueDisplay = slider.parentElement.querySelector(".slider-value")

      slider.addEventListener("input", () => {
        if (valueDisplay) {
          valueDisplay.textContent = slider.value
        }
        updateTotalPrice()
      })
    })

    // Initial calculation
    updateTotalPrice()
  }

  // FAQ accordion for pricing page
  const faqItems = document.querySelectorAll(".pricing-faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    if (question) {
      question.addEventListener("click", () => {
        // Close all other items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
          }
        })

        // Toggle current item
        item.classList.toggle("active")
      })
    }
  })
})

