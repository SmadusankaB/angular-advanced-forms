import { Component } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  FormArray, 
  Validators, 
  FormControl } from '@angular/forms';
import { errorMessages } from './error-messages';
import { MatRadioChange } from '@angular/material/radio';
import { 
  ParkingType, 
  Group, 
  ParkingCategory, 
  PricingType, 
  Airport, 
  Hour, 
  Dates, 
  Time, 
  Minute, 
  OtherPricingType, 
  CheckoutType } from './data.interface';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-advanced-forms';


  groups: Group[] = [];
  categories: ParkingCategory[] = [];
  parking_types: ParkingType[] = [];
  pricing_types: PricingType[] = [];
  airports: Airport[] = [];
  dates: Dates[] = [];
  hours: Hour[] = [];
  times: Time[] = [];
  minutes: Minute[] = []
  otherPricingTypes: OtherPricingType[] = []
  checkoutTypes: CheckoutType[] = []

  pricingSetForm!: FormGroup;
  errors = errorMessages;
  showAdditionalCharge = false;
  showAirport = false;
  showShuttle = false;
  showPricingType = false;
  showCustomPrice = false;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.groups = this.dataService.getGroups();
    this.categories = this.dataService.getCatagories();
    this.parking_types = this.dataService.getParkingTypes();
    this.pricing_types = this.dataService.getPricingTypes();
    this.airports = this.dataService.getAirports();
    this.dates = this.dataService.getDates();
    this.hours = this.dataService.getHours();
    this.times = this.dataService.getTimes();
    this.minutes = this.dataService.getMinutes();
    this.otherPricingTypes = this.dataService.getOtherPricingTypes();
    this.checkoutTypes = this.dataService.getCheckoutTypes();
  }

  get pricingFormA() { 
    return this.pricingSetForm.get('pricing') as FormArray; 
  }

  get uptoPricingFormA() { 
    return this.pricingSetForm
    .get('price_group.upto_price_array') as FormArray; 
  }

  get otherPricingFormA() { 
    return this.pricingSetForm
    .get('price_group.other_pricing_type_array') as FormArray; 
  }

  ngOnInit(): void {
    this.createSetPricingForm();
  }

  createSetPricingForm() : void {
    this.pricingSetForm = this.formBuilder.group({
      group: ['', [Validators.required]],
      parking_category: ['', [Validators.required]],
      parking_type: ['', [Validators.required]],
      pricing_type: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      additional_fee: ['additional_fee_no', ''],
    });
  }

  onRemovePricing(i: number): void {
    this.pricingFormA.removeAt(i);
  }

  removeNewPrice(j: number, k: number): void {
    const control = <FormArray>this.pricingSetForm.get('price_group')
      .get('upto_price_array')['controls'][j].get('price_array');
    control.removeAt(k)
  }

  addNewPrice(j: number, x: number): void {
    const control = <FormArray>this.pricingSetForm.get('price_group')
      .get('upto_price_array')['controls'][j].get('price_array');
    if (control.length < 7) {
      control.push(this.initPriceInUptoPrice());
    }
  }

  initPriceInUptoPrice(): FormGroup {
    return this.formBuilder.group({
      hour: ['', ''],
      price_2: ['', [Validators.min(0)]],
      first_time: ['', ''],
      first_type: ['', ''],
      first_price: ['', [Validators.min(0)]],
      every_time: ['', ''],
      every_type: ['', ''],
      every_price: ['', [Validators.min(0)]],
      daily_maximum: ['', ''],
    });
  }

  onClickPricing(e: any): void {
    this.pricingFormA.push(this.initPricing());
  }

  initPricing(): FormGroup{
    return this.formBuilder.group({
      fee_label: ['', ''],
      fees_type: ['', ''],
      amount: ['', [Validators.min(0)]],
    })
  }

  radioChangeAddCharge($event: MatRadioChange): void {
    if ($event.value === 'additional_fee_yes') {
      console.log($event.value)
      this.pricingSetForm.addControl('pricing', 
        new FormArray([this.initPricing(),]))
      this.showAdditionalCharge = true;
    } else {
      console.log($event.value)
      this.showAdditionalCharge = false;
      this.pricingSetForm.removeControl('pricing');
    }
  }

  removeOtherPrice(l: number): void {
    this.otherPricingFormA.removeAt(l);
  }

  onClickOtherPrice(): void {
    this.otherPricingFormA.push(this.initOtherPricing());
  }

  initOtherPricing(): FormGroup {
    return this.formBuilder.group({
      other_pricing_type: ['', ''],
      weekday_start: ['', ''],
      weekday_end: ['', ''],
      checkin_start: ['', ''],
      checking_end: ['', ''],
      checkout_type: ['', ''],
      checkout_time: ['', ''],
      checkout_price: ['', [Validators.min(0)]]
    })
  }

  removeUptoPrice(j: number): void {
    this.uptoPricingFormA.removeAt(j);
  }

  getPriceInUptoPrice(form: any): any {
    return form.controls.price_array.controls;
  }

  radioChangeCustomPrice($event: MatRadioChange): void {
    if ($event.value === 'custom_price_yes') {
      this.showCustomPrice = true;
    } else {
      this.showCustomPrice = false;
    }
  }

  onClickUptoPrice(e: any): void {
    this.uptoPricingFormA.push(this.initUptoPricing());
  }

  initUptoPricing(): FormGroup {
    return this.formBuilder.group({
      start_day: ['', ''],
      end_day: ['', ''],
      h24hour: ['', ''],
      price24hour: ['', ''],
      overnight_enabled: ['', ''],
      start_time: ['', ''],
      end_time: ['', ''],
      overtime_price: ['', ''],
      max_hours: ['', ''],
      overtime_start: ['', ''],
      overtime_enable: ['', ''],
      overtime_end: ['', ''],
      price_array: new FormArray([this.initPriceInUptoPrice(),]),
    });
  }

  radioChangeShuttleService($event: MatRadioChange): void {
    if ($event.value === 'shuttle_yes') {
      this.showShuttle = true;
      this.pricingSetForm.addControl('shuttle_description', new FormControl('', [Validators.required]));
    } else {
      this.showShuttle = false;
      this.pricingSetForm.removeControl('shuttle_description');
    }
  }

  onChangeAirport(event: any): void {
    if (event.value.value === 'airport') {
      this.pricingSetForm.addControl('airport_name', 
        new FormControl('', [Validators.required]));
      this.pricingSetForm.addControl('distance_to_airport', 
        new FormControl('', [Validators.required]));
      this.pricingSetForm.addControl('shuttle_service', 
        new FormControl('shuttle_no', [Validators.required]));
      this.showAirport = true;
    } else {
      this.showAirport = false;
      this.showShuttle = false;
      this.pricingSetForm.removeControl('shuttle_description');
      this.pricingSetForm.removeControl('airport_name');
      this.pricingSetForm.removeControl('distance_to_airport');
      this.pricingSetForm.removeControl('shuttle_service');
    }
  }

  onChangePricingType(event: any): void {
    if (event.value.value === 'hourly') {
      this.pricingSetForm.addControl('price_group', 
        this.formBuilder.group({
        custom_price: ['custom_price_no', ''],
        upto_price_array: new FormArray([this.initUptoPricing(),]),
        other_pricing_type_array: new FormArray([])
      }));
      this.showPricingType = true;
    } else {
      this.showPricingType = false;
      this.pricingSetForm.removeControl('price_group');
    }
  }

  onSubmit(form: any): void {
    console.log(form.value);
  }

}
