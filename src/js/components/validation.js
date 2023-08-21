import { validateForms } from "../functions/validate-forms";

const rulesHero = [
  {
    ruleSelector: ".hero-form__name",
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
    ruleSelector: ".hero-form__tel",
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
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

document.addEventListener("DOMContentLoaded", function () {
  validateForms(".hero-form", rulesHero, afterForm);
});
