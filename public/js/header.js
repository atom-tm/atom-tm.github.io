        function padding() {
              let navbar = document.getElementById('navbar');
              let container = document.getElementById('header');
              let anchors = document.getElementsByClassName("yakor");
             // container.style.paddingTop = navbar.offsetHeight + 'px';
              for(let elem of anchors) {
                  elem.style.top = -navbar.offsetHeight + 'px';
              }
        }
        window.onresize = () => {
            padding();
        };
        padding();