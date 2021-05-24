// SLIDER
    //=================== SLIDER ======================//

$('.main__second-section-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".main__second-section--prev",
    nextArrow: ".main__second-section--next",
  });
$('.main__fourth-section--slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".main__fourth-section-prev-btn",
    nextArrow: ".main__fourth-section-next-btn",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
    ]
  });
$('.main__eight-section--slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".main__eight-section--prev",
    nextArrow: ".main__eight-section--next",
  });
$('.buy-flat--slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".buy-flat--prev",
    nextArrow: ".buy-flat--next",
})
$('.object__sell-flat--slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".object-sell-flat--prev",
    nextArrow: ".object-sell-flat--next",
})
$('.object__new-buildings--slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".object-sell-flat--prev",
    nextArrow: ".object-sell-flat--next",
    responsive: [
    {
      breakpoint: 1023, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 575, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
    ]
})
$('.rent-flat--slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".rent-flat--prev",
    nextArrow: ".rent-flat--next",
})
$('.new-buildings--slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".new-buildings--prev",
    nextArrow: ".new-buildings--next",
});
$('.commercial--slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".commercial--prev",
    nextArrow: ".commercial--next",
})


    



$('.filter__agents--submenu-item').on('click', function () {
  $(this).addClass('filter__agents--submenu-item--active'); // выделяем выбранное значение 
  $(this).siblings().removeClass('filter__agents--submenu-item--active'); // убираем выделение других элементов
  var choice = $(this).html(); // сохраняем в переменную значение выбранного элемента
  $(this).parent().parent().find('.forum__filter--apartment').html(choice); // подставляем значение переменной в спан
  $('.filter__agents--submenu').removeClass('filter__agents--submenu--active'); // скрываем дроплист 
})
// MAIN TAB CHOOSE //
$('.main__second-section-tab').on('click', function () {
    $(this).addClass('main__second-section-tab--active'); // выбраному табу даём активный класс (выделяем его)
    $(this).siblings().removeClass('main__second-section-tab--active'); // у другого таба убираем активный класс
    $($(this).find('a').attr('href')).css('display', 'block'); // показываем контент активного таба
    $($(this).siblings().find('a').attr('href')).css('display', 'none'); // скрываем контент неактивного таба
  });
  
  // HOT OFFERS TAB CHOOSE //
  $('.hot-offers__new-buildings-tab').on('click', function () { 
    $(this).addClass('hot-offers__new-buildings-tab--active');  // выбраному табу даём активный класс (выделяем его)
    $(this).siblings().removeClass('hot-offers__new-buildings-tab--active'); // у другого таба убираем активный класс
    $($(this).find('a').attr('href')).css('display', 'block'); // показываем контент активного таба
    $($(this).siblings().find('a').attr('href')).css('display', 'none'); // скрываем контент неактивного таба
  });
// NEWS CATEGORY ADD CLASS ACTIVE //
$('.news__category--link').on('click', function() {
    $('.news__category--link').removeClass('news__category--link--active'); // убираем у всех категорий активный класс
    $(this).addClass('news__category--link--active'); // выбранной категории даём активный класс
  })
  

//=================== POPUPS ======================//
    $('body').on('click', '.close-btn', function () {
        $('.overlay, .popup').fadeOut('slow'); // плавно скрываем поп-ап и убираем затемнение 
      });
      
      $('body').on('click', '.country-choose__popup--region', function () {
        $('#country-choose--region').removeClass('country-choose__popup--list--active'); // скрываем блок с городами
        $('#country-choose--city').addClass('country-choose__popup--list--active'); // показываем блок с районами
      });
      
      // LOCATION CHOOSE POPUP FINAL STAGE ELEMENT CHOOSE //
      $('body').on('click', '.country-choose_popup--city', function () {
        $(this).addClass('country-choose__popup--li--active'); // даём активный класс (выделяем выбор)
        $(this).removeClass('country-choose__popup--li--deactive'); // убираем класс, который показывает неактивный элемент
        $(this).siblings().addClass('country-choose__popup--li--deactive'); // даём остальныи лишкам неактивный класс
        $(this).siblings().removeClass('country-choose__popup--li--active'); // убираем остальным лишкам активный класс
        $('.country-choose--btn').addClass('country-choose--btn--active'); // показываем кнопку выбора города
        $('.image-button--submit').css('display', 'none'); // скрываем кнопку поиска города
        $('.country-choose__popup--inputs').addClass('country-choose__popup--inputs--active'); // даём диву с поиском другие падинги
      });
      
      
      // SLIDER ITEM ADD TO FAVORITE //
      $('body').on('click','.add-to-favorite--btn', function () {
        $(this).toggleClass("like"); // меняем картинку добавить в избранное 
      });
      
      // LOCATION POPUP SHOW//
      $('.my-location').on('click', function () {
        $('.overlay, #country-choose-popup').fadeIn('slow'); // открываем затемнение и вызываем поп-ап
      });
      
      // REPORT POPUP SHOW //
      $('.apartment__sale--status-report').on('click', function () {
          $('.overlay, #complain__popup').fadeIn('slow'); // открываем затемнение и вызываем поп-ап
      });
      
      // APARTMENTS CHOOSE POPUP SHOW //
      $('.choose-from').on('click', function () {
          $('.overlay, #choice-apartment__popup').fadeIn('slow'); // открываем затемнение и вызываем поп-ап
      });
      
      // BOOKING POPUP SHOW //
      $('.white-btn-reservation').on('click', function () {
          $('.overlay, #booking__popup').fadeIn('slow'); // открываем затемнение и вызываем поп-ап
      });
      
      // FILTER POPUP SHOW //
      $('.my-filters__edit--link').on('click', function () {
          $('.overlay, #filter__popup').fadeIn('slow'); // открываем затемнение и вызываем поп-ап
      });
      
      // REGISTER POPUP SHOW//
      // $('#').on('click', function () {
      //     $('.overlay, #registration-popup').fadeIn('slow'); // открываем затемнение и вызываем поп-ап
      // });
      
      // ENTER POPUP SHOW //
      // $('#').on('click', function () {
      //     $('.overlay, #enter-popup').fadeIn('slow'); // открываем затемнение и вызываем поп-ап
      // });
      
