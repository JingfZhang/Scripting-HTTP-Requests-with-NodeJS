function getAndPrintHTML (options) {

  const https = require("https");

  https.get(options, function(response) {
    let compeletData = "";
    response.on("data", function(data) {
      compeletData += data;
    });

    response.on("end", function() {
      console.log(compeletData);
    });
  });

}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);