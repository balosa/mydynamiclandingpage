// DOM elements
const greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),
    time = document.getElementById('time'),
    body = document.querySelector('body'),
    searchBar = document.getElementById('search-bar');

// Change background image
const changeBgImg = () => {
    let today = new Date(),
        hour = today.getHours();
    if (hour < 12) {
        body.style.background = "url('https://6cvyqa.db.files.1drv.com/y4mOcN4WwpSmrndBgqHgVoWSkhNNJknxbfpoyTfbafp5qXKNoLyI0zjK0EST66Zcsq-BB92mNPAIXTsDq5oqJGhVMHYUQiZLqxFGAnS5M7F7QFqEja2bRh9g7S6NkYvlFkJWZ5X8MLoIzhClagkWCO4VfNCBm215Tz0-DIvYZzoXnjGYVUfLRv2Fg6H4LS_IpnUcSqHiCMTYOI3vaRivJ_f-Q?width=1920&height=1080&cropmode=none') no-repeat";
        greeting.textContent = 'Good Morning,';
        searchBar.style.backgroundColor = 'rgba(139,178,1,0.3)';
        searchBar.style.borderColor = 'green';
    } else if (hour < 18) {
        body.style.backgroundImage = "url('https://58vyqa.db.files.1drv.com/y4mI9VcY_MYi9QPuQxpb0xjE7LXWHopgnyE3uDJTMo1r-bNdPeVlqoy7RwusHepRops4fFi5Xq-t10-MOU3dvA0pTzQlqk4IXu1ZEqQ6FHJYI6_0ohJCnKdDQG9qNreVY5QCE4QuR77mJSqeuSOZY5-nd4OAE3PMiW2xC46Meb4JfF-a987y3NlDAzK4ZtT8vmb-g4ibjQ8eS1QiO8AKlR_oA?width=1920&height=1080&cropmode=none')";
        greeting.textContent = 'Good Afternoon,';
        searchBar.style.backgroundColor = 'rgba(189,20,27,0.3)';
        searchBar.style.borderColor = 'red';
    } else {
        body.style.background = "url('https://6mvyqa.db.files.1drv.com/y4mPEX1T2CAngLf6kmRlSujEAGS-_NjjZzYwlCzzHg-Kc6kDjkNKL9oDex4MHgryBswO10i3c1LGmIYqA2CiKWTlN7KNL7R24eJtJF7WyQw23FT35Eb7otW3gfFTNDT6pkMqImPXRVGAscraMUNO7aOFxDRKoLXTueWIe7rz_e7IFf8XFmOmh07G6qFg4ceKNEb2-8fr99Dirc53okQTzZhZw?width=1920&height=1080&cropmode=none')";
        greeting.innerHTML = 'Good Evening,';
        body.style.color = 'white';
        searchBar.style.backgroundColor = 'rgba(29,31,26,0.3)';
        searchBar.style.borderColor = 'whitesmoke';

    }
}
// Add zeros
const addZeros = n => (parseInt(n, 10) < 10 ? '0' : '') + n;
// Show Am Pm
const amPm = () => {

}
// Show time
const showTime = () => {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    // Show Am Pm
    const amPm = hour < 12 ? 'AM' : 'PM';
    // 12h format
    hour = hour % 12 || 12;


    time.innerHTML = `${addZeros(hour)}:${addZeros(min)}:${addZeros(sec)} ${amPm}`;
    setTimeout(() => showTime(), 1000);
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
      name.textContent = '[Enter Name]';
    } else {
      name.textContent = localStorage.getItem('name');
    }
  }
  
  // Set Name
  function setName(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
      }
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
  }
  
  // Get Focus
  function getFocus() {
    if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter Focus]';
    } else {
      focus.textContent = localStorage.getItem('focus');
    }
  }
  
  // Set Focus
  function setFocus(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }
  
  name.addEventListener('keypress', setName);
  name.addEventListener('blur', setName);
  focus.addEventListener('keypress', setFocus);
  focus.addEventListener('blur', setFocus);
// Run
changeBgImg();
showTime();
getName();
getFocus();
setName();
setFocus();