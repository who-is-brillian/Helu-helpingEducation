//Button SignIn SignUp Navigasi Bar
$(".btn-signIn").hover(
    function() {
      $(this).css('background-color', '#213555');
      $(this).css('color', '#d8c4b6'); // saat mouse masuk
    },
    function() {
      $(this).css('background-color', '#f5efe7');
      $(this).css('color', '#213555'); // saat mouse keluar (reset ke warna asli)
    }
  ); 

  $(".btn-signUp").hover(
    function() {
      $(this).css('background-color', '#f5efe7');
      $(this).css('color', '#213555'); // saat mouse masuk
    },
    function() {
      $(this).css('background-color', '#213555');
      $(this).css('color', '#d8c4b6'); // saat mouse keluar (reset ke warna asli)
    }
  );

//button info selengkapnya
  $(".btn-info").hover(
    function() {
      $(this).css('background-color', '#213555');
      $(this).css('color', '#f5efe7'); // saat mouse masuk
    },
    function() {
      $(this).css('background-color', '#213555');
      $(this).css('color', '#f5efe7'); // saat mouse keluar (reset ke warna asli)
    }
  );

  //button price
  $(".btn-price1").hover(
    function() {
      $(this).css('background-color', '#7c93c3');
      $(this).css('color', '#f5efe7'); // saat mouse masuk
    },
    function() {
      $(this).css('background-color', '#7c93c3');
      $(this).css('color', '#f5efe7'); // saat mouse keluar (reset ke warna asli)
    }
  );
  $(".btn-price2").hover(
    function() {
      $(this).css('background-color', '#4f709c');
      $(this).css('color', '#f5efe7'); // saat mouse masuk
    },
    function() {
      $(this).css('background-color', '#4f709c');
      $(this).css('color', '#f5efe7'); // saat mouse keluar (reset ke warna asli)
    }
  );
  $(".btn-price3").hover(
    function() {
      $(this).css('background-color', '#213555');
      $(this).css('color', '#f5efe7'); // saat mouse masuk
    },
    function() {
      $(this).css('background-color', '#213555');
      $(this).css('color', '#f5efe7'); // saat mouse keluar (reset ke warna asli)
    }
  );
  

  //Button Daftar sekarang
$(".btn-daftar").hover(
  function() {
    $(this).css('background-color', '#DFF5FF');
    $(this).css('color', '#213555'); // saat mouse masuk
  },
  function() {
    $(this).css('background-color', '#f5efe7');
    $(this).css('color', '#213555'); // saat mouse keluar (reset ke warna asli)
  }
);

//animasi shake diskon
  $(document).ready(function(){
    function shake() {
      $('#limited-offer').animate({marginLeft: "-10px"}, 100)
                         .animate({marginLeft: "10px"}, 100)
                         .animate({marginLeft: "-10px"}, 100)
                         .animate({marginLeft: "10px"}, 100)
                         .animate({marginLeft: "0px"}, 100); // Return to original position
    }

    // Trigger the animation when the page loads
    setInterval(shake, 500); // Shake every second
  });