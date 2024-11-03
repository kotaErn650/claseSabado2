/**
 * 3 vectores
 * v1 v2 v3
 * 
 * tiene 3 string 
 * 
 * si la variable Spiderman esta en peligro debe lanzar el mensaje
 * comodecia el tio BEn(ten cuidado con el duende verde)
 * 
 * si no est en peligro Escribir (Un gran poder requiere la responsabilidad)
 * 
 * 
 * 
 */

const v1 = "tio_Ben";

const v2 = "recuerda";

const v3 = " 1 Gran Power Requiere 1 gran Responsabilidad";

const v4 = "ten cuidado con el Duende Verde ";



let peligro=true ;
const spiderman = (valor1, valor2,valor3, valor4, peligro)=>{
    if(peligro==true){
        console.log(`el tio ${v1} decia${v2} ${v3}`)
        
    }
    else
        return(console.log(`el tio ${v1} decia${v2} ${v3} `))
    
    return spiderman;

}

console.log(spiderman)
