// $(document).ready(function() {

//       $(".button").click(function() {
//             $("ol").append("<li>tugce</li>");
//       });


// })
   // console.log("hi")
// document.write("tugcee");
// alert("helloo")

// var name = prompt("whats your name?")
// console.log(name)

// var numberValue = 12
// var numberValue2 =Number(prompt("choose a number between 1 - 50"))
// var boolValue = true
// var three = "type something"
// var four = [33, false, "string"]

// // var combineVariables = numberValue + numberValue2
// // console.log(combineVariables)

// if(numberValue2 > 135) {
// 	alert("yeah you are right")
// }

// else {
// 	alert("nope!")
// }

// var num1 = 6
// var num2 = 6

// if(num1===num2) {
// 	console.log("they are equal")
// }


// var username = prompt("whats your name")
// while (username != "muttalip") {
// 	username = prompt("tell me the truth!")
// }


// for(var i = 0; i < 20 ; i++) {
// 	document.write(i)
// }



// var num1 = 30
// var num2 = 50

// function add() {
// 	document.write(num1 + num2)
// }

// add()

// ----------- week 8 --------------

// ------------- Video 1

// console.log("hello")
// alert("heyy dude!")

// -------------

// var num = Number(prompt("tell me a number"))
// console.log(num)

// -------------

// var me = "amazing"
//
// var you = 26
//
// var a = true
//
// var b =[true, 27 , "great"]
//
// var e = "I am"

// -------------

// var c = me + you + a
// document.write(c)

// -------------

// var d = Number(prompt("how old are you"))
//
// if ( d > 21) {
//   alert("you are good to go!!")
// }
//
// else {
//   alert("stay at home dude")
// }

// -------------

// for(var i=1; i<=20; i++)
// document.write(i)

// -------------

// function myFunction(x, y) {
//      document.write(x + " " + y)
// }
//
// myFunction(e, me)

// ------------- Video 2

// var x = prompt("whats your name")
// // alert("Hello " + x + "!")
// document.write("Hello " + x + "!")

// ------------- Video 3

// var username = prompt("whats your name")
// if (username == "Alice" || username == "Bob") {
//   document.write("Hello " + username + "!")
// }
//
// else {
//   document.write("I dont like you !")
// }

// ------------- Video 4
// var content = "Hey you!"
// document.getElementById('message').innerHTML = content

// ------------- Video 5

// function getInfo() {
//   var username = document.getElementById('username').value
//   var password= document.getElementById('password').value
//   console.log("your username is" + username + "and your password is" + password)
// }

// ------------- Video 6

// var drinks = ["wine" , "beer" , "votka" , "RAKI:)"]
//
// for(i=0; i<drinks.length; i++) {
//     if ( drinks[i] == "RAKI:)" ) {
//       console.log("you know what you are doing with this " + drinks[i])
//     }
//     else if (drinks[i] = "beer" ){
//       console.log("i like this " + drinks[i])
//     }
// }

// ------------- Video 7

// var arr = [10 , 55 , 22 , 87 , 14]
// var biggest = 0
// for(i=0; i<arr.length; i++) {
//   if(biggest < arr[i]) {
//        biggest = arr[i]
//   }
// }
//
// console.log(biggest)


// ------------- Video 10

// var objPeople = [
//   {
//     username: "tugce",
//     password: "123"
//   },
//   {
//     username: "muto",
//     password: "456"
//   },
//   {
//     username: "alex",
//     password: "789"
//   }
// ]
//
// function getInfo() {
//    var username = document.getElementById('username').value
//    var password = document.getElementById('password').value
//    var isSuccess = false
//
//    for (i=0; i < objPeople.length; i++) {
//      if ( username == objPeople[i].username && password == objPeople[i].password) {
//         console.log(username + " is logged in!")
//         isSuccess= true
//         break
//      }
//      else {
//        isSuccess = false
//        console.log("incorrect username or password")
//      }
//
//    }
//       if (isSuccess) {
//         alert("you are logged in")
//       }
//       else {
//         alert("wrong password!")
//       }
// }

// --------------------------- week 9 ----------------
// ----- exs. 1
// for(var i = 0; i<=100; i=i+5) {
//   console.log(i)
// }
// ------- exs. 2
// var username = getElementById('username').value

