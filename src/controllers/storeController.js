const db = require('../database/models/index');

module.exports = {

  storeForm: async (req, res) => {

    // // Check if exist order in session
    // let theOrder = {};
    // if(typeof req.session.order != undefined){
    //   let OrderNumber = req.session.order;
    //   theOrder = await db.OrderItem.findOne({
    //     where: {
    //       orderId: OrderNumber
    //     }
    //   },{
    //     include: ['Order', 'Product', 'flavors']
    //   })
    //   console.log(theOrder);
    // }


    // Get product
    let products = await db.Product.findAll();

    // Get flavors
    let flavors = await db.Flavor.findAll({
      where: {
        status: true
      }
    },{
      attributes: ['id', 'name', 'flavorCategoryId']
    });

    // Get flavor categories
    let categories = await db.FlavorCategory.findAll({
      where: {
        status: true
      }
    },{
      attributes: ['id', 'name']
    });

    res.render('pages/store/store', { products, categories, flavors });
  },

  storeCreate: async (req, res) => {
    // Get customer authenticated
    let user = res.locals.userAuthenticated;

    // Get product selected by customer
    let productId = parseInt(req.body.product);
    let product = await db.Product.findOne({ where: { id: productId } });

    // Get flavors selected by customer ['1','2','3'] --> whereIn
    let flavors = await db.Flavor.findAll({ where: { id: req.body.flavorSelected } });

      try {
        // 1.- create order
        let order = await db.Order.create({
            userId: user.id,
            totalPrice: product.price,
            status: 'Por Pagar'
        });

        // 2.- Create orderItem
        let orderItem = await db.OrderItem.create({
            orderId: order.id,
            productId: product.id,
            price: product.price,
        });

        // 3.- Insert on pivot table
        for (let x = 0; x < flavors.length; x++) {
            let flavor = await db.Flavor.findOne({
              where: {
                id: flavors[x].id
              }
            });
            await orderItem.addFlavor(flavor);
        }

        order.user = user;
        order.items = orderItem;
        order.flavors = flavors;
        
        res.render('pages/store/cart', { order });

      } catch (error) {
        console.log(error);
        res.render('pages/store/store', { error });
      }
   

  },
  
  cart: function(req, res){
    res.render('pages/store/cart');
  },
  

    
}