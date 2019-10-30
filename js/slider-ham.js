//////////start:clider-ham///////////

    //отображение соответствующих фото и контента
    $('.block-worker-hide').hide();
    $('.small-photo').click(slider);

    const arrow1 = document.getElementById('arrow1');
    const arrow2 =  document.getElementById('arrow2');

  // slider for click arrows
    function slider() {
        $(this).removeClass('small-photo-active');
        $(this).addClass('small-photo-active');

        $('.photo-active').removeClass('photo-active');
        $(this).children().addClass('photo-active');

        $('.top-active').removeClass('top-active');
        $(this).addClass('top-active');

        const currentCategory = $(this).data('name');

        $('.block-information-of-worker').each(function (index, item) {
            if ($(item).data('name') === currentCategory) {
                $(item).show();
            }else {
                $(item).hide();
            }
        });
    }

    const photos = document.querySelectorAll('.small-photo');
    const photosArray = Array.prototype.slice.call(photos);

    arrow1.addEventListener('click', function () {
        for(let i =0,flag=true;flag;i++) {
            if (photosArray[i].classList.contains("top-active")) {
                let arrowSlider = slider.bind(photosArray
                    [i ? i - 1 : photosArray.length - 1]);
                arrowSlider();
                flag = false;
            }
        }

    });
    arrow2.addEventListener('click', function () {
        for(let j =0,flag=true;flag;j++) {
            if (photosArray[j].classList.contains("top-active")) {
                let arrowSlider2 = slider.bind(photosArray [j===photosArray.length-1 ? 0 : (j+1)]);
                arrowSlider2();
                flag = false;
            }
        }
    });