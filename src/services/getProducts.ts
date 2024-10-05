export const getProducts = async () => {
    try {
        const allProducts = await fetch('https://fakestoreapi.com/products').then(res => res.json());
        return allProducts;
    
        
    } catch (error) {
        console.error(error);
    }
}