import {Component, OnInit} from '@angular/core';
import {RegisterService} from './register.service';
import {RegisterModel} from './register.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  registerFormData = new RegisterModel();

  constructor(private service: RegisterService,private router: Router) {}

  ngOnInit() {
  }

  submit(): void {
    console.log(this.registerFormData)
    this.service.register(this.registerFormData)
      .subscribe(response => {
        this.router.navigate(['/login']);
      }, error => {

      });
  }
}
