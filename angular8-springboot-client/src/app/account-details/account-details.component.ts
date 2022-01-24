
import { Account } from '../account';
import { Component, OnInit, Input } from '@angular/core';
 import { AccountService } from '../account.service';
import { AccountListComponent } from '../account-list/account-list.component'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-acccount-details',
templateUrl: './account-details.component.html', styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
 
    id!: number;
    accounts : Account = new Account();

constructor(private route: ActivatedRoute,private router: Router, private accountService: AccountService) { }

ngOnInit() {
this.accounts = new Account();

this.id = this.route.snapshot.params['id'];


this.accountService.getAccount(this.id)
.subscribe(data => { console.log(data) ;this.accounts = data;
}, error => console.log(error));
}


list(){ this.router.navigate(['accounts']);
}
}
