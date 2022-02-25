var url = "https://zj6w9zqw587.typeform.com/to/pHi5Hmi4"

const embedElement = document.querySelector('.target-dom-node')

var displayed = getCookie("displayed_typeform");
if (displayed) {
    embedElement.innerHTML = "<h2>Typeform already displayed once.</h2>"
} else if (!displayed && displayed === "") {
    setCookie("displayed_typeform", true, 365);
    showEmbed();
}

function showEmbed() {
    window.tfEmbed.makeWidget(
        embedElement,
        url,
        {
            hideHeaders: true,
            hideFooter: true,
        }
    )
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const reloadtButton = document.querySelector("#reload");
function reload() {
    reload = location.reload();
}
