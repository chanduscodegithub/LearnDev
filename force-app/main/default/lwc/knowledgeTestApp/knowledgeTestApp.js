import { LightningElement } from 'lwc';

export default class KnowledgeTestApp extends LightningElement {
   // allsubmittedOrNot= false;
   isSubmitted = false;
    selected = {}
    correctedAnswers = 0 //correct answers is 0
    questionsList = [
        { id: 'question1',
            question : 'What is CloudHub?',
             options: {
                a:'deployment platform for mule',
                b:'deployment platform for Sf',
                c:'deployment platform fo JDE',
             },
             answer : 'a'
            },
        {
            //
            id: 'question2 ',
            question :'what is GitHub Actions',
            options : {
                a :'monitoring platform',
                b : 'Security platform',
                c: 'CI/Cd platform'
            },
            answer : 'a'
        },
        {
            id:'question3',
            question: 'what is Git',
            options : {
                a:'VCS',
                b:'Testing',
                c:' DEploying'
            },
            answer :'a'
        }
    ]
   get allsubmittedOrNot(){
        return !(Object.keys(this.selected).length === this.questionsList.length )
       
    }
    get isScoredFull(){
        return `slds-text-heading-large ${this.questionsList.length === this.correctedAnswers? 
            'slds-text-color_success':'slds-text-color_error'}`
    }
    //get the selected options
    changeHandler(event){
        console.log("name", event.target.name)
        console.log("value", event.target.value)
        //const name = event.target.name
        //const value = event.target.value
        const {name, value} = event.target
        this.selected = {...this.selected,[name]: value}
    } 
    submitHandler(){
        const selectedOptions = Object.values(this.selected);
        console.log('All Selected Options:', selectedOptions);

       // this.questionsList.filter(item=>this.selected[item.id]=== item.correctedAnswers)
       this.isSubmitted = true
       let correct = this.questionsList.filter(item=>this.selected[item.id] === item.answer)
       this.correctedAnswers = correct.length
       console.log('correctedAnswers', this.correctedAnswers);
    }
    resetHandler(){
        this.selected ={};
        this.correctedAnswers=0;


          }
}