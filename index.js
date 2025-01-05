function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    
    if (userAgent.indexOf("Firefox") > -1) {
        return "Mozilla Firefox";
    } else if (userAgent.indexOf("Chrome") > -1) {
        return "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
        return "Apple Safari";
    } else if (userAgent.indexOf("Edge") > -1) {
        return "Microsoft Edge";
    } else if (userAgent.indexOf("Trident") > -1) {
        return "Microsoft Internet Explorer";
    } else {
        return "Unknown Browser";
    }
}

function getOSInfo() {
    const userAgent = navigator.userAgent;
    
    if (userAgent.indexOf("Win") > -1) {
        return "Windows OS";
    } else if (userAgent.indexOf("Mac") > -1) {
        return "Mac OS";
    } else if (userAgent.indexOf("X11") > -1) {
        return "UNIX OS";
    } else if (userAgent.indexOf("Linux") > -1) {
        return "Linux OS";
    } else if (userAgent.indexOf("Android") > -1) {
        return "Android OS";
    } else if (userAgent.indexOf("iPhone") > -1 || userAgent.indexOf("iPad") > -1) {
        return "iOS";
    } else {
        return "Unknown OS";
    }
}

console.log("Browser: " + getBrowserInfo());
console.log("Operating System: " + getOSInfo());
