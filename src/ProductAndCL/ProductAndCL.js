import { getStoredCart } from "../utilities/fakedb"

export const ProductAndCL = async () =>{
    const productData = await fetch('products.json');
    const products = await productData.json()


    const saveCart = getStoredCart()
    const previousCart = [];    
    for(const id in saveCart){
        const addProduct = products.find(product => product.id === id);
        if(addProduct){
            const quantity = saveCart[id];
            addProduct.quantity = quantity;
            previousCart.push(addProduct)            
        }
    }

    return {products, previousCart}
 }

