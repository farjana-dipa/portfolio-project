const scrollUp = document.querySelector('.scrollUp');
		window.addEventListener('scroll', () => {
               if(window.pageYOffset > 500){
               	scrollUp.classList.add('active');
               }
               else{
               	scrollUp.classList.remove('active');
               }  

           }); 
               // mixitup
               var mixer = mixitup('.mixer-filter');

               // scrollify
               /*
               $(function() {
               $.scrollify({
                section : ".example-classname",
                 setHeights: false,
                  overflowScroll: true,

                });
               });
               */
         // HUMBERGER MENU
         function openMenu(){
        document.getElementById('navbar').style.height = "100%";
           }
           function closeMenu(){
           document.getElementById('navbar').style.height ="0%";
           }

      // SMOOTH SCROLL
      $(function(){
  $('.menu a').on('click',function(){
    $('html,body').animate({
      scrollTop : $($.attr(this,'href')).offset().top
    },1000);
    
  });
      });