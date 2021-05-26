 function totalPagar() {
   var Quantidade = parseInt (document.getElementById ("sQuant").value)

   valorFinal = Quantidade * 36
   document.getElementById ("sReal").value = valorFinal
 }
