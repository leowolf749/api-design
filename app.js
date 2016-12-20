window.addEventListener ('load', function() {
    

    let parent = document.querySelector('#cars');
    for (let i = 0; i < array.length; i++) {

        let car = document.createElement('li');
        
        car.innerHTML = Mustache.render(
            document.querySelector('#car-template').innerHTML,
            { name: array[i].name}
        );
        parent.appendChild(car);
    }
});

let array = [
    {
        name: 'Jeep Wrangler',
        size: 4,
        money: '$20',
    },

    {
        name: 'Chrysler 300',
        size: 5,
        money: '$40',
    },

    {
        name: 'Honda Civic',
        size: 3,
        money: '$60',
    },

    {
        name: 'Nissan Altima',
        size: 4,
        money: '$30',
    },
];