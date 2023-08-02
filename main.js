document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.slip.advice
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

getFetch()

