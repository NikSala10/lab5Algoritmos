import * as components from './components/indexPadre'
import Product, { Attribute } from './components/product/product';
import { getProducts } from './services/getProducts';
import ShoppingCartItem, {AttributeShoppingCart} from './components/shoppingCartItem/shoppingCartItem'
import './components/shoppingCartItem/shoppingCartItem'
class AppContainer extends HTMLElement {
    products: Product[] = [];
    shoppingCart: ShoppingCartItem[] = [];
    dataProducts: any[] = [];
        constructor()  {
            super();
            this.attachShadow( {mode: 'open'});

           
        }
    
        async connectedCallback() {
            this.dataProducts = await getProducts();

            this. createCardsProduct();
            this.createCardsShoppingItem();
            this.render();
            
        }

        createCardsProduct ()  {
            this.dataProducts.forEach(productData => {
                const product = this.ownerDocument.createElement('product-card') as Product;
                product.setAttribute(Attribute.image, productData.image);
                product.setAttribute(Attribute.titleproduct, productData.title);
                product.setAttribute(Attribute.description, productData.description);
                product.setAttribute(Attribute.category, productData.category);
                product.setAttribute(Attribute.price, productData.price);
                product.setAttribute(Attribute.rating, productData.rating.rate); 
                
                this.products.push(product);
             
                });

                
        }
        createCardsShoppingItem ()  {
            this.dataProducts.forEach(productData => {
                const product = this.ownerDocument.createElement('shopping-card') as ShoppingCartItem; 
                product.setAttribute(AttributeShoppingCart.image, productData.image);
                product.setAttribute(AttributeShoppingCart.titleproduct, productData.title);
                product.setAttribute(AttributeShoppingCart.price, productData.price);
                
                this.shoppingCart.push(product);
        
               
            });
        }
        render()  {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                 <link rel="stylesheet" href="../src/index.css">
                <h1>Store Products</h1>
                <hr>
                <div class="container-products"></div>
                <h1>Added to cart</h1>
                <hr>
                <div class="container-shopping"></div>
                `;

                const container = this.shadowRoot?.querySelector('.container-products');
                this.products.forEach((product) => {
                    container?.appendChild(product);
                });

                const containerShoppingCartItem = this.shadowRoot?.querySelector('.container-shopping');
                this.shoppingCart.forEach((productShopping) => {
                    containerShoppingCartItem?.appendChild(productShopping);
                });
            };
            
        }
    
    }
    
customElements.define('app-container',AppContainer);