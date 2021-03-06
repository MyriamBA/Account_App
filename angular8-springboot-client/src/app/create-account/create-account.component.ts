import { AccountService } from '../account.service';
 import { Account } from '../account';
import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
@Component({
selector: 'app-create-account',
templateUrl: './create-account.component.html', styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
 account : Account = new Account();

submitted = false;

constructor(private accountService: AccountService, private router: Router) {
   }

ngOnInit() {
}
newAccount(): void {
   this.submitted = false;
    this.account = new Account();
 }



save() {
 
   this.accountService
   .createAccount(this.account).subscribe(data => {
     console.log(data)
     this.account = new Account();
     this.gotoList();
   }, 
   error => console.log(error));
}


onSubmit() { this.submitted = true; this.save();
}

gotoList() { this.router.navigate(['/accounts']);
}
}
