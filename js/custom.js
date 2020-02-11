// console.log("Staring div generator")
// for (let i=1; i <= 100; i++)
// {let newDiv = document.createElement("div")
// let newPar = document.createElement("p");
// newDiv.appendChild(newPar);
//         main.appendChild(newDiv).setAttribute("id", "div_" + i); 



//     if (i % 15 == 0)
//         return("FizzBuzz");
       
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }
// Generates into console

for (let i = 1; i <=100; i++){

    
var counter = 1;  //doesnt work          //generates 100 divs with different id
$("#generate-div").click(function(){
    let $newDiv = $(("<div>dddd</div>"));
    
    $newDiv.attr("id", "newDiv" + counter++);
    $(".main").append($newDiv);
}); 

}  
// for (let i = 1; i <=100; i++){
// if (i % 15 == 0)
// $(".main").append("<span class='fizzbuzz'>FizzBuzz</span>");
       
//     else if (i % 3 == 0)
//     $(".main").append("<span class='fizz'>Fizz</span>");
//     else if (i % 5 == 0)
//     $(".main").append("<span class='buzz'>Buzz</span>");
//     else
//     $(".main").append("<span>" + i + "</span>");
// }