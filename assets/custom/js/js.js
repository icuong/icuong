
/*
***************************************************************************
***********    Show/ Hide Button for open List Tutorial   *****************
********************    Open/ Close List Tutorial    **********************
***************************************************************************
*/

var body = document.body;
var html = document.documentElement;
var bodyH = Math.max(body.scrollHeight, body.offsetHeight, body.getBoundingClientRect().height, html.clientHeight, html.scrollHeight, html.offsetHeight); // The max height of the body
var heightScreen = screen.height;

var btnListTutorial = document.getElementById("btn-list-tutorial");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 
    var scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollHeight > (bodyH - 700)) {
        document.getElementById("ok").style.maxHeight = heightScreen - 400 + "px";
    } else {
        document.getElementById("ok").style.maxHeight = "none";
    }

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnListTutorial.style.display = "block";
    } else {
        btnListTutorial.style.display = "none";
    }

}

function openTutorial() {
    document.getElementById("list-tutorial-container").style.display = "block";
}

function closeTutorial() {
    document.getElementById("list-tutorial-container").style.display = "none";
}

/*
***************************************************************************
**************************  Open/ Close Search Mobile  ***************************
***************************************************************************
*/

function openSearch() {
    document.getElementById("search-container-m").style.display = 'block';
}
function closeSearch() {
    document.getElementById("search-container-m").style.display = 'none';
}

/*
***************************************************************************
*****************************  Open/ Close iCuong   ***********************
*****************************  Close List Tutorial  ***********************
***************************************************************************
*/

var btnOpenInfo = document.getElementById("btn-open-info");
var icuongSidenavContainer = document.getElementById("icuong-sidenav-container");
var listTutorialContainer = document.getElementById("list-tutorial-container");

btnOpenInfo.onclick = function() {
    icuongSidenavContainer.style.display = 'block';
};

window.onclick = function( event ) {

    if (event.target == icuongSidenavContainer) {
        icuongSidenavContainer.style.display = 'none';
    }
    if (event.target == listTutorialContainer) {
        listTutorialContainer.style.display = 'none';
    }

};

function closeIcuong() {
    icuongSidenavContainer.style.display = 'none';
}

/*
***************************************************************************
******************  Change the Button for toggle   *******************
***************************************************************************
*/

function chanBtnToggle(btnToggle) {
	btnToggle.classList.toggle("change");
}

/*
***************************************************************************
**********************     Switch the Dark theme    ***********************
***************************************************************************
*/

const toggleSwitch = document.querySelector('.switch-theme input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}


/*
***************************************************************************
**********************  Only Title/ Review Content  ***********************
***************************************************************************
*/

function onlyTitle() {

    var postContents = document.getElementsByClassName('post-content');
    for (var i = 0; i < postContents.length; i++) {
        postContents[i].style.display = 'none';
    }
}

function previewContent() {

    var postContents = document.getElementsByClassName('post-content');
    for (var i = 0; i < postContents.length; i++) {
        postContents[i].style.display = 'block';
    }
}

var btnControls = document.getElementsByClassName('btn-control');
for (var i = 0; i <= btnControls.length; i++) {
    btnControls[i].addEventListener('click', function() {
        var activeCurrent = document.getElementsByClassName('active');
        activeCurrent[0].className = activeCurrent[0].className.replace(' active', '');
        this.className += ' active';
    });
}


