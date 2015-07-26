//main js file
var $j = jQuery.noConflict();
 $j(document).ready(function(){
  $j('#slider1').bxSlider({
    mode: 'fade',
      auto: true,
       speed: 1500,
       pager: true,
       nextText:'',
       prevText:'',
       infiniteLoop:true,
       controls : false,
       autoHover: true,
       hideControlOnEnd:true,

  });
});
