// Donate Button and Modal Functionality
document.addEventListener("DOMContentLoaded", () => {
  // Get the modal and button elements
  const donateModal = document.getElementById("donateModal")
  const donateButton = document.getElementById("donateButton")
  const closeButton = document.querySelector(".donate-close")

  // Open the modal when the donate button is clicked
  donateButton.addEventListener("click", () => {
    donateModal.style.display = "block"
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  })

  // Close the modal when the close button is clicked
  closeButton.addEventListener("click", () => {
    donateModal.style.display = "none"
    document.body.style.overflow = "auto" // Re-enable scrolling
  })

  // Close the modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target === donateModal) {
      donateModal.style.display = "none"
      document.body.style.overflow = "auto" // Re-enable scrolling
    }
  })

  // Add hover effects to donation options for better interactivity
  const donationLabels = document.querySelectorAll(".donation-options label")
  donationLabels.forEach((label) => {
    label.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })
    label.addEventListener("mouseleave", function () {
      if (!document.getElementById(this.getAttribute("for")).checked) {
        this.style.transform = "translateY(0)"
      }
    })
  })
})

// Donation Form Functionality
function handleOtherDonation() {
  const amount = document.getElementById("otherAmount").value
  if (amount && !isNaN(amount) && amount > 0) {
    alert("Thank you for your donation of £" + amount + " to help rescue animals!")
    document.getElementById("donateModal").style.display = "none"
    document.body.style.overflow = "auto" // Re-enable scrolling
  } else {
    alert("Please enter a valid donation amount.")
  }
}

function validateDonation(formName, isMonthly = false) {
  const selectedAmount = document.querySelector(`input[name="${formName}"]:checked`)
  if (!selectedAmount) {
    alert("Please select a donation amount.")
    return false
  }
  const amount = selectedAmount.value
  if (isMonthly) {
    alert("Thank you for your donation of £" + amount + " per month to help rescue animals!")
  } else {
    alert("Thank you for your donation of £" + amount + " to help rescue animals!")
  }
  document.getElementById("donateModal").style.display = "none"
  document.body.style.overflow = "auto" // Re-enable scrolling
  return true
}

