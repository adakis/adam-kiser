import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  name = null;
  email = null;
  message = null;
  constructor(
    private http: HttpClient,
  ) { }
  submitForm() {
    this.http.post('http://www.adamkiser.com/html_form_send.php',
    {'first_name': this.name, 'email': this.email, 'comments': this.message});
  }
  ngOnInit() {
  }

}
