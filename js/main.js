$(function(){
    // alert(sessionStorage)
    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally: true,

        // 스크롤 했을 때 헤더 depth, logo, image, gotop 변경
        afterLoad: function (java1, index) {
            if(index >= 2 ){
                $('header .inner .depth1 > li > a').addClass('java2')
                $('header .inner .header-img a img').attr({ src: "images/logo_black.png" })
                $('.right-icon-none').attr({src : 'images/ico_24_allmenu_black.png'})
                $('.gotop').css({
                    height : '64'
                })
                $('.en, .en a').addClass('color')
                $('.gotop').css({height: '64'})
                $('.gotop-icon').css({display : 'block'})
            }else if (index == 1){
                $('header .inner .depth1 > li > a').removeClass('java2')
                $('header .inner .header-img a img').attr({ src: "images/logo_white.png" })
                $('.right-icon-none').attr({src : 'images/ico_24_allmenu_white.png'})
                $('.en, .en a').removeClass('color')
                $('.gotop').css({height: '0'})
                $('.gotop-icon').css({display : 'none'})
            }else{}

            // 우측 네비게이션
            let idx = index;
            // console.log(idx)
            $('#pagenum').text('0'+idx);
            if(idx == 7){
                $('#pagenum').text('06');
            }
    
            let pro = (idx / $('#fullpage .section').length) * 140;
            $('#progressbar').css('height', pro + 'px');
            if(idx == 7){
                $('#progressbar').css('height','120px');
            }

            //메인 하단 prev, next button
            let idxx = index;
            // console.log(idx)
            $('#box-num').text('0'+idx);
    
            let proo = (idxx / $('section1, #slide').length);
            $('#slide').addClass(proo, +1);

            $('.gotop').click(function(e){
                e.preventDefault();
                $('#fullpage').fullpage.moveTo(1);
                })
                
                //헤더 호버시 gnb
                $('header .inner').mouseenter(function(){
                    $('.depth2').stop().animate({height : '300px'},200)
                    $('.innerbg').addClass('gnb')
                    $('header .inner .header-img a img').attr({ src: "images/logo_black.png" })
                    $('.right-icon-none').attr({src : 'images/ico_24_allmenu_black.png'})
                    $('.en, .en a').addClass('color')
                    $('header .inner .depth1 > li > a').addClass('java2')
                }) 
                $('header .inner').mouseleave(function(){
                    $('.depth2').stop().animate({height : '0px'},200)
                    $('.innerbg').removeClass('gnb')
                    $('header .inner .header-img a img').attr({ src: "images/logo_white.png" })
                    $('.right-icon-none').attr({src : 'images/ico_24_allmenu_white.png'})
                    if(index >= 2){
                        $('.en, .en a').addClass('color')
                        $('header .inner .depth1 > li > a').addClass('java2')
                        $('header .inner .header-img a img').attr({ src: "images/logo_black.png" })
                        $('.right-icon-none').attr({src :'images/ico_24_allmenu_black.png'})    
                    }else if(index == 1){
                        $('.en, .en a').removeClass('color')
                        $('header .inner .depth1 > li > a').removeClass('java2')
                    }
                })
        },

        
    })
})

        // tabmenu
    const tabTitles = document.querySelectorAll('.tabmenu-title h1');
    tabTitles.forEach(function(tabTitle) {
        tabTitle.addEventListener('click', function(e) {
            e.preventDefault();
    
            tabTitles.forEach(function(tab) {
                tab.querySelector('a').classList.remove('active-color');
                tab.querySelector('span').style.display = 'none'
                
            });
    
            this.querySelector('a').classList.add('active-color');
            this.querySelector('span').style.display = 'inline-block';
    
            const tabItems = document.querySelectorAll('.section2 .inner .tab');
            tabItems.forEach(function(tabItem) {
                tabItem.style.display = 'none';
            });
    
            const idx = Array.from(tabTitles).indexOf(tabTitle);
            console.log(idx)
            tabItems[idx].style.display = 'block'; 
        });
    });
    
    tabTitles[0].querySelector('a').classList.add('active-color');
    tabTitles[0].querySelector('span').style.display = 'inline-block';
    // tabItems[0].style.display = 'block';