// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
function createCard(cardData) {
  const cardElement = document.querySelector('#card-template').content.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const removeButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = cardData.link;
  cardTitle.textContent = cardData.name;
  
  removeButton.addEventListener('click', function() {
    cardElement.remove(); 
  });
  
  return cardElement;
}
const placesList = document.querySelector('.places__list');
initialCards.forEach(cardData => {
  const cardPart = createCard(cardData, function() {
  });
  placesList.appendChild(cardPart);
});