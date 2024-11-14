document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.getElementById('projects-container');

    // List of projects to exclude
    const excludedProjects = ['BookSky', 'VideoSynthesis', 'NumberSystemConverter', 'Kapilan747', 'Elite','Kapilan747.github.io'];

    // Fetch GitHub repos dynamically
    async function fetchGitHubProjects() {
        const username = 'Kapilan747';
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();

        repos.forEach(repo => {
            // Check if the project is excluded
            if (!excludedProjects.includes(repo.name)) {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');

                projectCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description ? repo.description : 'No description available.'}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                `;

                projectsContainer.appendChild(projectCard);
            }
        });
    }

    fetchGitHubProjects();
});

// JavaScript to dynamically change header colors based on the visible section
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('header .uls li a');
const sections = document.querySelectorAll('section');

// Intersection Observer options to track section visibility
const options = {
    root: null,
    threshold: 0.6 // Triggers when 60% of a section is visible
};

// Function to apply color changes to header and navigation links
const changeHeaderColors = (bgColor, textColor) => {
    header.style.backgroundColor = bgColor;
    header.style.color = textColor;
    navLinks.forEach(link => {
        link.style.color = textColor;
    });
};

// Intersection Observer callback function
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Set color based on section attributes if in desktop view
            if (window.innerWidth > 480) {
                const bgColor = entry.target.getAttribute('data-bg-color') || '#fff';
                const textColor = entry.target.getAttribute('data-text-color') || '#000';
                changeHeaderColors(bgColor, textColor);
            } else {
                // Force text color to black in mobile view
                changeHeaderColors('white', 'black');
            }
        }
    });
};

// Set up the IntersectionObserver with the callback and options
const observer = new IntersectionObserver(observerCallback, options);

// Observe each section
sections.forEach(section => observer.observe(section));

// Listen for window resize to update colors on viewport width change
window.addEventListener('resize', () => {
    if (window.innerWidth <= 480) {
        changeHeaderColors('white', 'black');
    }
});


// Function to open the menu
function openMenu() {
    document.querySelector('.mob-view-div').classList.add('active');
    document.querySelector('.hamburger').style.display = 'none';
}

// Function to close the menu
function closeMenu() {
    document.querySelector('.mob-view-div').classList.remove('active');
    document.querySelector('.hamburger').style.display = 'block';
}

function sendEmail(event) {
    event.preventDefault();  // Prevents page reload

    emailjs.sendForm("service_534vqso", "template_7wdhwfq", event.target)
        .then(() => {
            alert("Message sent successfully!");
        }, (error) => {
            alert("Failed to send message, please try again.");
            console.error("EmailJS error:", error);
        });
}


