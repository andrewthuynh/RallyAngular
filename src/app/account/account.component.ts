import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accounts;
  total;

  constructor(private accountService:AccountService) { }

  ngOnInit() {
    this.accounts = this.accountService.getAccounts();
    this.total = this.accountService.getTotal();
  }

}
