let lista1=[1,3,5,7,9]
let lista2=[2,4,6,8,0]

numeroMayora =lista1[0];

function compararLista (l1, l2, Mayor){
for(let i=0 ; i<lista1.length; i++)
if(l1[i] >Mayor ){
    Mayor=l1[i]
}

console.log(`# de la lista1 : ${Mayor}`)

for(let i=0 ; i<12; i++)
    if(l2[i] >Mayor ){
        Mayor=l2[i]
    }
    
    console.log(`# de la lista2 : ${Mayor}`)
return Mayor
}

