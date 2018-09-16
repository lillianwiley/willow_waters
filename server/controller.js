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
            const { id } = user
            let quantity = await db.get_quantity([product_id, id])
            console.log(quantity)
            if (quantity[0]) {
                let newQuantity = ++quantity[0].quantity
                await db.update_quantity([newQuantity, product_id, id])
                let cart = await db.get_cart([id])
                console.log(cart)
                res.status(200).send(cart)

            } else {
                await req.app.get('db').add_to_cart([null, id, product_id, 1])
                let cart = await db.get_cart([id])
                res.status(200).send(cart)
            }

        } else {
            res.status(401).send('Please log in')
        }
        //console.log(product_id)

    },

    getCart: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        let cart = await db.get_cart([id])
        res.status(200).send(cart)
    },

    deleteCart: async function (req, res) {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {product_id} = req.params
        await db.delete_item_in_cart([id, product_id])
        let cart = await db.get_cart([id])
        res.status(200).send(cart)
    },

    changeCartQuantity: async function (req, res) {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {quantity, product_id} = req.params
        console.log(quantity,product_id)
        await db.update_quantity([quantity, product_id, id])
        let cart = await db.get_cart([id])
        res.status(200).send(cart)
    },

    deleteUserCart: async function (req, res) {
        const db = req.app.get('db')
        const {id} = req.session.user
        console.log(id)
        await db.delete_user_cart([id])
        let cart = await db.get_cart([id])
        res.status(200).send(cart)
        
    },

    getCartQuantity: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        db.get_all_cart_quantity([id])
        .then(quantity => {
            res.status(200).send(quantity)
        })
    }


}