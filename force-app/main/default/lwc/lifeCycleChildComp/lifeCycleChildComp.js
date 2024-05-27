import { LightningElement } from 'lwc';

export default class LifeCycleChildComp extends LightningElement {
    constructor(){
        super()
      //  this.template.queryselector(.abc) you can't access
      console.log("child constructor called")
      
    }
    interval
    connectedCallback(){
        console.log('child connected call back callled')
        window.addEventListener('click' ,this.handleClick)
        this.interval = window.setInterval()
        throw new Error('loaing od child comp failed')
    }
   renderedCallback()
   {
    console.log('child renderedCallBack call back callled')
}
disconnectedCallback(){
    alert('child disconnected call back called !!')
    window.removeEventListener('click', this.handleClick)
    window.clearInterval(interval)
}
}