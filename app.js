// Sample data - replace this with the API call or data fetch
// Sample data - replace this with the API call or data fetch
const mockDatabase = [
    { name: 'Organic Apple', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Free-Range Chicken', sustainability: 'Good', nutrition: 'Moderate' },
    { name: 'Non-GMO Cornflakes', sustainability: 'Excellent', nutrition: 'Moderate' },
    { name: 'Grass-Fed Beef', sustainability: 'Good', nutrition: 'High' },
    { name: 'Almond Milk', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Whole Wheat Bread', sustainability: 'Good', nutrition: 'Moderate' },
    { name: 'Organic Avocado', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Cage-Free Eggs', sustainability: 'Good', nutrition: 'Moderate' },
    { name: 'Fair Trade Coffee', sustainability: 'Excellent', nutrition: 'Moderate' },
    { name: 'Sustainable Seafood', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Biodegradable Potato Chips', sustainability: 'Excellent', nutrition: 'Low' },
    { name: 'Ethically Sourced Chocolate', sustainability: 'Good', nutrition: 'Low' },
    { name: 'Local Honey', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Eco-Friendly Pasta', sustainability: 'Good', nutrition: 'Moderate' },
    { name: 'Plant-Based Yogurt', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Recycled Paper Coffee Filters', sustainability: 'Excellent', nutrition: 'Low' },
    { name: 'Organic Oats', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Sustainable Olive Oil', sustainability: 'Good', nutrition: 'Moderate' },
    { name: 'Gluten-Free Flour', sustainability: 'Good', nutrition: 'Moderate' },
    { name: 'Fair Trade Tea', sustainability: 'Excellent', nutrition: 'Moderate' },
    { name: 'Recycled Plastic Bottles', sustainability: 'Good', nutrition: 'Low' },
    { name: 'Organic Carrots', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Ethical Seafood', sustainability: 'Good', nutrition: 'High' },
    { name: 'Free-Range Pork', sustainability: 'Good', nutrition: 'Moderate' },
    { name: 'Organic Spices', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Biodegradable Cleaning Supplies', sustainability: 'Excellent', nutrition: 'Low' },
    { name: 'Sustainable Sushi', sustainability: 'Good', nutrition: 'High' },
    { name: 'Fair Trade Nuts', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Eco-Friendly Detergent', sustainability: 'Good', nutrition: 'Low' },
    { name: 'Organic Rice', sustainability: 'Excellent', nutrition: 'Moderate' },
    { name: 'Plant-Based Burger', sustainability: 'Good', nutrition: 'Moderate' },
    { name: 'Organic Tea', sustainability: 'Excellent', nutrition: 'Moderate' },
    { name: 'Ethical Beef Jerky', sustainability: 'Good', nutrition: 'Low' },
    { name: 'Fair Trade Sugar', sustainability: 'Excellent', nutrition: 'Low' },
    { name: 'Eco-Friendly Snacks', sustainability: 'Good', nutrition: 'Moderate' },
    { name: 'Sustainable Tuna', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Biodegradable Trash Bags', sustainability: 'Excellent', nutrition: 'Low' },
    { name: 'Organic Tomatoes', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Ethical Poultry', sustainability: 'Good', nutrition: 'Moderate' },
    { name: 'Organic Peanut Butter', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Fair Trade Olive Oil', sustainability: 'Good', nutrition: 'Moderate' },
    { name: 'Sustainable Coffee Pods', sustainability: 'Excellent', nutrition: 'Moderate' },
    { name: 'Organic Maple Syrup', sustainability: 'Excellent', nutrition: 'Low' },
    { name: 'Ethical Chocolate Bars', sustainability: 'Good', nutrition: 'Low' },
    { name: 'Eco-Friendly Paper Towels', sustainability: 'Excellent', nutrition: 'Low' },
    { name: 'Organic Almonds', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Sustainable Beef', sustainability: 'Good', nutrition: 'High' },
    { name: 'Fair Trade Vanilla', sustainability: 'Excellent', nutrition: 'Low' },
    { name: 'Ethical Fish', sustainability: 'Good', nutrition: 'High' },
    { name: 'Organic Coconut Oil', sustainability: 'Excellent', nutrition: 'High' },
    { name: 'Biodegradable Cutlery', sustainability: 'Excellent', nutrition: 'Low' },
    { name: 'Fair Trade Rice', sustainability: 'Excellent', nutrition: 'Moderate' },
    { name: 'Sustainable Snack Bars', sustainability: 'Good', nutrition: 'Moderate' }
];


// Function to search the mock database
function searchProducts(query) {
    return mockDatabase.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
}

// Function to get sustainability rating class
function getSustainabilityClass(rating) {
    switch (rating.toLowerCase()) {
        case 'excellent':
            return 'rating-excellent';
        case 'good':
            return 'rating-good';
        default:
            return 'rating-poor';
    }
}

// Function to get nutrition rating class
function getNutritionClass(nutrition) {
    switch (nutrition.toLowerCase()) {
        case 'high':
            return 'nutrition-high';
        case 'moderate':
            return 'nutrition-medium';
        default:
            return 'nutrition-low';
    }
}

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    const results = searchProducts(query);
    const resultsContainer = document.getElementById('results-container');

    if (results.length > 0) {
        resultsContainer.innerHTML = results.map(item => `
            <div class="result-item">
                <h3>${item.name}</h3>
                <p class="sustainability-rating"><strong>Sustainability Rating:</strong> <span class="${getSustainabilityClass(item.sustainability)}">${item.sustainability}</span></p>
                <p class="nutrition-rating"><strong>Nutrition Rating:</strong> <span class="${getNutritionClass(item.nutrition)}">${item.nutrition}</span></p>
            </div>
        `).join('');
    } else {
        resultsContainer.innerHTML = '<p>No products found. Please try another search.</p>';
    }
});
