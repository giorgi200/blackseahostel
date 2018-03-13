// window.onscroll = function() {scrollFunction()};
$(window).on('scroll', function(){
  scrollFunction();
})

function scrollFunction() {
  var element = document.getElementById("hostel");
  if(element){
    if (window.scrollY > 100) {
        $("#hostel").show()
    } else {
      $("#hostel").hide()
    }
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$(document).ready(function(){
    $(".icon").click(function(){
        $(".container5").toggleClass("change");
        $(".topnav2").toggleClass("responsive");
    });
});




var  xs = document.querySelectorAll('.xss .btn-group');
xs[0].addEventListener('click', load_1);
xs[1].addEventListener('click', load_2);
xs[2].addEventListener('click', load_3);
xs[3].addEventListener('click', load_4);
xs[4].addEventListener('click', load_5);
// horizontal - 1 - 16
var  gallery = document.querySelector('.ma');
for (i = 1; i <= 15; i++){
  gallery.innerHTML += '<div class="col-12 col-sm-4 ims">' +
          '<a data-fancybox="gallery" href="../gallery/vertical' + i + '.jpg">' +
            '<img src="../gallery/vertical' + i + '.jpg">'+
          "</a>" +
        "</div"
} 
// vertical - 1 - 16
function load_1(){
  this.style.display = "none";
  for (i = 1; i <= 15; i++){
  gallery.innerHTML += '<div class="col-12 col-sm-4 ims">' +
          '<a data-fancybox="gallery" href="../gallery/horizontal' + i + '.jpg">' +
            '<img src="../gallery/horizontal' + i + '.jpg">'+
          "</a>" +
        "</div"
} 
}
// horizontal - 16 - 30
function load_2(){
  for (i = 16; i <= 30; i++){
  this.style.display = "none";
  gallery.innerHTML += '<div class="col-12 col-sm-4 ims">' +
          '<a data-fancybox="gallery" href="../gallery/vertical' + i + '.jpg">' +
            '<img src="../gallery/vertical' + i + '.jpg">'+
          "</a>" +
        "</div"
} 
}
// vertical - 16 - 30
function load_3(){
  for (i = 16; i <= 30; i++){
    this.style.display = "none";
  gallery.innerHTML += '<div class="col-12 col-sm-4 ims">' +
          '<a data-fancybox="gallery" href="../gallery/horizontal' + i + '.jpg">' +
            '<img src="../gallery/horizontal' + i + '.jpg">'+
          "</a>" +
        "</div"
} 
}
// horizontal - 31 - 45
function load_4(){
  for (i = 31; i <= 45; i++){
    this.style.display = "none";
  gallery.innerHTML += '<div class="col-12 col-sm-4 ims">' +
          '<a data-fancybox="gallery" href="../gallery/vertical' + i + '.jpg">' +
            '<img src="../gallery/vertical' + i + '.jpg">'+
          "</a>" +
        "</div"
} 
}


// horizontal - 46 - 60
function load_5(){
  for (i = 46; i <= 60; i++){
    this.style.display = "none";
  gallery.innerHTML += '<div class="col-12 col-sm-4 ims">' +
          '<a data-fancybox="gallery" href="../gallery/vertical' + i + '.jpg">' +
            '<img src="../gallery/vertical' + i + '.jpg">'+
          "</a>" +
        "</div"
} 
}


// jQuery(document).ready(function($) {
//       $('.rio-promos').slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         arrows: true,
//         responsive: [{
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//           }
//         },
//         {
//            breakpoint: 400,
//            settings: {
//               arrows: false,
//               slidesToShow: 1,
//               slidesToScroll: 1
//            }
//         }]
//     });
// });
        


// $('.single-item-rtl').slick({
//   rtl: true;
//   autoplay:true;
// });



 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  autoplaySpeed: 3500,
  autoplay:true,
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
  
      




function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  // var captionText = document.getElementById("caption");
  // captionText.innerHTML = element.title;
}

// }
// });
