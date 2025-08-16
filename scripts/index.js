//ДОБАВЛЕНИЕ КАРТОЧЕК С ФУНКЦИЕЙ ЛАЙКА И УДАЛЕНИЯ
function createCard(cardData) {
  const cardOver = document.querySelector('#card-template').content.querySelector('.card').cloneNode(true);
  const cardImage = cardOver.querySelector('.card__image');
  const cardTitle = cardOver.querySelector('.card__title');
  const deleteButton = cardOver.querySelector('.card__delete-button');
  const likeButton = cardOver.querySelector('.card__like-button');
  
  cardImage.src = cardData.link;
  cardTitle.textContent = cardData.name;
  cardImage.alt = `место: ${cardData.name}`;
    
  deleteButton.addEventListener('click', () => cardOver.remove());
  
  likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('card__like-button_active');
  });

  return cardOver;
}

const cardPlaces = document.querySelector('.places__list');
initialCards.forEach(cardData => {
  const cardElement = createCard(cardData);
  cardPlaces.append(cardElement);
});
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup_type_edit');
const closeButton = popup.querySelector('.popup__close');
const form = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__input_type_name');
const descInput = popup.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileDesc = document.querySelector('.profile__description');

//ПОПАП С РЕДАКЦИЕЙ ПРОФИЛЯ
function openPopup() {
  nameInput.value = profileName.textContent;
  descInput.value = profileDesc.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function validateInput(input) {
  if(input.value.length <= 2){
    input.classList.add('popup__input_invalid');
  } else {
    input.classList.remove('popup__input_invalid');
  }
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (nameInput.value.length <= 2) {
    nameInput.classList.add('popup__input_invalid');
    return;
  }
  
  profileName.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
  closePopup();
});

nameInput.addEventListener('input', function() {
  validateInput(this);
});