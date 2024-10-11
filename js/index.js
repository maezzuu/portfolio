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


