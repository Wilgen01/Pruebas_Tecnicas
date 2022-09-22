//ARRAY A EVALUAR
const numeros = [1, 1, 2, 2, 2, 3]
const numeros2 = [1, 3, 1, 4, 5, 6, 3, 2]
const numeros3 = [1,1,2,2,3,3,4,4,5,5,6,6,7,8,9,10,11,11]



//FUNCION CUENTA NUMEROS REPETIDOS RECIBE COMO PARAMETRO UN ARRAY
const countDuplicate = (matriz) =>{
    //SE DEFINE UN ARRAY CON LOS NUMEROS UNICOS Y UNO CON NUMEROS DUPLICADOS
    let numerosUnicos = []
    let numerosRepetidos = []

    for (let i = 0; i < matriz.length; i++) {
        //EVALUA SI UN NUMERO ESTA REPETIDO
        if (numerosUnicos.includes(matriz[i])) {
            //EVALÚA SI EL NUMERO REPETIDO YA SE ENCUENTRA EN EL ARRAY, DE SER ASÍ NO LO INCLUYE
            if (!numerosRepetidos.includes(matriz[i])) {
                numerosRepetidos.push(matriz[i])   
            }
        }else{
            //GUARDA LOS NUMEROS UNICOS PARA PODER EVALUAR LOS ITEMS SIGUIENTES
            numerosUnicos.push(matriz[i])
        }
        
    }
    return numerosRepetidos.length 
}


console.log(countDuplicate(numeros));
console.log(countDuplicate(numeros2));
console.log(countDuplicate(numeros3));

