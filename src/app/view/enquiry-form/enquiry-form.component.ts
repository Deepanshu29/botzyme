import AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {
  enquiry: string = '';
  length: number;

  /* EnquiryForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNo: new FormControl(''),
    Enquiry: new FormControl('')
  }); */

  constructor(private http: HttpClient, private fb: FormBuilder) { }
  EnquiryForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    Enquiry: ['', [Validators.required, Validators.minLength(50)]]
  });


  ngOnInit(): void {
    AOS.init();
    console.log(this.length);
  }

  autoGrow(e) {
    this.length = this.enquiry.length;
  }

  onSubmit(result) {
    this.http.post('/api/enquiry', this.EnquiryForm.value).subscribe((data) => {
      console.log(data);
    });
    this.EnquiryForm.reset();
    this.length = 0;
  }
}
