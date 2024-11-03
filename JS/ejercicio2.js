let lista1=[1,3,5,7,9]
let lista2=[2,4,6,8,0]

let mayorLista1 = lista1[0]; 
let mayorLista2 = lista2[0];


//identificar el mayor de una lista
//encontrar la posicion de cada uno
//comprara cada posicion

//comparar los mayores

for(let i=0; i<lista1.length; i++)
{
    if(lista1[i] >mayorLista1)
        mayorLista1= lista1[i];
}




for (let i = 1; i < lista2.length; i++) {
    if (lista2[i] > mayorLista2) {
        mayorLista2 = lista2[i];
    }
}



let mayorGeneral;
if (mayorLista1 > mayorLista2) {
    mayorGeneral = mayorLista1;
} else {
    mayorGeneral = mayorLista2;
}

console.log(`el # mayor de ambas Listas es: ${mayorGeneral}`);



//otra manera

console.log("*****Otra maneraa****")
numeroMayor =lista1[0]

for(let i=0; i<lista1.length; i++){
    if(lista1[i]>numeroMayor ){
        numeroMayor=lista1[i];
    }
    console.log(`el # de lista 1: ${numeroMayor}`)
}
console.log(`el #1 es : ${numeroMayor}`)


for(let i=0; i<lista2.length; i++){
    if(lista2[i]>numeroMayor ){
        numeroMayor=lista2[i];

        console.log(`el # de lista 2: ${numeroMayor}`)
    }
    console.log(`el # de lista 2: ${numeroMayor}`)
}

console.log(`es ${numeroMayor}`)