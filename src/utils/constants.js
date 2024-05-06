// constants.js

// Массив с фейковыми данными для слайдов
export const slidesData = [
    { imageUrl: 'https://example.com/slide1.jpg' },
    { imageUrl: 'https://example.com/slide2.jpg' },
    { imageUrl: 'https://example.com/slide3.jpg' },
  ];
  
  // Функция для получения данных о слайдах (просто для имитации запроса к серверу)
  export function fetchSlidesData() {
    return new Promise((resolve) => {
      // Имитация задержки запроса
      setTimeout(() => {
        resolve(slidesData);
      }, 1000);
    });
  }
  