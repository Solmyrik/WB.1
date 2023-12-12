// animate

function animate(circle) {
  let radius = 50;
  let growing = true;

  // функция для изменения размера круга
  function changeSize() {
    // увеличиваем радиус круга
    if (growing) {
      radius += 5; //
      if (radius >= 100) growing = false;
    }
    // yменьшаем радиус круга
    else {
      radius -= 5;
      if (radius <= 50) growing = true;
    }
    circle.style.width = radius * 2 + 'px';
    circle.style.height = radius * 2 + 'px';
    circle.style.borderRadius = radius + 'px';
  }

  // запускаем анимацию изменения размера круга
  setInterval(changeSize, 100);
}

const circle = document.querySelector('.circle');
animate(circle);
