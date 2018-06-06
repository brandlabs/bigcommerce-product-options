
# BigCommerce Product Options

Provides a way to render a handlebars template that is provided with a product's data.

### Installing

`npm install git+ssh://git@gitlab.brandlabs.net:brandlabs/bigcommerce-category-product-options.git#develop`

### Methods

### `render(config)`:
`config`:
***Type*: object.**
A set of key/value pairs that configure that provides configuration for both insertion point (where on the DOM the HTML will be added) and for path to the template file

  - `template`*(required)*:
  ***Type*: String**
  Path to the handlebars template to render.
      
 - `element` *(required)*
  ***Type:* Object**
  Selected HTML element that is the insertion point of the rendered template. 
  
 - `position` *(Optional | Possible values: `beforebegin`, `afterbegin`, `beforeend`, `afterend`)*
  <small>If not specified, the rendered template will be placed as the inner HTML of the `element`</small>
  ***Type*: String**
  Where to insert the rendered template specifically, with respect to `element`.
  
### Example

```javascript
    import PageManager from './page-manager';
    import ProductOptions from 'bigcommerce-category-product-options';

    export default class Category extends PageManager {
        before(next) {
            this.showSwatches();
            next();
        }

        showSwatches() {
            const products = Array.from(document.querySelectorAll('[data-has-options]'));
            
            if (products.length !== 0) {
                products.forEach(product => {
                    let productId = product.getAttribute('data-has-options');
                    new ProductOptions(productId).render({
                        template: 'custom/options/color-swatches',
                        element: product, // insertion point
                        position: 'beforeend' // where to insert in the insertion point (optional).
                    });
                });
            }
        }
    }
```

## Authors
* Carson Reinke
* Osama Aldemeery

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details