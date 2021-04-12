const express = require("express");
const router = express.Router();

const homeRouter = require('./homeRoutes');
const loginRouter = require('./loginRoutes');
const registerRouter = require('./registerRoutes');
const productsRouter = require('./productRoutes');
const contactRouter = require('./contactRoutes');
const storeRouter = require('./storeRoutes');
const usRouter = require('./usRoutes');
const userRouter = require('./userRoutes');


router.use('/', homeRouter);
router.use('/login', loginRouter);
router.use('/register', registerRouter); 
router.use('/products', productsRouter);      
router.use('/contact-us', contactRouter);
router.use('/store', storeRouter);
router.use('/us', usRouter);   
router.use('/details',productsRouter);
router.use('/user',userRouter);             

module.exports = router;