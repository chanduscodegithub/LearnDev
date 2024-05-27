import { LightningElement } from 'lwc';
import signinTemp from './signinTemp.html';
import signuptemp from './signupTemp.html';
import renderComponent from './renderComponent.html';

export default class RenderComponent extends LightningElement {
   selectedBtn = ''
   render(){
   // return signinTemp

   return this.selectedBtn === 'signup' ? signuptemp:
   this.selectedBtn === 'signin' ?  signinTemp : 
   renderComponent
   }
   handleClick(event){
      this.selectedBtn = event.target.label
   }
   SubmitHndler(){
      console.log('signin sucess')
   }
}
