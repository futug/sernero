import { validateForms } from "../functions/validate-forms";

const rulesHero = [
  {
    ruleSelector: ".home-hero__input-name",
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
    ruleSelector: ".home-hero__input-tel",
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
    ruleSelector: ".home-hero__input-email",
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

const rulesIndex = [
  {
    ruleSelector: ".home-horiz-form__input-name",
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
    ruleSelector: ".home-horiz-form__input-tel",
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
    ruleSelector: ".home-horiz-form__input-email",
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

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

document.addEventListener("DOMContentLoaded", function () {
  validateForms(".home-hero__form", rulesHero, afterForm);
});

document.addEventListener("DOMContentLoaded", function () {
  validateForms(".home-horiz-form", rulesIndex, afterForm);
});
