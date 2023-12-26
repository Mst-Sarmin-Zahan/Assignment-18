const express = require("express");
const router = express.Router();

const productController = require("../controllers/ProductController");
const userController = require("../controllers/userController");
const ProfileController = require("../controllers/ProfileController");
const WishListController = require("../controllers/WishListController");
const CartListController = require("../controllers/CartListController");



//Product
router.get('/ProductBrandList',productController.ProductBrandList)
router.get('/ProductCategoryList',productController.ProductCategoryList)
router.get('/ProductSliderList',productController.ProductSliderList)
router.get('/ProductListByBrand/:BrandID',productController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID',productController.ProductListByCategory)
router.get('/ProductListBySmilier/:CategoryID',productController.ProductListBySmilier)
router.get('/ProductListByKeyword/:Keyword',productController.ProductListByKeyword)
router.get('/ProductListByRemark/:Remark',productController.ProductListByRemark)
router.get('/ProductDetails/:ProductID',productController.ProductDetails)
router.get('/ProductReviewList/:ProductID',productController.ProductReviewList)


//User
router.get('/UserOTP/:email',userController.UserOTP)
router.get('/VerifyLogin/:email/:otp',userController.VerifyLogin)
router.get('/UserLogout',userController.UserLogout)

//Profile
router.post('/CreateProfile',ProfileController.CreateProfile)
router.post('/UpdateProfile',ProfileController.UpdateProfile)
router.get('/ReadProfile',ProfileController.ReadProfile)

//WishList
router.post('/SaveWishList',WishListController.SaveWishList)
router.post('/RemoveWishList',WishListController.RemoveWishList)
router.get('/WishList',WishListController.WishList)


//CartList
router.post('/SaveCartList',CartListController.SaveCartList);
router.post('/RemoveCartList',CartListController.RemoveCartList)
router.get('/CartList',CartListController.CartList)





module.exports=router;