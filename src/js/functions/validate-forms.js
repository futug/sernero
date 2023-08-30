import JustValidate from "just-validate";
//import Inputmask from "inputmask";

export const validateForms = (selector, rules, afterSend) => {
  const forms = document?.querySelectorAll(selector);

  if (!rules) {
    console.error("Вы не передали правила валидации!");
    return false;
  }

  forms.forEach((form) => {
    /*if (telSelector) {
      const inputMask = new Inputmask("+9 (999) 999-99-99");
      inputMask.mask(telSelector);

      for (let item of rules) {
        if (item.tel) {
          item.rules.push({
            rule: "function",
            validator: function () {
              const phone = telSelector.inputmask.unmaskedvalue();
              return phone.length > 8;
            },
            errorMessage: item.telError,
          });
        }
      }
    } */
    const id = form.id;

    const validation = new JustValidate(`#${id}`);

    for (let item of rules) {
      validation.addField(item.ruleSelector, item.rules);
    }

    validation.onSuccess((ev) => {
      let formData = new FormData(ev.target);

      // let xhr = new XMLHttpRequest();

      // xhr.onreadystatechange = function () {
      //   if (xhr.readyState === 4) {
      //     if (xhr.status === 200) {
      //       if (afterSend) {
      //         afterSend();
      //       }
      //       console.log("Отправлено");
      //     }
      //   }
      // };

      // xhr.open("POST", "mail.php", true);
      // xhr.send(formData);

      console.log(formData);

      ev.target.reset();
    });
  });
};
