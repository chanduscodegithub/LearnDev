import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isShow = false;
    name
    handleClick(){
        this.isShow = true
    }
    changeHandler(event){
        this.name = event.target.value
    }
    get isHello(){
       return this.name ==='hello'

    }
}