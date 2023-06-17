//google 검색
document.getElementById('search-link').addEventListener('click', function(event) {
    event.preventDefault();
    var searchTerm = prompt('더 많은 정보를 얻고싶다면?');
    if (searchTerm) {
        var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
        window.open(searchUrl, '_blank');
    }
});

var menuItems = document.querySelectorAll('#menu > li');
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('mouseover', function () {
        var subMenu = this.querySelector('ul');
        if (subMenu) {
            subMenu.style.display = 'block';
        }
    });
    menuItems[i].addEventListener('mouseout', function () {
        var subMenu = this.querySelector('#player >li' && '#site >li');
        if (subMenu) {
            subMenu.style.display = 'none';
        }
    });
}

//carousel
const buttons = document. querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})


// 유튜브
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTube API 로드 후 실행될 함수
function onYouTubeIframeAPIReady() {
  var player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: '4bTOwJLqh60',
  });
}