var request = require('request');
var cheerio = require('cheerio');
var url = process.argv[2];

function callback(e, res, body) {
  var $ = cheerio.load(body.toString());
  $('a').each(function() {
    console.log(this.text());
  });
}

request(url, callback);