jQuery(document).ready(function($)
{
    $(document).on('click', 'body', function (e) {
        e.stopPropagation();
    });

    //var section2 = $('#section2');
    //var navBarInner = $('.navbar-inner');
    //
    //if(section2.length != 0)
    //{
    //    var scrollTop     = $(window).scrollTop();
    //    var elementOffset = section2.offset().top;
    //    var changeline    = (elementOffset - navBarInner.height());
    //    var stop          = (elementOffset - scrollTop);
    //    var i             = "0";
    //
    //    if(stop > 0)
    //    {
    //        navBarInner.transify({opacityOrig:1, opacityNew:.7, fadeSpeed:1000});
    //    }
    //    $(window).on('scroll',function()
    //    {
    //        stop = Math.round($(window).scrollTop());
    //
    //        if (stop > changeline){
    //            if(i == 0){
    //                i++;
    //                navBarInner.transify({opacityOrig:.7, opacityNew:1, fadeSpeed:1000});
    //            }
    //        } else {
    //            if(i == 1){
    //                i--;
    //                navBarInner.transify({opacityOrig:1, opacityNew:0.7, fadeSpeed:1000});
    //            }
    //        }
    //    });
    //}

    $('#menu-features-menu').find('a').on('click', function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        var identifier = $('#section3').attr('id');
        window.location = href + '#' + identifier;
    });




    // FUN START
    //search form in head menu functionality
    //different behavior on width 979px
    //todo refactor to a wp plugin

    /**
     * @type {*|jQuery|HTMLElement}
     * @description id of form element
     */
    var headSearchForm = $('#op-search-form');

    /**
     * @type {string}
     * @description css class name
     */
    var formActive = 'search-form-active';

    /**
     * @type {string}
     * @description css class name
     */
    var formNormal = 'search-form-normal';

    /**
     * @type {*|jQuery|HTMLElement}
     * @description input field of the form
     */
    var queryFormElement = headSearchForm.find('input.search-query');

    /**
     * @type {*|jQuery|HTMLElement}
     * @description submit button of the form
     */
    var submitButtonFormElement = headSearchForm.find('button.search-btn');

    /**
     * @type {string}
     * @description css class name
     */
    var showInput = 'show-input-form';

    /**
     * @type {string}
     * @description css class name
     */
    var hideInput = 'hide-input-form';

    /**
     * @type {number}
     * @description head menu changes from this resolution (px)
     */
    var breakSize = 980;

    /**
     * @param element jQueryHTMLObject
     * @param cssClassRemove string
     * @param cssClassAdd string
     * @return element
     */
    function removeAddCssClass(element, cssClassRemove, cssClassAdd) {
        return element.removeClass(cssClassRemove).addClass(cssClassAdd);
    }

    /**
     * @param element jQueryHTMLObject
     * @return element
     */
    function hideFormElement(element) {
        return removeAddCssClass(element, showInput, hideInput);
    }

    /**
     * @param element jQueryHTMLObject
     * @return element
     */
    function showFormElement(element) {
        return removeAddCssClass(element, hideInput, showInput);
    }

    /**
     * desktop mode functionality encapsulation
     */
    var desktopMode = function() {
        console.log('desktop mode menu');
        if (queryFormElement.val().length) {
            showFormElement(queryFormElement);
            removeAddCssClass(submitButtonFormElement, formNormal, formActive);
        } else {
            hideFormElement(queryFormElement);
            removeAddCssClass(submitButtonFormElement, formActive, formNormal);
        }

        submitButtonFormElement.on('click', function (e) {
            if ($(this).hasClass(formNormal)) {
                e.preventDefault();
            }
            removeAddCssClass($(this), formNormal, formActive);
            showFormElement(queryFormElement).focus();
        });

        queryFormElement.on('focusout blur', function () {
            if (!this.value) {
                removeAddCssClass(submitButtonFormElement, formActive, formNormal);
                hideFormElement(queryFormElement);
            }
        });

    };

    /**
     * mobile device mode functionality encapsulation
     */
    var mobileDeviceMode = function(){
        console.log('mobile device mode menu');
        showFormElement(queryFormElement);
        removeAddCssClass(submitButtonFormElement, formNormal, formActive);
        submitButtonFormElement.off('click');
        queryFormElement.off('focusout blur');
    };

    /**
     * get current media query
     */
    var mq = window.matchMedia('(min-width:' + breakSize + 'px)') || window.msMatchMedia('(min-width:' + breakSize + 'px)');

    /**
     * Switch between desktop and
     * mobile device functionality
     * @param bool
     */
    var resizeFunctionality = function(bool){
        if (bool) {
            desktopMode();

        } else {
            mobileDeviceMode();
        }
    };

    resizeFunctionality(mq.matches);

    /**
     * add real-time listener to media query
     */
    mq.addListener(function (match) {
        console.log(match.matches);
        resizeFunctionality(match.matches);
    });

    // FUN STOP


    var arrowUp = '.icon-arrow-right5-3';
    var arrowDown = '.icon-arrow-right5-2';

    var dropDownLinks = $('a.toggle-open-menu');
    dropDownLinks.on('click', function(e){
        e.preventDefault();
        if($(this).closest('li').hasClass('open')){
            //$(this).find(arrowUp).css('display', 'none');
            //$(this).find(arrowDown).css('display', 'inline-block');
            $(this).closest('li').toggleClass('open');
            return false;
        }
        var memoElement = $(this).closest('ul.menu').find('li.open');
        memoElement.removeClass('open');

        $(this).parentsUntil('ul.menu').each(function(index){
            if($(this).is('li')){

                $(this).addClass('open');

            }
        });

    });

});