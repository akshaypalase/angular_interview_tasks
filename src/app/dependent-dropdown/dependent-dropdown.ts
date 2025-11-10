import { Component } from '@angular/core';
import { ICountry, IState } from '../models/country.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dependent-dropdown',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './dependent-dropdown.html',
  styleUrl: './dependent-dropdown.scss',
})
export class DependentDropdown {
 Countries: ICountry[] = [
  {
    name: 'India',
    code: 'IN',
    states: [
      { name: 'Maharashtra', code: 'MH' },
      { name: 'Gujarat', code: 'GJ' },
      { name: 'Karnataka', code: 'KA' },
      { name: 'Tamil Nadu', code: 'TN' },
    ],
  },
  {
    name: 'United States',
    code: 'US',
    states: [
      { name: 'California', code: 'CA' },
      { name: 'Texas', code: 'TX' },
      { name: 'New York', code: 'NY' },
      { name: 'Florida', code: 'FL' },
    ],
  },
  {
    name: 'Australia',
    code: 'AU',
    states: [
      { name: 'New South Wales', code: 'NSW' },
      { name: 'Victoria', code: 'VIC' },
      { name: 'Queensland', code: 'QLD' },
      { name: 'Western Australia', code: 'WA' },
    ],
  },
  {
    name: 'Canada',
    code: 'CA',
    states: [
      { name: 'Ontario', code: 'ON' },
      { name: 'Quebec', code: 'QC' },
      { name: 'British Columbia', code: 'BC' },
      { name: 'Alberta', code: 'AB' },
    ],
  },
 ];
 states!: IState[];

 dropdownForm!:  FormGroup;

 ngOnInit() {
  this.dropdownForm = new FormGroup({
    country: new FormControl('0'),
    state: new FormControl('0')
  })
 }

 onCountryChange() {
  let countryCode = this.dropdownForm.get('country')?.value;
  let filteredCountry = this.Countries.find(country => country.code === countryCode);
    this.states = filteredCountry ? filteredCountry.states : [];
    this.dropdownForm.patchValue({
      state: this.states ? this.states[0].code: 0
    })
 }


}
