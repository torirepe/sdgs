$(window).load(function(){
  hs();
});

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
