const movie = {
    title: 'The Green Knight',
    releaseYear: 2021,
    rating: 4.5,
    director: 'David Lowery'
}

function showProperties(obj) {
    for (property in obj) console.log(property, obj[property])
}

showProperties(movie)