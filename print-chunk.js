function getAndPrintHTMLChunks () {
  var https = require("https");

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {
    response.on("data", function(data) {
      console.log(data);
    });
  });

}