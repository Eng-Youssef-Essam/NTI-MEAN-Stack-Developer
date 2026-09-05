import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    imports: [],
    template: /*Another way to write template*/ 
    `
    <h2 >Home Component</h2>
    `,
    styles: `
    h2{
    background-color : tomato;
    text-align : center;
    color: #fff ;
}
    `
})
export class HomeComponent {

}