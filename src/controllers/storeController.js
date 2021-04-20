const {User}= require('../database/models/index');

module.exports = {

  storeForm: function(req, res){
      res.render('pages/store/store');
  },

  storeCreate: function(req, res){
    //
  },
  
  cart: function(req, res){
    res.render('pages/store/cart');
  },
  
  // AddressUser: async function(req, res) {
  //   await res.render('pages/store/address');
  // },

  // storeAddress: async function(req, res) {
  //     await User.create({
  //         streetName: req. body.streetName,
  //         streetNumber: req. body.streetNumber,
  //         location: req. body.location,
  //         city: req. body.city,
  //         country: req. body.country,
  //         zipCode: req. body.zipCode,
  //         phoneNumber: req. body.phoneNumber
  //     }).then((addressUser)=>{
  //         res.redirect('/', (addressUser));
  //     }).catch((error)=>{
  //         console.log(error.message);
  //     })
  // }
    
}