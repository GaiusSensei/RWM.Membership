head.js(
    { pg:"phonegap.js" },
    { jq:"Scripts/jQuery/jquery-1.9.1.min.js" },
    { ts:"Scripts/jQuery/jquery.total-storage.min.js" },
    { bs:"Scripts/Bootstrap/bootstrap.min.js" },
    { px:"Scripts/Phoenix/rwmapi-1.0.4.js" },
    function readyF(){ 
        if (typeof cordova === "undefined") {
            console.log("No Cordova! :( Redirecting..");
            window.location = "register.html";
        } else {
            document.addEventListener("deviceready", onReady, false);
            console.log("Cordova Detected :)");
        }
    }
);

var onReady = function onReadyF() {
    // Initialize Phonegap Stuff
};