import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-password-generator-panel',
  templateUrl: './password-generator-panel.component.html',
  styleUrls: ['./password-generator-panel.component.css']
})
export class PasswordGeneratorPanelComponent implements OnInit {
  
   @ViewChild('genPassword') genPasswordRef :ElementRef;

  isSymbolsChecked = false;
  isNumbersChecked = false;
  isLowerCaseChecked = false;
  isUpperCaseChecked = false;
  passwordLength = 12;
  generatedPassword:string='';
  constructor() { }

  ngOnInit() {
  }
  
  check(){
    console.log(this.isSymbolsChecked);
    console.log(this.isNumbersChecked);
    console.log(this.isLowerCaseChecked);
    console.log(this.isUpperCaseChecked);
    console.log(this.passwordLength);
    this.generatePassword(this.isSymbolsChecked,this.isNumbersChecked,this.isLowerCaseChecked,this.isUpperCaseChecked);
  }
  randomFunc = {
    lower: this.getRandomLower,
    upper: this.getRandomUpper,
    number: this.getRandomNumber,
    symbol: this.getRandomSymbols
  }

  getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() *26) + 97);
  }

  getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() *26) + 65);
  }

  getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() *10) + 48);
  }

  getRandomSymbols(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
  }

  generatePassword(symbol,number,lower,upper){
    
    const typesCount = lower + upper + number + symbol;
    console.log(typesCount);
    const typesArr = [{'lower':lower },{'upper':upper },{'number':number },{ 'symbol':symbol }].filter(item=> {return Object.values(item)[0]===true})
    console.log(typesArr);
  
    for(let i=0;i<this.passwordLength;i+=typesCount){
      typesArr.forEach(item=>{
         const funcName=Object.keys(item)[0];

         this.generatedPassword += this.randomFunc[funcName]();
      })
    }
    console.log(this.generatedPassword);
    let password=this.generatedPassword.slice(0,this.passwordLength);
    this.genPasswordRef.nativeElement.innerText=this.shuffleString(password);
    this.generatedPassword='';
    // console.log(this.genPasswordRef.nativeElement.innerText);
   

  }

  shuffleString(password:string){
   const  passwordArr=password.split('');
  console.log(passwordArr);
  console.log(passwordArr.length);
  for(let i=passwordArr.length-1;i>0;i--){
    var pos = Math.floor(Math.random() * i);
   
    [passwordArr[i],passwordArr[pos]]=[passwordArr[pos],passwordArr[i]];
  }
  console.log(passwordArr);
  console.log(passwordArr.join(''));
  return passwordArr.join('');
  }
  
}
