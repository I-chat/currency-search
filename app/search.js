var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function QueryService()
{


  var url = "https://openexchangerates.org/api/latest.json?app_id=7011cbb799504a7391af935ef01020ae";

 
  var client = new XMLHttpRequest();
  client.open("GET", url, false);
  client.setRequestHeader("Content-Type", "text/plain");
  client.send();
  if (client.status == 200){
    console.log("Current currency exchange rates are:\n\n" + client.responseText)
  }

QueryService()