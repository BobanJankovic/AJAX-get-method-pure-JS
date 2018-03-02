var btn1= document.getElementById('btn');
var mainUl1 = document.getElementById('mainUl');
var text= "";



    
btn1.addEventListener('click', function() {
  var xmlHttp =new XMLHttpRequest();
  var url= 'http://mysafeinfo.com/api/data?list=presidents&format=json';
    
  xmlHttp.onreadystatechange = function () {
      
      if(xmlHttp.readyState === XMLHttpRequest.DONE) {
          data(xmlHttp);
      }
  };
   xmlHttp.open('GET', url);
   xmlHttp.send();
});
         
    

    
    
    
    
 function data(xmlHttp) {
     var allData = JSON.parse(xmlHttp.responseText);
     allData.forEach(function(e,i){
     text += "<li>"+e.nm+"</li>"  ;
     })
     mainUl1.innerHTML = text;
 } 
    
