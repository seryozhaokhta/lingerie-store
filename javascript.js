let index = 0;
const images = document.querySelectorAll('.gallery-image');

document.getElementById('right-button').addEventListener('click', function () {
    index++;
    if (index >= images.length) index = 0;
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[index].style.display = 'block';
});

document.getElementById('left-button').addEventListener('click', function () {
    index--;
    if (index < 0) index = images.length - 1;
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[index].style.display = 'block';
});


images[0].style.display = 'block';


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
