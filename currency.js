function convert(){
    var currency = document.getElementById("currency").value;
    var amount = document.getElementById("amount").value;


        if (isNaN(amount)){
        document.getElementById("demo").innerHTML = "invalid amount entered! Make sure it is a number";
        }
        else{
                if (currency == "dollar"){
                var output = amount * 365;
                document.getElementById("demo").innerHTML = output;
                }
                else if (currency == "euros"){
                    var output = amount * 405;
                    document.getElementById("demo").innerHTML = output;
                }
                else if (currency == "pounds"){
                    var output = amount * 470;
                    document.getElementById("demo").innerHTML = output;
                }
                else if (currency == "yuan"){
                    var output = amount * 52;
                    document.getElementById("demo").innerHTML = output;
                }
                else if (currency == "rupees"){
                    var output = amount * 5;
                    document.getElementById("demo").innerHTML = output;
                }
                else{
                    var output = amount * 3873780;
                    document.getElementById("demo").innerHTML = output;
                }
               
            }
        }