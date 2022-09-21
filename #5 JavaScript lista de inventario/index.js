//creamos la lista inventario, donde se agregarán los items

let inventario=[]


//FUNCION ADD RECIBE COMO PARAMETRO EL ITEM A AGREGAR
const add = (input) =>{
    //evaluamos si el item se encuentra agregado
    if(!input.length >= 1){
        console.log('se debe especificar un elemento');
        return
    }

    if(inventario.length == 10 ){
        console.log('el inventario alcanzó el limite de 10 items')
        return 
    }
    if(!inventario.find(item => item === input)){
        console.log(`se añadió ${input}`);
        inventario.push(input)
    }
}

//FUNCION REMOVE, RECIBE COMO PARAMETRO EL ITEM A ELIMINAR

const remove = (input) =>{
    if(!input.length >= 1){
        console.log('se debe especificar un elemento');
        return
    }
    inventario =  inventario.filter(item => item !== input)
    //FILTRA Y MANTIENE LOS ELEMENTOS DEL ARRAY DIFERENTES AL QUE SE DESEA ELIMINAR 
}

// RETORNA EL ARRAY
const getList = () => (console.log(inventario))


// CASO DE PRUEBA 0 

add('camisa')
add('pantalon')
getList()
remove('camisa')
getList()








