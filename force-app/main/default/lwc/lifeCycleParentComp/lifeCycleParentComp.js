import { LightningElement } from 'lwc';

export default class LifeCycleParentComp extends LightningElement {
    isChildVisible = false
    constructor(){
        super()
      //  this.template.queryselector(.abc) you can't access
      console.log("parent constructor called")
      
    }
    connectedCallback(){
        console.log('parent connected call back callled')
      
    }
   renderedCallback()
   {
    console.log(' renderedCallBack call back callled')
}
handleClick(){
    this.isChildVisible = !this.isChildVisible
}
errorCallback(error, stack) {
    console.log(error.message)
    console.log(stack)
}

}