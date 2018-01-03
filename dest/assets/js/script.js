$(window).load(function(){
  hm();
  hs();
  ss();
});

function hm(){
  var header = $('#header');
  var menu = $('#header .menu');
  var nav = $('#header li a');
  menu.on('click', function(){
    header.toggleClass('menuopen');
  });
  nav.on('click', function(){
    header.toggleClass('menuopen');
  });
};

function hs(){
  
  //変数の宣言
  var ww,
      config,
      scheduleSlider,
      timer = false;
  
  //オプションの設定
  function cs() {
    ww = $(window).innerWidth();
    if(ww > 767) {
      //pcのオプション
      config = {
        auto: false,
        controls: true,
        pager: false,
        startSlide: 1,
        minSlides: 6
      }
    } else {
      //spのオプション
      config = {
        auto: false,
        controls: true,
        pager: false,
      }
    }
  };
  
  //初回読み込み
  cs();
  scheduleSlider = $("#scheduleSlider ul").bxSlider(config);
  
  //sldierのresize処理
  $(window).resize(function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      console.log('resized');
      cs();
      scheduleSlider.reloadSlider(config);
    }, 200);
  });
};

function ss(){
  $('a[href^="#"]').click(function(){
    var speed = 240;
    var hh = $('#header').innerHeight();
    var ww = $(window).innerWidth();
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    position = position - hh;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
};
