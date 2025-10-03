// Giphy API Challenge - Fetch random GIFs based on user search
const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const BASE_URL = "https://api.giphy.com/v1/gifs/random";

// DOM Elements
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const gifContainer = document.getElementById('gifContainer');
const errorMessage = document.getElementById('errorMessage');
const loading = document.getElementById('loading');

// Event Listeners
searchForm.addEventListener('submit', handleSearch);
deleteAllBtn.addEventListener('click', deleteAllGifs);

// Handle search form submission
async function handleSearch(event) {
    event.preventDefault();
    
    const searchTerm = searchInput.value.trim();
    
    if (!searchTerm) {
        showError('Please enter a search term');
        return;
    }
    
    await fetchRandomGif(searchTerm);
}

// Fetch random GIF from Giphy API
async function fetchRandomGif(category) {
    showLoading(true);
    hideError();
    
    try {
        const url = `${BASE_URL}?api_key=${API_KEY}&tag=${encodeURIComponent(category)}&rating=g`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.data && data.data.images) {
            appendGifToPage(data.data, category);
            searchInput.value = ''; // Clear input after successful search
        } else {
            showError(`No GIFs found for "${category}". Try a different search term.`);
        }
        
    } catch (error) {
        console.error('Error fetching GIF:', error);
        showError('Failed to fetch GIF. Please check your internet connection and try again.');
    } finally {
        showLoading(false);
    }
}

// Append GIF to the page with delete button
function appendGifToPage(gifData, searchTerm) {
    const gifItem = document.createElement('div');
    gifItem.className = 'gif-item';
    
    // Create img element
    const img = document.createElement('img');
    img.src = gifData.images.fixed_height.url;
    img.alt = gifData.title || `GIF for ${searchTerm}`;
    img.loading = 'lazy';
    
    // Create title element
    const title = document.createElement('p');
    title.textContent = gifData.title || `Random ${searchTerm} GIF`;
    title.style.margin = '10px 0';
    title.style.fontWeight = 'bold';
    title.style.color = '#333';
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => deleteGif(gifItem);
    
    // Append elements to gif item
    gifItem.appendChild(img);
    gifItem.appendChild(title);
    gifItem.appendChild(deleteBtn);
    
    // Add gif item to container
    gifContainer.appendChild(gifItem);
    
    // Scroll to the new gif
    gifItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Delete a specific GIF
function deleteGif(gifElement) {
    if (confirm('Are you sure you want to delete this GIF?')) {
        gifElement.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            gifContainer.removeChild(gifElement);
        }, 300);
    }
}

// Delete all GIFs
function deleteAllGifs() {
    const gifItems = gifContainer.querySelectorAll('.gif-item');
    
    if (gifItems.length === 0) {
        showError('No GIFs to delete!');
        return;
    }
    
    if (confirm(`Are you sure you want to delete all ${gifItems.length} GIF(s)?`)) {
        gifItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => {
                    if (gifContainer.contains(item)) {
                        gifContainer.removeChild(item);
                    }
                }, 300);
            }, index * 100);
        });
    }
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    
    // Auto hide error after 5 seconds
    setTimeout(() => {
        hideError();
    }, 5000);
}

// Hide error message
function hideError() {
    errorMessage.style.display = 'none';
}

// Show/hide loading indicator
function showLoading(show) {
    loading.style.display = show ? 'block' : 'none';
    searchBtn.disabled = show;
    searchBtn.textContent = show ? 'Searching...' : 'Search GIF';
}

// Add CSS animation for smooth deletion
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.8);
        }
    }
    
    .gif-item {
        transition: transform 0.2s ease;
    }
    
    .gif-item:hover {
        transform: translateY(-5px);
    }
`;
document.head.appendChild(style);

// Initialize app
console.log('🎉 Giphy Search Challenge loaded successfully!');
console.log('Features:');
console.log('- Search for random GIFs by category');
console.log('- Delete individual GIFs');
console.log('- Delete all GIFs at once');
console.log('- Error handling and loading states');
