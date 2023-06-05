let offset = 0;  // для того чтобы фиксировать ширину блока
const sliderLine = document.querySelector('.slider-line');
document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 768) {
        
        offset = 0;
        
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
}); 
// Получение элемента слайдера
// Функция для обработки события нажатия клавиши
function handleKeyPress(event) {
  // Проверка кода нажатой клавиши
  switch (event.keyCode) {
    case 37: // Стрелка влево
      offset = offset - 256;
      if (offset < 0) {
        offset = 768;
      }
      sliderLine.style.left = -offset + 'px';
      break;
    case 39: // Стрелка вправо
      offset = offset - 256;
      if (offset < 0) {
        offset = 768;
      }
      sliderLine.style.left = -offset + 'px';
      break;
    default:
      break;
  }
}

// Добавление обработчика событий на нажатие клавиш
document.addEventListener('keydown', handleKeyPress);


// function handleKeyUp(event) {
//     // Проверка кода отпущенной клавиши
//     if (event.keyCode === 37) { // Стрелка влево
//       offset = offset - 256;
//       if (offset < 0) {
//         offset = 768;
//       }
//       sliderLine.style.left = -offset + 'px';
//     } else if (event.keyCode === 39) { // Стрелка вправо
//       offset = offset - 256;
//       if (offset < 0) {
//         offset = 768;
//       }
//       sliderLine.style.left = -offset + 'px';
//     }
//   }
  
//   // Добавление обработчика событий на отпускание клавиши
//   document.addEventListener('keyup', handleKeyUp);