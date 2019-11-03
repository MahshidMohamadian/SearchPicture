

var request = new XMLHttpRequest();
var  requestURL  =  "https://picsum.photos/v2/list?page=1&limit=15"
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload  =  function () {
      let ListOfPic  =  request.response;
     var  i;
    var resultElement = document.getElementById('img');

    for  (i  =  0;  i  <  ListOfPic.length;  i++) {

        var  d  =  resultElement.innerHTML;
        resultElement.innerHTML = d + " <div class='card loading '><figure class='snip0013'><img src='"  + ListOfPic[i].download_url + "'class='card-img-top w-100 h-100 '  ><div id='icon'><a   href='#' onclick='favorite(this)' ><i class='ion-ios-star-outline left-icon'></i></a><a href='#' onclick='downloadPicture(" + i + ")' ><i class='ion-ios-download-outline right-icon'></i></a></div></figure><div class='d' style='position:absolute;background:rgba(0,10,10,0.3);width:100%;height:100%;bottom:0;'></div></div>"
    }
}




function  search() {
    let  ListOfPic  =  request.response;
    var resultElement = document.getElementById('img');
    resultElement.innerHTML = ""

    var  input,  filter,  author,  i;
    input  =  document.getElementById("findInput");
    filter  =  input.value.toUpperCase();

    var  c = 0;
    for  (i  =  0;  i  <  ListOfPic.length;  i++) {

        var  d  =  resultElement.innerHTML;
        author  =  ListOfPic[i].author;
        if  (author.toUpperCase().indexOf(filter)  >  -1) {
            c = c + 1;
            resultElement.innerHTML = d + " <div class='card loading'><figure class='snip0013'><img  src='"  + ListOfPic[i].download_url + "'class='card-img-top w-100 h-100' ><div id='icon'><a href='#'><i   class='ion-ios-star-outline left-icon'></i></a><a href='#' onclick='downloadPicture(" + i + ")'><i class='ion-ios-download-outline right-icon'  ></i></a></div></figure><div class='d' style='position:absolute;background:rgba(10,10,10,0.8);width:100%;height:100%;bottom:0;'></div></div>"
        }
    }
}

function pagination(pageNumber) {


    document.getElementById("img").innerHTML  =  '';
    var request = new XMLHttpRequest();
    var  requestURL  =  "https://picsum.photos/v2/list?page=" + `${pageNumber}` + "&limit=15"
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();


    request.onload  =  function () {
          let ListOfPic  =  request.response;
         var  i;
        var resultElement = document.getElementById('img');

        for  (i  =  0;  i  <  ListOfPic.length;  i++) {

            var  d  =  resultElement.innerHTML;
            resultElement.innerHTML = d + " <div class='card loading'><figure class='snip0013'><img src='"  + ListOfPic[i].download_url + "'class='card-img-top w-100 h-100' ><div id='icon'><a href='#'><i class='ion-ios-star-outline left-icon'></i></a><a href='#'onclick=' downloadPicture(" + i + ")'><i class='ion-ios-download-outline right-icon' ></i></a></div></figure><div class='d' style='position:absolute;background:rgba(0,10,10,0.3);width:100%;height:100%;bottom:0;'></div></div>"
        }
    }

}

function  downloadPicture(i) {

    let  ListOfPic  =  request.response;
    var  aux  =  document.createElement("input");
    aux.setAttribute("value",  ListOfPic[i].download_url);
    document.body.appendChild(aux);
    aux.select();

    document.execCommand("copy");

    document.body.removeChild(aux);

}

// function savePicture(i)
// {
//     let  ListOfPic  =  request.response;
//     let url = ListOfPic[i].download_url;
//     window.localStorage.setItem()
// }


$('img').load(function(){
    $(this).css('background','none');
 });


 function favorite(x){
    x.classList.toggle('ion-ios-star-inline');
 }