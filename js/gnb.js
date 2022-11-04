/* header 메뉴 */
/* js/gnb.js */
$(function(){
  $gl = $('#gnb>li');
  $gla = $('#gnb>li>a');
  $sw = $('.sub_wrap');


  //mouse hover 효과 <- border-bottom
  $gla.hover(function(){
    $(this).addClass('on');
  },function(){
    $gla.removeClass('on');
  });
  
  $sw.hide();

  $gla.on({
    click: function(e){
      e.preventDefault(); //a href 막기
      $gla.not($(this).toggleClass('focus')).removeClass('focus');//a 태그에 border-bottom 적용
      $('#gnb>li>a>i').not($(this).find('i').toggleClass("rotate")).removeClass('rotate');//toggleClass 작동하되 나머지 i태그들의 rotate 클래스는 제거
      $sw.not($(this).parent().find($sw).slideToggle()).hide();//slideToggle은 작동하되 그 외의 $sw 는 hide() 적용을 계속한다.
    }
  });

  $('button').click(function(){
    //.sub_wrap 에 있는 X 버튼을 누를 시 적용해있던 FOCUS,ROTATE 클래스 삭제
    //그리고 .sub_wrap을 다시 숨김
    $('#gnb>li>a').removeClass('focus');
    $('#gnb>li>a>i').removeClass('rotate');
    $sw.hide();
  });
  $('.sub_title').click(function(){
    $sw.hide();
    $gla.removeClass('focus');
  });
  
  $('.closeBtn').click(function(){
    $('#gnb').hide();
  });
});

window.onload = function(){
  var winMobile = window.matchMedia("screen adn (max-width:1152px");
  var menu = document.querySelector('.menu');
  var gnb = document.querySelector('#gnb');
  var check = true;

    menu.onclick = function(e){
      e.preventDefault();
      if(!check){
        gnb.style.display='none';
        check = false;
     }else{
        gnb.style.display='block';
        check = true;
     }
  
    }
  }