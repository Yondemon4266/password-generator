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
    this.randomFromString(this.lowercaseLetters);
    this.checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        for (let i = 0; i <= this.inputLength.value - 1; i++) {
          this.password += this.randomFromString(this[checkbox.value]);
        }
      }
    });

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
