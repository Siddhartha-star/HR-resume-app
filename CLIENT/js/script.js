document.addEventListener('DOMContentLoaded', () => {
    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                const result = await response.json();
                if (result.success) {
                    window.location.href = '../html/dashboard.html'; // Redirect on success
                } else {
                    alert('Login failed: ' + result.message);
                }
            } catch (error) {
                console.error('Login error:', error);
            }
        });
    }

    // Handle signup form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirm-password').value.trim();
            
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }
            
            try {
                const response = await fetch('/api/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password })
                });
                const result = await response.json();
                if (result.success) {
                    window.location.href = '../html/login.html'; // Redirect on success
                } else {
                    alert('Signup failed: ' + result.message);
                }
            } catch (error) {
                console.error('Signup error:', error);
            }
        });
    }

    // Handle account settings form submission
    const updateSettingsForm = document.querySelector('.settings-form');
    if (updateSettingsForm) {
        updateSettingsForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const currentPassword = document.getElementById('current-password').value.trim();
            const newPassword = document.getElementById('new-password').value.trim();
            const confirmPassword = document.getElementById('confirm-password').value.trim();
            
            if (newPassword && newPassword !== confirmPassword) {
                alert('New passwords do not match.');
                return;
            }
            
            try {
                const response = await fetch('/api/update-settings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, phone, currentPassword, newPassword })
                });
                const result = await response.json();
                if (result.success) {
                    alert('Settings updated successfully!');
                } else {
                    alert('Update failed: ' + result.message);
                }
            } catch (error) {
                console.error('Update error:', error);
            }
        });
    }

    // Handle job search form submission
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const jobTitle = document.getElementById('job-title').value.trim();
            const location = document.getElementById('location').value.trim();
            const category = document.getElementById('category').value;
            
            try {
                const response = await fetch(`/api/search-jobs?title=${jobTitle}&location=${location}&category=${category}`);
                const result = await response.json();
                if (result.jobs) {
                    displayJobResults(result.jobs);
                } else {
                    alert('No jobs found.');
                }
            } catch (error) {
                console.error('Search error:', error);
            }
        });
    }

    // Function to display job search results
    function displayJobResults(jobs) {
        const resultsSection = document.querySelector('.results ul');
        resultsSection.innerHTML = ''; // Clear existing results
        jobs.forEach(job => {
            const jobItem = document.createElement('li');
            jobItem.innerHTML = `
                <h3>${job.title}</h3>
                <p>Location: ${job.location}</p>
                <p>Category: ${job.category}</p>
                <a href="#" class="cta-button">View Details</a>
            `;
            resultsSection.appendChild(jobItem);
        });
    }
});
