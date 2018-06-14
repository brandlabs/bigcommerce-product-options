/**
 * We extract swatch color information from product as Quick view does when clicking on Quick View button
 * We use old fashioned AJAX request since using BigCommerce stencil-cli helpers added 16000+ lines of code when transpiling
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
        const request = new XMLHttpRequest();
        const endpoint = `/products.php?productId=${this.productId}`;

        request.open('GET', endpoint);
        request.withCredentials = true;

        request.setRequestHeader('stencil-config', '{}');
        request.setRequestHeader('stencil-options', JSON.stringify({ render_with: config.template }));

        request.addEventListener('load', event => {
            if (event.target.response) {
                const response = event.target.response;

                if (config.element) {
                    if (config.position) {
                        config.element.insertAdjacentHTML(config.position, response);
                    } else {
                        config.element.innerHTML = response;
                    }
                }
            }
        });

        request.send();
    }
}
