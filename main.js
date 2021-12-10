let contenitore = document.getElementById('container')


for (let index = 0; index <= 100; index++) { //ciclo for di numeri da 1 a 100
    
    let div = document.createElement("div")
    div.className = "box"
    //console.log(index)
    
    if (index % 3 == 0 && index % 5 == 0){  //controllo divisibilità per 3 e per 5

        div.append("FizzBuzz")
        contenitore.append(div);
        //console.log("FizzBuzz");
        
    }else if (index % 5 == 0){  //controllo divisibilità per 5

        div.append("Buzz")
        contenitore.append(div);
        
        //console.log("Buzz")

    }else if (index % 3 == 0){ //controllo divisibilità per 3

        div.append("Fizz")
        contenitore.append(div);
        
       // console.log("Fizz")

    }else{

        div.append(index)
        contenitore.append(div);
        
        //console.log(index);
    }
}