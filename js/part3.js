$().ready(function(){
    $('button').click(function(){
        var valor = $(this).text();

        function nfactor(num) {
            if (num === 0){
                return 1;
            }
            else {
                return num * nfactor( num - 1 );
            }
        }
    
        function sums(num) {
            num.split(",");
            var suma = 0;
            for(var a =0 ; a<num.length;a++){
                if(num[a]!=",")
                suma+=parseInt(num[a]);
            }
            return suma;
        }
    
        function prod(num) {
            num.split(",");
            var suma=1;
            for(var a =0 ; a<num.length;a++) {
                if (num[a] != ",")
                    suma *= parseInt(num[a]);
            }
            return suma;
        }

        if(valor=="="){
            resultados();
        }

        else if(valor=="x^y"){
            var input = $("#field").val();
            $("#field").val(input + "^");
        }

        else if(valor=="x2"){
            var input = $("#field").val();
            var potencia = Math.pow( input, 2 );
            $("#field").val(potencia);
        }

        else if(valor=="1/x"){
            var input = $("#field").val();
            var resultado = (1/ input);
            $("#field").val(resultado);
        }

        else if(valor=="√"){
            var input = $("#field").val();
            var resultado = Math.sqrt(input)
            $("#field").val(resultado);
        }

        else if(valor=="2^n"){
            var input = $("#field").val();
            var potencia = Math.pow(2, input);
            $("#field").val(potencia);
        }

        else if(valor=="parte entera"){
            var input = $("#field").val();
            if(input.indexOf(".")!=-1){
                input = input.split(".");
            }
            else{
                input = input.split(",");
            }
            input = input[0];
            $("#field").val(input);
        }

        else if(valor=="Sumatorio"){
            var input = $("#field").val()
            $("#field").val(sums(input));
        }

        else if(valor=="n!"){
            var input = $("#field").val();
            $("#field").val(nfactor(input));
        }

        else if(valor=="Producto") {
            var input = $("#field").val()
            $("#field").val(prod(input));
        }

        else{
            var input = $("#field").val();
            $("#field").val(input + valor);
        }
    });

    function resultados(){

        if($("#field").val().indexOf("^")!=-1){
            var numeros = $("#field").val();
            numeros = numeros.split("^");
            var numero1= parseInt(numeros[0]);
            var numero2 = parseInt(numeros[1]);
            var potencia = Math.pow( numero1, numero2 );
            $("#field").val(potencia);
        }
        else{
            var resultado = eval($("#field").val());
            $("#field").val(resultado);
        }
    }
});