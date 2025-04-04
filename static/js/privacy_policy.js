// Privacy Policy page specific JavaScript

document.addEventListener("DOMContentLoaded", () => {
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

  // Add active class to section when scrolled into view
  const sections = document.querySelectorAll(".policy-section")

  function highlightSection() {
    const scrollPosition = window.scrollY

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150
      const sectionBottom = sectionTop + section.offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        section.classList.add("active")
      } else {
        section.classList.remove("active")
      }
    })
  }

  // Call on scroll
  window.addEventListener("scroll", highlightSection)

  // Call on load
  highlightSection()
})

