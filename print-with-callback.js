function getHTML (options, callback) {
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


}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);