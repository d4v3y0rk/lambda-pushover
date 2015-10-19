var Pushover = require('node-pushover');

exports.handler = function(event, context) {
  var push = new Pushover({
      token: event.token
    });

    console.log("sending alert");

    push.send(event.key, "Alert from Lambda!", event.message, function (err, res){
      if(err){
          console.log("We have an error:");
          console.log(err);
          console.log(err.stack);
          context.done();
      }else{
          console.log("Message send successfully");
          console.log(res);
          context.done();
      }
    });
};
