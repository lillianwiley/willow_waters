module.exports = {
    getAllProducts: async (req, res) => {
        let allProducts = await req.app.get('db').all_products_categories();
        res.status(200).send(allProducts);
    },

    getAllFromCategory: async (req, res) => {
        const { c_id } = req.params
        let category = await req.app.get('db').get_all_from_category([c_id]);
        res.status(200).send(category)
    },

    addToCart: async (req, res) => {
        const { product_id } = req.params
        const { user } = req.session
        const db = req.app.get('db')
        if (user) {
            const { user_id } = user
            let quantity = await db.get_quantity([product_id, user_id])

            if (quantity[0]) {
                let newQuantity = ++quantity[0]
                let cart = await db.increase_quantity([quantity])
            } else {
                let cart = await req.app.get('db').add_to_cart([null, user_id, product_id, 1]);
            }

        } else {
            res.status(401).send('Please log in')
        }
        //console.log(product_id)

    }
}