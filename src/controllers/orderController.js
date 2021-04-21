const db = require('../database/models/index');

module.exports = {

    create: async (req, res) => {
        let products = await db.Product.findAll();
        let flavors = await db.Flavor.findAll();

        let elements = [];
        for (let i = 0; i < flavors.length; i++) {
            const elements = flavors[i].flacorCategoryId = 1;
            
        }

        console.log(elements);

        res.render('pages/store/stores', { products, flavors });
    },

    store: async (req, res) => {
        try {
            // 1.- create order
            let order = await db.Order.create({
                userId: res.session.Id,
                totalPrice: req.body.totalPrice,
                status: req.body.status
            });

            // 2.- Create orderItems
            let orderItems = req.body.orderItems;
            for (let i = 0; i < orderItems.length; i++) {

                let orderItem = await db.OrderItem.create({
                    orderId: order.id,
                    productId: orderItems[i].productId,
                    price: orderItems[i].price,
                });

                // 3.- Insert on pivot table
                let flavors = orderItems[i].flavors;
                for (let x = 0; x < flavors.length; x++) {

                    let flavor = await db.Flavor.find(flavors[x].id);
                    await orderItem.addFlavor(flavor);
                    
                }
                
            }
            res.render('pages/store/cart', { order });
        } catch (error) {
            res.render('pages/store', { error })
        }
        
    },

    show: async (req, res) => {
        let order = await db.Order.findOne({
            where: {
                id: req.body.id
            }
        });
        let orderItems = await db.OrderItem.findAll({
            where: {
                orderId: order.id
            }
        },{ include: 'Flavor' });
        order.orderItems = orderItems;
        res.render('pages/store/cart', { order });
    },

    edit: async (req, res) => {
        await db.Order.findOnd({
            where: {
                id: req.params.id
            }
        }).then(async (order) => {
            let orderItems = await db.OrderItem.findAll({
                where: {
                    orderId: order.id
                }
            },{ include: 'Flavor' });
            order.orderItems = orderItems;
            res.render('pages/store/order/edit', { order });
        }).catch((error) => {
            res.render('pages/store/cart', { error });
        });
    },

    update: async (req, res) => {

    }

}