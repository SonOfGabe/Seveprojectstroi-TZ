for (let i = 0; i < document.getElementsByClassName('block__column').length; i++) {
    document.getElementsByClassName('block__column')[i].onclick = function () {
        var row = document.getElementsByClassName('block__title')[i].innerHTML+ "\n\n"+document.getElementsByClassName('block__item')[i].innerHTML;
        alert(row)
    }
}

var a = document.getElementsByClassName('img__content')[0].src;
var image = document.createElement('img');
    image.src = a;
    image.style.height = "100%";



document.getElementsByClassName('img__content')[0].onclick = function () {
    document.getElementsByClassName('popup')[0].style.opacity = "1";
    document.getElementsByClassName('popup')[0].style.visibility = "visible";
    document.getElementsByClassName('popup__content')[0].appendChild(image);
}

document.getElementsByClassName('popup__area')[0].onclick = function () {
    document.getElementsByClassName('popup')[0].style.opacity = "0";
    document.getElementsByClassName('popup')[0].style.visibility = "hidden";
    document.getElementsByClassName('popup__content')[0].removeChild(image);
}

document.getElementsByClassName('popup__close')[0].onclick = function () {
    document.getElementsByClassName('popup')[0].style.opacity = "0";
    document.getElementsByClassName('popup')[0].style.visibility = "hidden";
    document.getElementsByClassName('popup__content')[0].removeChild(image);
}





