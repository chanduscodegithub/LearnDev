import { LightningElement } from 'lwc';

export default class FirstComponent extends LightningElement {
   

     address = {
        town : 'naidupet',
        pin :52434,
        State : 'Ap'
    }
   // trackHandler(event){
   //     this.address.town = event.target.value
    //}

    trackHandler(event){
        this.address = {...this.address, "town" : event.target.value}
    }
}
