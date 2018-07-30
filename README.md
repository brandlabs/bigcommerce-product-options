# BigCommerce Product Options

Easily render product data with a custom Handlebars template externally from the product page.  Most commonly used to render the available product options on category page.

## Getting Started

### Prerequisites

Nodejs v8+ (we assume you have installed something like nvm for changing Node versions).

## API

### `new ProductOptions(productId)`

#### `productId`

Type: `number`

BigCommerce product identifier to use.

### `ProductOptions.render(config)`

Renders the template using product data and inserts the HTML directly into the DOM using the `config` Object supplied to indicate both the `template` and the `element` to insert content at.  An optional `position`

#### `config`

Type: `Object`

A set of key/value pairs that configure that provides configuration for both insertion point (where on the DOM the HTML will be added) and for path to the template file.

  - `template` (required): Type: `string`

  Path to the handlebars template to render.

  - `element` (required): Type: `Object`

  Selected HTML element that is the insertion point of the rendered template.

  - `position` (optional): Type: `string`, either `beforebegin`, `afterbegin`, `beforeend`, `afterend`)

  If not specified, the rendered template will be placed as the inner HTML of the `element`.

  Where to insert the rendered template specifically, with respect to `element`.

## Example

```javascript
import PageManager from './page-manager';
import ProductOptions from 'bigcommerce-product-options';

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

## Notes
- Since BigCommerce doesn't transpile external package code (for oldies like IE11), we provide transpiled files inside __dist/__ folder. You can access these files adding an alias on your `webpack.conf.js` file like `'brandlabs-bigcommerce-product-options': path.resolve(__dirname, 'node_modules/brandlabs-bigcommerce-product-options/dist/product-options.min.js')`

## Authors
* Carson Reinke
* Osama Aldemeery
* Hector Fernando Hurtado

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[![alt text](/brandlabs.png)](http://www.brandlabs.us/?utm_source=gitlab&utm_medium=technology_referral&utm_campaign=brandlabs-bigcommerce-product-options)
