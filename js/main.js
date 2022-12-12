//로그인
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

/* 비쥬얼 슬라이드 */
var swiper = new Swiper(".mySwiper", {
  loop : "true",
  autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
    delay : 1500,   // 시간 설정
    disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
/* article 슬라이드 */
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  loop : "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
//소셜링 참여 팝업

$('.pf_plus').click(function(){
  $('.popup').show();
  $('.dark').css({'display':'block'});
});

//로그인팝업 사라짐
$('.popup .btn:nth-child(2)').click(function(){
  $('.popup').hide();
  $('.dark').css({'display':'none'});
  $('.popup').hide();
});

//멤버 후기 하트 클릭시 차있는 하트로 변경 

$(function(){
  $('.review a').on("click",function(e){
      e.preventDefault();
  });
});

  $(document).ready(function(){
    /*웹페이지 열었을 때*/
    $(".heart1").show();
    $(".heart_fill1").hide();
  /*img1을 클릭했을 때 img2를 보여줌*/
  $(".heart1").click(function(){
      $(".heart1").hide();
      $(".heart_fill1").show();
  });
});
/************************************* */
  /*img2를 클릭했을 때 img1을 보여줌*/
  $(".heart_fill2").click(function(){
      $(".heart2").show();
      $(".heart_fill2").hide();
  });
  $(document).ready(function(){
    /*웹페이지 열었을 때*/
    $(".heart2").show();
    $(".heart_fill2").hide();
  /*img1을 클릭했을 때 img2를 보여줌*/
  $(".heart2").click(function(){
      $(".heart2").hide();
      $(".heart_fill2").show();
  });
});

  /*img2를 클릭했을 때 img1을 보여줌*/
  $(".heart_fill1").click(function(){
      $(".heart1").show();
      $(".heart_fill1").hide();
  });
  $(document).ready(function(){
    /*웹페이지 열었을 때*/
    $(".heart1").show();
    $(".heart_fill1").hide();
  /*img1을 클릭했을 때 img2를 보여줌*/
  $(".heart2").click(function(){
      $(".heart2").hide();
      $(".heart_fill2").show();
  });
});


/* 라운지 */
var swiper = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
  },
});


/*라운지 멤버 슬라이드 */
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 4.5,
  spaceBetween: 30,
  autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
    delay : 700,   // 시간 설정
    disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  loop : true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

//로그인팝업
$('.more').click(function(){
  $('.login_popup').show();
  $('.dark').css({'display':'block'});
});

//로그인팝업 사라짐
$('.dark').click(function(){
  $('.login_popup').hide();
  $('.dark').css({'display':'none'});
  $('.login_popup').hide();
});

//마이페이지 탭메뉴
const tabList = document.querySelectorAll('.tab_menu .list li');
const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove('is_on');

      // 나머지 컨텐츠 display:none 처리
      contents[j].style.display = 'none';
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add('is_on');

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}

// // navigator (브라우저)에 serviceWorker 기능이 있는지 확인
// if ('serviceWorker' in navigator) {
//   // 서비스워커 설치시 DOM 블로킹을 막아준다.
//   window.addEventListener('load', function () {
//     // 서비스워커를 register 하면 promise를 반환한다.
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then(() => {
//         console.log('서비스 워커가 등록되었다.');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
// }

if('serviceWorker' in navigator){ //서비스 워커가 있을 때
  navigator.serviceWorker
  .register('service-worker.js') //등록을 해주는 거
  .then(function(success){ //success는 서비스워커를 가져오는 것
    console.log("serviceworker 설치에 성공했습니다!!", success);
  })
  .catch(function(){
    console.log("serviceworker 설치에 실패했어요", error);
  })
}	
