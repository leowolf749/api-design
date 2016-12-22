window.addEventListener ('load', function() {
    
    getLot();





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
              capacity: 'Capacity: ' + response[i].count + '/' + response[i].capacity,
            //   full: response[i].full,  
            }
        );
        lots.appendChild(lot);
    }

    showCars(array, response);

    })
    request.send();
    console.log('request sent');
}


// POST request to send 'Car' info

function sendCar(lotId, car) {
    let request = new XMLHttpRequest();
    request.open('POST', 'https://gentle-shore-57758.herokuapp.com/requestParking');

}


function showCars(array, lots) {
        // console.log(array);
        // console.log(lots);
        let lotNames = [];
        for (let i = 0; i < lots.length; i++) {
            lotNames.push({id: i, button: lots[i].id});
        }



//              [{button: 'lot 1'},
//               {button: 'lot 2'},
//               {button: 'lot 3'},
//               {button: 'lot 4'}]
        let parent = document.querySelector('#cars');
    for (let i = 0; i < array.length; i++) {

        let car = document.createElement('li');
        
        
        car.innerHTML = Mustache.render(
            document.querySelector('#car-template').innerHTML,
            { name: array[i].name, 
              size: array[i].size, 
              money: array[i].money, 
              lots: lotNames, 
            }
        );
        // Problem: we need to add event listeners.
        // Problem pt 2: we need to make a post request, so we need the lot ID and car when we do
        // 1. Right here, the car is array[i]. That's the right car to send.
        // 2. The current lot depends on which button they click. If they click button 1, get lotNames[0].button
        // 2a. Each button needs its own event listener. That means you need four different functions.
        // 2b. You need to uniquely select each button (querySelector) so they need a unique id or class
        // 2c. When you click button 0, send lotNames[0] as lot. Its ok to manually write out 'lotNames[0]', etc since
        //     you'll have four different functions anyway.
        parent.appendChild(car);

        
    }
}