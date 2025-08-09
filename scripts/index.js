// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
function createCard(cardData, deleteCard, likeButtonClick) {
  const cardOver = document.querySelector('#card-template').content.querySelector('.card').cloneNode(true);
  const cardImage = cardOver.querySelector('.card__image');
  const cardTitle = cardOver.querySelector('.card__title');
  const deleteButton = cardOver.querySelector('.card__delete-button');
  const likeButton = cardOver.querySelector('.card__like-button');
  
  cardImage.src = cardData.link;
  cardTitle.textContent = cardData.name;
  cardImage.alt = `место: ${cardData.name}`;
  
  deleteButton.addEventListener('click', function() {
    deleteCard(cardOver);
  });
  
  likeButton.addEventListener('click', function(){
    if (likeButton.classList.contains('.card__like-button')){
      likeButton.classList.add('card__like-button_active');
      likeButton.classList.remove('.card__like-button');
    }
    else{
      likeButton.classList.add('.card__like-button');
      likeButton.classList.remove('card__like-button_active');
    }
  });

  return cardOver;
}

const cardPlaces = document.querySelector('.places__list');
initialCards.forEach((cardData) => {
  cardPlaces.append(createCard(cardData, (card) => card.remove()));
});
