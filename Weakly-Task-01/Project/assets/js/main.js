$(document).scroll(function(){
if ($(window).scrollTop()>560) {
    $('#navbar').removeClass('bg-dark').addClass('bg-nontrans');
}else{
    if($(window).scrollTop()<=560){
        $('#navbar').removeClass('bg-nontrans').addClass('bg-bg-light');
    }
}
});

const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
    // console.log('Offset: '+offset);
    // console.log('offset * 0.7'+ offset * 0.7);
})

//About
// $(window).on('load', function(){
//     $('.pKiri').addClass('.pMuncul');
// })
//Portofolio
$(window).scroll(function(){
    var wScrool = $(this).scrollTop();

    //head
    
    $('#parallax h1').css({
        'transform' : 'translate(0px, '+ wScrool/2.9 +'%)'
    });
    // $('#parallax p').css({
    //     'transform' : 'translate(0px, '+wScrool/0.5+'%)'
    // });



    if(wScrool > 1150){
        $('.portofolio .card').each(function(i){
         setTimeout(function(){
            $('.portofolio .card').eq(i).addClass('show');
         },400*(i+1) );   
        })
        
    }

})

