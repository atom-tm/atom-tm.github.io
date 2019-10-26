/* https://ru.stackoverflow.com/questions/372234/Плавный-скролл-страницы */

function smoothScroll(Element)
{
    Element = document.getElementById(Element);
    var selectedPosX = 0;
    var selectedPosY = 0;
    while (Element != null) {
        selectedPosX += Element.offsetLeft;
        selectedPosY += Element.offsetTop;
        Element = Element.offsetParent;
    }
    window.scrollTo(selectedPosX, selectedPosY);
}
