var vw = $(window).width();
$(document).ready(function(){
  if (vw>1024){
    $('#logo svg').mousemove(function(e){
      // положение элемента
      var pos = $(this).offset();
      var elem_left = pos.left;
      var elem_top = pos.top;
      // положение курсора внутри элемента
      var Xinner = e.pageX - elem_left;
      var Yinner = e.pageY - elem_top;
      var path1X = Xinner * -0.08;
      var path1Y = Yinner * -0.072; 
      var path2X = Xinner * -0.15;
      var path2Y = Yinner * -0.09;
      var path3X = Xinner * 0.15;
      var path3Y = Yinner * -0.081;
      var path4X = Xinner * 0.35;
      var path4Y = Yinner * -0.14;
      var path5X = Xinner * 0.035;
      var path5Y = Yinner * -0.14;
      var path6X = Xinner * 0.085;
      var path6Y = Yinner * 0.094;
      var path7X = Xinner * 0.195;
      var path7Y = Yinner * 0.014;
      var path8X = Xinner * 0.165;
      var path8Y = Yinner * -0.14; 
      var path9X = Xinner * 0.165;
      var path9Y = Yinner * 0.04;
      var path10X = Xinner * 0.075;
      var path10Y = Yinner * 0.24;     
      $('#logo #path1').css ('transform', 'translate('+path1X+'px,'+ path1Y+'px)');
      $('#logo #path2').css ('transform', 'translate('+path2X+'px,'+ path2Y+'px)');
      $('#logo #path3').css ('transform', 'translate('+path3X+'px,'+ path3Y+'px)');
      $('#logo #path4').css ('transform', 'translate('+path4X+'px,'+ path4Y+'px)');
      $('#logo #path5').css ('transform', 'translate('+path5X+'px,'+ path5Y+'px)');
      $('#logo #path6').css ('transform', 'translate('+path6X+'px,'+ path6Y+'px)');
      $('#logo #path7').css ('transform', 'translate('+path7X+'px,'+ path7Y+'px)');
      $('#logo #path8').css ('transform', 'translate('+path8X+'px,'+ path8Y+'px)');
      $('#logo #path9').css ('transform', 'translate('+path9X+'px,'+ path9Y+'px)');
      $('#logo #path10').css ('transform', 'translate('+path10X+'px,'+ path10Y+'px)');
    });

    $('#logo svg').mouseout(function(e){
      $('#logo #path1').css ('transform', 'translate(0px, 0px)');
      $('#logo #path2').css ('transform', 'translate(0px, 0px)');
      $('#logo #path3').css ('transform', 'translate(0px, 0px)');
      $('#logo #path4').css ('transform', 'translate(0px, 0px)');
      $('#logo #path5').css ('transform', 'translate(0px, 0px)');
      $('#logo #path6').css ('transform', 'translate(0px, 0px)');
      $('#logo #path7').css ('transform', 'translate(0px, 0px)');
      $('#logo #path8').css ('transform', 'translate(0px, 0px)');
      $('#logo #path9').css ('transform', 'translate(0px, 0px)');
      $('#logo #path10').css ('transform', 'translate(0px, 0px)');
    });

    $('#first-display').mousemove(function(e){
      var pos = $(this).offset();
      var elem_left = pos.left;
      var elem_top = pos.top;
      // положение курсора внутри элемента
      var Xinner = e.pageX - elem_left;
      var Yinner = e.pageY - elem_top;
      //console.log("X: " + Xinner + " Y: " + Yinner);
      if (Yinner < 350){
        $('#first-display .zoom').css('transform', 'translateY(40px)');
      }else
      if (Yinner >= 350 && Yinner < 420){
        $('#first-display .zoom').css('transform', 'translate(40px, 40px)');
      }else if (Yinner > 420){
        $('#first-display .zoom').css('transform', 'translateY(-40px)');
        }
      
      
    });

    
  }
  var marquee = $("#marquee"); 
    // оболочка для текста ввиде span 
    marquee.wrapInner("<span>");
    marquee.append(marquee.find("span").clone()); // тут у нас два span с текстом
    marquee.wrapInner("<div>");
    var reset = function() {
        $(this).css("margin-left", "0%");
        $(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
    };
    reset.call(marquee.find("div"));
 
    var marquee1 = $("#marquee1"); 
    // оболочка для текста ввиде span 
    marquee1.wrapInner("<span>");
    marquee1.append(marquee1.find("span").clone()); // тут у нас два span с текстом
    marquee1.wrapInner("<div>");
    var reset1;
    reset1 = function() {
      $(this).css("margin-left", "0%");        
      $(this).stop().animate({ "margin-left": "-90%" }, 12000, 'linear', reset1);
  
    };
    reset1.call(marquee1.find("div"));
   
    var marquee2 = $("#marquee2"); 
    // оболочка для текста ввиде span 
    marquee2.wrapInner("<span>");
    marquee2.append(marquee2.find("span").clone()); // тут у нас два span с текстом
    marquee2.wrapInner("<div>");
    var reset2;
   
      reset2 = function() {
        $(this).css("margin-left", "0%");        
        $(this).stop().animate({ "margin-left": "-125%" }, 12000, 'linear', reset2);
    
      };
      reset2.call(marquee2.find("div"));
   
      if(vw>767){
    var marquee_c = $("#marquee_clients"); 
    // оболочка для текста ввиде span 
    marquee_c.wrapInner("<span>");
    
    marquee_c.append(marquee_c.find("span").clone()); // тут у нас два span с текстом
    marquee_c.wrapInner("<div>");
    
      var reset_c = function() {
          $(this).css("margin-top", "0%");
          $(this).animate({ "margin-top": "-195.5%" }, 12000, 'linear', reset_c);
      };
      reset_c.call(marquee_c.find("div"));
    }else{
      $("#marquee_clients").slick({
        autoplay: true,
        autoplaySpeed:0,
        speed: 2000,
        arrows:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
  
    }
    


    var marquee_p= $("#marquee_p"); 
    // оболочка для текста ввиде span 
    marquee_p.wrapInner("<span>");
    marquee_p.append(marquee_p.find("span").clone()); // тут у нас два span с текстом
    marquee_p.wrapInner("<div class='all'>");
    var reset_p = function() {
        $(this).css("margin-top", "0%");
        $(this).animate({ "margin-top": "-310%" }, 7000, 'linear', reset_p);
    };
    reset_p.call(marquee_p.find("div.all"));

    var marquee_p2= $("#marquee_p2"); 
    // оболочка для текста ввиде span 
    marquee_p2.wrapInner("<span>");
    marquee_p2.append(marquee_p.find("span").clone()); // тут у нас два span с текстом
    marquee_p2.wrapInner("<div class='all'>");
    var reset_p2 = function() {
        $(this).css("margin-top", "0%");
        $(this).animate({ "margin-top": "-310%" }, 7000, 'linear', reset_p2);
    };
    reset_p2.call(marquee_p2.find("div.all"));
});


  var top_uslugi = $('#block-uslugi').offset().top;
  var top_wy =$('#block-wy').offset().top;
  var top_portfolio =$('#main-portfolio').offset().top;
  var top_clients =$('#clients').offset().top;
    $(window).on("scroll", function() {
      if ($(window).scrollTop() > top_uslugi-200) {
        $('#block-uslugi').addClass('anime');
      }
      if ($(window).scrollTop() > top_wy - 450) {
        $('#block-wy').addClass('anime');
        $('.anime .count').each(function () {
          $(this).prop('Counter',0).animate({
            Counter: $(this).data("count")
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
      });
      }
      if ($(window).scrollTop() > top_portfolio) {
        $('#main-portfolio').addClass('anime');
        $('.slider-portfolio').slick({
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed:0,
          speed: 3300,
          arrows:false
      });
      }
      if ($(window).scrollTop() > top_clients) {
        $('#clients').addClass('anime');
      }
    });
