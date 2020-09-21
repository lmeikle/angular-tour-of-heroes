import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directive';

@Component({
  selector: 'app-reactive-favorite-color',
  styleUrls: ['./favorite-color.component.css'],
  templateUrl: './favorite-color.component.html',
})
export class FavoriteColorComponent implements OnInit {
  favoriteColorControl = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/bobby/i),
    ]),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  // same profile form built using the FormBuilder helper
  /*profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });
  */

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // I can listen for changes to a control by subscribing
    this.favoriteColorControl.valueChanges.subscribe((val) => {
      console.log(val);
    });

    // I can set values programmatically
    this.favoriteColorControl.setValue('Red');
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    // I could also use setValue here but I would need to provide all properties, as the whole thing gets replaced
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });

    console.log('Updated profile: ', this.profileForm.get('firstName').value);
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }
}
