const projectsContainer = document.getElementById('projects-container');
const excludedProjects = ['BookSky', 'VideoSynthesis', 'NumberSystemConverter', 'Kapilan747', 'Elite','Kapilan747.github.io','WanderFinds'];

async function fetchGitHubProjects() {
    const username = 'Kapilan747';
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    repos.forEach(repo => {
        if (!excludedProjects.includes(repo.name)) {
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
    event.preventDefault();  

     const isSuccessful = true;  

    if (isSuccessful) {
        showAlert('Your message has been sent successfully!', 'success');
    } else {
        showAlert('Failed to send your message. Please try again.', 'error');
    }
}

function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `custom-alert ${type}`;
    alert.textContent = message;

    document.body.appendChild(alert);

     setTimeout(() => {
        alert.style.opacity = '0';
        setTimeout(() => alert.remove(), 500);  
    }, 3000);
}
     document.addEventListener('contextmenu', function(event) {
        event.preventDefault();   
    });
 


document.addEventListener("DOMContentLoaded", function () {
    const text = `
I'm Kapilan, a passionate learner with a strong foundation in Machine Learning, and Data Analysis.
With a blend of technical expertise and creativity, I specialize in transforming data into meaningful insights and impactful solutions.
Currently pursuing a B.Tech in AI and Data Science, I am eager to contribute to solving complex challenges using data-driven approaches.
    `;
    const typingEffect = document.getElementById("typing-effect");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingEffect.textContent += text[index];
            index++;
            setTimeout(type, 50); 
        }
    }

    type();
});
 document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === 'U' || e.key === 'I' || e.key === 'S' || e.key === 'J')) {
        e.preventDefault();
    }
});

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});


