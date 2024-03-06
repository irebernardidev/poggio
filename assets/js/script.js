document.addEventListener("DOMContentLoaded", function () {
    // Back to Top functionality
    var mybutton = document.querySelector(".back-to-top");
  
    if (mybutton) {
      window.onscroll = function () {
        scrollFunction()
      };
  
      function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
  
      mybutton.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    }
  
    // Collapse navbar on click
    $('.navbar-nav>li>a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Show modal on form submit and reset
    $('#join-mailinglist').on('submit', function (e) {
      $('#modal-join-mailinglist').modal('show');
      e.preventDefault();
      $('#join-mailinglist')[0].reset();
    });
  
    $('#contact-form').on('submit', function (e) {
      $('#modal-contact-form').modal('show');
      e.preventDefault();
      $('#contact-form')[0].reset();
    });
  
    // Custom script for "mailto" form submission
    document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevents the default form submission behavior
  
      var name = document.getElementById('input-name').value;
      var email = document.getElementById('input-email').value;
      var message = document.getElementById('text-area').value;
      var subject = encodeURIComponent('Messaggio dal sito web');
      var emailBody = 'Nome: ' + encodeURIComponent(name) + '%0AEmail: ' + encodeURIComponent(email) + '%0AMessaggio: ' + encodeURIComponent(message);
  
      window.location = 'mailto:info@poggioailegni.com?subject=' + subject + '&body=' + emailBody;
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    // Get the button
    var mybutton = document.querySelector(".back-to-top");
  
    if (mybutton) {
      window.onscroll = function () {
        scrollFunction()
      };
  
      function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
  
      // When the user clicks on the button, scroll to the top of the document
      mybutton.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
      });
    }
  });