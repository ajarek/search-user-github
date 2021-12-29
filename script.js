const display = document.querySelector('.display')
const wrapp = document.querySelector('.wrapp')
const wrapp4 = document.querySelector('.wrapp4')
const wrapp3 = document.querySelector('.wrapp3')
const wrapp1 = document.querySelector('.wrapp1')
const wrapp2 = document.querySelector('.wrapp2')
const rep = document.querySelector('#rep')
const fs = document.querySelector('#fs')
const fg = document.querySelector('#fg')
const lc = document.querySelector('#lc')
const tw = document.querySelector('#tw')
const bl = document.querySelector('#bl')
const cp = document.querySelector('#cp')
const search = document.querySelector('input')
const body = document.querySelector('body')
const btnSwitch = document.querySelector('#btnSwitch')

async function displayNote() {

    const mysearch = () => {
        wrapp4.innerHTML = ''

        var username = search.value
        return username
    }
    const res = await fetch(`https://api.github.com/users/${mysearch()}`)
    const notes = await res.json()
    wrapp.classList.add('opacity')
    wrapp1.classList.add('opacity')
    wrapp.innerHTML = `<img src="${notes.avatar_url}" alt="😕">`
    wrapp.innerHTML += `<h2>The ${notes.login.split('').map((el,index)=>{
if(index === 0){
return el.toUpperCase()
}
return el.toLowerCase()
}).join('')}</h2>`
    wrapp.innerHTML += `<span>Joined ${notes.created_at.split('T')[0]}</span>`
    wrapp4.innerHTML += `<p>@${notes.login}</p>`
    if (notes.bio === null) {
        wrapp4.innerHTML += `<p>This profile has no bio</p>`
    } else {
        wrapp4.innerHTML += `<p>${notes.bio}</p>`
    }
    rep.innerHTML = notes.public_repos
    fs.innerHTML = notes.followers
    fg.innerHTML = notes.following
    lc.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${notes.location}`
    if (notes.twitter_username === null) {
        tw.innerHTML = `<i class="fab fa-twitter"></i> Not Available`
    } else {
        tw.innerHTML = `<i class="fab fa-twitter"></i> ${notes.twitter_username}`
    }
    bl.innerHTML = `<i class="fas fa-link"></i> ${notes.blog}`
    cp.innerHTML = `<i class="fab fa-github"></i> ${notes.company}`
}
let initialTheme = true;

function mySwitch() {
    if (initialTheme) {
        document.documentElement.style.setProperty('--bs-gray-dark', ' --bs-white');
        document.documentElement.style.setProperty('--bs-light', ' --bs-dark');
        document.documentElement.style.setProperty('--bs-blue-dark', 'lightgray');
        document.documentElement.style.setProperty('--bs-blue', '#6c757d');
        btnSwitch.innerHTML = 'dark 🌛'
        initialTheme = false;
    } else {
        document.documentElement.style.setProperty('--bs-gray-dark', ' #212529');
        document.documentElement.style.setProperty('--bs-light', ' #f8f9fa');
        document.documentElement.style.setProperty('--bs-blue-dark', '#003357');
        document.documentElement.style.setProperty('--bs-blue', '#00a4e6');
        btnSwitch.innerHTML = 'light 🌞'
        initialTheme = true;
    }
}
btnSwitch.addEventListener('click', mySwitch)