// PRIVATE OFFICE //

$.fn.hasAttr = function(name) {  
    return this.attr(name) !== undefined; // функция проверки на наличие атрибута у элемента 
 };

$('.private-office__aside-link').on('click', function () {
    $(this).addClass('private-office__aside-link--active'); // выделяем таб списка aside в личном кабинете
    $(this).siblings().removeClass('private-office__aside-link--active'); // убираем выделение остальных табов
    $('.private-office__tab').removeClass('private-office__tab--active'); // скрываем контент всех табов
    $($(this).find('a').attr('href')).addClass('private-office__tab--active');  // показываем контент выбранного таба
});

$('.private-office__top-up-link').on('click', function () {
    $(this).addClass('private-office__top-up-link--active'); // выделяем кнопку "Пополнить"
    $(this).parent().parent().find('.private-office__aside-link').removeClass('private-office__aside-link--active'); // убираем выделение всех табов личного кабинета
    $('.private-office__tab').removeClass('private-office__tab--active'); // скрываем контент всех табов
    $($(this).attr('href')).addClass('private-office__tab--active'); // показываем контент 
});

$('.private-office__balance-top-up-balance').on('click', function () {
    $(this).parent().parent().find('.private-office__aside-link').removeClass('private-office__aside-link--active'); // убираем выделение всех табов личного кабинета
    $('.private-office__tab').removeClass('private-office__tab--active'); // скрываем конетнт всех табов
    $($(this).attr('href')).addClass('private-office__tab--active'); // показываем котнент "пополнить баласн"
});

$('.private-office__my-ad-card--promote').on('click', function () {
    $('.private-office__aside-link').removeClass('private-office__aside-link--active'); // убираем выделение всех табов личного кабинета
    $('.private-office__tab').removeClass('private-office__tab--active'); // скрываем конетнт всех табов
    $($(this).attr('href')).addClass('private-office__tab--active'); // показываем страницу с продвижением обьявления
});

$('.private-office__settings-profile-label').on('click', function (event) {
    $(this).addClass('filter-radio-button--active'); // выделяем выбранный блок "Тип аккаунта"
    $(this).siblings().removeClass('filter-radio-button--active'); // убираем выделение других блоков "Тип аккаунта"
    event.preventDefault();
    if ($(this).find('input').hasAttr('checked', 'checked')) { // проверка на наличие атрибута у input
        $(this).find('input').removeAttr('checked', 'checked'); // если атрибут checked есть, убираем данный атрибут 
    }
    else {
        $(this).find('input').attr('checked', 'checked'); // если атрибута checked нет, добавляем атрибут 
    }
  });

$('.private-office__balance-filter').on('click', function () {
    $(this).addClass('private-office__balance-filter--active'); // выделяем выбранный фильтр 
    $(this).siblings().removeClass('private-office__balance-filter--active'); // убираем выделение остальных фильтров 
    $('.private-office__balance-full-history-items').removeClass('private-office__balance-full-history-items--active'); // скрываем контент 
    $($(this).attr('href')).addClass('private-office__balance-full-history-items--active'); // показываем контент выбранного фильтра
});

