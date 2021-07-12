const express = require("express");
const session = require("express-session");
const router = express.Router();
const firebase = require('firebase');



router.get("/", (req, res) => {
  var user = firebase.auth().currentUser;
  firebase.firestore().collection('users').doc(user.uid).get().then(query => {
    var name = query.data().name;
    res.render('hotspots',{uid:session.uid, name: name});

  })    
})

router.post('/', (req, res) => {

    const blood = req.body.blood;
    const amount = req.body.amount;
    const reason = req.body.reason;
    const medical_reason = req.body.medical_reason;
    const agree = req.body.agree;
    var org_id = req.body.org_id;
    var hotspot_id = req.body.hotspot_id;
    var user_id = req.body.user_id;    
    
    if (!blood || !amount || !reason || !agree){
        res.render('hotspots',{error: "Are you sure you have entered all the data?"});
    }else{
        firebase.firestore().collection("requests").doc().set({
          amount : amount ,
          hotspot_id : hotspot_id,
          medical_reason: medical_reason,
          org_id : org_id,
          reason : reason,
          status : "pending",
          type :blood,
          user_id : user_id
      }).then((x)=>{
        res.redirect("hotspots");
      }).catch((error) => {
        var errorMessage = error.message;
        res.render('hotspots',{error: errorMessage});
        
      });

    }
})
module.exports = router;

