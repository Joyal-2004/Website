// Index page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Hero section animation
  const heroContent = document.querySelector(".hero-content")
  if (heroContent) {
    setTimeout(() => {
      heroContent.style.opacity = "1"
    }, 300)
  }

  // Smooth scrolling for anchor links
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

  // Add animation to cards on scroll
  const cards = document.querySelectorAll(".news-card, .program-card")

  // Function to check if an element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // Function to handle scroll animation
  function handleScrollAnimation() {
    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add("visible")
      }
    })
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScrollAnimation)

  // Initial check
  handleScrollAnimation()
})

