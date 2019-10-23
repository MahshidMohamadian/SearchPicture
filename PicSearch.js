

var request = new XMLHttpRequest();
var requestURL = "https://picsum.photos/v2/list?page=2&limit=15"
request.open('GET',requestURL);
request.responseType = 'json';
request.send();


request.onload = function()
{ 
  let ListOfPic = request.response;
 var i;
var resultElement = document.getElementById('img');

for (i = 0; i < ListOfPic.length; i++) {
// console.log(ListOfPic[i].download_url)
var d = resultElement.innerHTML;
resultElement.innerHTML=d+" <div class='card'><figure class='snip0013'><img src='" +ListOfPic[i].download_url+"'class='card-img-top w-100 h-100' ><div id='icon'><a href='#'><i class='ion-ios-star-outline left-icon'></i></a><a href='#'><i class='ion-ios-download-outline right-icon'></i></a></div></figure><div class='d' style='position:absolute;background:rgba(0,10,10,0.3);width:100%;height:100%;bottom:0;'></div></div>"
}
}




function search(){
let ListOfPic = request.response;
var resultElement = document.getElementById('img');
resultElement.innerHTML=""

var input, filter, author, i;
input = document.getElementById("findInput");
filter = input.value.toUpperCase();

var c=0;
for (i = 0; i < ListOfPic.length; i++) { 
    
var d = resultElement.innerHTML;
author = ListOfPic[i].author;
if (author.toUpperCase().indexOf(filter) > -1) {
c=c+1;
resultElement.innerHTML=d+" <div class='card'><figure class='snip0013'><img src='" +ListOfPic[i].download_url+"'class='card-img-top w-100 h-100' ><div id='icon'><a href='#'><i class='ion-ios-star-outline left-icon'></i></a><a href='#'><i class='ion-ios-download-outline right-icon'></i></a></div></figure><div class='d' style='position:absolute;background:rgba(10,10,10,0.8);width:100%;height:100%;bottom:0;'></div></div>"
} 
}
}

function pagination(pageNumber){
   
    
    document.getElementById("img").innerHTML = '';
    var request = new XMLHttpRequest();
    var requestURL = "https://picsum.photos/v2/list?page="+`${pageNumber}`+"&limit=15"
    request.open('GET',requestURL);
request.responseType = 'json';
request.send();


request.onload = function()
{ 
  let ListOfPic = request.response;
 var i;
var resultElement = document.getElementById('img');

for (i = 0; i < ListOfPic.length; i++) {
// console.log(ListOfPic[i].download_url)
var d = resultElement.innerHTML;
resultElement.innerHTML=d+" <div class='card'><figure class='snip0013'><img src='" +ListOfPic[i].download_url+"'class='card-img-top w-100 h-100' ><div id='icon'><a href='#'><i class='ion-ios-star-outline left-icon'></i></a><a href='#'><i class='ion-ios-download-outline right-icon'></i></a></div></figure><div class='d' style='position:absolute;background:rgba(0,10,10,0.3);width:100%;height:100%;bottom:0;'></div></div>"
}
}

}
