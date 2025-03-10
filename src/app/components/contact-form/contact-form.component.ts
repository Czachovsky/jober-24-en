import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "../input/input.component";
import {JsonPipe} from "@angular/common";
import {ButtonComponent} from "../button/button.component";
import {HttpClient} from "@angular/common/http";
import {ToastService} from "../toast/toast.service";

@Component({
  selector: 'jober24-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    JsonPipe,
    ButtonComponent
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  recruitmentForm: FormGroup;
  private readonly http: HttpClient = inject(HttpClient);
  public toastService: ToastService = inject(ToastService)

  constructor(private fb: FormBuilder) {
    this.recruitmentForm = this.fb.group({
      employeesCount: [20, [Validators.required, Validators.min(20), Validators.max(500)]],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nip: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      companyName: null,
      message: ['', Validators.required],
      consents: [true, Validators.required],
    });
  }

  submitForm(): void {

    if (this.recruitmentForm.invalid) {
      this.recruitmentForm.markAllAsTouched();
    } else {
      this.http.post('api/contact.php', this.recruitmentForm.getRawValue()).subscribe({
        next: (next: any) => {
          this.toastService.show('Message sent', 'success');
        },
        error: (error) => {
          this.toastService.show('An error occurred', 'error');
        }
      })
    }
  }
}

