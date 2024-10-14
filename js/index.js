document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section[id]');
    const gnb = document.querySelectorAll('.gnb li');

    function setActiveNav() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

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

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: 'slide'
    });
});

document.addEventListener('click', function() {
    let story = document.querySelector('#story');
    let modal = document.querySelector('.modal');
    let span = document.querySelector('.close');

    story.onclick = function () {
        modal.style.display = 'block';
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
