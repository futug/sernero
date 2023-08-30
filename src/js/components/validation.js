import { validateForms } from "../functions/validate-forms";

const rulesMain = [
  {
    ruleSelector: ".name__input",
    rules: [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимум 3 символа",
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
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
      {
        rule: "minLength",
        value: 8,
        errorMessage: "Минимум 8 символов",
      },
      {
        rule: 'customRegexp',
        value: /^(\+?\d+)$/,
        errorMessage: "Введите корректный телефон",
      },
    ],
  },
  {
    ruleSelector: ".email__input",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните email!",
      },
      {
        rule: "email",
        errorMessage: "Введите корректный email",
      }
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
        errorMessage: "Минимум 3 символа",
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
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
      {
        rule: "minLength",
        value: 8,
        errorMessage: "Минимум 8 символов",
      },
      {
        rule: 'customRegexp',
        value: /^(\+?\d+)$/,
        errorMessage: "Введите корректный телефон",
      },
    ],
  },
  {
    ruleSelector: ".email__input",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните email!",
      },
      {
        rule: "email",
        errorMessage: "Введите корректный email",
      }
    ],
  },
  {
    ruleSelector: ".url__input",
    rules: [
      {
        rule: "minLength",
        value: 5,
        errorMessage: "Минимум 5 символов",
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

/*document.addEventListener("DOMContentLoaded", function () {
  validateForms(".search-setup__form", rulesHorizont, afterForm);
});

document.addEventListener("DOMContentLoaded", function () {
  validateForms(".video-properties__form", rulesHorizont, afterForm);
});

document.addEventListener("DOMContentLoaded", function () {
  validateForms(".audit-price__form", rulesMain, afterForm);
});

*/
