window.addEventListener ('load', function() {
    
    getLot();

    let parent = document.querySelector('#cars');
    for (let i = 0; i < array.length; i++) {

        let car = document.createElement('li');
        
        
        car.innerHTML = Mustache.render(
            document.querySelector('#car-template').innerHTML,
            { name: array[i].name, 
              size: array[i].size, 
              money: array[i].money, 
              lots: [{button: 'lot 1'},
              {button: 'lot 2'},
              {button: 'lot 3'},
              {button: 'lot 4'}], 
            }
        );
        parent.appendChild(car);

        
    }



});

// Array of Cars to

let array = [
    {
        name: 'Jeep Wrangler',
        size: 4 + ' spaces',
        money: '$20',
    },

    {
        name: 'Chrysler 300',
        size: 5 + ' spaces',
        money: '$40',
    },

    {
        name: 'Honda Civic',
        size: 3 + ' spaces',
        money: '$60',
    },

    {
        name: 'Nissan Altima',
        size: 4 + ' spaces',
        money: '$30',
    },
];

// GET request to retrieve 'Lot' info

function getLot() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://gentle-shore-57758.herokuapp.com/lots');
    request.addEventListener('load', function() {
        let response = JSON.parse(request.responseText);
        console.log(response);

        let lots = document.querySelector('#lots');
        for (let i = 0; i < response.length; i++) {

        let lot = document.createElement('li');

        lot.innerHTML = Mustache.render(
            document.querySelector('#lot-template').innerHTML,
            { id: response[i].id,
              rate: '$' + response[i].rate,
              capacity: 'Capacity ' + response[i].capacity,
              full: response[i].full,  
            }
        );
        lots.appendChild(lot);
    }
    })
    request.send();
    console.log('request sent');
}


// POST request to send 'Car' info

function sendCar() {
    let request = new XMLHttpRequest();
    request.open('POST', 'https://gentle-shore-57758.herokuapp.com/requestParking');
    
}