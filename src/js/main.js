 let sliderBalance = document.querySelector('.swiper-balance');
  if (sliderBalance) {
    let swiper = new Swiper(".swiper-balance", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      loopAdditionalSlides: 1
    })
  }

document.addEventListener('DOMContentLoaded', function() {
  
  let sliderMob = document.querySelector('.swiper-mob');
  if (sliderMob){
      let swiper = new Swiper(".swiper-mob", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
         on: {
          slideChange: function () {
            const activeArrowButtons = document.querySelectorAll('.slider__info--arrow.active');
            const activeBox = document.querySelectorAll('.slider__box.active');
            const activeSubmenu = document.querySelectorAll('.slider__submenu.active');
            const buttons = document.querySelectorAll('.slider__btn');
            activeArrowButtons.forEach(function (item) {
              item.classList.remove('active');
            });

            activeBox.forEach(function (item) {
              item.classList.remove('active');
            });

            activeSubmenu.forEach(function (item) {
              item.classList.remove('active');
            });
            buttons.forEach(function (item) {
              item.textContent = item.getAttribute('data-text-expand')
            });
          },
        }
      });
  }
 
    let eyeIcons = document.querySelectorAll('.user__eye');

    eyeIcons.forEach(function(eyeIcon) {
        let parentBlock = eyeIcon.closest('.user__block');
        let passwordInput = parentBlock ? parentBlock.querySelector('.input') : null;

        if (passwordInput) {
            let showPassword = function() {
                passwordInput.type = 'text';
            };

            let hidePassword = function() {
                passwordInput.type = 'password';
            };

            eyeIcon.addEventListener('mousedown', showPassword);
            eyeIcon.addEventListener('mouseup', hidePassword);
            eyeIcon.addEventListener('mouseleave', hidePassword);

            eyeIcon.addEventListener('touchstart', showPassword);
            eyeIcon.addEventListener('touchend', hidePassword);
        }
    });

    let mobileWrap = document.querySelector('.mobile-wrap');
    if (mobileWrap) {
      mobileWrap.addEventListener('click', function() {
        let lineBurger = document.querySelector('.line-burger');
        let mainHeaderList = document.querySelector('.content__list');

        lineBurger.classList.toggle('line-active');
        document.body.classList.toggle('bg');
        if (mainHeaderList.style.display === 'block') {
          slideUp(mainHeaderList, 200);
        } else {
          slideDown(mainHeaderList, 200);
        }
      });
    }
});


window.addEventListener('resize', function() {
  let mainHeaderList = document.querySelector('.content__list');
  let lineBurger = document.querySelector('.line-burger');
  let body = document.body

  if (window.innerWidth > 1023 && mainHeaderList && lineBurger) {
    mainHeaderList.removeAttribute('style');
    lineBurger.classList.remove('line-active');
    body.classList.remove('bg');
  }
});

document.addEventListener('click', function(event) {
  let mainHeaderList = document.querySelector('.content__list');
  let lineBurger = document.querySelector('.line-burger');
  let aside = document.querySelector('.content__aside');

  if (lineBurger && mainHeaderList.style.display === 'block' && !mainHeaderList.contains(event.target) && !lineBurger.contains(event.target) && !aside.contains(event.target)) {
    slideUp(mainHeaderList, 200);
    lineBurger.classList.remove('line-active');
    document.body.classList.remove('bg');
  }
})

function slideDown(element, duration) {
  element.style.display = 'block';
  let height = element.clientHeight;
  element.style.height = '0';
  let startTime = null;

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    let elapsedTime = currentTime - startTime;
    let progress = elapsedTime / duration;

    element.style.height = progress * height + 'px';

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      element.style.height = null;
    }
  }

  requestAnimationFrame(animate);
}

function slideUp(element, duration) {
  let height = element.clientHeight;
  let startTime = null;

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    let elapsedTime = currentTime - startTime;
    let progress = elapsedTime / duration;

    element.style.height = (1 - progress) * height + 'px';

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      element.style.display = 'none';
      element.style.height = null;
    }
  }

  requestAnimationFrame(animate);
}

document.addEventListener("DOMContentLoaded", function() {
    let subtitles = document.querySelectorAll(".support__item");

    subtitles.forEach(function(subtitle, index) {
        subtitle.addEventListener("click", function() {
          if (window.innerWidth < 1024) {
            let answer = document.querySelectorAll(".support__text")[index];
            answer.classList.toggle('active');
            subtitle.classList.toggle('active');
          }
        });
    });
});

const fileInput = document.getElementById('fileInput');
if (fileInput) {
  fileInput.addEventListener('change', function() {
    let fileName = fileInput.files[0].name;
    let viewNameFile = document.getElementById('fileName')
    viewNameFile.textContent = 'Вибраний файл: ' + fileName;
  });
}
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.slider__btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sliderBox = button.closest('.slider__box');
            sliderBox.classList.toggle('active');

            const isActive = sliderBox.classList.contains('active');
            button.textContent = isActive ? button.getAttribute('data-text-collapse') : button.getAttribute('data-text-expand');
            
            const sliderSubmenu = sliderBox.querySelector('.slider__submenu');
            if (isActive) {
                sliderSubmenu.classList.add('active');
            } else {
                sliderSubmenu.classList.remove('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sliderBox = document.querySelectorAll('.slider__box');
    if (sliderBox) {
      sliderBox.forEach(function(item) {
        const arrowButton = item.querySelector('.slider__info--arrow');
        const sliderDetails = item.querySelector('.slider__details');

        if (arrowButton && sliderDetails) {
            arrowButton.addEventListener('click', function() {
              arrowButton.classList.toggle('active');
              sliderDetails.classList.toggle('active');
            });
        }
    });
  }
});

