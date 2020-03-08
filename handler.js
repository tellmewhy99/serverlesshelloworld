'use strict';
 var AWS = require('aws-sdk');
        var s3 = new AWS.S3();
        var currentdate = new Date();
module.exports.hello = (event, context, callback) => {
            var bucketName = "sainsburyhelloworld"
            var keyName = "hello.txt"
            var content = "Hello World on " + currentdate.getDate() +'-'+ (currentdate.getMonth()+1) +'-'+ currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds() + "!";
            
            var params = { Bucket: bucketName, Key: keyName, Body: content };
        
          return s3.putObject(params, function (err, data) {
            }).promise().then(res => {
                callback(null, "Successfully saved object to " + bucketName + "/" + keyName);
              }).catch(err => {
                callback(err, null);
              });;


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


/* exports.handler = (event, context, callback) => {  
            var bucketName = "sainsburyhelloworld"
            var keyName = "hello.txt"
            var content = "Hello World on " + currentdate.getDate() +'-'+ (currentdate.getMonth()+1) +'-'+ currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds() + "!";
            
            var params = { Bucket: bucketName, Key: keyName, Body: content };
        
            s3.putObject(params, function (err, data) {
                if (err)
                    console.log(err)
                else
                    console.log("Successfully saved object to " + bucketName + "/" + keyName);
            });
        }; */