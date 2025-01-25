
    let result = document.getElementById('result')
    let num1;
    let num2;
    let opr;
    
    let ans;
    function addNumber(num){
        result.innerHTML += num
        console.log(num)
    }

    function del(){
        result.innerHTML = ""
        opr = ""
        num1 = ""
        num2 = ""

    }

    function delOne() {
        result.innerHTML = result.innerHTML.slice(0, -1)
        
    }

    function operator (op){
        num1 = result.innerHTML
        console.log(num1)
        opr = op
        result.innerHTML = ""
        console.log(opr)

    }


    function equal(){
        num2 = result.innerHTML
        if (opr == "+"){
            ans = Number(num1) + Number(num2)
            console.log(ans)
            result.innerHTML = ans
            num1 = ""
            num2 = ""

            
        }
        else if (opr == "-") {
            ans = Number(num1) - Number(num2)
            console.log(ans)
            result.innerHTML = ans

             num1 = ""
            num2 = ""
            
        }
        else if (opr == "x") {
            ans = Number(num1) * Number(num2)
            console.log(ans)
            result.innerHTML = ans

             num1 = ""
            num2 = ""
            
        }
        else if (opr == "/") {
            ans = Number(num1) / Number(num2)
            console.log(ans)
            result.innerHTML = ans
             num1 = ""
            num2 = ""
            
        }
    }
