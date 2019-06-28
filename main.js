// DOM elements
const greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),
    time = document.getElementById('time'),
    body = document.querySelector('body');

// Change background image
const changeBgImg = () => {
    let today = new Date(),
        hour = today.getHours();
    if (hour < 12) { 
        body.style.background = "url('../img/canon-photography-green-leaves-sunlight-light-1451237-pxhere.com.jpg')";
        greeting.innerHTML = 'Good Morning,';
    } else if (hour < 18) {
        body.style.backgroundImage = "url('../img/landscape-tree-nature-forest-light-plant-839463-pxhere.com.jpg')";
        greeting.innerHTML = 'Good Afternoon,';
    } else {
        body.style.background = "url('../img/light-sky-night-atmosphere-mystical-evening-821186-pxhere.com.jpg')";
        greeting.innerHTML = 'Good Evening,';
        body.style.color = 'white';
    }
}
// Add zeros
const addZeros = n =>(parseInt(n,10) < 10 ? '0' : '') + n;
// Show time
const showTime = () => {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    time.innerHTML = `${addZeros(hour)}:${addZeros(min)}:${addZeros(sec)}`;
    setTimeout(() => showTime(), 1000);     
}

// Run
changeBgImg();
showTime();
