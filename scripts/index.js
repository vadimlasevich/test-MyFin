const headerLinkDisplay = document.querySelector('.header__subtitle-link-display');
const headerSubtitle = document.querySelector('.header__subtitle');
const headerSubtitleLinkDisplay = document.querySelector('.header__subtitle-link-display span');
const headerSubtitleLinkArrow = document.querySelector('.header__subtitle-link-display .table-arrow-btn');
const headerInput = document.querySelector('.header__input input');
const headerInputBtnClose = document.querySelector('.header__input-btn-close');

const investmentsStockTableBtns = document.querySelectorAll('.investments-stock__table-btn');
const investmentsStockTableItems = document.querySelectorAll('.investments-stock__table-items');
const select = document.querySelector('select');

const toggleShowText = () => {
  headerSubtitle.classList.toggle('hidden-text');

  if (!headerSubtitle.classList.contains('hidden-text')) {
    headerSubtitleLinkDisplay.textContent = 'Скрыть';
    headerSubtitleLinkArrow.classList.add('arrow-btn-rotate');
  } else {
    headerSubtitleLinkDisplay.textContent = 'Показать весь';
    headerSubtitleLinkArrow.classList.remove('arrow-btn-rotate');
  }
};

const displayCloseBtn = ({ target }) => {
  if (target.value) {
    headerInputBtnClose.style.display = 'block';
  } else {
    headerInputBtnClose.style.display = 'none';
  }
};

investmentsStockTableBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    investmentsStockTableBtns.forEach((btn) => btn.classList.remove('table-btn-active'));
    investmentsStockTableItems.forEach((item) => item.classList.add('hidden'));
    investmentsStockTableBtns[index].classList.add('table-btn-active');
    investmentsStockTableItems[index].classList.remove('hidden');
  });
});

$(function () {
  $('select').selectric();
});

headerLinkDisplay.addEventListener('click', toggleShowText);
headerInput.addEventListener('input', displayCloseBtn);
headerInputBtnClose.addEventListener('click', () => {
  headerInput.value = '';
  headerInputBtnClose.style.display = 'none';
});
