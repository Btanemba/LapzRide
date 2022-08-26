$("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
  $(function() {
    $('.slide:gt(0)').hide();
    setInterval(function() {
      $('.slide:first').fadeOut('slow').next().fadeIn('slow').end().appendTo('.slider');
    }, 2500)
  });  

  var index = 0;
  var slides = document.querySelectorAll(".slides");
  var dot = document.querySelectorAll(".dot");
  
  function changeSlide(){
  
    if(index<0){
      index = slides.length-1;
    }
    
    if(index>slides.length-1){
      index = 0;
    }
    
    for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";
      dot[i].classList.remove("active");
    }
    
    slides[index].style.display= "block";
    dot[index].classList.add("active");
    
    index++;
    
    setTimeout(changeSlide,5000);
    
  }
  
  changeSlide(); 

