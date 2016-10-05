loadJSON('settings.json', function(settings) {
    console.log(settings);
    var iframe = document.getElementsByTagName('iframe')[0];
    iframe.src = settings.iframe;
    console.log(iframe);
    if (window.opener) {
        window.opener.location = settings.slyLink;
    }
});

function loadJSON(file, cb) {
    var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open('GET', file, true);
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            cb(JSON.parse(request.responseText));
        }
    };
    request.send(null);
};