$('.private-office__messages-chat').on('click', function () {
    $(this).addClass('private-office__messages-chat--active'); // выделяем выбранное обьявление, показываем чат в данном обьявлении
    $(this).siblings().removeClass('private-office__messages-chat--active') // скрываем чат других обьявлений, убираем выделение других обьявлений
});
$('.private-office__messages-chat--info-mobile').on('click', function () {
    $(this).parent().find('.private-office__messages-chat-open--mobile').toggleClass('private-office__messages-chat-open--mobile-active'); // показываем или скрываем чат в мобильной версии
    $(this).toggleClass('private-office__messages-chat--info-mobile-active') // выделяем выбранное обьявление
});
$('.private-office__filter-links').on('click', function () {
    $(this).toggleClass('private-office__filter-links--active'); // поворачиваем стрелочку 
    $(this).find('.private-office__filters-menu').toggleClass('private-office__filters-menu--active'); // показываем дроплист
});
$('.notification-close-btn').on('click', function() {
    $(this).closest('.private-office__notification').css('display', 'none') // скрываем уведомления в личном кабинете
});

$('.private-office__aside-link--notifications').on('click', function () {
    $(this).find('.private-office__aside-link--notification').css('display', 'none'); // при нажатии на линк в aside в личном кабинете, где есть уведомления, скрываем уведомления
});

// PHONE MASK //
$(function() {
    $('.phone-mask').mask('+7(000)000-00-00'); // маска телефона
  });
  
  // Private-office Settings PHONE-CHANGE //
  $('body').on('click', '.private-office__settings-profile-item--phone-change', function() {
    $(this).parent().find('.private-office__settings-profile-item--phone').addClass('private-office__settings-profile-item--phone--active'); // убираем затемнение с блока с телефоном и убираем текст "Подтверждён"
    $(this).parent().find('.private-office__settings-profile-item--phone').find('input').removeAttr('readonly'); // даём возможность редактировать инпут с телефоном
    $(this).parent().find('.private-office__settings-profile-item--phone').find('input').attr('required'); // добавляем атрибут инпуту, чтобы он был обязательным для заполнения
    $(this).parent().find('.private-office__settings-profile-item--phone').find('input').val(''); // сбрасываем значение инпута с телефоном
    $(this).css('display', 'none'); // скрываем кнопку "Изменить номер"
    $(this).parent().find('.private-office__settings-profile-item--phone-save').css('display', 'block'); // показываем кнопку "Сохранить номер"
  });
  
  // Private-office Settings NEW-PHONE-NUMBER-SAVE //
  $('body').on('click', '.private-office__settings-profile-item--phone-save', function() {
    $(this).css('display', 'none'); // скрываем кнопку "Сохранить номер"
    $(this).parent().find('.private-office__settings-profile-item--phone-change').css('display', 'block'); // показываем кнопку изменить номер
    $(this).parent().find('.private-office__settings-profile-item--phone').find('input').attr('readonly', 'readonly'); // убираем возможность редактировать инпут с телефоном
    $(this).parent().find('.private-office__settings-profile-item--phone').removeClass('private-office__settings-profile-item--phone--active'); // показываем текст "подтвержднём" и затемняем див 
  });
  // Private-office Settings ADD-NEW-PHONE //
  $('body').on('click', '.private-office__settings-profile-item--add-phone-btn', function(){
    $(this).closest('.private-office__settings-profile-item--phone-field').after('<div class="private-office__settings-profile-item private-office__settings-profile-item--phone-field"><h4 class="private-office__settings-profile-item--phone-title"></h4><div class="private-office__settings-profile-item--wrapper private-office__settings-profile-item--wrapper-phone"><div class="private-office__settings-profile-item-phone--wrapper"><div class="private-office__settings-profile-item--name private-office__settings-profile-item--phone private-office__settings-profile-item--phone--active"><input id="phone" type="text" class="phone-mask" placeholder="+7 (__) __-__-__"><p>Подтверждён</p></div><div class="private-office__settings-profile-item--add-phone"><button class="private-office__settings-profile-item--add-phone-btn">Добавить номер телефона</button><button class="private-office__settings-profile-item--hide-phone-btn">Скрыть номер</button><button class="private-office__settings-profile-item--show-phone-btn" style="display: none;">Показать номер</button></div></div><button class="private-office__settings-profile-item--phone-change white-green-button" style="display: none;">Изменить номер</button><button class="private-office__settings-profile-item--phone-save green-button" style="display: block;">Сохранить номер</button></div></div>'); // добавляем блок с телефоном 
  });
  
  // PRIVATE OFFICE SETTIGNS SAVE PHONE VALUE //
  $('body').on('input', '.phone-mask', function () {
    var phoneValue = $(this).val(); // сохраняем в переменную значения инпута с телефоном при вводе данных в него
    $(this).attr('value', phoneValue); // подставляем в атрибут value значение переменной
  });
  
  // PRIVATE OFFICE SETTINGS HIDE NUMBER //
  $('body').on('click', '.private-office__settings-profile-item--hide-phone-btn', function() {
    $(this).parent().parent().find('.phone-mask').attr('type', 'password'); // скрываем выбранный телефон
    $(this).css('display', 'none'); // скрываем кнопку "скрыть телефон"
    $(this).parent().find('.private-office__settings-profile-item--show-phone-btn').css('display', 'block') // показываем кнопку "показать телефон"
  })
  
  // PRIVATE OFFICE SETTINGS SHOW NUMBER //
  $('body').on('click', '.private-office__settings-profile-item--show-phone-btn', function() {
    $(this).parent().parent().find('.phone-mask').attr('type', 'text'); // показываем выбранный телефон
    $(this).css('display', 'none'); // скрываем кнопку "показать телефон"
    $(this).parent().find('.private-office__settings-profile-item--hide-phone-btn').css('display', 'block') // показываем кнопку "скрыть телефон"
  })
  
  
  
