var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function QueryService()
{


  var url = "https://openexchangerates.org/api/latest.json?app_id=7011cbb799504a7391af935ef01020ae";

 
  var guest = new XMLHttpRequest();
  guest.open("GET", url, false);
  guest.setRequestHeader("Content-Type", "text/plain");
  guest.send();
  var state = guest.status
  if (state == 200){
    console.log("Current currency exchange rates are:\n" + guest.responseText);
  }
};

QueryService()