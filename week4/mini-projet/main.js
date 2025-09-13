// Robo-Friends Search Project - Main JavaScript

// PART I: Robot Data (Assets)
const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
];

// Global variables for filtered robots
let filteredRobots = [...robots]; // Using spread operator for array copying

// DOM Elements - Using destructuring assignment for multiple variables
const searchBox = document.getElementById('search-box');
const robotsContainer = document.getElementById('robots-container');
const searchContainer = document.querySelector('.search-container');

// PART II: DOM Manipulation Functions

// Arrow function to create a robot card
const createRobotCard = (robot) => {
    // Object destructuring to extract robot properties
    const { id, name, username, email, image } = robot;
    
    // Create card element using DOM methods
    const card = document.createElement('div');
    card.className = 'robot-card';
    card.setAttribute('data-robot-id', id);
    
    // Using template literals for HTML content
    card.innerHTML = `
        <div class="robot-image-container">
            <img src="${image}" alt="${name}" class="robot-image" loading="lazy">
        </div>
        <div class="robot-info">
            <h2 class="robot-name">${name}</h2>
            <p class="robot-username">@${username}</p>
            <p class="robot-email">${email}</p>
        </div>
    `;
    
    // Add hover effects using event listeners
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05) translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) translateY(0)';
    });
    
    return card;
};

// Function to display robots in the DOM
const displayRobots = (robotsArray) => {
    // Clear existing content
    robotsContainer.innerHTML = '';
    
    // Check if there are robots to display
    if (robotsArray.length === 0) {
        showNoResultsMessage();
        return;
    }
    
    // Use array methods to create and append cards
    const robotCards = robotsArray.map(robot => createRobotCard(robot));
    
    // Using forEach to append each card
    robotCards.forEach(card => {
        robotsContainer.appendChild(card);
    });
    
    // Add animation to cards
    animateCards();
};

// Arrow function to show no results message
const showNoResultsMessage = () => {
    const noResultsDiv = document.createElement('div');
    noResultsDiv.className = 'no-results';
    noResultsDiv.innerHTML = `
        <div class="no-results-content">
            <h2>🤖 No Robots Found</h2>
            <p>Sorry, no robots match your search criteria.</p>
            <p>Try searching for a different name!</p>
        </div>
    `;
    robotsContainer.appendChild(noResultsDiv);
};

// Function to animate cards on load
const animateCards = () => {
    const cards = document.querySelectorAll('.robot-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); // Stagger animation
    });
};

// PART III: Search Functionality

// Arrow function for filtering robots
const filterRobots = (searchTerm) => {
    // Using array filter method with arrow function
    return robots.filter(robot => {
        // Object destructuring in parameter
        const { name, username, email } = robot;
        
        // Convert search term to lowercase for case-insensitive search
        const search = searchTerm.toLowerCase();
        
        // Check if search term is included in any field
        return name.toLowerCase().includes(search) ||
               username.toLowerCase().includes(search) ||
               email.toLowerCase().includes(search);
    });
};

// Event listener for search functionality
const handleSearch = (event) => {
    const searchTerm = event.target.value;
    
    // Filter robots based on search term
    filteredRobots = filterRobots(searchTerm);
    
    // Update display
    displayRobots(filteredRobots);
    
    // Update search results count
    updateSearchCount(filteredRobots.length, searchTerm);
};

// Function to update search results count
const updateSearchCount = (count, searchTerm) => {
    let countElement = document.getElementById('search-count');
    
    if (!countElement) {
        countElement = document.createElement('div');
        countElement.id = 'search-count';
        countElement.className = 'search-count';
        searchContainer.appendChild(countElement);
    }
    
    if (searchTerm) {
        countElement.textContent = `Found ${count} robot${count !== 1 ? 's' : ''} matching "${searchTerm}"`;
        countElement.style.display = 'block';
    } else {
        countElement.style.display = 'none';
    }
};

// PART IV: Advanced JavaScript Features

// Using array methods for robot statistics
const getRobotStats = () => {
    return {
        totalRobots: robots.length,
        // Using array reduce to count domains
        emailDomains: robots.reduce((domains, robot) => {
            const domain = robot.email.split('@')[1];
            domains[domain] = (domains[domain] || 0) + 1;
            return domains;
        }, {}),
        // Using array map and Set for unique usernames
        uniqueUsernames: new Set(robots.map(robot => robot.username)).size,
        // Using array find to get longest name
        longestName: robots.reduce((longest, robot) => 
            robot.name.length > longest.name.length ? robot : longest
        ).name
    };
};

// Function to display robot statistics
const showStats = () => {
    const stats = getRobotStats();
    console.log('Robot Statistics:', stats);
    
    // Create stats modal
    const statsModal = document.createElement('div');
    statsModal.className = 'stats-modal';
    statsModal.innerHTML = `
        <div class="stats-content">
            <h3>🤖 Robot Statistics</h3>
            <p><strong>Total Robots:</strong> ${stats.totalRobots}</p>
            <p><strong>Unique Usernames:</strong> ${stats.uniqueUsernames}</p>
            <p><strong>Longest Name:</strong> ${stats.longestName}</p>
            <p><strong>Email Domains:</strong></p>
            <ul>
                ${Object.entries(stats.emailDomains)
                    .map(([domain, count]) => `<li>${domain}: ${count}</li>`)
                    .join('')}
            </ul>
            <button onclick="closeStats()">Close</button>
        </div>
    `;
    
    document.body.appendChild(statsModal);
};

// Function to close stats modal
const closeStats = () => {
    const modal = document.querySelector('.stats-modal');
    if (modal) {
        modal.remove();
    }
};

// PART V: Initialization and Event Listeners

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
    console.log('🤖 Robo-Friends App Initialized');
    
    // Display all robots initially
    displayRobots(robots);
    
    // Add search event listener with debouncing
    let searchTimeout;
    searchBox.addEventListener('input', (event) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => handleSearch(event), 300);
    });
    
    // Add keyboard navigation
    searchBox.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            searchBox.value = '';
            filteredRobots = [...robots];
            displayRobots(filteredRobots);
            updateSearchCount(robots.length, '');
        }
    });
    
    // Add stats button functionality
    const statsButton = document.getElementById('stats-button');
    if (statsButton) {
        statsButton.addEventListener('click', showStats);
    }
    
    console.log('Robot statistics:', getRobotStats());
});

// PART VI: Utility Functions

// Arrow function to shuffle robots array
const shuffleRobots = () => {
    const shuffled = [...robots].sort(() => Math.random() - 0.5);
    displayRobots(shuffled);
};

// Function to sort robots by name
const sortRobotsByName = (ascending = true) => {
    const sorted = [...filteredRobots].sort((a, b) => {
        return ascending ? 
            a.name.localeCompare(b.name) : 
            b.name.localeCompare(a.name);
    });
    displayRobots(sorted);
};

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        robots,
        filterRobots,
        createRobotCard,
        getRobotStats
    };
}

// Make functions available globally for HTML onclick events
window.closeStats = closeStats;
window.shuffleRobots = shuffleRobots;
window.sortRobotsByName = sortRobotsByName;
