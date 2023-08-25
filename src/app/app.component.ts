import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator';
  calValue: number = 0;
  funcT: any = 'noFunction';
  calNumber: string = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue (val: string, type: any) {
    if(type === 'number') {
      this.onNumberClick(val)
    } else if (type === 'function') {
      this.onFunctionClick(val)
    }
  }

  onNumberClick(val: string) {
    if(this.calNumber !== 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber)
  }

  onFunctionClick(val: string) {
    if(val == 'c') {
      this.clearAll();
    } else if (this.funcT == 'noFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else if (this.funcT != 'noFunction') {
      this.secondNumber = this.calValue;
      // lets perform the calculations
      this.valueCalculations(val)
    }
  }

  valueCalculations(val: string) {
    if(this.funcT == '+') {
      const Total = this.firstNumber + this.secondNumber;
      this.totalAssignedValues(Total, val);
    }
    if(this.funcT == '-') {
      const Total = this.firstNumber - this.secondNumber;
      this.totalAssignedValues(Total, val);
    }
    if(this.funcT == 'X') {
      const Total = this.firstNumber * this.secondNumber;
      this.totalAssignedValues(Total, val);
    }
    if(this.funcT == '/') {
      const Total = this.firstNumber / this.secondNumber;
      this.totalAssignedValues(Total, val);
    if(this.funcT == '%') {
      const Total = this.firstNumber % this.secondNumber;
      this.totalAssignedValues(Total, val);
    }
  }

}
  totalAssignedValues(Total: number, val:string) {
    this.calValue = Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    if(val == '='){ this.onEqualPress() }
  }

  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = 'noFunction';
  }

  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = 'noFunction';
    this.calValue = 0;
  }
}