$.fn.hasAttr = function(name) {  
    return this.attr(name) !== undefined;
 };

var FullFilter = $('#FullFilter');
var FilterUncovered = $('.filter__uncovered');
var FilterSecondMenu = $('.filter__second--menu');
var FilterUncoveredSecondMenu = $('.filter__uncovered--second-menu');
var RollUpUncoveredSecondMenu = $('#RollUpUncoveredSecondMenu');
FullFilter.click(function (){
    $(FilterUncovered).not($(this)).removeClass('none');
    $(FilterUncoveredSecondMenu).not($(this)).removeClass('none');
    $(FilterSecondMenu).not($(this)).addClass('none');
});
RollUpUncoveredSecondMenu.click(function (){
    $(FilterUncovered).not($(this)).addClass('none');
    $(FilterUncoveredSecondMenu).not($(this)).addClass('none');
    $(FilterSecondMenu).not($(this)).removeClass('none');
});

$('.filter__uncovered--field-label').on('click', function (event) {
    $(this).toggleClass('label--border');
    event.preventDefault();
    if ($(this).find('input').hasAttr('checked', 'checked')) {
        $(this).find('input').removeAttr('checked', 'checked');
    }
    else {
        $(this).find('input').attr('checked', 'checked');
    }
});

$('.new__ad--label').on('click', function (event) {
    $(this).toggleClass('label--border');
    event.preventDefault();
    if ($(this).find('input').hasAttr('checked', 'checked')) {
        $(this).find('input').removeAttr('checked', 'checked');
    }
    else {
        $(this).find('input').attr('checked', 'checked');
    }
});

$('.object--field-label').on('click', function (event) {
    $(this).toggleClass('label--border');
    event.preventDefault();
    if ($(this).find('input').hasAttr('checked', 'checked')) {
        $(this).find('input').removeAttr('checked', 'checked');
    }
    else {
        $(this).find('input').attr('checked', 'checked');
    }
});

$('.form__field--delete-variant').on('click', function (event) {
    $(this).toggleClass('label--border');
    event.preventDefault();
    if ($(this).find('input').hasAttr('checked', 'checked')) {
        $(this).find('input').removeAttr('checked', 'checked');
    }
    else {
        $(this).find('input').attr('checked', 'checked');
    }
});

$('#edit-filter').on('click', function () {
    $('.overlay, #filter__popup').fadeIn('slow');
});

$('.my-filters__links').on('click', function (event) {
    $('.filter__second--menu-arrow').toggleClass('filter-rotate');
    $('.my-filters__links--second-menu').toggleClass('none');
});



$('#reset-filter').on('click', function () {
    $('.filter__uncovered').find('.label--border').removeClass('label--border');
    $('.filter__uncovered').find('.filter__uncovered--field-checkbox').removeAttr("checked");
});

$('.apartment__sale--sorting-result-variant').on('click', function (event) {
    $(this).toggleClass('apartment__sale--sorting-active');
    $(this).find('.apartment__sale--sorting-result-show').toggleClass('apartment__sale--sorting-active');
    $(this).find('.apartment__sale--sorting-result-parameter').toggleClass('apartment__sale--sorting-active');
    document.querySelector('.apartment__sale--sorting-result-show-svg').classList.toggle('apartment__sale--sorting-active');
    document.querySelector('.apartment__sale--sorting-result-show-img').classList.toggle('apartment__sale--sorting-active');
    $('.apartment__sale--sorting-result-info').toggleClass('none');
});

