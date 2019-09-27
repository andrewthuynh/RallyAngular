import { Component, OnInit } from '@angular/core';
import {BillService} from '../bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  bills;
  total;

  constructor(private billService:BillService) { }

  ngOnInit() {
    this.bills = this.billService.getBills();
    this.total = this.billService.getTotal();
  }

}
