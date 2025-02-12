import { Component, OnInit } from '@angular/core';

import { StockExchange } from '../../../models/StockExchange';
import { StockExchangeService } from '../../../services/stock-exchange.service';

@Component({
  selector: 'app-create-stock-exchange',
  templateUrl: './create-stock-exchange.component.html',
  styleUrls: ['./create-stock-exchange.component.css']
})
export class CreateStockExchangeComponent implements OnInit {

  stockExchange: StockExchange = {
    name: '',
    brief: '',
    address: '',
    remarks: ''
  };

  constructor(private stockExchangeService: StockExchangeService) { }

  ngOnInit(): void {
  }

  onSubmit({ value, valid }: { value: StockExchange, valid: boolean }) {
    this.stockExchangeService.addStockExchange(this.stockExchange);

  }
}
