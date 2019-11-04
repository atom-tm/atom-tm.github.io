        function padding() {
              let header = document.getElementById('header');
              let container = document.getElementById('container');
              container.style.paddingTop = header.offsetHeight + 'px';
        }
        window.onresize = () => {
            padding();
        };
        padding();