$('body').on('click', '.my-filters__second--menu-link', function() {
    filterValue = $(this).html(); // сохраняем в переменную значение выбранного фильтра
    $(this).parent().parent().find('.main__my-filters--value').html(filterValue); // меняем значение спана, подставляем в него значение переменной
  })
  
  // BIG FILTER SHOW //
  $('.main__big-filter').on('click', function() {
    $('.filter__uncovered').removeClass('none'); // показываем большой фильтр
    $('.filter__uncovered--second-menu').removeClass('none'); // показываем дополнительный блок фильтров с кнопками "свернуть"
    $('.main__filters--submenu').addClass('none'); // скрываем блок с кнопками "Открыть большой фильтр" "Мои фильтры"
  });
  
  // BIG FILTER HIDE & SCROLL TO TOP //
  $('.main__rollupmenu').on('click', function () {
      var anchor = $(this); // сохраняем в переменную кнопку "свернуть"
    $('.main__filters--submenu').removeClass('none'); // показываем блок с кнопками "Открыть большой фильтр" "Мои фильтры"
    $('.filter__uncovered').addClass('none'); // скрываем большой фильтр
    $('.filter__uncovered--second-menu').addClass('none'); // скрываем дополнительные фильтры
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 110 // находим якорь кнопки "свернуть", плавно скроллим до якоря
      }, 1000);
  })
  
  // FILTER DROPDOWN OPEN/CLOSE //
  $('.main__filter--apartment').on('click', function () {
    $(this).parent().find('.filter__agents--submenu').toggleClass('filter__agents--submenu--active'); // показываем или скрываем дроплист фильтров 
  });

  $('.forum__theme-creation--category').on('click', function () {
    $(this).find('.filter__agents--submenu').toggleClass('filter__agents--submenu--active'); // показываем или скрываем дроплист фильтров 
  });
  
  // FILTER DROPDOWN CHOOSE VALUE
  $('.filter__agents--submenu-item').on('click', function () {
    $(this).addClass('filter__agents--submenu-item--active'); // выделяем выбранное значение 
    $(this).siblings().removeClass('filter__agents--submenu-item--active'); // убираем выделение других элементов
    var choice = $(this).html(); // сохораняем в переменную значение выбранного элемента
    $(this).parent().parent().find('.main__filter--apartment').html(choice); // подставляем значение переменной в спан
    $(this).closest('.filter__agents--submenu').removeClass('filter__agents--submenu--active'); // скрываем дроплист 
  })


  
  // FILTER COUNTER //
  $(document).ready(function() {
      var i = $(".counter__value").val(); // сохраняем в переменную значение инпута
      $(".filter__second--counter #counter__add").click(function(){
        $(".counter__value").val(++i); // при нажатии на кнопку + добавляем к значению инпута 1
      });
        $(".filter__second--counter #counter__del").click(function(){
          if (i > 1) { // если значение инпута больше 1
          $(".counter__value").val(--i); // отнимаем у значения 1
        } else {
          $(".counter__value").val(1); // в других случаях значение инпута всегда равно 1
        }
      });
  });
// take all divs height
var oneH = $('#cleaning').height();
var twoH = $('#photoreport').height();
var threeH = $('#order').height();
var firstH = $(window).height();

$(window).scroll(function() {

    var scroll = $(window).scrollTop();

    
    
    if (scroll >= firstH) {
        $(".work__content--process #WorkContentCleaningLink:eq(0)").addClass("work__content--process-active--link");
    }
     // if you scroll over first element and second element
    //  $(window).scrollTop() > $('.header').height() - 10)
    if (scroll >= firstH + oneH - 94){
        $('.work__content--process #WorkContentCleaningLink:eq(0)').removeClass('work__content--process-active--link');
        $(".work__content--process #WorkContentCleaningLink:eq(1)").addClass("work__content--process-active--link");
    }
    else { 
        $('.work__content--process #WorkContentCleaningLink:eq(1)').removeClass('work__content--process-active--link');
    }
    // if you scroll over first, second and third element
    if (scroll >= firstH + oneH + twoH) {
        $('.work__content--process #WorkContentCleaningLink:eq(1)').removeClass('work__content--process-active--link');
        $(".work__content--process #WorkContentCleaningLink:eq(2)").addClass("work__content--process-active--link");
    }
    else { 
        $('.work__content--process #WorkContentCleaningLink:eq(2)').removeClass('work__content--process-active--link');
    }

});

$('.work__content--process #WorkContentCleaningLink').bind("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 110
    }, 1000);
    e.preventDefault();
  });

  if($(window).width() < 1460)
  {

    if (scroll >= firstH + oneH - 0){
        $('.work__content--process #WorkContentCleaningLink:eq(0)').removeClass('work__content--process-active--link');
        $(".work__content--process #WorkContentCleaningLink:eq(1)").addClass("work__content--process-active--link");
    }
    else { 
        $('.work__content--process #WorkContentCleaningLink:eq(1)').removeClass('work__content--process-active--link');
    }

  }
