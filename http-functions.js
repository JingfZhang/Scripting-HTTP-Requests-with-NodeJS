module.exports = function getHTML (options, callback) {
  const https = require("https");

  https.get(options, function(response) {
    let str = "";

    response.on("data", function(data){
      str += data;
    });

    response.on("end", function() {
      callback(str);
    });
  });

};

