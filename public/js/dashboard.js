const postNewBlogForm = async (event) => {
    const form = document.getElementById('new-blog-form');

    // Check if the form is currently visible (display is 'block')
    if (form.style.display === 'block') {
        // If it's visible, hide it
        form.style.display = 'none';
    } else {
        // If it's hidden, show it
        form.style.display = 'block';
    }
};

const createNewBlog = async (event) => {
    let title = document.querySelector('#new-title').value;
    let text = document.querySelector('#new-content').value;
    try {
        const response = await fetch('/api/dashboard', {
            method: 'POST',
            body: JSON.stringify({
                text: text,
                title: title
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            // Request was successful, you can handle the response here
            const responseData = await response.json();
            console.log('Response data:', responseData);
            location.reload();
        } else {
            console.error('Request failed with status:', response.status);
        }
    } catch (err) {
        console.error('Fetch error:', err);
    }
};

const editBlogForm = async (event) => {
    const form = document.querySelector('.update-blog-form');
    const clickedButton = event.target;
    const blogId = clickedButton.getAttribute('data-blogid');
    // Check if the form is currently visible (display is 'block')
    if (form.style.display === 'block') {
        // If it's visible, hide it
        form.style.display = 'none';
    } else {
        // If it's hidden, show it
        form.style.display = 'block';
    }
    return blogId

};


const deleteBlog = async blogId => {
    try {
        const response = await fetch(`/api/dashboard/${blogId}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            alert('Deleted post. refresh page');
        } else {
            console.error('Request failed with status:', response.status);
        }
    } catch (err) {
        console.error('Fetch error:', err);
    }
}

const updateBlog = async blogId => {
    const title = document.querySelector('.updated-title');
    const text = document.querySelector('.updated-content');
    try {
        const response = await fetch(`/api/dashboard/${blogId}`, {
            method: 'PUT',
            body: JSON.stringify({
                text: text.value,
                title: title.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const responseData = await response.json();
            alert('Updated post');
            console.log('Response data:', responseData);
        } else {
            console.error('Request failed with status:', response.status);
        }
    } catch (err) {
        console.error('Fetch error:', err);
        console.log(err)
    }
}

const updateButtons = document.querySelectorAll('.update-post');

const deleteButtons = document.querySelectorAll('.delete-post');

updateButtons.forEach(button => {
    button.addEventListener('click', updateBlog);
});

deleteButtons.forEach(button => {
    button.addEventListener('click', deleteBlog);
});

document.getElementById('new-post-btn').addEventListener('click', postNewBlogForm);
document.getElementById('create-post').addEventListener('click', createNewBlog);
document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('dashboard-blogs')) {
        editBlogForm(event);
    }
});

var acc = document.getElementsByClassName("dashboard-blogs");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
    var panel = acc[i].nextElementSibling;
    panel.style.display = "none";
}

// Get references to the form and button elements
const newBlogForm = document.getElementById('new-blog-form');
const newPostButton = document.getElementById('new-post-btn');

// Function to show the newBlogForm
const showNewBlogForm = () => {
    newBlogForm.style.display = 'block'; 
    newPostButton.style.display = 'none'; 
};

// Function to hide the newBlogForm
const hideNewBlogForm = () => {
    newBlogForm.style.display = 'none';
    newPostButton.style.display = 'block';
};

// Set the initial style of newBlogForm to 'none' to hide it
newBlogForm.style.display = 'none';

// Add a click event listener to the "New Post" button to show the form
newPostButton.addEventListener('click', showNewBlogForm);

// Add a click event listener to the "Create" button inside the form to hide the form
document.getElementById('create-post').addEventListener('click', hideNewBlogForm);
