const express =  require('express');
const Product = require('../models/product');
const Review = require('../models/review');
const router = express.Router();


router.post('/products/:productId/review' , async(req,res)=>{
   let {productId} = req.params;
   let {rating, comment} = req.body;
   const product = await Product.findById(productId);
   const review = new Review({rating, comment});
   console.log(review);
   console.log(product);
   product.reviews.push(review);
   await review.save();
   await product.save();

   res.redirect(`/products/${productId}`);
})


module.exports = router;