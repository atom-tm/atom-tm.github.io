function init() {

    let navBarId = 'atom-navbar';
    let spacerBlockId = 'atom-spacer';
    let ancorClass = 'atom-ancor';


    /** @description Установка верхнего отступа сайту
     * @param {string} navBarId Id блока навигации
     * @param {string} spacerBlockId Id блока устанавливающего отступ
     */
    function setPaddingTop(navBarId, spacerBlockId) {
        let navBarHeight = getNavHeight(navBarId);
        let spacerBlock = document.getElementById(spacerBlockId);
        if (spacerBlock) {
            spacerBlock.style.height = navBarHeight + "px";
        }
    }


    /** @description Получить высоту блока навигации
     * @param {string} navBarId Id блока навигации
     * @param {number} Высота блока навигации
     */
    function getNavHeight(navBarId) {
        let navBar = document.getElementById(navBarId);
        if (navBar) {
            return navBar.offsetHeight;
        } else {
            return 0;
        }
    }


    /** @description Установка смещения якорям в зависимости от высоты блока навигации
     * @param {string} navBarId Id блока навигации
     * @param {string} ancorClass Имя класса элементов, которым требуется задавать смещение
     */
    function setAncorOffset(navBarId, ancorClass) {
        let offset = getNavHeight(navBarId)
        let ancorsList = document.getElementsByClassName(ancorClass);
        for (ancor of ancorsList) {
            ancor.style.marginTop = -offset + "px";
        }
    }


    /** @description Перемещение к указанному в адресной строке якорю */
    function goToAncorFromHash() {
        if (window.location.hash) {
            window.location = window.location;
        }
    }

    window.addEventListener("load", () => {
        setPaddingTop(navBarId, spacerBlockId);
        setAncorOffset(navBarId, ancorClass);
        goToAncorFromHash();
    });

    window.addEventListener("resize", () => {
        setPaddingTop(navBarId, spacerBlockId);
        setAncorOffset(navBarId, ancorClass);
    });

};

init();