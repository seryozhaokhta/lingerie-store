var products = [
    { title: 'Купальник 1', price: '3500 руб.', imageSrc: 'swimwear1.png', addLike: '..\\icons\\heart_plus.svg', removeLike: '..\\icons\\heart_minus.svg' },
    { title: 'Купальник 2', price: '3500 руб.', imageSrc: 'swimwear1.png', addLike: '..\\icons\\heart_plus.svg', removeLike: '..\\icons\\heart_minus.svg' },
    { title: 'Купальник 3', price: '3500 руб.', imageSrc: 'swimwear1.png', addLike: '..\\icons\\heart_plus.svg', removeLike: '..\\icons\\heart_minus.svg' },
    { title: 'Купальник 4', price: '3500 руб.', imageSrc: 'swimwear1.png', addLike: '..\\icons\\heart_plus.svg', removeLike: '..\\icons\\heart_minus.svg' },
    { title: 'Купальник 5', price: '3500 руб.', imageSrc: 'swimwear1.png', addLike: '..\\icons\\heart_plus.svg', removeLike: '..\\icons\\heart_minus.svg' },
    { title: 'Купальник 6', price: '3500 руб.', imageSrc: 'swimwear1.png', addLike: '..\\icons\\heart_plus.svg', removeLike: '..\\icons\\heart_minus.svg' },
    { title: 'Купальник 7', price: '3500 руб.', imageSrc: 'swimwear1.png', addLike: '..\\icons\\heart_plus.svg', removeLike: '..\\icons\\heart_minus.svg' },
    { title: 'Купальник 8', price: '3500 руб.', imageSrc: 'swimwear1.png', addLike: '..\\icons\\heart_plus.svg', removeLike: '..\\icons\\heart_minus.svg' },
    { title: 'Купальник 9', price: '3500 руб.', imageSrc: 'swimwear1.png', addLike: '..\\icons\\heart_plus.svg', removeLike: '..\\icons\\heart_minus.svg' },
    { title: 'Купальник 10', price: '3500 руб.', imageSrc: 'swimwear1.png', addLike: '..\\icons\\heart_plus.svg', removeLike: '..\\icons\\heart_minus.svg' },
    { title: 'Купальник 11', price: '3500 руб.', imageSrc: 'swimwear1.png', addLike: '..\\icons\\heart_plus.svg', removeLike: '..\\icons\\heart_minus.svg' },
    { title: 'Купальник 12', price: '3500 руб.', imageSrc: 'swimwear1.png', addLike: '..\\icons\\heart_plus.svg', removeLike: '..\\icons\\heart_minus.svg' },
];

window.onload = function () {

    var productGrid = document.querySelector('.product-grid');

    products.forEach(function (product) {

        var productItem = document.createElement('div');
        var productImage = document.createElement('img');
        var likeButton = document.createElement('button');
        var addLike = document.createElement('img');
        var removeLike = document.createElement('img');
        var productTitle = document.createElement('h3');
        var productPrice = document.createElement('p');

        productItem.classList.add('product-item');
        productImage.classList.add('product-image', 'swimwear-image');
        likeButton.classList.add('like-button');
        addLike.classList.add('like-icon', 'add-like');
        removeLike.classList.add('like-icon', 'remove-like');
        productTitle.classList.add('product-title');
        productPrice.classList.add('product-price');

        productImage.src = product.imageSrc;
        productImage.alt = product.title;
        addLike.src = product.addLike;
        addLike.alt = 'Добавить в избранное';
        removeLike.src = product.removeLike;
        removeLike.alt = 'Удалить из избранного';
        removeLike.style.display = 'none';
        productTitle.textContent = product.title;
        productPrice.textContent = product.price;

        likeButton.append(addLike, removeLike);
        productItem.append(productImage, likeButton, productTitle, productPrice);

        likeButton.addEventListener('click', function () {
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

        productGrid.appendChild(productItem);
    });
}
