import { LightningElement } from 'lwc';

export default class DirectConditio extends LightningElement {
    isShow = false;
    handleClick(){
        this.isShow = true
    }
}