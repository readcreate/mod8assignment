//STEP 1
// let anshulFavoriteMovies = [
//     "In Bruges",
//     "The Accountant",
//     "3 Idiots",
//     "Parasite",
//     "M*A*S*H"
// ]

// console.log(anshulFavoriteMovies[1])

//STEP 2
// let movies = new Array(length)
// movies[0] = "In Bruges"
// movies[1] = "The Accountant"
// movies[2] = "3 Idiots"
// movies[3] = "Parasite"
// movies[4] = "M*A*S*H"

// console.log(movies[0])

//STEP 3
// let movies = new Array(length)
// movies[0] = "In Bruges"
// movies[1] = "The Accountant"
// movies[2] = "3 Idiots"
// movies[3] = "Parasite"
// movies[4] = "M*A*S*H"

// movies.splice(2,0,"The Great Escape")
// console.log(movies.length)
// // console.log(movies.join("\n"))


//STEP 4
// let movies = []
// movies[0] = "In Bruges"
// movies[1] = "The Accountant"
// movies[2] = "3 Idiots"
// movies[3] = "Parasite"
// movies[4] = "M*A*S*H"

// delete movies[0]

// console.log(movies.join("\n"))


//STEP 5
// let movies = []
// movies[0] = "In Bruges"
// movies[1] = "The Accountant"
// movies[2] = "3 Idiots"
// movies[3] = "Parasite"
// movies[4] = "M*A*S*H"
// movies[5] = "The Greatest Showman"
// movies[6] = "Ratatouille"

// for (let movie in movies) {
// 	console.log(movies[movie])
// }

//STEP 6
// let movies = []
// movies[0] = "In Bruges"
// movies[1] = "The Accountant"
// movies[2] = "3 Idiots"
// movies[3] = "Parasite"
// movies[4] = "M*A*S*H"
// movies[5] = "The Greatest Showman"
// movies[6] = "Ratatouille"


// for (let movie of movies) {
// 	console.log(movie)
// }


//STEP 7

// let movies = []
// movies[0] = "In Bruges"
// movies[1] = "The Accountant"
// movies[2] = "3 Idiots"
// movies[3] = "Parasite"
// movies[4] = "M*A*S*H"
// movies[5] = "The Greatest Showman"
// movies[6] = "Ratatouille"

// movies.sort()

// for (let movie of movies) {
// 	console.log(movie)
// }


//STEP 8
// let movies = []
// movies[0] = "In Bruges"
// movies[1] = "The Accountant"
// movies[2] = "3 Idiots"
// movies[3] = "Parasite"
// movies[4] = "M*A*S*H"
// movies[5] = "The Greatest Showman"
// movies[6] = "Ratatouille"

// let leastFavMovies = ["The Artist", "The Tree of Life", "The Bourne Legacy"]

// console.log("Movies I like:")
// console.log("")
// console.log(movies.join("\n"))

// console.log("")

// console.log("Movies I regret watching:")
// console.log("")
// console.log(leastFavMovies.join("\n"))



//STEP 9
// let movies = []
// movies[0] = "In Bruges"
// movies[1] = "The Accountant"
// movies[2] = "3 Idiots"
// movies[3] = "Parasite"
// movies[4] = "M*A*S*H"
// movies[5] = "The Greatest Showman"
// movies[6] = "Ratatouille"

// let leastFavMovies = ["The Artist", "The Tree of Life", "The Bourne Legacy"]

// movies = movies.concat(leastFavMovies)

// movies.sort().reverse()

// console.log(movies.join("\n"))


//STEP 10
// let movies = []
// movies[0] = "In Bruges"
// movies[1] = "The Accountant"
// movies[2] = "3 Idiots"
// movies[3] = "Parasite"
// movies[4] = "M*A*S*H"
// movies[5] = "The Greatest Showman"
// movies[6] = "Ratatouille"

// let leastFavMovies = ["The Artist", "The Tree of Life", "The Bourne Legacy"]

// movies = movies.concat(leastFavMovies)

// movies.sort().reverse()

// console.log(movies.pop())

//STEP 11
// let movies = []
// movies[0] = "In Bruges"
// movies[1] = "The Accountant"
// movies[2] = "3 Idiots"
// movies[3] = "Parasite"
// movies[4] = "M*A*S*H"
// movies[5] = "The Greatest Showman"
// movies[6] = "Ratatouille"

// let leastFavMovies = ["The Artist", "The Tree of Life", "The Bourne Legacy"]

// movies = movies.concat(leastFavMovies)

// movies.sort().reverse()

// console.log(movies.shift())

//STEP 12
// let movies = []
// movies[0] = "In Bruges"
// movies[1] = "The Accountant"
// movies[2] = "3 Idiots"
// movies[3] = "Parasite"
// movies[4] = "M*A*S*H"
// movies[5] = "The Greatest Showman"
// movies[6] = "Ratatouille"

// let leastFavMovies = ["The Artist", "The Tree of Life", "The Bourne Legacy"] 

// movies = movies.concat(leastFavMovies)

// movies.sort().reverse()

// console.log(movies.join("\n"))
// console.log("")

// let indices = []

// leastFavMovies.forEach((i) => {
//     indices.push(movies.indexOf(i))
// })

// console.log(indices.join("\n"))

// let moreGoodMovies = ["Good Will Hunting","Forrest Gump","Badla"]
// let counter = 0

// indices.forEach((i) => {
//     movies[i] = moreGoodMovies[counter]
//     counter++
// })

// console.log(movies.join("\n"))

//STEP 13
// let movies = [["In Bruges", 1], ["The Accountant", 2], ["3 Idiots", 3], ["Parasite", 4], ["M*A*S*H", 5]]

// movies.forEach((i) => {
//     let nameOnly = i.filter((item) => {
//         return typeof item === 'string'
//     })
//     console.log(nameOnly)
//     // console.log(i[0])
// })


//STEP 14
// let employees = ["ZAK","JESSICA","MARK","FRED","SALLY"]

// const showEmployee = function(empArray) {
//     console.log("Employees:")
//     console.log("")
//     empArray.forEach((i) => {
//         console.log(i)
//     })
// }

// showEmployee(employees)

//STEP 15
// const filterValues = function(anyArray) {
    
//     return anyArray.filter((i) => {
//         return i != false && i != null && i != 0 && i != ""
//     })
// }

// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//STEP 16
const oneRandom = function(inputArray) {
    return inputArray[Math.round(Math.random()*(inputArray.length-1))]
}

//STEP 17
function compareNumbers(a, b) {
    return a - b;
    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  }

const largestNumber = function(numericArray) {

    let allNumeric = numericArray.every((i) => {return typeof i === 'number'})

    if (allNumeric) {
        return numericArray.sort(compareNumbers).reverse()[0]
    } else {
        return "Input array must ONLY contain numeric elements."
    }
    
}