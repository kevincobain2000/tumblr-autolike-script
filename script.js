setTimeout(function(){
    $disabled = false;
    if (!$disabled) {
        var r = confirm("Like Images on this Page");

        if (r == true) {
            pageScroll();
            setInterval(function(){
                txt = "You pressed OK!";

                    elems = document.getElementsByClassName('like')
                    var counter = 0;
                    for(var i = 0; i< elems.length; i++) {
                        if ( !elems[i].classList.contains("liked") ){
                          counter++;
                          elems[i].click();
                        }
                    }
                    console.log('liked:' + counter)
            }, 5000);
        }
    }
}, 5000);

function pageScroll() {
    window.scrollBy(0,10);
    scrolldelay = setTimeout(pageScroll,20);
}
