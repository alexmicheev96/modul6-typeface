document.addEventListener("DOMContentLoaded", () => {
  // const menu = document.querySelector('.nav-menu__list'),   // класс со всеми элементами обычно это UL
  // menuItem = document.querySelectorAll('.nav-menu__item'),    // это списки li
  // hamburger = document.querySelector('.hamburger');    // класс гамбургера

  // hamburger.addEventListener('click', () => {
  //     hamburger.classList.toggle('hamburger__active');
  //     menu.classList.toggle('nav-menu__list_active');
  // });

  // menuItem.forEach(item => {
  //     item.addEventListener('click', () => {
  //         hamburger.classList.toggle('hamburger__active');
  //         menu.classList.toggle('nav-menu__list_active');
  //     });
  // });
   //степпер 
   const plus  = document.querySelector('.stepper__block_plus');
   const minus  = document.querySelector('.stepper__block_minus');
   const count = document.querySelector('.stepper__block_number');

   plus.addEventListener('click', ()=> {
     if( +count.innerHTML >= 0 ) {
       count.innerHTML++;
     }
   });
   minus.addEventListener('click', ()=> {
     if( +count.innerHTML > 0 ) {
       count.innerHTML--;
     }
   });
// звездный рейтинг
  const multiDefault = () => {
    const element = document.querySelectorAll(".form__select");

    element.forEach((el) => {
      const choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: "",
      });
    });
  };
  multiDefault();

  const ratings = document.querySelectorAll(".ratings");
  if (ratings.length > 0) {
    initRatings();
  }
  //основная функция
  function initRatings() {
    let ratingActive, ratingValue, ratingText;

    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
    }
    // инициализирум конкретный рейтинг
    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      if (rating.classList.contains("ratings_set")) {
        setRating(rating);
      }
    }
    //инициализция переменных
    function initRatingVars(rating) {
      ratingActive = rating.querySelector(".ratings__active");
      ratingValue = rating.querySelector(".ratings__value");
      ratingText = document.querySelector(".ratings__text");
    }
    //изменяем ширину акивных звезд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
      ratingText.textContent = `based on ${index * 2} ratings`;
    }
    //возможность указать оценку
    function setRating(rating) {
      const ratingItems = rating.querySelectorAll(".ratings__item");

      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index];

        ratingItem.addEventListener("mouseenter", (e) => {
          //обнуление переменной
          initRatingVars(rating);

          //обновление активных звезд
          setRatingActiveWidth(ratingItem.value);
        });
        ratingItem.addEventListener("mouseleave", (e) => {
          //обнуление переменной

          //обновление активных звезд
          setRatingActiveWidth();
        });

        ratingItem.addEventListener("click", (e) => {
          //обнуление переменной
          initRatingVars(rating);

          if (rating.dataset.ajax) {
            setRatingValue(ratingItem.value, rating);
          } else {
            ratingValue.innerHTML = index + 1;
            setRatingActiveWidth();
          }
          //обновление активных звезд
        });
      }
    }
  }
});
