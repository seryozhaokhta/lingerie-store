const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
    button.addEventListener('click', function () {
        const addLikeIcon = this.querySelector('.add-like');
        const removeLikeIcon = this.querySelector('.remove-like');

        if (addLikeIcon.style.display !== 'none') {
            addLikeIcon.style.display = 'none';
            removeLikeIcon.style.display = 'block';
        } else {
            addLikeIcon.style.display = 'block';
            removeLikeIcon.style.display = 'none';
        }
    });
});
