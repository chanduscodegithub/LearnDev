import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
   

    userNames = ["chandu", "jaya", "maha"]
    fetchHandler(){
        const elem = this.template.querySelector('h1')
        console.log('elem', elem.innerText)
        elem.style.border = " 1px solid red"


        const userTexts = this.template.querySelectorAll('.name')
        Array.from(userTexts).forEach(item=>{
        console.log(item.innerText)
        item.setAttribute("title",item.innerText)
       })
       //lwc dom manual
       const elmee = this.template.querySelector('.inn')
           elmee.innerHTML = '<p> hellooo</p>'
        }

        //hey added comment to check in vcss
    }
   
