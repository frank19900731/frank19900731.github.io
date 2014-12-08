/**
 * Created by frank on 12/6/14.
 */
//var data = {
//    'original_link': 'http://www.baidu.com',
//    'profile_photo': 'http://tp3.sinaimg.cn/2265605010/50/40059502530/1',
//    'post_time': 'Mon Oct 27',
//
//    'poster_name': '@太极儒',
//    'poster_link': 'http://weibo.com/frank19900731',
//    'text': 'abcdefg,haha',
//    'img_url': 'http://ww3.sinaimg.cn/large/744779d6jw1elom0gzy2lj20k90h444g.jpg',
//    'img_size': '120,120',
//
//    'retweet_poster_name': '',
//    'retweet_poster_link': '',
//    'retweet_text': '',
//    'retweet_img_url': '',
//    'retweet_img_size': '120,120'
//};


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};

var initDisplay = 20;
var currentIndex = 0;
var loadPerScroll = 30;
var fadeInTime = 2000;
var dataArray;
var totalLen;
var currentYear = 2014;
var mobile = isMobile.any()

if( mobile )
{
    loadPerScroll = 8;
}

jsonLoad("/json/2014.json");

$(window).on('load', function() {
    $('.img_up').fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    waterfall();
    $(window).on('scroll', function() {
        if(checkScrollSlide()) {
            if (currentIndex < totalLen) {
                for (var i=0; i < loadPerScroll; i++) {
                    insertCard(dataArray[currentIndex]);
                    currentIndex += 1;
                    if (currentIndex >= totalLen) {
                        //$('#complete').show();
                        break;
                    }
                }
                waterfall();
            }
        }
    })
})

function jsonLoad(jsonFile) {
    //var jsonFile = "json/" + $.query.get('year') + ".json";
    $.getJSON(jsonFile, function(data) {
        dataArray = data;
        totalLen = dataArray.length;
        $.each(data, function(index, value) {
            if (index < initDisplay) {
                insertCard(value);
                currentIndex += 1;
            }
        })
        waterfall();
    })
}

function jumpTo(year) {
    if (year != currentYear) {
        $('#main').remove();
        $('<div>').attr('id', 'main').appendTo($('#row'));
        $("html, body").animate({ scrollTop: 0 }, 120);
        currentIndex = 0;
        jsonLoad("/json/" + year + ".json");
        currentYear = year;
    }
}

function calHeight(size) {
    console.log(size);
    var arr = size.split(",");
    var width = parseInt(arr[0]);
    var height = parseInt(arr[1]);
    if (Math.floor(120 * width / height) <= 200) { // 计算得到的宽度太大
        return "120px";
    } else {
        height = Math.floor(200 * height / width);
        return height + "px";
    }
}

function insertCard(data) {
    var oBox = $('<div>').addClass('box').addClass('module').addClass('already-visible').addClass('come-in').appendTo($('#main'));
    if (!mobile) {
        oBox.css('opacity', 0);
    }

    // 添加阅读原微博链接
    var oBarFull = $('<div>').addClass('bar-full').appendTo(oBox);
    $('<span>').addClass('bar').appendTo(oBarFull);
    var oBarBox = $('<div>').addClass('bar-box').appendTo(oBarFull);
    var oBarFlip = $('<span>').addClass('bar-flip').appendTo(oBarBox);
    $('<a>').addClass('origin_link').attr('href', data.original_link)
        .attr('target', '_blank').text('阅读原微博').appendTo(oBarFlip);

    // 添加作者、头像、时间
    var oContent = $('<div>').addClass('content').addClass('pad').appendTo(oBox);
    var oRow = $('<div>').addClass('row').appendTo(oContent);
    var oColxs4 = $('<div>').addClass('col-xs-4').appendTo(oRow);
    var oImageBorder = $('<div>').addClass('img_border').appendTo(oColxs4);
    $('<img>').addClass('img_circle').attr('src', data.profile_photo).appendTo(oImageBorder);
    var oColsx8 = $('<div>').addClass('col-xs-8').addClass('origin_post').appendTo(oRow);
    var oH5 = $('<h5>').appendTo(oColsx8);
    $('<a>').attr('href', data.poster_link).attr('target', '_blank').text(data.poster_name).appendTo(oH5);
    $('<p>').addClass('time_label').text(data.post_time).appendTo(oColsx8);

    // 添加正文
    $('<hr>').appendTo(oContent);
    $('<p>').html(data.text).appendTo(oContent);

    // 添加转发的微博，可能没有
    if (data.retweet_text != undefined) {
        var oRetweet = $('<div>').addClass('retweet_post').appendTo(oContent);
        var oPleft = $('<p>').addClass('left_text').appendTo(oRetweet);
        $('<a>').attr('href', data.retweet_poster_link).attr('target', '_blank').text(data.retweet_poster_name).appendTo(oPleft);
        $('<p>').addClass('left_text').html(data.retweet_text).appendTo(oRetweet);
        if (data.retweet_img_url != undefined) { // 如果转发的微博有图片
            var oImgUp = $('<a>').addClass('img_up').attr('href', data.retweet_img_url).appendTo(oRetweet);
            $('<img>').addClass('post_img').attr('src', data.retweet_img_url).css({'height': calHeight(data.retweet_img_size)}).appendTo(oImgUp);
        }
    } else { // 转发的时候发不了图片
        // 添加图片，可能没有
        if (data.img_url != undefined) {
            var oImgCenter = $('<div>').addClass('img_center').appendTo(oContent);
            var oImgUp = $('<a>').addClass('img_up').attr('href', data.img_url).appendTo(oImgCenter);
            console.log(data['img_url']);
            console.log(data['img_size']);
            $('<img>').addClass('post_img').attr('src', data.img_url).css({'height': calHeight(data.img_size)}).appendTo(oImgUp);
        }
    }

    if(!mobile) {
        oBox.animate({
            opacity: 1
        }, fadeInTime, "swing")
    }
}

function waterfall() {
    var $boxes = $('#main>div'); // 匹配一级div
    var w = $boxes.eq(0).outerWidth();
    var cols = Math.floor($(window).width() / w);
    $('#main').width(w * cols).css('margin', '0 auto');
    var hArr = [];
    $boxes.each(function(index, value) {
        var h = $boxes.eq(index).outerHeight();
        if(index < cols) {
            hArr[index] = h;
        } else {
            var minH = Math.min.apply(null, hArr);
            var minHIndex = $.inArray(minH, hArr);
            $(value).css({
                'position': 'absolute',
                'top': minH + 'px',
                'left': minHIndex * w + 'px'
            })
            hArr[minHIndex] += h;
        }
    })

    $('body').css('height', (Math.max.apply(null, hArr) + 50) + 'px');
}

function checkScrollSlide() {
    var $lastBox = $('#main>div').last();
    var lastBoxDis = $lastBox.offset().top + 300;
    var scrollTop = $(window).scrollTop();
    var documentH = $(window).height();
    //console.log("lastBoxH - " + lastBoxDis);
    //console.log("scrollTop - " + scrollTop);
    //console.log("height - " + documentH);
    //console.log("scrollTop + height - " + (scrollTop + documentH));
    return (lastBoxDis < scrollTop + documentH) ? true : false;
}