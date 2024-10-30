class generatePassword {
  constructor() {
    this.checkboxes = document.querySelectorAll("input[type='checkbox']");
    this.optionsForm = document.getElementById("optionsForm");
    this.inputLength = document.getElementById("inputLength");
    this.passwordDisplay = document.getElementById("passwordDisplay");
    this.uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.lowercaseLetters = this.uppercaseLetters.toLowerCase();
    this.numbers = "0123456789";
    this.symbols = "&é'()-èç@)%";
    this.optionsForm.addEventListener("submit", (e) => this.generate(e));
    this.password = "";
  }

  generate(e) {
    e.preventDefault();
    this.password = "";
    let characterPool = "";

    this.checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        characterPool += this[checkbox.value];
      }
    });
    if (characterPool.length === 0) {
      alert("Sélectionnez au moins un type de caractère !");
      return;
    }
    for (let i = 0; i <= this.inputLength.value - 1; i++) {
      this.password += this.randomFromString(characterPool);
    }

    this.displayPassword();
  }
  randomFromString(str) {
    const length = str.length;
    const randomLetter = Math.floor(Math.random() * length);
    return str[randomLetter];
  }
  displayPassword() {
    this.passwordDisplay.textContent = this.password;
  }
}

const gen = new generatePassword();
