import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private apiservice:ApiserviceService) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  // Custom validator to check password match
  passwordMatchValidator(group: FormGroup): any {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatching: true };
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      alert('Registration successful!');
    } else {
      alert('Please correct the errors in the form.');
    }
  }
  userlist: any [] =[];

  getAllUser(){
    debugger;
    this.apiservice.getAllDept().subscribe((res:any)=>{
      debugger;
      this.userlist = res;
    });
  }
}
