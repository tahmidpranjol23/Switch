       $(function(){

// back to top
    
        $('.back_to_top').click(function(){
            $('html, body').animate({
                scrollTop: 0,
            },1000) //<-time duration
        });
    
// preloader
    
        $(window).on('load', function(){
            $('.preloader_part').delay(500).fadeOut(500);
        })
    
// navbar bg on scroll
    
$(window).scroll(function(){
    var scrollingPoint = $(this).scrollTop();
    if(scrollingPoint > 570) {
        $('.navbar').addClass('bg-on-scroll');
        $('.back_to_top').fadeIn(500);
        
    } else {
        $('.back_to_top').fadeOut(500);
        $('.navbar').removeClass('bg-on-scroll');
        
    }
    
})
})
    
// venoBox
    
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
    
// lightbox

         lightbox.option({
            'resizeDuration': 1000,
            'wrapAround': true
    })

// mixitup

    $(document).ready(function(){
        var mixer = mixitup('.box-list');
        
      });
    $(document).ready(function(){
        var mixer = mixitup('.box-list2');
        
      });

// owl carolose

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
        }
})