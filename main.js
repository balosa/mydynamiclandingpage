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
        body.style.background = "url('https://6cvyqa.db.files.1drv.com/y4pY04tpqqEhOwWxwwA7zb1Z4xIkkSHmgHy1ruM2glfKeIvJTuDUrsCAIjmeUH1JRkfiRo3trbMyyhk0lIhLaRkHNce1vlAXgp77GACvIG59_Vk4GxD7w5itofsVqK5nCaMovwFiP-IGirTeR6SUOgxLpG9UH23ST_PomEL-_avxLp32dLM68UHHT84ErRSvzmLqMtYmdLVl7oidd4HWvoGZg/morning.jpg?psid=1')";
        greeting.innerHTML = 'Good Morning,';
    } else if (hour < 18) {
        body.style.backgroundImage = "url('https://4vba2w.db.files.1drv.com/y4pAeNAzQ-wELaeqly8gcJwvTrgBqwFqTeOmVmIe3xkvlkLjPyh7XFH2WnnUGQ2Edu7IiNy9JQ731r__56uC9OxoynNvtZd6VoGEw1whC5FGBwdws_bAhCSuaXbvvEg97jDpxCJ60IcMs9HiYTerppKb8_e2fNI3-1lZlKU3CwVzizYfjLmxrn9hm_iUqaxz16wXO3lNGHFlumKRq8Q3smbXA/afternoon.jpg?psid=1')";
        greeting.innerHTML = 'Good Afternoon,';
    } else {
        body.style.background = "url('https://6mvyqa.db.files.1drv.com/y4p2paQsIBLfC46yVd1e4PB700612SYEzoKjwkLm1Oyt6VWAhTwwB4OADCZIQP_MhqG5cm7xo2n28p6RJoKjGUNfD1e6bHXQ5Iika0_j4mUA_fsjBKttFPqMp_9iyIC1azRS2cDqouw8UWMg4vfzja-AWfye01Gb_NP0XV0GV1tsn4g3LPjacsmI4TFd6MO69hRMR0MBAcEUec0gwCFq9CKcQ/night.jpg?psid=1')";
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
