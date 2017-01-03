setTimeout(function(){
    $disabled = false;
    if (!$disabled) {
        var r = confirm("Like Images on this Page");

        if (r == true) {
            pageScroll();
            setInterval(function(){
                txt = "You pressed OK!";

                    elems = document.querySelectorAll('.like:not(.liked)')
                    var counter = 0;
                    for(var i = 0; i< elems.length; i++) {
                        counter++;
                        elems[i].click();
                    }
                    console.log('liked:' + counter)
            }, 5000);
        }
    }
}, 5000);

function pageScroll() {
    window.scrollBy(0,10);
    scrolldelay = setTimeout(pageScroll,50);
}
