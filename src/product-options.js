import utils from '@bigcommerce/stencil-utils';

/**
 * We extract swatch color information from product as Quick view does when clicking on Quick View button
 *
 * @export  {Class}  ProductOptions
 */
export default class ProductOptions {
    /**
     * Class Constructor
     * @param {number} productId Product Id
     */
    constructor(productId) {
        this.productId = productId;
    }

    /**
     * Render handlebars template and insert result in a specific locaion.
     * @param  {object} config
     * @return {underfined}
     */
    render(config) {
        utils.api.product.getById(this.productId, { template: config.template }, (err, response) => {
            if (config.element) {
                if (config.position) {
                    config.element.insertAdjacentHTML(config.position, response);
                } else {
                    config.element.innerHTML = response;
                }
            }
        });
    }
}
