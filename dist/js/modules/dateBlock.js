export default class DateBlock {
  constructor({ dayBlock = null, monthBlock = null, yearBlock = null } = {}) {
    this.dayBlock = document.querySelector(dayBlock);
    this.monthBlock = document.querySelector(monthBlock);
    this.yearBlock = document.querySelector(yearBlock);
    this.day = new Date().getDate();
    this.month = new Date().getMonth();
    this.year = new Date().getFullYear();
  }

  addZero(num) {
    if (num < 10) {
      num = `0${num}`;
      return num;
    } else {
      return num;
    }
  }

  render() {
    this.dayBlock.innerHTML = this.addZero(this.day);
    this.monthBlock.innerHTML = this.addZero(this.month);
    this.yearBlock.innerHTML = this.year;
  }
}
