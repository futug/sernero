import { validateForms } from "../functions/validate-forms";

const rulesMain = [
  {
    ruleSelector: ".name__input",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".tel__input",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".email__input",
    rules: [
      {
        rule: "minLength",
        value: 6,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните email!",
      },
    ],
  },
];

const rulesHorizont = [
  {
    ruleSelector: ".name__input",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".tel__input",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".email__input",
    rules: [
      {
        rule: "minLength",
        value: 6,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните email!",
      },
    ],
  },
  {
    ruleSelector: ".url__input",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните Адрес!",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

document.addEventListener("DOMContentLoaded", function () {
  validateForms(".main-form", rulesMain, afterForm);
});

document.addEventListener("DOMContentLoaded", function () {
  validateForms(".main-form-horizont", rulesHorizont, afterForm);
});

document.addEventListener("DOMContentLoaded", function () {
  validateForms(".search-setup__form", rulesHorizont, afterForm);
});

document.addEventListener("DOMContentLoaded", function () {
  validateForms(".video-properties__form", rulesHorizont, afterForm);
});

document.addEventListener("DOMContentLoaded", function () {
  validateForms(".audit-price__form", rulesMain, afterForm);
});
