
// numero=prompt("dame un numero");
// numero=parseInt(numero);
// alert( 5 + numero );
let codigo=`<div>
  <h2> se puede mostrar con tilde fuerte </h2>
  <p> si se puede joder </p>

</div>`;
document.write(codigo);



let dineroCofla=prompt("cuanto dinero tines Cofla?");
   dineroCofla=parseInt(dineroCofla)
 let dineroRoberto=prompt("cuanto dinero tienes Roberto");
 let dineroPedro=prompt("cuanto dinero tienes Pedro?") ;

if (dineroCofla>=0.6 & dineroCofla<1){
    alert(" Cofla Comprate el helado de agua");
}    else if (dineroCofla>=1 & dineroCofla < 1.6){
alert(" Cofla comprate el helado de crema");
alert("Cofla te sobra " + (dineroCofla -0.6));
}                                                                                                                                                                  
    else if (dineroCofla >= 1.6 & dineroCofla<1.7){
        alert(" Cofla comprate el helado heladix");
        alert("Cofla te sobra " + (dineroCofla -1.6));
    }
    else if (dineroCofla >=1.7 & dineroCofla < 1.8){
alert("Cofla comprate el helado heladovich");
alert("Cofla te sobra " + (dineroCofla -1.7));
    }
    else if (dineroCofla>= 1.8 & dineroCofla <2.9){
        alert("Cofla comprate el helado de helardo");
        alert("Cofla te sobra " + (dineroCofla -1.8));
    }
    else if (dineroCofla>= 2.9 & dineroCofla < 5){
        alert("Cofla comprate el helado de confites o el pote de 1/4 kg ");
        alert("Cofla te sobra " + (dineroCofla -2.9));
    }
    else {
 alert(" lo siento pobre de mrd no te alcanza para ningun helado");
    }

    // function cuadrado(n){
        // return n * n
    // }
//    let  numero=cuadrado(5)
    //   alert( numero)
    if (dineroRoberto>=0.6 & dineroRoberto<1){
        alert("Roberto Comprate el helado de agua");
    }    else if (dineroRoberto>=1 & dineroRoberto < 1.6){
    alert(" Roberto comprate el helado de crema");
    }                                                                                                                                                                  
        else if (dineroRoberto >= 1.6 & dineroRoberto<1.7){
            alert("Roberto comprate el helado heladix");
        }
        else if (dineroRoberto >=1.7 & dineroRoberto < 1.8){
    alert("Roberto comprate el helado heladovich");
        }
        else if (dineroRoberto >= 1.8 & dineroRoberto <2.9){
            alert("Roberto comprate el helado de helardo");
        }
        else if (dineroRoberto>= 2.9 & dineroRoberto < 5){
            alert("Roberto comprate el helado de confites o el pote de 1/4 kg ");
        }
        else {
     alert(" lo siento pobre de mrd no te alcanza para ningun helado");
        }


        if (dineroPedro>=0.6 & dineroPedro<1){
            alert("Pedro Comprate el helado de agua");
        }    else if (dineroPedro>=1 & dineroPedro < 1.6){
        alert("Pedro comprate el helado de crema");
        }                                                                                                                                                                  
            else if (dineroPedro >= 1.6 & dineroPedro <1.7){
                alert("Pedro comprate el helado heladix");
            }
            else if (dineroPedro >=1.7 & dineroPedro < 1.8){
        alert("Pedro comprate el helado heladovich");
            }
            else if (dineroPedro>= 1.8 & dineroPedro <2.9){
                alert("Pedro comprate el helado de helardo");
            }
            else if (dineroPedro>= 2.9 & dineroPedro < 5){
                alert("Pedro comprate el helado de confites o el pote de 1/4 kg ");
            }
            else {
         alert(" lo siento pobre de mrd no te alcanza para ningun helado");
            }
        