var request = new XMLHttpRequest()

request.open('POST', 'http://85.214.16.235:8080/s', true)
request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            console.log(movie.title)
        })
    } else {
        console.log('error')
    }
}

request.send()