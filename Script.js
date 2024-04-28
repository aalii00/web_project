
// Function to show content based on section ID
function showContent(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();
    // Form submission logic
}

// Function to handle customer registration form submission using jQuery
$(document).ready(function () {
    $("#customer-registration form").submit(function (event) {
        event.preventDefault();
        // AJAX request for form submission
        $.ajax({
            type: "POST",
            url: "submit.php", // Replace with your backend URL
            data: $(this).serialize(),
            success: function (response) {
                // Show success message or handle response
                $("#customer-registration form").hide();
                $("#thankYouMessage").show();
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
                // Handle error
            }
        });
    });
});
// script.js

// Function to generate portfolio items
function generatePortfolioItems(items) {
    const portfolioItemsContainer = document.querySelector(".portfolio-container");
    portfolioItemsContainer.innerHTML = '';

    items.forEach(perfume => {
        const portfolioItem = document.createElement("div");
        portfolioItem.classList.add("col-lg-4", "col-md-6", "portfolio-item");
        portfolioItem.innerHTML = `
            <div class="portfolio-img"><img src="${perfume.image}" class="img-fluid" alt=""></div>
            <div class="portfolio-info">
                <h4>${perfume.name}</h4>
                <p>${perfume.price}</p>
            </div>`;
        portfolioItemsContainer.appendChild(portfolioItem);
    });
}

// Function to filter portfolio items
function filter(category) {
    const filteredItems = category === 'all' ? perfumes : perfumes.filter(item => item.category === category);
    generatePortfolioItems(filteredItems);
}

// Initial setup
generatePortfolioItems(perfumes);

// Show content based on section ID
function showContent(id) {
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}
// Call showContent with 'home' initially to display the Home section on page load
showContent('home');

// Handle form submission
$(document).ready(function(){
    $("#submitBtn").click(function(){
        // Get form data
        var formData = $("#customer").serialize();
        
        // AJAX request
        $.ajax({
            url: "submit.php", // Change the URL to your backend script
            type: "POST",
            data: formData,
            success: function(response){
                // Show thank you message or handle response
                $("#thankYouMessage").show();
                console.log(response);
            },
            error: function(xhr, status, error){
                console.error(xhr.responseText);
                // Handle error
            }
        });
    });
});
