

///Global Values
var _windowWidth = window.innerWidth;
var _windowHeight = window.innerHeight;


///Section top values
function calcTop(ctID){
    var ctObject = $(ctID);
    var ctObjOffset = ctObject.offset();
    return ctObjOffset.top;
}

///Section on and off Classes
function scrollIdicator(ID, offsetValue){
    var scrollObject = $(ID);
    var scrollObjTop = calcTop(ID) - offsetValue;
    var scrollObjBottom = scrollObjTop + scrollObject.outerHeight();
    var windowCurrent = $(window).scrollTop();

    if(windowCurrent > scrollObjTop && windowCurrent < scrollObjBottom)
        return true;
} 
function sectionOnScroll(ID){
    $(ID).each(function(){
        //First
        if(!scrollIdicator($('.intro__section'),_windowHeight/2))
            $('body').removeClass('first').addClass('non-first');
        else
            $('body').removeClass('non-first').addClass('first');

        //on off classes
        if(scrollIdicator($(this),_windowHeight/2))
            $(this).removeClass("off").addClass("on");
        else
            $(this).removeClass("on").addClass("off");

        //cover non-covered
        if((calcTop($(this))) < $(window).scrollTop())
            $(this).removeClass("non-covered").addClass("covered");
        else
            $(this).removeClass("covered").addClass("non-covered");

        //Remove Sticky
        if(calcTop($('.withus__section')) < $(window).scrollTop())
            $(this).find('.white-section').css({position:'absolute'});
        else
            $(this).find('.white-section').css({position:'fixed'});
    });
}

function sectionOnScrillInt(ID){
    $(window).scroll(function() {
        sectionOnScroll(ID);
    });
}

$(window).on('resize',function(){
    _windowWidth = window.innerWidth;
    _windowHeight = window.innerHeight;
    if(_windowWidth>1200)
        sectionOnScrillInt('section');
    else
        $('section').each(function(){
            $(this).find('.white-section').css({position:'relative'});
        });
});

if(_windowWidth>1200)
    sectionOnScrillInt('section');
else
    $('.section').find('.white-section').css({position:'relative'});



