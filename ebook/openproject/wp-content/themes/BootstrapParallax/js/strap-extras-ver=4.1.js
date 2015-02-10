/*!
 * Bootstrap Parallax Extras
 */
// Placeholder
jQuery(document).ready(function(){
   // cache the window object
   jQuerywindow = jQuery(window);
 
   jQuery('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var jQueryscroll = jQuery(this);
                     
      jQuery(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                            
        var yPos = -(jQuerywindow.scrollTop() / jQueryscroll.data('speed'));
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        jQueryscroll.css({ backgroundPosition: coords });   
      }); // end window scroll
   });  // end section function
}); // close out script

/* Create HTML5 element for IE */
document.createElement("section");