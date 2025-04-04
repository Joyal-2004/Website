// About page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Team member card animations
  const teamCards = document.querySelectorAll(".team-card")

  teamCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const socialIcons = this.querySelector(".team-social")
      if (socialIcons) {
        socialIcons.style.opacity = "1"
        socialIcons.style.transform = "translateY(0)"
      }
    })

    card.addEventListener("mouseleave", function () {
      const socialIcons = this.querySelector(".team-social")
      if (socialIcons) {
        socialIcons.style.opacity = "0"
        socialIcons.style.transform = "translateY(10px)"
      }
    })
  })

  // Mission statement animation
  const missionSection = document.querySelector(".mission-section")
  if (missionSection) {
    window.addEventListener("scroll", () => {
      const sectionPosition = missionSection.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (sectionPosition < screenPosition) {
        missionSection.classList.add("animate")
      }
    })
  }

  // Timeline animation
  const timelineItems = document.querySelectorAll(".timeline-item")

  function checkTimelineItems() {
    timelineItems.forEach((item) => {
      const itemPosition = item.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (itemPosition < screenPosition) {
        item.classList.add("visible")
      }
    })
  }

  if (timelineItems.length > 0) {
    window.addEventListener("scroll", checkTimelineItems)
    // Initial check
    checkTimelineItems()
  }

  // FAQ accordion functionality
  const faqItems = document.querySelectorAll(".faq-item")

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

  // Partners logo slider (if exists)
  const partnerLogos = document.querySelector(".partner-logos")
  if (partnerLogos) {
    let scrollAmount = 0
    const scrollSpeed = 1
    const logoWidth = partnerLogos.scrollWidth

    function autoScroll() {
      scrollAmount += scrollSpeed
      if (scrollAmount >= logoWidth / 2) {
        scrollAmount = 0
      }
      partnerLogos.style.transform = `translateX(-${scrollAmount}px)`
      requestAnimationFrame(autoScroll)
    }

    // Start the animation
    autoScroll()

    // Pause on hover
    partnerLogos.addEventListener("mouseenter", () => {
      const scrollSpeedTemp = scrollSpeed
      scrollSpeed = 0
    })

    partnerLogos.addEventListener("mouseleave", () => {
      const scrollSpeedTemp = scrollSpeed
      scrollSpeed = 1
    })
  }
})

