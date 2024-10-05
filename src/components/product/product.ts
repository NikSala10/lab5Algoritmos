import styles from './product.css'

export enum Attribute {
    "image" = "image",
    "titleproduct" = "titleproduct",
    "description" = "description",
    "category" = "category" ,
    "price" = "price",
    "rating" = "rating" ,
}


class Product extends HTMLElement {
    image?: string;
    titleproduct?: string;
    description?: string;
    category?: string;
    price?: number;
    rating?: number;

    static get observedAttributes() {
        return Object.values(Attribute);
    }
   
    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined){
        switch (propName) {
            case Attribute.price:
                this.price = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.rating:
                this.rating = newValue ? Number(newValue) : undefined;
                break;
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
            <link rel="stylesheet" href="../src/components/product/product.css">
            <div class="product">
                <div class="image">
                    <img src="${this.image}" || 'No Image'}">
                </div>
                <div class="information">
                    <div class="details">
                        <h3>${this.titleproduct || 'No Title'}</h3>
                        <div class="description">
                            <p >${this.description || 'No Description'}</p>
                        </div>
                        <p class="category">Category: ${this.category || 'No Category'}</p>
                        <p class="rating">Rating: ${this.rating || 'No  Rating'}</p>
                        <p class="price">$${this.price || 'No Price'}</p>
                        
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-9.8-3.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2H1v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2"/></svg>
                        </button>
                    </div>
                </div>
            </div>       
                `
            }

            const cssProduct = this.ownerDocument.createElement("style");
            cssProduct.innerHTML = styles;
            this.shadowRoot?.appendChild(cssProduct);
        }
    }
customElements.define("product-card",Product);
export default Product;