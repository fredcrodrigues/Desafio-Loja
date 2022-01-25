import { useState, createContext, useEffect} from "react";


export const Cartcontext = createContext({})

    

export function  CartProvider({children}){

    
    const[cart, setCart] = useState([])

    function insertProduct(product){


        //criar proriedade quantidade
        product.quantify = 1

        // filtra o array para adicionar a quantidade
        cart.filter(x => x.id === product.id  ?  x.quantify =  product.quantify + 1 : null) 
       
        setCart([...cart,   product])   
    }
    
    function removeProduct(product){ 
        // remove produto de acordo com o id
        setCart(cart.filter( (x,i) => x.id != product.id))
    }
    
    function removeAll(){
        setCart([])
    }

    

    
    

    return(
        <Cartcontext.Provider value={{cart,  insertProduct,removeProduct, removeAll}}>
            {children}
        </Cartcontext.Provider>

    ) 
}
/*export const CartProvider =({children}) => {
    /*mudar a forma das funcções do projeto ... */
    /*mudar a forma das funcções do projeto ... 
    const[ cart, setCart] = useState([])

    function Insertcart(product){
        setCart([...cart, product])
        
    }
    
    return(
        <Cartcontext.Provider value={{cart,  Insertcart}}>
            {children}
        </Cartcontext.Provider>

    ) 
   
}*/