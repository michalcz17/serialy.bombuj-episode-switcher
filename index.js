// Type your JavaScript code here.

var url = window.location.href;
url = url.split("/");
url = url[url.length - 1].split("-");
url = url[url.length - 1].split("x");
serie = url[0] * 1;
episode = url[1] * 1;
document.getElementById("bombuj-switcher-serie").innerHTML = serie;
document.getElementById("bombuj-switcher-episode").innerHTML = episode;


url = window.location.href;
url = url.split("-");
url.pop();
url = url.join("-");

var title = document.getElementsByTagName("title")[0].innerHTML;
title = title.split(" | ");
title = title[0];
setTimeout(function(){
    document.getElementById("bombuj-switcher-playing").innerHTML = title;
}, 100);

function test(){
    console.log(title);
    document.getElementById("bombuj-switcher-playing").innerHTML = title;
}
function nextep(){
    episode = episode + 1;
    window.location.replace(`${url}-${serie}x${episode}`);
}
function nextser(){
    episode = 1;
    serie = serie + 1;
    window.location.replace(`${url}-${serie}x${episode}`);
}
function prevep(){
    episode = episode - 1;
    if(episode > 0){
        window.location.replace(`${url}-${serie}x${episode}`);
    }else{
        document.getElementById("bombuj-switcher-notify").innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Již jste u prvního dílu série!';
    }
}
function prevser(){
    episode = 1;
    serie = serie - 1;
    if(serie > 0){
        window.location.replace(`${url}-${serie}x${episode}`);
    }else{
        document.getElementById("bombuj-switcher-notify").innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Již jste u první série!';
    }
}
