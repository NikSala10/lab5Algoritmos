import styles from './shoppingCartItem.css'

export enum AttributeShoppingCart {
    "image" = "image",
    "titleproduct" = "titleproduct",
    "price" = "price",
  
}


class ShoppingCartItem extends HTMLElement {
    image?: string;
    titleproduct?: string;
    price?: number;
;

    static get observedAttributes() {
        return Object.values(AttributeShoppingCart);
    }
   
    attributeChangedCallback(propName: AttributeShoppingCart, oldValue: string | undefined, newValue: string | undefined){
        switch (propName) {
            case AttributeShoppingCart.price:
                this.price = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        
    }
}
        
        constructor(){
            super();
            this.attachShadow({mode: "open"})
        }

        connectedCallback(){
           this.render();
        }

        
        
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/shoppingCartItem/shoppingCartItem.css">
            <div class="product">
                <div class="image">
                    <img src="${this.image}" || 'No Image'}">
                </div>
                <div class="information">
                    <div class="details">
                        <h3>${this.titleproduct || 'No Title'}</h3>
                        <p class="price">$${this.price || 'No Price'}</p>
                    </div>
                </div>
            </div>       
                `
            }

            const cssProductShopping = this.ownerDocument.createElement("style");
            cssProductShopping.innerHTML = styles;
            this.shadowRoot?.appendChild(cssProductShopping);
        }
    }
customElements.define("shopping-card",ShoppingCartItem);
export default ShoppingCartItem;