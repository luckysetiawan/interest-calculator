import { Component } from '@angular/core';
import { CompoundInterestCalculatorComponent } from '../compound-interest-calculator/compound-interest-calculator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CompoundInterestCalculatorComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