// ----- exs 3
//
// var myObject = [
//   {
//     name:a,
//
//   },
//   {
//
//   },
//   {
//
//   },
//   {
//
//   }
// ]
//
// ------video 2------
//
// var newDiv = document.createElement('div')
// var addHere = document.getElementById('addHere')
// addHere.appendChild(newDiv)
//
// // ------video 3 ------
//
// var newH1 = document.createElement('h1')
// var textHere = document.createTextNode('helloooooo!!')
// newDiv.appendChild(textHere)
//
// // --------video 4------
//
// newDiv.className = "addedClass"
//
// // ------video 5------
//
// var newImg = document.createElement('img')
// newImg.setAttribute('src', 'https://media.nbcdfw.com/images/652*367/winechoctaw.jpg')
// addHere.appendChild(newImg)

// ------------video 6---------

// --------------week 12-------------

// function objects(a, b, c) {
//   this.a = a
//   this.b = b
//   this.c = c
// }
//
// var x = new objects('s', 't', 'h')
// var y= new objects('g', 'r', 'l')
// var z = new objects('1','2','3')
//
// console.log(x)

//   var x = Number(prompt('choose a number 1-10'))
//
//  function sum() {
//
//   var total = 1
//
//  for(var i=1; i<=x; i++) {
//     total = x + total
//   }
//     console.log(total)
//
//
// }

// var today = new Date()
// console.log(today.getHours())

// setTimeout(function() {
//   alert('hello')
// }, 3000
// )


// --------project week12--------

//  var x = Number(prompt('guess a number'))
//  var gameNumber = Math.floor((Math.random() * 100) + 1)
//
//  var guesses = 1
//  var tries = 10
//
//  while(x != gameNumber) {
//    console.log(gameNumber)
//    console.log(guesses)
//    if(guesses >= tries) {
//      console.log('sorry')
//      break
//    } else if(x > gameNumber) {
//      guesses++
//      x = prompt('its too large try again')
//    } else if(x < gameNumber) {
//      guesses++
//      x = prompt('its too small try again')
//
//    }
//  }
//
// if(guesses < tries) {
//   console.log('here you go !' + guesses)
// }

// -------------------week 13-------------------

// var num = Math.ceil((Math.random() * 20))
// console.log(num)

// var array=['a','b','c','d']
//
// var random = array[Math.floor(Math.random() * array.length)]
//
// console.log(random)

// document.getElementById('mybtn').addEventListener('click', displayDate)
//
// function displayDate() {
//   document.getElementById('vuhuu').innerHTML = Date()
// }

// var name = 'tugcebaydar'
// console.log(name.charAt(5))
//  // ------character at the 5.index

//  var name = "tugcebaydar"
//  console.log(name.indexOf('e'))
//
// // says what index 'e' has

// var name = 'tugcebaydar'
// var nameArray = name.split('')
// console.log(nameArray)
//
// // splits the name into an array

// var name = "jsbln; jls;sn;"
// console.log(name.trim())
//
// // clear the white spaces

// var name = 'tugcebaydar'
// console.log(name.replace('e','z'))
//
// // just replaces whatever you see above

// -------------------- week 14 ----------------



// ---------------- ajax , Json --------

// function books(data)  //API callback function
// {
//   console.log(data)
//
//  // document.getElementById('results').innerHTML = "<h1>" + books.items[i].volumeInfo.title + "<h1>"
//
//
// }
//
//
// // this is the function that gets the data
// function bookSearch() {
//   var search = document.getElementById('search').value
//   document.getElementById('results').innerHTML = ""
//   console.log(search)
//
//   var script=document.createElement('script');   // calls the function with the value of search button
//   script.type='text/javascript';
//   script.src="https://www.googleapis.com/books/v1/volumes?callback=books&q=" + search;
//
//   $("body").append(script);
//
//   $.ajax ({
//   dataType:"json",
//
//   success: function(books) {
//     for(i=0; i<data.items.length; i++) {
//       document.getElementById('results').innerHTMl += "<h2>" + books.items[i].volumeInfo.title + "</h2>"
//     }
//
//   },
//   type : 'GET'
// });
//
// console.log(data.items[i])
//
// }
//
// document.getElementById('button').addEventListener('click', bookSearch, false)

// --------------------- book search api ----------------
