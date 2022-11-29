
/////////////////////////////////////////////////////////////////////////////
////////////////////////COTIZADOR SEGUROS////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// PREGUNTAR QUE TIPO DE VEHICULO QUEREMOS COTIZAR

let tipoVehiculo = prompt ("¿Que tipo de vehiculo desea cotizar? Responder: A si es un auto o B si es una moto");
tipoVehiculo = tipoVehiculo.toLowerCase()

const validacion = (tipoVehiculo) => {
    if (tipoVehiculo === "a"){
        alert ("Comenzaremos la cotizacion de su Auto")
    } else if (tipoVehiculo === "b") {
        alert ("Comenzaremos la cotizacion de su Moto")
    }else {
        alert ("tipo de vehiculo incorrecto")
    }
}

validacion(tipoVehiculo)

//ASIGNAR UN VALOR DE POLIZA SEGUN MODELO Y TIPO DE VEHICULO 

let valorVehiculo=0;
let modelo= prompt("Ingrese el modelo de fabricacion de su vehiculo")

const valorModelo = (tipoVehiculo,modelo) =>{
    if (tipoVehiculo== "a" && modelo <=2005){
        valorVehiculo = 1950000
        return alert (`El valor de tu vehiculo es ${valorVehiculo}`)
    } else if (tipoVehiculo=="a" && modelo>2005 && modelo <=2015){
        valorVehiculo = 2500000
        return alert (`El valor de tu vehiculo es ${valorVehiculo}`)
    }else if (tipoVehiculo=="a" && modelo >=2016 && modelo <=2018){
        valorVehiculo= 3000000
        return alert (`El valor de tu vehiculo es ${valorVehiculo}`)
    }else if (tipoVehiculo== "a" && modelo > 2018){
        valorVehiculo= 4000000
        return alert (`El valor de tu vehiculo es ${valorVehiculo}`)
    }else if (tipoVehiculo== "b" && modelo <= 2005){
        valorVehiculo = 190000
        return alert (`El valor de tu Motovehiculo es ${valorVehiculo}`)
    }else if (tipoVehiculo== "b" && modelo >2005 & modelo <=2015){
        valorVehiculo= 250000
        return alert (`El valor de tu Motovehiculo es ${valorVehiculo}`)
    }else if (tipoVehiculo=="b" && modelo>2015 && modelo <=2018){
        valorVehiculo= 300000
        return alert (`El valor de tu Motovehiculo es ${valorVehiculo}`)
    }else if(tipoVehiculo=="b" && modelo > 2018){
        valorVehiculo=400000
        return alert (`El valor de tu Motovehiculo es ${valorVehiculo}`)
    }

}
valorModelo(tipoVehiculo,modelo)

// VERIFICAR SI NUESTRO VEHICULO TIENE GNC 

let gnc=false;
const tieneGas = (tipoVehiculo) =>{
    if (tipoVehiculo === "a"){
        gnc= confirm("Su Vehiculo tiene Gnc? Seleccionar ACEPTAR si tiene GNC o CANCELAR si no tiene.")
    }
    console.log(gnc)
}
tieneGas(tipoVehiculo)


//SI EL VEHICULO TIENE GNC, LE AUMENTAMOS SU VALOR UN 5% 

let nuevoValor= 0;
const aumentoGas =(tipoVehiculo,gnc) =>{    
    if (tipoVehiculo == "a" && gnc ==true){
      nuevoValor = valorVehiculo + (valorVehiculo * 5)/100
      return alert(`Al poseer equipo de gnc, se le ha aplicado a su poliza un aumento del 5%, pasando de valer ${valorVehiculo} a ser su nuevo valor ${nuevoValor} `)
    }       
}
aumentoGas(tipoVehiculo,gnc)

// SEGUN SU VALOR FINAL, DEFINIMOS LAS CUOTAS Y UN AUMENTO CADA 4 MESES 

const mostrarCuotas = (valorVehiculo) =>{
    if (gnc==true){
        valorVehiculo = nuevoValor;
    }
    let concatCuotas=""
    valorVehiculo= ((valorVehiculo /30)/6)
    for (let i=1; i<=12;i++){
        if(i==5){
            valorVehiculo= valorVehiculo + (valorVehiculo*10)/100
        }
        else if (i==9){
            valorVehiculo= valorVehiculo + (valorVehiculo*10)/100
        }
       concatCuotas= concatCuotas + "La cuota numero " + i +` es de $${Math.round(valorVehiculo)}\n`
    }
  
    return alert(`Tu poliza recibira un aumento del 10% cada cuatro meses. El valor final de las cuotas en la cotizacion de tu vehiculo por un año es de:\n${concatCuotas}`)
}
mostrarCuotas(valorVehiculo)
