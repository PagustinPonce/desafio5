class ProductManagerFS {
    constructor() {
        this.products = productsModel
    }

    async  addProductToCart(cid, pid) {
        const cart = await cartModel.findByID({_id: cid})
        const index = cart.products.findIndex(product => pid === product.product) 
        if(index === -1) 
        cart.products[index].quantity ++
    
        this.products.create(product);
    }

    async getProducts() {
        return await this.productsModel.find()
    }
}