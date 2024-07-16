class Tenthform{
    static passMarks=35;
    
    static regardingTenth=()=>{
        console.log("Tenth exams are necessary for the next higher education.");
    }



    constructor(){
        console.log("Inside Tenthform constructor.");
        this.engMarks=0;
        this.telMarks=0;
        this.hindiMarks=0;
        this.matMarks=0;
        this.sciMarks=0;
        this.socMarks=0;
        
    }

    calculateResult=()=>{
 if(this.engMarks>=Tenthform.passMarks &&
    this.telMarks>=Tenthform.passMarks &&
    this.hindiMarks>=Tenthform.passMarks &&
    this.matMarks>=Tenthform.passMarks &&
    this.sciMarks>=Tenthform.passMarks &&
    this.socMarks>=Tenthform.passMarks 
 ){
    console.log(`Student Passed in Tenth`);
 }else{
    console.log(`Student Failed in Tenth`);
 }


    }
}



export default Tenthform;