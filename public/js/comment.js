const postNewComment = async (event) => {
    event.preventDefault();

    const clickedButton = event.target;

    const blogId = clickedButton.getAttribute('data-blogid');
    const textarea = document.querySelector(`textarea[data-blogid="${blogId}"]`);


    const textareaValue = textarea.value;
    console.log('Textarea Value:', textareaValue);

    textarea.value = '';

    try {
        const response = await fetch(`/api/comment`, {
            method: "POST",
            body: JSON.stringify({
                commentText: textareaValue,
                blogId
            }),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed to post new comment.");
        }
    } catch (err) {
        console.error(err);
        alert("An error occurred while posting the comment.");
    }
};

document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('add-comment-btn')) {
        postNewComment(event);
    }
});