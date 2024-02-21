import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = ''
    weight = ''
    BMIValue = ''
    result = ''
    inputHandler(event) {

        const { name, value } = event.target;
        if (name === 'height') {
            this.height = value;
        }
        if (name === 'weight') {
            this.weight = value;
        }
        /*
        this[name]=value;
        */
    }
    submitHandler(event) {
        event.preventDefault();
        console.log(this.height, this.weight);
        this.calculate();
    }
    calculate() {
        //BMI- weight in kg/(height in m * height in m)
        let height = Number(this.height) / 100;
        let BMI = Number(this.weight) / (height * height);
        console.log("BMI", BMI);
        this.BMIValue = Number(BMI.toFixed(2));
        if (this.BMIValue < 18.5) {
            this.result = "Underweight";
        } else if (this.BMIValue >= 18.5 && this.BMIValue < 25) {
            this.result = "Healthy";
        } else if (this.BMIValue >= 25 && this.BMIValue < 30) {
            this.result = "Overweight"
        } else {
            this.result = "Obese"
        }
        console.log(this.BMIValue , this.result)

    }
    recalculate(){
        this.height = ''
        this.weight = ''
        this.BMIValue = ''
        this.result = ''
    }
}