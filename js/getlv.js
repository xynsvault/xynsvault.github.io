DOMParser.retrieveLVL = function (lvl) {
  var downloadLevel = window.open("","_newtab")
downloadLevel.window.location = atob(aHR0cHM6Ly94eW5zdmF1bHQuZ2l0aHViLmlvL2Rhc2gv)+lvl+".gmd";
setTimeout(function(){downloadLevel.window.location="https://www.google.com"},1000,false)
}
