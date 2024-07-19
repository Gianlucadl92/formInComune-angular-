import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-in-comune',
  templateUrl: './form-in-comune.component.html',
  styleUrl: './form-in-comune.component.css'
})
export class FormInComuneComponent implements OnInit {
  form1!: FormGroup;
  form2!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form1 = this.fb.group({
      name: ['', Validators.required],
    });

    this.form2 = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmitForm1(): void {
    if (this.form1.valid) {
      // Copia i dati dal form1 al form2
      this.form2.setValue(this.form1.value);
      console.log('Dati copiati:', this.form2.value);
    }
  }
}
