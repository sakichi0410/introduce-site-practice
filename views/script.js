$(function() {
    //クリックしたとき
    $('.question-list').click(function() {
        var $answer = $(this).find('.answer');
     if($answer.hasClass('open')) {
         //openを外す処理
         $answer.removeClass('open');
         //答えを隠す処理
         $answer.slideUp();
         //-から+に変える処理
         $(this).find('span').text('+');
         
     }else {
         //openを付ける処理
         $answer.addClass('open');
         //答えを開く処理
         $answer.slideDown();
         //+から-に変える処理
         $(this).find('span').text('-');
     }
    });

})

$(function() {
    var $twitter = $('#twitter-icon');
    //twitterアイコンのアニメーション
    $twitter.hover(
        function() {
            //マウスを乗せたとき
            $twitter.css('opacity','0.8');
        },
        function() {
            //カーソル外した時
            $twitter.css('opacity','1');
        }
    );
});

//facebookアニメーション
$(function() {
    var $facebook =$('#facebook-icon');
    //カーソルhover
    $facebook.hover(
        function() {
         //カーソル乗せたとき
            $facebook.css('opacity','0.8');
        },
        function() {
            //カーソル外した時
            $facebook.css('opacity','1');
        }
    );
});

//クリックすると最上部に戻るアニメーション
$(function () {
    $('#top-jamp').click(function () {
    $('html,body').scrollTop(0);
    });
});

//ハンバーガーメニュークリックしたとき
$(function () {
    $('.burger-btn').on('click', function () {
      $('.burger-btn').toggleClass('close');
      $('.nav-wrapper').toggleClass('fade');
    });
  });

//趣味ページ
//ボタンで画像切り替え
$(function() {
    $('.index-btn').on('click',function () {
        //表示されているルフィを取り除く
        $('.active').removeClass('active');
        //ボタンを押したコードを変数に代入する
       var clickedIndex = $('.index-btn').index($(this));

       //ボタンを押したときの要素が取得できるようにclickedIndexに書き換える！
        $('.slide').eq(clickedIndex).addClass('active');

    });
});

//スライドボタンで切り替え
$(function() {
    $('.change-btn').on('click', function () {
        //変数displaySlideにactionを代入する
        var $displaySlide = $('.action');
        //変数displaySlideからクラスactionを取り除く
        $displaySlide.removeClass('action');

       // ifとelseを用いて、$displaySlideの前もしくは次の要素に
       // activeクラスをつけてください
       if($(this).hasClass('next-btn')) {
           //ボタン押下時にnext-btnを持っていたら　true文
         $displaySlide.next().addClass('action');   
       }else {
         $displaySlide.prev().addClass('action');
       }

       //前へ　次へ　消す処理
       //変数slideIndexに、slide-artにaction要素がついたときのインデックス番号を代入する。
       var slideIndex = $('.slide-art').index($('.action'));

       $('.change-btn').show();

       //if(一枚目が表示されたときに前へを消す)
       if(slideIndex==0) {
           $('.prev-btn').hide();
       //else if (最後のページが表示されたときに次へを消す)
       //.lengthで要素数を取得する！
       }else if (slideIndex==$('.slide-art').length-1) {
           $('.next-btn').hide();
       }

    });
});

//topに戻るアニメーション
$(function() {
    //カーソルを合わせたときにボタンの拡大
    $('#top-back-id').hover(
        function() {
            $(this).animate({
                'font-size':'17px'
            },300)},
         
    function() {
        $(this).animate({
            'font-size':'15px'
        },300)}
    )
    
    //ボタンを押下時に上にスクロール
    $('#top-back-id').on('click',function() {
        $('html,body').animate({
            'scrollTop':0
        },500);
    })
    }
);