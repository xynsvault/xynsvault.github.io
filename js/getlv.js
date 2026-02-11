DOMParser.retrieveLVL(lvl) = function (lvl) {
  var downloadLevel = window.open("","_newtab")
downloadLevel.window.location = "https://xynsvault.github.io/dash/"+lvl+".gmd";
setTimeout(function(){downloadLevel.window.location="https://www.google.com"},1000,false)
}
