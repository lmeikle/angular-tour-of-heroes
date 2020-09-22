import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name';

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
    aliases: new FormArray([new FormControl('')]),
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
    aliases: this.fb.array([
      this.fb.control('')
    ])
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

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(new FormControl(''));
    //this.aliases.push(this.fb.control('')); same as above if using the Form Builder
  }
}
