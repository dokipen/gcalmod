var src = document.createElement("script");
src.type = "text/javascript";
src.src = chrome.extension.getURL("inject.js");
document.head.appendChild(src)


