// TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

export default class Validator {
  static validateUsername(userName) {
    const regExp = new RegExp('^[a-zA-Z]+[0-9]{0,3}_{0,2}-{0,2}[a-zA-Z]+$', 'gi');
    return regExp.test(userName);
  }
}
