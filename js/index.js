document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const gnb = document.querySelectorAll('.gnb li');
    
    function setActiveNav() {
        let index = sections.length;
        
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        gnb.forEach((item) => {
            item.classList.remove('on');
        });
        
        if (gnb[index]) {
            gnb[index].classList.add('on');
        }
    }

    window.addEventListener('scroll', setActiveNav);
    setActiveNav(); // 페이지 로드 시 초기 설정
});

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        speed: 800, // 전환 속도 (밀리초 단위)
        autoplay: {
            delay: 3000, // 슬라이드 전환 지연 시간 (밀리초 단위)
            disableOnInteraction: false, // 사용자가 상호작용해도 autoplay가 중지되지 않음
        },
        effect: 'slide'
    });
});