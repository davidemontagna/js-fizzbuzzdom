

for (let index = 0; index <= 100; index++) { //ciclo for di numeri da 1 a 100
    
    //console.log(index)
    
    if (index % 3 == 0 && index % 5 == 0){  //controllo divisibilità per 3 e per 5

        console.log("FizzBuzz");
        
    }else if (index % 5 == 0){  //controllo divisibilità per 5

        console.log("Buzz")

    }else if (index % 3 == 0){ //controllo divisibilità per 3

        console.log("Fizz")

    }else{
        console.log(index);
    }
}