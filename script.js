const projectsContainer = document.getElementById('projects-container');
const excludedProjects = ['BookSky', 'VideoSynthesis', 'NumberSystemConverter', 'Kapilan747', 'Elite','Kapilan747.github.io','WanderFinds'];

async function fetchGitHubProjects() {
    const username = 'Kapilan747';
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    repos.forEach(repo => {
        if (!excludedProjects.includes(repo.name)) {
            // Construct the raw URL for the project-specific image
            const imageUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/main/img/download.jpg`;
            
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <div class="project-title">
                    <h3>${repo.name}</h3>
                </div>
                <img src="${imageUrl}" alt="${repo.name} project cover" class="project-image" onerror="this.onerror=null;this.src='fallback.jpg';">
                 <a href="${repo.html_url}" target="_blank" class="github-link">View</a>
            `;
            projectsContainer.appendChild(projectCard);
        }
    });
}

fetchGitHubProjects();




const header = document.querySelector('header');
const navLinks = document.querySelectorAll('header .uls li a');
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshold: 0.6 
};


function openMenu() {
    document.querySelector('.mob-view-div').classList.add('active');
}

function closeMenu() {
    document.querySelector('.mob-view-div').classList.remove('active');
}



function sendEmail(event) {
    event.preventDefault(); // Prevent the form from reloading the page.

    emailjs.sendForm("service_534vqso", "template_7wdhwfq", event.target)
        .then(() => {
            alert("Message sent successfully! Thank you for getting in touch.");
            event.target.reset(); // Clear the form fields after successful submission.
        })
        .catch((error) => {
            alert("Failed to send your message. Please try again later.");
            console.error("EmailJS error:", error); // Log the error for debugging.
        });
}



