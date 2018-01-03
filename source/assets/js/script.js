$(window).load(function(){
  hs();
  hm()
  fa();
  cc();
  ss();
  ps()
});

function hs(){
  
  //変数の宣言
  var ww,
      config,
      heroSlider,
      timer = false;
  
  //オプションの設定
  function cs() {
    ww = $(window).innerWidth();
    if(ww > 767) {
      //pcのオプション
      config = {
        auto: true,
        mode: "fade",
        controls: false,
        pager: false,
      }
    } else {
      //spのオプション
      config = {
        auto: true,
        controls: true,
        pager: false,
      }
    }
  };
  
  //初回読み込み
  cs();
  heroSlider = $("#heroSlider ul").bxSlider(config);
  
  //sldierのresize処理
  $(window).resize(function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      console.log('resized');
      cs();
      slider.reloadSlider(config);
    }, 200);
  });
};


function fa(){
  $('[data-container]').fullpage({
    sectionSelector: '[data-section]',
    easingcss3: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    scrollingSpeed: 480,
    scrollOverflow: 'true',
    anchors: ['intro', 'BASKET_baller', 'SOCCER_baller', 'VOLLEY_baller', 'BEACH_baller'],
    //afterResize: function () {},
    //onLeave: function (index, nextIndex, direction) {},
    //afterLoad: function (anchorLink, index) {},
  });
};

function hm(){
  var header = $('#header');
  var menu = $('#header .menu');
  var nav = $('#header .menu nav li a');
  menu.on('click', function(){
    header.toggleClass('menuopen');
  });
  nav.on('click', function(){
    header.toggleClass('menuopen');
  });
};


var ccs;
function cc(){
  $('[data-cct]').on('click', function(){
    ccs = $(this).closest('[data-ccs]');
    if( ccs.attr('data-ccs') == '1' ) {
      ccs.attr('data-ccs', '2');
    } else {
      ccs.attr('data-ccs', '1');
    }
  });
}

function ss(){
  $('a[href^="#"]').click(function(){
    var speed = 240;
    var hh = $('#header').innerHeight();
    var ww = $(window).innerWidth();
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    if(ww > 769) {
      position = position - hh;
    }
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
};

function ps(){
  $('[data-ps]').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).attr('data-ps','1');
    } else {
      $(this).attr('data-ps','0');
    }
  });
}