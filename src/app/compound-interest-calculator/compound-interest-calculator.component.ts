import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-compound-interest-calculator',
  standalone: true,
  imports: [ CommonModule, FormsModule, MatInputModule, MatButtonModule ],
  templateUrl: './compound-interest-calculator.component.html',
  styleUrl: './compound-interest-calculator.component.css'
})
export class CompoundInterestCalculatorComponent {
  initialInvestment: number = 0;
  monthlyContribution: number = 0;
  length: number = 0;
  interestRate: number = 0;
  futureValue: number = 0;
  compoundInterest: number = 0;

  calculateCompoundInterest(): void {
    let futureValue = this.initialInvestment;
    let interestRatePercentage = this.interestRate / 100;

    for (let i = 0; i < this.length; i++) {
      futureValue = (futureValue + this.monthlyContribution) * (1 + interestRatePercentage);
    }

    this.futureValue = futureValue;
    this.compoundInterest = futureValue - (this.initialInvestment + this.monthlyContribution * this.length)
  }
}
