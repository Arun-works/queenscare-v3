import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor( private contactService: ContactService ) { }

  forms = new FormGroup({
    name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
    ])), 
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      
    ])),
    mobile: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[789][0-9]{9}')
      // /^+91(7\d|8\d|9\d)\d{9}$/
    ])),
    message: new FormControl('', Validators.required)
});
 
onSubmit(form: NgForm) {
  console.log(this.forms.value);
  this.forms.reset();
  this.contactService.postUsers(form.value).subscribe((res) => {
    console.log("saved.....!");
    alert("Registered successfully!!!...<br>Verify Your Email..");
    this.forms.reset();
  });
}

  ngOnInit() {
  }

}
