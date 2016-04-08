// JavaScript File



function wholeMap() {
    $('.rgbtn').click(function(){
        region($(this).attr('id'));
        
    });
    $('.rgbtn').hover(function(){
        var regionName = $(this).children()[0].innerHTML;
        $('#whoTitle').html(regionName);
    });
    $('#sj').click(function() {
        window.location.href = "/vote/who?regionId=151";
    })
}

function region(region) {
    clear();
    loadRegion(region);
}

function setClick() {
    $('.rgnbtn').click(function(){
        var regionId = $(this).attr('id');
        //regionId를 포함한 쿼리를 보낸다.
        window.location.href = "/vote/who?regionId="+regionId;
        
    });
    $('.rgnbtn').hover(function(){
        var regionName = $(this)[0].innerHTML;
        var title = $('#whoTitle')[0].innerHTML;
        var foreTitle = title.split("・")[0];
        $('#whoTitle').html(foreTitle +'・' + regionName);
    });
}

//select 에 class 설정을 해줘서 버튼이벤트를 다르게 설정한다.
function loadRegion(region) {
    $('#select-place').load('vote/'+region, function() {
        setClick();
    });
}

function clear() {
    $('#select-place').empty();
}



////////////////////


function buttonSet() {
    $('.region1').click(function(){
        var regionId =GetQueryStringParams('regionId');
        var electRegionID = $(this).attr('id').split('_')[1];
        window.location.href = "/vote/who?regionId="+regionId +"&electRegionID="+ electRegionID;
    });
    
    
    
    var beforeLike = '/assets/sources/like_0.png';
    var afterLike = '/assets/sources/like_1.png';
    $('.rate1').click(function(){
        var c_id = $(this).parent().attr('id');
        $('#'+c_id+'> '+'.rate1').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate2').attr('src', beforeLike);
        $('#'+c_id+'> '+'.rate3').attr('src', beforeLike);
        $('#'+c_id+'> '+'.rate4').attr('src', beforeLike);
        $('#'+c_id+'> '+'.rate5').attr('src', beforeLike);
        
        $('#'+c_id+'> '+'.rate').attr('value', '1');
    });
    $('.rate2').click(function(){
        var c_id = $(this).parent().attr('id');
        $('#'+c_id+'> '+'.rate1').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate2').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate3').attr('src', beforeLike);
        $('#'+c_id+'> '+'.rate4').attr('src', beforeLike);
        $('#'+c_id+'> '+'.rate5').attr('src', beforeLike);
        
        $('#'+c_id+'> '+'.rate').attr('value', '2');
    });
    $('.rate3').click(function(){
        var c_id = $(this).parent().attr('id');
        $('#'+c_id+'> '+'.rate1').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate2').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate3').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate4').attr('src', beforeLike);
        $('#'+c_id+'> '+'.rate5').attr('src', beforeLike);
        
        $('#'+c_id+'> '+'.rate').attr('value', '3');
    });
    $('.rate4').click(function(){
        var c_id = $(this).parent().attr('id');
        $('#'+c_id+'> '+'.rate1').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate2').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate3').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate4').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate5').attr('src', beforeLike);
        
        $('#'+c_id+'> '+'.rate').attr('value', '4');
    });
    $('.rate5').click(function(){
        var c_id = $(this).parent().attr('id');
        $('#'+c_id+'> '+'.rate1').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate2').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate3').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate4').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate5').attr('src', afterLike);
        
        $('#'+c_id+'> '+'.rate').attr('value', '5');
    });
}
function buttonSet2() {
    var beforeLike = '/assets/sources/like_0.png';
    var afterLike = '/assets/sources/like_1.png';
    $('.rate1').click(function(){
        var c_id = $(this).parent().attr('id');
        $('#'+c_id+'> '+'.rate1').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate2').attr('src', beforeLike);
        $('#'+c_id+'> '+'.rate3').attr('src', beforeLike);
        $('#'+c_id+'> '+'.rate4').attr('src', beforeLike);
        $('#'+c_id+'> '+'.rate5').attr('src', beforeLike);
        
        $('#'+c_id+'> '+'.rate').attr('value', '1');
    });
    $('.rate2').click(function(){
        var c_id = $(this).parent().attr('id');
        $('#'+c_id+'> '+'.rate1').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate2').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate3').attr('src', beforeLike);
        $('#'+c_id+'> '+'.rate4').attr('src', beforeLike);
        $('#'+c_id+'> '+'.rate5').attr('src', beforeLike);
        
        $('#'+c_id+'> '+'.rate').attr('value', '2');
    });
    $('.rate3').click(function(){
        var c_id = $(this).parent().attr('id');
        $('#'+c_id+'> '+'.rate1').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate2').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate3').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate4').attr('src', beforeLike);
        $('#'+c_id+'> '+'.rate5').attr('src', beforeLike);
        
        $('#'+c_id+'> '+'.rate').attr('value', '3');
    });
    $('.rate4').click(function(){
        var c_id = $(this).parent().attr('id');
        $('#'+c_id+'> '+'.rate1').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate2').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate3').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate4').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate5').attr('src', beforeLike);
        
        $('#'+c_id+'> '+'.rate').attr('value', '4');
    });
    $('.rate5').click(function(){
        var c_id = $(this).parent().attr('id');
        $('#'+c_id+'> '+'.rate1').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate2').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate3').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate4').attr('src', afterLike);
        $('#'+c_id+'> '+'.rate5').attr('src', afterLike);
        
        $('#'+c_id+'> '+'.rate').attr('value', '5');
    });
}

function checkrate(form) {
        //form = document.c1_post;
        var c_id = $(form).children()[0].id;
        var rateNum = Number(form.rate.value);
        if (!(rateNum > 0 && rateNum <= 5)) {
            alert("적절한 점수를 주새5");
            return false;
        }
        if (form.message.value =='') {
            alert("댓글을 남겨 주새5");
            return false;
        }
        
        if (getCookie(c_id) != '') {
            alert("한번만 평가할 수 있어5");
            //return true;
        }
        
        setCookie(c_id,'true');
        
}

// 지정한 이름의 쿠키 값을 저장한다. expireDate는 Date() 클래스를 받는다.
function setCookie(name, value, expireDate) {
    var cookie = name + "=" + value;
    if (expireDate) {
        cookie += ";expires=" + expireDate.toUTCString();
    }
    document.cookie = cookie;
}

// 지정한 이름의 쿠키 값을 얻는다.
function getCookie(name) {
    name = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function GetQueryStringParams(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}