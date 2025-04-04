// Legal pages JavaScript (Privacy Policy & Terms of Service)

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for table of contents links
  const tocLinks = document.querySelectorAll(".toc-list a")

  tocLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        // Scroll to the target section with offset for sticky header
        window.scrollTo({
          top: targetElement.offsetTop - 30,
          behavior: "smooth",
        })

        // Update URL hash without jumping
        history.pushState(null, null, targetId)

        // Highlight the active link
        tocLinks.forEach((l) => l.classList.remove("active"))
        this.classList.add("active")
      }
    })
  })

  // Highlight active section on scroll
  function highlightActiveSection() {
    const sections = document.querySelectorAll(".policy-section")

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionBottom = sectionTop + section.offsetHeight
      const scrollPosition = window.scrollY

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const id = section.getAttribute("id")

        // Remove active class from all links
        tocLinks.forEach((link) => link.classList.remove("active"))

        // Add active class to corresponding link
        const activeLink = document.querySelector(`.toc-list a[href="#${id}"]`)
        if (activeLink) {
          activeLink.classList.add("active")
        }
      }
    })
  }

  // Add scroll event listener
  window.addEventListener("scroll", highlightActiveSection)

  // Check for hash in URL and scroll to section
  if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash)
    if (targetElement) {
      setTimeout(() => {
        window.scrollTo({
          top: targetElement.offsetTop - 30,
          behavior: "smooth",
        })
      }, 300)
    }
  }

  // Add active class to TOC links on hover
  tocLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.paddingLeft = "5px"
    })

    link.addEventListener("mouseleave", function () {
      this.style.paddingLeft = "0"
    })
  })

  // Add style for active TOC link
  const style = document.createElement("style")
  style.textContent = `
    .toc-list a.active {
      color: #3498db;
      font-weight: 600;
      border-left: 3px solid #3498db;
      padding-left: 10px !important;
    }
  `
  document.head.appendChild(style)
})

