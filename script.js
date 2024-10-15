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