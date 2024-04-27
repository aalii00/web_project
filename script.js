// Function to show/hide sections based on navigation clicks
function showContent(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

// Function to handle portfolio filtering
function filter(category) {
    const perfumes = [
        { name: "Sharqi perfume gift set", category: "gift_sets", price: "659 Sar", image: "C:/Users/user/Downloads/Sharqi.png" },
        { name: "My Way perfume", category: "women", price: "300 Sar", image: "C:/Users/user/Downloads/Woman perfumes/my way perfume.png" },
        { name: "Ajmal perfume gift set", category: "gift_sets", price: "860 Sar", image: "C:/Users/user/Downloads/gift sets/wgift2.png" },
        { name: "Sapphire (Fierce) perfume", category: "women", price: "280 Sar", image: "C:/Users/user/Downloads/Woman perfumes/wperfume 2.png" },
        { name: "Penhaligon's perfume gift set", category: "gift_sets", price: "750 Sar", image: "C:/Users/user/Downloads/gift sets/perfumegiftset1.png" },
        { name: "Arabella Perfume", category: "women", price: "370 Sar", image: "C:/Users/user/Downloads/Woman perfumes/wperfume 1.png" },
        { name: "Men perfume 1", category: "men", price: "370 Sar", image: "C:/Users/user/Downloads/menperfume5.png"},
        { name: "Men perfume 2", category: "men", price: "450 Sar", image: "C:/Users/user/Downloads/menperfume1.png" },
        { name: "Men perfume 3", category: "men", price: "550 Sar", image: "C:/Users/user/Downloads/menperfume2.png" },
    ];

    const filteredItems = category === 'all' ? perfumes : perfumes.filter(item => item.category === category);
    generatePortfolioItems(filteredItems);
}

// Function to generate portfolio items
function generatePortfolioItems(items) {
    const portfolioItemsContainer = document.querySelector('.portfolio-container');
    portfolioItemsContainer.innerHTML = '';

    items.forEach(perfume => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('col-lg-4', 'col-md-6', 'portfolio-item');
        portfolioItem.innerHTML = `
            <div class="portfolio-img"><img src="${perfume.image}" class="img-fluid" alt=""></div>
            <div class="portfolio-info">
                <h4>${perfume.name}</h4>
                <p>${perfume.price}</p>
            </div>`;
        portfolioItemsContainer.appendChild(portfolioItem);
    });
}

// Handle form submission for contact form
$('#submitBtn').click(function() {
    const formData = $('#contactForm').serialize();
    $.ajax({
        url: 'submit.php', 
        type: 'POST',
        data: formData,
        success: function(response) {
            $('#thankYouMessage').show();
            console.log(response);
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
            // Handle error
        }
    });
});

// Handle form submission for customer registration
$('#registerBtn').click(function() {
    const formData = $('#customer').serialize();
    $.ajax({
        url: 'submit.php', // Change to your backend script URL
        type: 'POST',
        data: formData,
        success: function(response) {
            $('#registrationMessage').show();
            console.log(response);
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
            // Handle error
        }
    });
});