$('.place-an-ad--button .info-icon').on('mouseover', function () {
    $(this).parent().find('.info-icon-prompt').fadeIn(150);
});

$('.place-an-ad--button .info-icon').on('mouseout', function () {
    $(this).parent().find('.info-icon-prompt').fadeOut(150);
});

// Functions
function userAccountShow() {
    let userAccountBlock = $('.user-account-icon').parent().find('.user-account__block');

    if (userAccountIconActive == false) {
        userAccountBlock.fadeIn(300);
        userAccountIconActive = true;

        if (notificationsIconActive == true) {
            notificationsShow();
        }

        if (favoritesIconActive == true) {
            favoritesShow();
        }
    } else {
        userAccountBlock.fadeOut(300);
        userAccountIconActive = false;
    }
}

function notificationsShow() {
    let notificationsBlock = $('.notifications-icon').parent().find('.notifications__block');

    if (notificationsIconActive == false) {
        notificationsBlock.fadeIn(300);
        notificationsIconActive = true;

        if (userAccountIconActive == true) {
            userAccountShow();
        }

        if (favoritesIconActive == true) {
            favoritesShow();
        }
    } else {
        notificationsBlock.fadeOut(300);
        notificationsIconActive = false;
    }
}

function favoritesShow() {
    let favoritesBlock = $('.favorites-icon').parent().find('.favorites__block');

    if (favoritesIconActive == false) {
        favoritesBlock.fadeIn(300);
        favoritesIconActive = true;

        if (userAccountIconActive == true) {
            userAccountShow();
        }

        if (notificationsIconActive == true) {
            notificationsShow();
        }
    } else {
        favoritesBlock.fadeOut(300);
        favoritesIconActive = false;
    }
}

// User account block show/hide
var userAccountIconActive = false;
$('.user-account-icon').on('click', userAccountShow);

// Notifications block show/hide
var notificationsIconActive = false;
$('.notifications-icon').on('click', notificationsShow);

// Favorites block show/hide
var favoritesIconActive = false;
$('.favorites-icon').on('click', favoritesShow);

// Notifications status remove class 'notifications--active'
$('.notifications-icon').on('click', function() {
    if ($('.notifications-status').hasClass('notifications--active')) {
        $('.notifications-status').removeClass('notifications--active').addClass('notifications--inactive');
    }
});

// Show/Hide search form
$('.search .search-icon').on('click', function() {
    let a = $(this).parent().parent().parent().parent().find('.search-form__container');
    
    if (userAccountIconActive == true) {
        userAccountShow();
    }

    if (notificationsIconActive == true) {
        notificationsShow();
    }

    if (favoritesIconActive == true) {
        favoritesShow();
    }

    a.slideDown(200);
    a.find('.search-form__field-text').focus();
});

$('.search-form__container .search-form__field-text').on('focusout', function() {
    $('.search-form__container').slideUp(200);
});

// Show/Hide dropdown
$('.search-form__container .search-form__field-text').on('input', function() {
    if ($(this).val() == '') {
        $(this).parent().find('.dropdown').slideUp(200);
    } else {
        $(this).parent().find('.dropdown').slideDown(200);
    }
});

    $('.header__mobile-sidebar--item').on('mousedown', function (event) {
        event.preventDefault(); // отмена стандартного поведения браузера
        $(this).toggleClass('header__mobile-sidebar--item--active');  // меняем положение стрелочки 
        $(this).find('.submenu__items').toggleClass('submenu__items--active'); // скрываепм или показываем саб меню в сайдбаре моб версии
      });
      
      $('.header__mobile-sidebar--close-btn').on('click', function () {
        $('.header__mobile-sidebar').fadeOut('slow'); // плавно скрываем сайдбар моб версии
      });
      
      $('.header__burger-menu--btn').on('click', function () {
        $('.header__mobile-sidebar').fadeIn('slow'); // показываем сайдбар на моб версии 
      });
      
       $(window).scroll(function(){
          if ($(window).scrollTop() > $('.header').height() - 10) { // если скролл вниз от верхней точки страницы больше чем высота шапки 
              $('.header').css('transition', 'all .3s ease-in-out'); // добавляем плавность 
              $('.header').addClass('header__fixed'); // фиксируем шапку
          }
          else {
              $('.header').removeClass('header__fixed'); // убираем фиксацию шапки
            }
          });
var ApartmentChat = $('#apartment__chat #apartment__chat--btn');
var ApartmentChatLinks = $('#apartment__chat #apartment__chat--links');
$(ApartmentChat).on('click', function () {
    $(this).parent().find(ApartmentChatLinks).toggleClass('none');
});

$('.apartment__img--photos').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1
});

