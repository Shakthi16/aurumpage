// Function to scroll smoothly to the next section
function scrollToNextSection() {
    document.querySelector('.next-section').scrollIntoView({ behavior: 'smooth' });
}

// JavaScript to add movement effect to the credit card image
document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.credit-card');
    const { clientX: x, clientY: y } = e;
    const cardRect = card.getBoundingClientRect();
    const cardX = cardRect.left + cardRect.width / 2;
    const cardY = cardRect.top + cardRect.height / 2;
    const deltaX = (x - cardX) / cardRect.width;
    const deltaY = (y - cardY) / cardRect.height;
    card.style.transform = `rotateX(${deltaY * 10}deg) rotateY(${deltaX * 10}deg)`;
});

// JavaScript to add movement effect to the next image
document.addEventListener('mousemove', (e) => {
    const nextImage = document.querySelector('.next-image');
    const { clientX: x, clientY: y } = e;
    const nextImageRect = nextImage.getBoundingClientRect();
    const nextImageX = nextImageRect.left + nextImageRect.width / 2;
    const nextImageY = nextImageRect.top + nextImageRect.height / 2;
    const deltaX = (x - nextImageX) / nextImageRect.width;
    const deltaY = (y - nextImageY) / nextImageRect.height;
    nextImage.style.transform = `rotateX(${deltaY * 10}deg) rotateY(${deltaX * 10}deg)`;
});
// Smooth scrolling for buttons
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
function updateCardNumber() {
    const cardNumber = document.getElementById('cardNumber').value;
    document.getElementById('displayCardNumber').textContent = cardNumber.replace(/(.{4})/g, '$1 ').trim();
  }
  
  function updateCardName() {
    const cardName = document.getElementById('cardName').value;
    document.getElementById('displayCardName').textContent = cardName || 'John Doe';
  }
  
  function updateExpiry() {
    const expiryMonth = document.getElementById('expiryMonth').value;
    const expiryYear = document.getElementById('expiryYear').value;
    document.getElementById('displayCardExpiry').textContent = `${expiryMonth || 'MM'} / ${expiryYear || 'YY'}`;
  }
  
  function processPayment() {
    alert('Processing payment...');
  }
  const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales Rate',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});




