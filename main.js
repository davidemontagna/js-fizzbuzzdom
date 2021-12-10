let contenitore = document.getElementById('container')

for (let index = 0; index <= 100; index++) { //ciclo for di numeri da 1 a 100
    
    //console.log(index)
    
    if (index % 3 == 0 && index % 5 == 0){  //controllo divisibilità per 3 e per 5

        contenitore.innerHTML += '<div class="box">' + 'FizzBuzz' + '</div>';
        //console.log("FizzBuzz");
        
    }else if (index % 5 == 0){  //controllo divisibilità per 5

        contenitore.innerHTML += '<div class="box">' + 'Buzz' + '</div>';
        //console.log("Buzz")

    }else if (index % 3 == 0){ //controllo divisibilità per 3

        contenitore.innerHTML += '<div class="box">' + 'Fizz' + '</div>';
       // console.log("Fizz")

    }else{
        contenitore.innerHTML += '<div class="box">' + index + '</div>';
        //console.log(index);
    }
}