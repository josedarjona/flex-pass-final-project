const express     = require('express');
const router      = express.Router();
const passport    = require('passport');
const User        = require("../models/user");
const flash       = require("connect-flash");
const ensureLogin = require("connect-ensure-login");
const busy_hours = require('busy-hours');
const bodyParser   = require('body-parser');


const axios = require("axios");


router.post('/gymsearch', (req, res, next) => {
  

  console.log("req.body ???????????????????????????", req.body)
  const search = req.body.searchTerm;
  console.log('body whatever this is ----------', search)

axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search}&type=gym&location=25.761681,-80.191788&radius=8050&key=AIzaSyBHsQ5mbZ20-fri8maikgz2H_6Wmt64LZ0`)
    .then((result)=>{
      

      const finalData = [];
   
      const data = [];
      
      // const busyData = [];

      var idSearch = result.data.results;

      console.log("length before splice====>", idSearch.length)
      console.log("id search before splice====>", idSearch)

  
      var  arrLength = idSearch.length;
      var rand = Math.floor(Math.random() * 7);

      if(arrLength > 7){
      idSearch = idSearch.splice(0, 7);
      }

      console.log("length after splice====>", idSearch.length)
      console.log("id search after splice ====>", idSearch)


      //start of for each
      idSearch.forEach(id => {
        
          const dataToSend = {
            name:'',
            place_id:'',
            formatted_address: '',
            rating: '',
            busyTimes: [],
            lat: '',
            lng: '',
            pic: '',
          };

          
          // const imgRef = [];
          const busyData = [];
          // console.log("this is the ID", id)

          dataToSend.name = id.name;
          dataToSend.place_id = id.place_id;
          dataToSend.formatted_address = id.formatted_address;
          dataToSend.rating = id.rating * 20;
          console.log('this is the location lat', id.geometry.location.lat)
          dataToSend.lat = id.geometry.location.lat;
          dataToSend.lng = id.geometry.location.lng;
          placeID = id.place_id;

         


          busy_hours(placeID, 'AIzaSyCUertGINeIoS4nQ7zpyuJzqyUg1PhXXws' )
          .then(popTimes => {
          //  dataToSend.week.push(popTimes.week);

          // console.log("these are the results", popTimes)

            if(popTimes.week){
            popTimes.week.forEach(dayOfWeek=>{
              // console.log('this is the day of week', dayOfWeek);
              const busyHours = {
                day:'',
                busyInfo: [],
              }
              busyHours.day = dayOfWeek.day;
              busyHours.busyInfo.push(dayOfWeek.hours);
              busyData.push(Object.assign({},busyHours));
              

    
            })}

            
          })
          .catch((err)=>{
            console.log(err)
            next(err);
          })

          // console.log("this is the photo ref id", id.photos)

          var imgData = '';
          setTimeout(function(){
          if(id.photos){
          id.photos.forEach(photoRef =>{
            const reference = photoRef.photo_reference;
            
            // console.log("these are the photo references", photoRef )
            axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${reference}&key=AIzaSyCUertGINeIoS4nQ7zpyuJzqyUg1PhXXws`)
            .then( (refResult) =>{

              // console.log("this is the result of the photo ref", refResult.config.url);
              const theImgUrl = {
                imgUrl: ''
              }

              theImgUrl.imgUrl = refResult.config.url;
              // console.log("this is the img url????",theImgUrl)
              
              imgData = theImgUrl.imgUrl
              // console.log("inside the THEN img data", imgData)

              dataToSend.pic = imgData;
              // console.log('hows datato sned? inside---->', dataToSend);

            })
            .catch((err) => {
              console.log(err)
              next(err);
            });
            

            

          })}},2000);


          // console.log("OUTSIDE--->", imgData)


          // 
          
          // console.log('hows datato sned? outside--->', dataToSend);
          // dataToSend.img.push(imgData)
          dataToSend.busyTimes.push(busyData)
          
          setTimeout(function(){
          data.push(Object.assign({},dataToSend));
          },3500);
        

          
        })

        /////end of for each

         
          setTimeout(function(){

            // console.log("this is the final data", data)
            res.json(data);
            
          }, 4500);
      })
      .catch((err) => {
        console.log(err)
        next(err);
      });
    });


    

  

  module.exports = router; 

  