$('#apartment__sale--bar-block-graphic-price').on('click', function () {
    $('.apartment__sale--bar-block-graphic-price').toggleClass('none');
});

  // take all divs height
var oneObj = $('#property').height();
var twoObj = $('#address').height();
var threeObj = $('#house').height();
var fourObj = $('#flat').height();
var fiveObj = $('#layout').height();
var sixObj = $('#photos').height();
var sevenObj = $('#facilities').height();
var eightObj = $('#price').height();
var nineObj = $('#contacts').height();
var firstObj = $(window).height();

$(window).scroll(function() {

  var scrollObj = $(window).scrollTop();
  
  if (scrollObj >= firstObj) {
      $(".ad__progress--links .ad__progress--link:eq(0)").addClass("ad__progress--link-active");
  }
   // if you scroll over first element and second element
  if (scrollObj >= firstObj + oneObj - 376) {
      $('.ad__progress--links .ad__progress--link:eq(0)').removeClass('ad__progress--link-active');
      $(".ad__progress--links .ad__progress--link:eq(1)").addClass("ad__progress--link-active");
  }
  else { 
      $('.ad__progress--links .ad__progress--link:eq(1)').removeClass('ad__progress--link-active');
  }
  // if you scroll over first, second and third element
  if (scrollObj >= firstObj + oneObj + twoObj - 376) {
      $('.ad__progress--links .ad__progress--link:eq(1)').removeClass('ad__progress--link-active');
      $(".ad__progress--links .ad__progress--link:eq(2)").addClass("ad__progress--link-active");
  }
  else { 
      $('.ad__progress--links .ad__progress--link:eq(2)').removeClass('ad__progress--link-active');
  }

  if (scrollObj >= firstObj + oneObj + twoObj + threeObj - 376) {
    $('.ad__progress--links .ad__progress--link:eq(2)').removeClass('ad__progress--link-active');
    $(".ad__progress--links .ad__progress--link:eq(3)").addClass("ad__progress--link-active");
  }
  else { 
      $('.ad__progress--links .ad__progress--link:eq(3)').removeClass('ad__progress--link-active');
  }

  if (scrollObj >= firstObj + oneObj + twoObj + threeObj + fourObj - 376) {
    $('.ad__progress--links .ad__progress--link:eq(3)').removeClass('ad__progress--link-active');
    $(".ad__progress--links .ad__progress--link:eq(4)").addClass("ad__progress--link-active");
  }
  else { 
      $('.ad__progress--links .ad__progress--link:eq(4)').removeClass('ad__progress--link-active');
  }

  if (scrollObj >= firstObj + oneObj + twoObj + threeObj + fourObj + fiveObj - 376) {
    $('.ad__progress--links .ad__progress--link:eq(4)').removeClass('ad__progress--link-active');
    $(".ad__progress--links .ad__progress--link:eq(5)").addClass("ad__progress--link-active");
  }
  else { 
      $('.ad__progress--links .ad__progress--link:eq(5)').removeClass('ad__progress--link-active');
  }

  if (scrollObj >= firstObj + oneObj + twoObj + threeObj + fourObj + fiveObj + sixObj - 188) {
    $('.ad__progress--links .ad__progress--link:eq(5)').removeClass('ad__progress--link-active');
    $(".ad__progress--links .ad__progress--link:eq(6)").addClass("ad__progress--link-active");
  }
  else { 
      $('.ad__progress--links .ad__progress--link:eq(6)').removeClass('ad__progress--link-active');
  }

  if (scrollObj >= firstObj + oneObj + twoObj + threeObj + fourObj + fiveObj + sixObj + sevenObj - 188) {
    $('.ad__progress--links .ad__progress--link:eq(6)').removeClass('ad__progress--link-active');
    $(".ad__progress--links .ad__progress--link:eq(7)").addClass("ad__progress--link-active");
  }
  else { 
      $('.ad__progress--links .ad__progress--link:eq(7)').removeClass('ad__progress--link-active');
  }

  if (scrollObj >= firstObj + oneObj + twoObj + threeObj + fourObj + fiveObj + sixObj + sevenObj + eightObj - 188) {
    $('.ad__progress--links .ad__progress--link:eq(7)').removeClass('ad__progress--link-active');
    $(".ad__progress--links .ad__progress--link:eq(8)").addClass("ad__progress--link-active");
  }
  else { 
      $('.ad__progress--links .ad__progress--link:eq(8)').removeClass('ad__progress--link-active');
  }

});

$('.ad__progress--links .ad__progress--link').bind("click", function(e) {
var anchorobject = $(this);
$('html, body').stop().animate({
  scrollTop: $(anchorobject.attr('href')).offset().top - 110
}, 1000);
e.preventDefault();
}); 

