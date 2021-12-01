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

    document.addEventListener('submit', function (event){
        event.preventDefault();
        let newRamen = document.createElement('div');
        newRamen.innerHTML =        
            `
            <img class="detail-image" src="./assets/image-placeholder.jpg" alt="Insert Name Here" />
            <h2 class="name">Insert Name Here</h2>
            <h3 class="restaurant">Insert Restaurant Here</h3>
            `
        let newRamenImg = newRamen.querySelector('.detail-image')
        let newRamenName = newRamen.querySelector('.name')
        let newRamenRestaurant = newRamen.querySelector('.restaurant')
        
        newRamenImg.src = event.target.new_image
        newRamenName.textContent = event.target.new_name
        newRamenRestaurant.textContent = event.target.new_restaurant
        
        })

}

document.addEventListener('DOMContentLoaded', init);