// Your code here
let middleImage = document.getElementById('poster')
// let remainingTickets = document.getElementById('ticket-num')
const movieTitle = document.getElementById('title')
const runTime = document.getElementById('runtime')
const movieDescription = document.getElementById('film-info')
const showTime = document.getElementById('showtime')
const card = document.getElementById('card')
const movieList = document.getElementById('movie-list')




const request = async () => {
    let req = await fetch('http://localhost:3000/films')
    let res = await req.json()
    //  let img = document.getElementById('poster')
    //  img.src = res.film.poster[0]
    
    res.forEach((film,i) => {
        let p = document.createElement('p')
        p.innerText = film.title
        movieList.append(p)
        let img = document.getElementById('poster')
        img.src = film.poster
        // movieTitle = fil
        middleImage.append('img')
        p.addEventListener('click', () => {
        let img = document.getElementById('poster')
        img.src = film.poster
        movieTitle.innerText = film.title
        movieDescription.innerText = film.description
        runTime.innerText = film.runtime
        showTime.innerText = film.showtime
        console.log(p)

        })



   

    })

}
const button = document.getElementById('buy-ticket')
button.addEventListener('submit', (e) => {
    e.preventDefault()
    let capacity = document.getElementById('capacity')
    let ticketsSold = document.getElementById('tickets-sold')
    let remainingTickets = document.getElementById('ticket-num')
    remainingTickets.innerText = capacity.innerText - ticketsSold.innerText
    console.log(remainingTickets)
})

request()