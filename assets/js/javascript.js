function myFunction() {
    var myBody = document.body;
    myBody.classList.toggle("dark-mode");
 }
 function loadPage() {

    window.open('sanPham.html').focus();

 }
 function toggleClock() {
    // get the clock
    var myClock = document.getElementsByClassName("header__notify-item_turnback");

    // get the current value of the clock's display property
    var displaySetting = myClock.style.display;

    // also get the clock button, so we can change what it says
    var clockButton = document.getElementsByClassName("header__notify-footer-link");

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'flex') {
      // clock is visible. hide it
      document.getElementsByClassName("header__notify-item_turnback").style.display = 'none';
      // change button text
      clockButton.innerHTML = 'đóng xem tất cả';
    }
    else {
      // clock is hidden. show it
      document.getElementsByClassName("header__notify-item_turnback").style.display = 'flex';
      // change button text
      clockButton.innerHTML = 'xem tất cả';
    }
  }
 $(document).ready( function(){
        $('a').click(function(event){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset()
        }, 700);
        event.preventDefault();
        });
        
        $('.header__notify-footer').click(function(){

          $('.header__notify-item-2').toggleClass("header__notify-item_turnback");
                // $('.header__notify-item_turnback').css('display' , 'flex');
          
                // $('.header__notify-footer').addClass("header__notify-footer__close");
                // $('.header__notify-footer__close').removeClass("header__notify-footer")
                $('.header__notify-footer-link').toggleText('Đóng xem tất cả' , 'Xem tất cả');
        })
        // $('.header__notify-footer__close').click(function(){
          
        //   $('.header__notify-footer').toggleText(function() {
        //     $('.header__notify-footer-link').innerHTML('Đóng xem tất cả');
        // }, function() {
        //     $('.header__notify-footer-link').innerHTML('Xem tất cả');
        // });
        //     $('.header__notify-item_turnback').css('display' , 'none');
        //     $('.header__notify-footer-link').text("xem tất cả");
        //     $('.header__notify-footer__close').addClass("header__notify-footer");
        //     $('.header__notify-footer').removeClass("header__notify-footer__close")

       
        // })
        $('.header__navbar-userinfo-item-logout').click(function(event){
          // $('.header__navbar-item--userinfo').css('display' , 'none');
          $('.header__navbar-user--name').html("Đăng nhập");
          $('.header__navbar-user--img').css('display' , 'none');
          $('.header__navbar-userinfo-menu').css('visibility' , 'hidden');
          });
        $('.header__search-results').click(function(){
          $( 'a[href^="http://"]' ).attr( 'sanPham.html','_blank' )
        });
        $('.header__navbar-userinfo').click(function(){
          $('.model').toggleClass( "modelsecond" )
          // $('.model').css('position' , 'fixed');
          $('.form-dangnhap').css('display' , 'block');
          $('.form-dangky').css('display' , 'none');

        });
        // btn tro lai
        $('.authen-form__controls-back').click(function(){
          $('.model').toggleClass( "modelsecond")
          // $('.model').css('position' , 'fixed');
          $('.form-dangky').css('display' , 'none');
          $('.form-dangnhap').css('display' , 'none');
        });
        // dang nhap
        $('.btn-primary-login').click(function(){
          $('.model').toggleClass( "modelsecond")
          // $('.model').css('display' , 'none');
          // $('.model').css('position' , 'inherit');
          $('.header__navbar-user--img').css('display' , 'block');
          $('.header__navbar-user--name').html("Hoàng Phạm");
          $('.header__navbar-userinfo-menu').css('visibility' , 'visible');
        });
        $('.btn-primary-signup').click(function(){
          $('.model').toggleClass( "modelsecond")
        });
        //dang ky
        $('.authen-form__text2').click(function(){
          // $('.model').css('display' , 'block');
          $('.form-dangky').css('display' , 'block');
          $('.form-dangnhap').css('display' , 'none');
        });
   

        
 
})
