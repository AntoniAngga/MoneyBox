var express = require('express');
var router = express.Router();
const db = require('../models');

router.get('/',function(req,res){
  //index untuk Transaction nya
  db.Category.findAll()
  .then(Category => {
    res.render('transaction', {Categorys:Category});
  })
  .catch((err) => {
    console.log(err);
  })
})

router.post('/addData', function(req,res){
  //untuk add Data
    let amount = req.body.amount;
    let keterangan = req.body.keterangan;
    let tanggal_transaksi = req.body.tanggal_transaksi;
    let Category = req.body.CategoryDiPilih;
    let currentUser = req.session.user;
    console.log(amount);
    console.log(tanggal_transaksi);
    console.log(Category);
    console.log(currentUser.id);
    // db.transaction.create({
    //    'amount' : amount,
    //    'keterangan' : keterangan,
    //    'tanggal_transaksi' : tanggal_transaksi,
    //    'id_category' : Category,
    //    'id_user' : currentUser.id
    //  })
    //  .then(()=>{
    //    res.redirect('/transaction');
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
})

router.get('/edit', function(req,res){

})

router.get('/delete', function(req,res) {

})


module.exports = router;
