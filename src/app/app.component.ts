import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  distance: number;
  paymentData = {};

  onNameInputChange( value: string ) {
    this.name = value;
    this.updatePaymentJson();
  }

  onDateChange( value: string ) {
    this.date = value;
    this.updatePaymentJson();
  }

  onAmountChange( value: string ) {
    this.amount = parseFloat(value);
    this.updatePaymentJson();
  }

  onHeightChange( value: string ) {
    this.height = parseFloat(value);
    this.updatePaymentJson();
  }

  onDistanceChange( value: string ) {
    this.distance = parseFloat( value );
    this.updatePaymentJson();
  }

  updatePaymentJson () {
    this.paymentData = {
      name: this.name,
      date: this.date,
      amount: this.amount,
      height: this.height,
      distance: this.distance,
    };
  }
}
