// var anonymous = function (){
//     console.log("anonymous function")

// }

// anonymous()

// var anonymous1 = () => console.log("Anonymous function 1")
// anonymous1()

// setTimeout(() => console.log("Da qua 1s"), 1000)


// setInterval(() => {
//     console.log("1s")
// }, 1000);

var i = 1

var id = setInterval(() => {
    console.log("da qua 1s");
    i++
    if (i>=10){
        clearInterval(id)
    }
}, 1000);