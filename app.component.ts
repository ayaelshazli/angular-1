import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title= 'Master Blog';

  isHomePage: boolean = true;
  defaultEmail = 'alaa@gmail.com';
  pageTitle() {
    return this.isHomePage ? 'Home Page' : 'About Page';
  }
  isHeader= true;
 


 headerClasses() {
   return{
     header: this.isHeader,
     bold:   this.isHeader,
     italic: this.isHeader,
   };
 }


 singStyleBinding() {
   return this.isHeader ? '4rem' :'2rem'
 }

 mltipleStyleBinding(){
   return{
     fontSize: this.isHeader ? '5rem' : '3rem',
     fontWeight : this.isHeader ? 'bold' : '200'
   }; 
 }


toggleHeaderState() {
 return this.isHeader = !this.isHeader
};

cursesList= [
  {name: "nodeJs"}, 
{name: "php"},
{name: "angular" }
];




name= "cili";

student= [{name: "cili"}, 
         {name: "hana"},
         {name: "tamer" }
];

}






