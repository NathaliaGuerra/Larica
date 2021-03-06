const express = require("express");
const router = express.Router();


// App Require files
const homeRouter = require('./homeRoutes');
const loginRouter = require('./loginRoutes');
const logoutRouter = require('./logoutRoutes');
const productsRouter = require('./productRoutes');
const contactRouter = require('./contactRoutes');
const storeRouter = require('./storeRoutes');
const usRouter = require('./usRoutes');
const userRouter = require('./userRoutes');
const orderRouter = require('./orderRoutes');

// App Admin Routes Require files
const userAdminRouter = require('./admin/userAdminRoutes');
const productsAdminRouter = require('./admin/productAdminRoutes');
const flavorCategoryAdminRouter = require('./admin/flavorCategoryAdminRoutes');
const flavorAdminRouter = require('./admin/flavorAdminRoutes');

// API Require files
const userApiRouter = require('./api/userApiRoutes');
const productApiRouter = require('./api/productApiRoutes');
const flavorApiRouter = require('./api/flavorApiRoutes');
const flavorCategoryApiRouter = require('./api/flavorCategoryApiRoutes');

// <<<<----- <> ----->>>>>

// App routes
router.use('/', homeRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/products', productsRouter);      
router.use('/contact-us', contactRouter);
router.use('/store', storeRouter);
router.use('/us', usRouter);   
router.use('/users', userRouter);
router.use('/details',productsRouter);
router.use('/orders', orderRouter);

// App Admin Routes
router.use('/admin/users',userAdminRouter);
router.use('/admin/products', productsAdminRouter);
router.use('/admin/flavorCategories', flavorCategoryAdminRouter); 
router.use('/admin/flavors', flavorAdminRouter);  

// API routes
router.use('/api/users', userApiRouter);
router.use('/api/products', productApiRouter);
router.use('/api/flavors', flavorApiRouter);
router.use('/api/flavorCategories', flavorCategoryApiRouter);

module.exports = router;