function addIconClickHandlers() {
    const tableState = document.querySelectorAll('.table__state');
    tableState.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation();

            const tableRow = this.closest('.table__row');

            if (tableRow) {
                tableRow.classList.toggle('active');

                const tableContent = tableRow.querySelector('.table__content');

                if (tableContent) {
                    tableContent.classList.toggle('active');
                }
            }
        });
    });
}

addIconClickHandlers();

document.addEventListener('click', function(event) {
    if (event.target.matches('.popup__btn--cancel')) {
         let popupParent = event.target.closest('.popup');
        if (popupParent && popupParent.classList.contains('active')) {
            popupParent.classList.remove('active');
        }
    }  
    if (event.target.closest('.table__action--settings')) {
        document.querySelector('.popup--settings').classList.add('active')
    }

    if (event.target.closest('.popup__btn--add, .table__add--offers')) {
      document.querySelector('.popup--add').classList.add('active');
      document.querySelector('.popup--settings').classList.remove('active');
    }

    if (event.target.closest('.table__edit-user')) {
      document.querySelector('.popup--user').classList.add('active');
    }

    if (event.target.closest('.edit-transaction')) {
      document.querySelector('.popup--editPay').classList.add('active');
    }
    if (event.target.closest('.add-media')) {
      document.querySelector('.popup--media').classList.add('active');
    }
    if (event.target.closest('.add-offers')) {
      document.querySelector('.popup--offers').classList.add('active');
    }
    if (event.target.closest('.add-card')) {
      document.querySelector('.popup--add_card').classList.add('active');
    }
    if (event.target.closest('.show-balance')) {
      document.querySelector('.popup--show_balance').classList.add('active');
    }
    if (event.target.closest('.top_up-balance')) {
      document.querySelector('.popup--top_up_account').classList.add('active');
    }
    if (event.target.closest('.edit-profile')) {
      document.querySelector('.popup--edit_profile').classList.add('active');
    }
    if (event.target.closest('.delete-profile')) {
      document.querySelector('.popup--delete_profile').classList.add('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const selectElements = document.querySelectorAll('.custom-select__inner');

    selectElements.forEach(selectElement => {
        const customSelect = selectElement.closest('.custom-select__block');
        console.log(customSelect);
        const customOptions = document.createElement('div');
        customOptions.classList.add('custom-select__options');

        Array.from(selectElement.options).forEach(option => {
            const customOption = document.createElement('div');
            customOption.classList.add('custom-select__item');
            customOption.textContent = option.textContent;
            customOption.dataset.value = option.value;

            customOption.addEventListener('click', (event) => {
                // Remove active class from all items
                customOptions.querySelectorAll('.custom-select__item').forEach(item => {
                    item.classList.remove('active');
                });
                // Add active class to the clicked item
                customOption.classList.add('active');

                selectElement.value = option.value;
                customSelect.dataset.content = option.textContent;
                customOptions.classList.remove('visible');
                customOptions.remove();
                event.stopPropagation();
            });

            customOptions.appendChild(customOption);
        });

        // Set initial active class based on selected option
        const initialSelectedOption = selectElement.options[selectElement.selectedIndex];
        const initialCustomOption = customOptions.querySelector(`[data-value="${initialSelectedOption.value}"]`);
        if (initialCustomOption) {
            initialCustomOption.classList.add('active');
        }

        customSelect.dataset.content = initialSelectedOption.textContent;

        const positionCustomOptions = () => {
            const optionsRect = customSelect.getBoundingClientRect();
            const screenHeight = window.innerHeight;
            const heightSelect = customSelect.offsetHeight;
            console.log(customOptions.offsetHeight, optionsRect.top)
           if (screenHeight < optionsRect.top + customOptions.offsetHeight) {
            customOptions.style.top = optionsRect.top - customOptions.offsetHeight + heightSelect + 'px';
           } else {
            customOptions.style.top = optionsRect.top  + 'px';
          }
            customOptions.style.left = optionsRect.left + 'px';
        };

        customSelect.addEventListener('click', (event) => {
            event.stopPropagation();
            document.querySelectorAll('.custom-select__options.visible').forEach(visibleOptions => {
                visibleOptions.classList.remove('visible');
                visibleOptions.remove();
            });
            document.body.appendChild(customOptions);
            customOptions.classList.toggle('visible');
            positionCustomOptions();
        });

        window.addEventListener('resize', positionCustomOptions);
        window.addEventListener('scroll', positionCustomOptions);
         const tableWrap = document.querySelector('.table__container');
        if (tableWrap) {
            tableWrap.addEventListener('scroll', () => {
                customOptions.classList.remove('visible');
                customOptions.remove();
            });
        }

        document.addEventListener('click', () => {
            customOptions.classList.remove('visible');
            customOptions.remove();
        });
    });
});

const popupBlocks = document.querySelectorAll('.popup__block');

function deactivateAll(popupBlock) {
    const dropdownItems = popupBlock.querySelectorAll('.dropdown__item, .dropdown__elem');
    dropdownItems.forEach(item => {
        item.classList.remove('active');
        item.classList.remove('open');
    });
}

popupBlocks.forEach(popupBlock => {
    const dropdownItems = popupBlock.querySelectorAll('.dropdown__item, .dropdown__elem');

    
    dropdownItems.forEach(item => {
        item.addEventListener('click', (event) => {
            
            deactivateAll(popupBlock);

            
            item.classList.add('active');
            item.classList.add('open');

            event.stopPropagation();
        });
    });

    
    document.addEventListener('click', () => {
        deactivateAll(popupBlock);
    });
});
