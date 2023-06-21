// js
  


// jq
$(document).ready(function(){

// curve
 var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });


// load more

 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };
 


// hat

     var controller = new ScrollMagic.Controller({
    // optione here
});

var scene = new ScrollMagic.Scene({
    // options here
})

controller.addScene(scene);


var controller = new ScrollMagic.Controller({

    // A selector, DOM object that references the main container for scrolling.
    container: window,

    // Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
    vertical: true,

    // These options will be passed to every Scene that is added to the controller using the addScene method.
    globalSceneOptions: {},

    // Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
    // `0` => silent
    // `1` => errors
    // `2` => errors, warnings
    // `3` => errors, warnings, debuginfo
    loglevel: 2,

    // Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
    // This interval polls these parameters to fire the necessary events.  
    // If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
    refreshInterval: 100

});











     $('#toggle.buttons a.has-code').click(function() {
                    $('#get-it-now .item').removeClass('active');
                    $('#toggle.buttons a').removeClass('active');

                    $(this).addClass('active');
                    $('#get-it-now .'+$(this).data('code')).addClass('active');

                    $('#get-it-now').removeAttr('class').addClass($(this).data('code'));

                    return false;
                });

// hat

       $("#start h1").wrapEach(/(.)/g, "<span>$1</span>");
      var nervousHat = new TimelineMax({repeat: -1, yoyo: true})
                    .add(TweenMax.to("#start .tophat", 0.3, {bottom: "+=5", left: "-=6", rotation: -3}))
                    .add(TweenMax.to("#start .tophat", 0.3, {bottom: "-=10", left: "+=6", rotation: 0}))
                    .add(TweenMax.to("#start .tophat", 0.3, {bottom: "+=5", left: "+=6", rotation: 3}))
                    .add(TweenMax.to("#start .tophat", 0.3, {bottom: "-=5", left: "-=3", rotation: 1.5}))
                    .add(TweenMax.to("#start .tophat", 0.3, {bottom: "+=5", left: "-=6", rotation: -1.5}))
                    .add(TweenMax.to("#start .tophat", 0.3, {bottom: "+=5", left: "+=3", rotation: 0}))
                    .add(TweenMax.to("#start .tophat", 0.3, {bottom: "-=10"}));
                var abracadabra = TweenMax.fromTo("#start .wand", 1, {top: -$(window).height()/3, left: 370, rotation: 20}, {top: 10, rotation: -20});
                var reveal = new TimelineMax()
                    .add([
                            TweenMax.to("#start .tophat", 1, {bottom: $(window).height(), left: "-=50", rotation: -20}),
                            TweenMax.from("#start h1", 1, {scale: 0.2, top: "+=70"}),
                            TweenMax.to("#start .wand", 0.8, {top: -$(window).height()/3, left: 450, rotation: 30}),
                            TweenMax.to("#start .floor", 1, {autoAlpha: 0})
                        ]);
                var laola = new TimelineMax()
                    .add(TweenMax.staggerTo("#start h1 span", 0.5, {top: -150, x: -75, scale: 2, color: '#ff4468' }, 0.2))
                    .add(TweenMax.staggerTo("#start h1 span", 0.5, {top: 0, x: 0, scale: 1, color: '#fff'}, 0.2), 0.5);

                // container pin
                var startpin = new ScrollMagic.Scene({
                        duration: 1000
                    })
                    .setPin("section#start")
                    .addTo(controller);

                // msg scroll ani
                new ScrollMagic.Scene({
                        duration: 300,
                        offset: -100
                    })
                    // .setTween(TweenMax.to("#msg div.scroll", 1, {backgroundPosition: "0 13px", repeat: -1, delay: 1, repeatDelay: 2, ease: Linear.easeNone}))
                    // .addTo(controller);
                // msg hide
                new ScrollMagic.Scene({
                        offset: 40
                    })
                    // .setTween(TweenMax.to("#msg", 0.5, {bottom: -40}))
                    // .addTo(controller);

                // hat movement
                new ScrollMagic.Scene({
                        duration: 500,
                        offset: -100
                    })
                    // .setTween(nervousHat)
                    // .addTo(controller);

                // magic wand
                new ScrollMagic.Scene({
                        offset: 20,
                        duration: 400
                    })
                    .on("end", function (e) {
                        if (e.scrollDirection == "FORWARD" && startpin.progress() < 0.37) { // check pin progress so it doesnt launch on refresh
                            // make it rain!
                            $("#start .sparkpoint").sparkle({
                                amount: 40,
                                duration: 0.8
                            });
                        }
                    })
                    // .setTween(abracadabra)
                    // .addTo(controller);

                // big reveal
                 new ScrollMagic.Scene({
                        duration: 300,
                        offset: 260
                     })
                     // .setTween(reveal)
                     // .addTo(controller);

                 });


  // parallax background

  !window.jQuery && document.write(unescape('%3Cscript src="vendor/parallax-effect/js/jquery.js"%3E%3C/script%3E'));

   jQuery(document).ready(function(){
         // Declare parallax on layers
        jQuery('.parallax-layer').parallax({
          mouseport: jQuery("#port")

    });

  // parallax




   jQuery('.parallax-layer').parallax({
      mouseport: jQuery("#port")
    });


  jQuery('.parallax-layer').parallax({

  // jQuery object or selector of DOM node to use as mouseport
  mouseport: 'body',  

  // boolean | 0-1 | 'npx' | 'n%'
  xparallax: true,    
  yparallax: true,

  // 0-1 - Sets default alignment. Only has effect when parallax values are something other than 1 (or true, or '100%')
  xorigin: 0.5,     
  yorigin: 0.5,

  // 0-1 (0 instant, 1 forever) - Sets rate of decay curve for catching up with target mouse position
  decay: 0.66,    

  // Int (milliseconds)
  frameDuration: 30,      

  // String - Class added to layer when frozen
  freezeClass: 'freeze' 
  
});



var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});




});