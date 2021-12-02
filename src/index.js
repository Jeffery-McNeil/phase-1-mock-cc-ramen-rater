const init = () => {
    fetch ('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(json => {
        json.filter(function (element) {
            const img = document.createElement('img');
            img.src = element.image;
            document.querySelector('#ramen-menu').append(img)
            img.addEventListener('click', (event) => {
                const detailImage = document.querySelector('.detail-image');
                const name = document.querySelector('.name')
                const restaurant = document.querySelector('.restaurant')
                
                detailImage.src = element.image;
                name.textContent = element.name;
                restaurant.textContent = element.restaurant;
            })
        })
    })

    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault()
        const name = event.target.newName.value;
        const restaurant = event.target.newRestaurant.value;
        const image = event.target.newImage.value;
        const rating = event.target.newRating.value;
        const comment = event.target.newComment.value;
        let newRamen = {
            name: name,
            restaurant: restaurant,
            image: image,
            rating: rating,
            comment: comment,
        }
        fetch('http://localhost:3000/ramens', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newRamen)
        })
        .then(response => response.json())
        .then(ramen => console.log(ramen))
    })
}

document.addEventListener('DOMContentLoaded', init);