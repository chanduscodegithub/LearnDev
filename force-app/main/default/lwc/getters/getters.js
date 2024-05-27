import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {
    users = ["chandu","chandir", "suja", "malli "]
  num1= 10
  num2 = 6

    get firstUser(){
       return this.users[0].toUpperCase()
   }
   get multiply(){
    return this.num1 * this.num2
   }
}