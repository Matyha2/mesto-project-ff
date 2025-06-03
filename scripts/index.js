// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
function createCard(cardData,cardDelete) {
  const cardElement = document.querySelector('#card-template').content.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const removeButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = cardData.link;
  cardTitle.textContent = cardData.name;
  cardImage.alt = `Изображение места: ${cardData.name}`; 
  
  removeButton.addEventListener('click', function() {
  cardDelete(cardElement); 
  });
  
  return cardElement;
}
const placesList = document.querySelector('.places__list');
initialCards.forEach(cardData => {
  placesList.append(createCard(cardData, card => card.remove()));
});