import { Component } from "@angular/core";
import { FooterComponent } from "./footerComponent/footer.component";
import { RouterOutlet } from "@angular/router";
import { Navbar } from "./navbar/navbar";



@Component({
  selector: 'app-root',
  imports: [ FooterComponent, RouterOutlet,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    
}
