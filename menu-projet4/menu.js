
      var video = document.getElementById("myVideo");
      var btn = document.getElementById("myBtn");
      function myFunction() {
        if (video.paused) {
          video.play();
          btn.innerHTML = "Pause";
        } else {
          video.pause();
          btn.innerHTML = "Play";
        }
      }

    const myburger = document.querySelector('.myburger');
    var nav = document.querySelector('.aftermenu');
    var nav1 = document.querySelector('.aftermenu1');
    var hover = document.querySelector('data-before');
    myburger.addEventListener('mouseover', () => {
       hover.style.top= 10+'px';
    });

    myburger.addEventListener('click', () => {
      myburger.classList.toggle('active');
      nav.classList.toggle('aftermenu_open');
      nav1.classList.toggle('aftermenu1_open');
    });
