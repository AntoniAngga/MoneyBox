//Transaction

var express = require('express');
var router = express.Router();
const db = require('../models');

router.get('/',function(req,res){
  //index untuk Transaction nya
  db.Transaction.findAll({
    include: [{ model: db.Category }]
  })
  .then((transaction) => {
      res.render('transaction', {ListTransaction : transaction});
  })
  .catch((err) => {
    console.log(err);
  })
})

router.get('/addData', function(req,res){
  let currentUser = req.session.user;
  db.Category.findAll()
  .then(Category => {
    res.render('AddTransaction', {Categorys:Category});
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
    db.Transaction.create({
       'amount' : amount,
       'keterangan' : keterangan,
       'tanggal_transaksi' : tanggal_transaksi,
       'id_category' : Category,
       'id_user' : currentUser.id
     })
     .then(()=>{
       res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    })
});

router.get('/editData', function(req,res){

})

router.get('/deleteData', function(req,res) {

})


module.exports = router;
