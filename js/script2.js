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