// var oneObjTab = $('#description').height();
// var twoObjTab = $('#location').height();
// var threeObjTab = $('#report').height();
// var fourObjTab = $('#rating').height();

// $(window).scroll(function() {
    
//   $(oneObjTab).scrollTop(-94);
//   $(twoObjTab).scrollTop(-94);
//   $(threeObjTab).scrollTop(-94);
//   $(fourObjTab).scrollTop(-94);

//   var scrollObjTab = $(window).scrollTop();

// });

$('.apartment__sale--status-tabs .apartment__sale--status-tab').bind("click", function(e) {
  var anchorobjecttab = $(this);
  $('html, body').stop().animate({
    scrollTop: $(anchorobjecttab.attr('href')).offset().top - 200
  }, 1000);
  e.preventDefault();
});

{
  if($(window).width() < 1460)
  {
      
    if (scrollObj >= firstObj + oneObj + twoObj + threeObj + fourObj + fiveObj - 0) {
      $('.ad__progress--links .ad__progress--link:eq(4)').removeClass('ad__progress--link-active');
      $(".ad__progress--links .ad__progress--link:eq(5)").addClass("ad__progress--link-active");
    }
    else { 
        $('.ad__progress--links .ad__progress--link:eq(5)').removeClass('ad__progress--link-active');
    }
  
    if (scrollObj >= firstObj + oneObj + twoObj + threeObj + fourObj + fiveObj + sixObj - 0) {
      $('.ad__progress--links .ad__progress--link:eq(5)').removeClass('ad__progress--link-active');
      $(".ad__progress--links .ad__progress--link:eq(6)").addClass("ad__progress--link-active");
    }
    else { 
        $('.ad__progress--links .ad__progress--link:eq(6)').removeClass('ad__progress--link-active');
    }
  
    if (scrollObj >= firstObj + oneObj + twoObj + threeObj + fourObj + fiveObj + sixObj + sevenObj - 0) {
      $('.ad__progress--links .ad__progress--link:eq(6)').removeClass('ad__progress--link-active');
      $(".ad__progress--links .ad__progress--link:eq(7)").addClass("ad__progress--link-active");
    }
    else { 
        $('.ad__progress--links .ad__progress--link:eq(7)').removeClass('ad__progress--link-active');
    }
  
    if (scrollObj >= firstObj + oneObj + twoObj + threeObj + fourObj + fiveObj + sixObj + sevenObj + eightObj - 0) {
      $('.ad__progress--links .ad__progress--link:eq(7)').removeClass('ad__progress--link-active');
      $(".ad__progress--links .ad__progress--link:eq(8)").addClass("ad__progress--link-active");
    }
    else { 
        $('.ad__progress--links .ad__progress--link:eq(8)').removeClass('ad__progress--link-active');
    }

  }
}
if($(window).width() < 1200)
  {

    if (scrollObj >= firstObj + oneObj + twoObj + threeObj + fourObj - 0) {
      $('.ad__progress--links .ad__progress--link:eq(3)').removeClass('ad__progress--link-active');
      $(".ad__progress--links .ad__progress--link:eq(4)").addClass("ad__progress--link-active");
    }
    else { 
        $('.ad__progress--links .ad__progress--link:eq(4)').removeClass('ad__progress--link-active');
    }

  }

  $('body').on('click','#AppartmentAddToFavourite', function () {
    $(this).find('.horizontal__favourite--img').toggleClass("like");
    $(this).find('.apartment__favourite--svg').toggleClass("like");
  });

  $('body').on('click','#ApartmentSaleStatusFavourite', function () {
    $(this).find('.apartment__sale--status-favourite-img').toggleClass("like");
  });
var MortgageSlider = document.getElementById("MortgageRange");
var MortgageInput = document.getElementById("MortgageInput");

MortgageInput.oninput = function() {
  MortgageSlider.value = this.value;
}

MortgageSlider.oninput = function() {
  MortgageInput.value = this.value;
}

var PriceSlider = document.getElementById("PriceRange");
var PriceInput = document.getElementById("PriceInput");

PriceInput.oninput = function() {
  PriceSlider.value = this.value;
}

PriceSlider.oninput = function() {
  PriceInput.value = this.value;
}

PriceInput.value = parseFloat(document.getElementById("PriceInput").value.replace(/,/g, ""))
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

PriceInput.onblur = function () {    
  PriceInput.value = parseFloat(document.getElementById("PriceInput").value.replace(/,/g, ""))
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}




// MAIN PAGE MY FILTERS DROPDOWN OPEN-HIDE
$('.main__my-filters').on('click', function() {
    $(this).find('.my-filters__links--second-menu').toggleClass('my-filters__links--second-menu-active'); //показываем или скрываем дроплист с фильтрами
  });
  
  