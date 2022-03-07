var myVar = setInterval(scrolltime, 3000);
function scrolltime() {
    window.scrollBy(0, 500);
}
function stopscroll() {
    clearInterval(myVar);
}
setTimeout(stopscroll, 20000);
