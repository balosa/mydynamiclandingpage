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
        body.style.background = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greeting.innerHTML = 'Good Morning,';
    } else if (hour < 18) {
        body.style.backgroundImage = "url('https://58vyqa.db.files.1drv.com/y4mI9VcY_MYi9QPuQxpb0xjE7LXWHopgnyE3uDJTMo1r-bNdPeVlqoy7RwusHepRops4fFi5Xq-t10-MOU3dvA0pTzQlqk4IXu1ZEqQ6FHJYI6_0ohJCnKdDQG9qNreVY5QCE4QuR77mJSqeuSOZY5-nd4OAE3PMiW2xC46Meb4JfF-a987y3NlDAzK4ZtT8vmb-g4ibjQ8eS1QiO8AKlR_oA?width=1920&height=1080&cropmode=none')";
        greeting.innerHTML = 'Good Afternoon,';
    } else {
        body.style.background = "url('https://6mvyqa.db.files.1drv.com/y4mPEX1T2CAngLf6kmRlSujEAGS-_NjjZzYwlCzzHg-Kc6kDjkNKL9oDex4MHgryBswO10i3c1LGmIYqA2CiKWTlN7KNL7R24eJtJF7WyQw23FT35Eb7otW3gfFTNDT6pkMqImPXRVGAscraMUNO7aOFxDRKoLXTueWIe7rz_e7IFf8XFmOmh07G6qFg4ceKNEb2-8fr99Dirc53okQTzZhZw?width=1920&height=1080&cropmode=none')";
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
