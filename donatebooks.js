const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
// JavaScript to add the logo image to the header dynamically
const logoDiv = document.querySelector('.logo');
const logoImg = document.createElement('img');
logoImg.src = 'your-logo.png'; // Replace with the actual URL of your logo image
logoImg.alt = 'Logo';
logoDiv.prepend(logoImg); // Add the logo image before the text



const divsToAnimate = document.querySelectorAll('.numbered-div');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animation');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, options);
divsToAnimate.forEach(div => observer.observe(div));

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle the scroll event
  function handleScroll() {
    const points = document.querySelectorAll('.point');
    points.forEach(point => {
      if (isInViewport(point)) {
        point.style.opacity = 1;
        point.style.transform = 'translateX(0)';
      }
    });
  }
  
  // Add event listener for the scroll event
  window.addEventListener('scroll', handleScroll);
  
  // Check for visible points on initial load
  handleScroll();

  document.addEventListener("DOMContentLoaded", function() {
    const points = document.querySelectorAll(".point");
  
    function animatePoints() {
      points.forEach((point, index) => {
        setTimeout(() => {
          point.classList.add("animate");
        }, index * 300); // Adjust the delay as needed
      });
    }
  
    animatePoints();
  });
  

  
 

  document.addEventListener("DOMContentLoaded", function() {
    const donationTypeSelect = document.getElementById("donationType");
    const moneyFields = document.getElementById("moneyFields");
    const booksFields = document.getElementById("booksFields");

    // Function to show or hide the additional fields based on the selected donation type
    function handleDonationTypeChange() {
      const selectedType = donationTypeSelect.value;

      if (selectedType === "money") {
        moneyFields.style.display = "block";
        booksFields.style.display = "none";
      } else if (selectedType === "books") {
        moneyFields.style.display = "none";
        booksFields.style.display = "block";
      } else {
        moneyFields.style.display = "none";
        booksFields.style.display = "none";
      }
    }

    // Listen for changes in the donation type select field
    donationTypeSelect.addEventListener("change", handleDonationTypeChange);
  });


