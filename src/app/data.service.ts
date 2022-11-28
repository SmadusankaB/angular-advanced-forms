import { Injectable } from '@angular/core';
import { 
  Group, 
  ParkingCategory, 
  ParkingType, 
  PricingType, 
  Airport, 
  Dates, 
  Hour, 
  Time, 
  Minute, 
  OtherPricingType, 
  CheckoutType } from './data.interface';

@Injectable()
export class DataService {

  groups: Group[] = [
    { value: 'group_1', viewValue: 'Group 1' },
    { value: 'group_2', viewValue: 'Group 2' },
    { value: 'group_3', viewValue: 'Group 3' }
  ];

  categories: ParkingCategory[] = [
    { value: 'event', viewValue: 'Event' },
    { value: 'car_parking', viewValue: 'Car Parking' },
    { value: 'airport', viewValue: 'Airport' }
  ];

  parking_types: ParkingType[] = [
    { value: 'outdoor_self_park', viewValue: 'Outdoor Self Park' },
    { value: 'covered_valet', viewValue: 'Covered Valet' },
    { value: 'covered_self_park', viewValue: 'Covered Self Park' },
    { value: 'outdoor_valet', viewValue: 'Outdoor Valet' },
    { value: 'covered_self_park_and_valet', viewValue: 'Covered Self Park & Valet' }
  ];

  pricing_types: PricingType[] = [
    { value: 'daily', viewValue: 'Daily' },
    { value: 'hourly', viewValue: 'Hourly' },
    { value: 'monthly', viewValue: 'Monthly' },
    { value: 'weekly', viewValue: 'Weekly' },
    { value: 'voucher', viewValue: 'Voucher' },
    { value: 'parking_pass', viewValue: 'Parking Pass' }
  ];

  airports: Airport[] = [
    { value: 'airport 1', viewValue: 'Airport 1' },
    { value: 'airport 2', viewValue: 'Airport 2' },
    { value: 'airport 3', viewValue: 'Airport 3' },
  ];

  dates: Dates[] = [
    { value: 'sunday', viewValue: 'Sunday' },
    { value: 'monday', viewValue: 'Monday' },
    { value: 'tuesday', viewValue: 'Tuesday' },
    { value: 'wednesday', viewValue: 'Wednesday' },
    { value: 'thursday', viewValue: 'Thursday' },
    { value: 'friday', viewValue: 'Friday' },
    { value: 'saturday', viewValue: 'Staturday' }
  ];

  hours: Hour[] = [
    { value: '0.5', viewValue: '0.5' },
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
    { value: '7', viewValue: '7' },
    { value: '8', viewValue: '8' },
    { value: '9', viewValue: '9' },
    { value: '10', viewValue: '10' },
    { value: '11', viewValue: '11' },
    { value: '12', viewValue: '12' },
    { value: '13', viewValue: '13' },
    { value: '14', viewValue: '14' },
    { value: '15', viewValue: '15' },
    { value: '16', viewValue: '16' },
    { value: '17', viewValue: '17' },
    { value: '18', viewValue: '18' },
    { value: '19', viewValue: '19' },
    { value: '20', viewValue: '20' },
    { value: '21', viewValue: '21' },
    { value: '22', viewValue: '22' },
    { value: '23', viewValue: '23' }
  ];

  times: Time[] = [
    { value: '12:00am', viewValue: '12:00 AM' },
    { value: '12:15am', viewValue: '12:15 AM' },
    { value: '12:30am', viewValue: '12:30 AM' },
    { value: '12:45am', viewValue: '12:45 AM' },
    { value: '1:00am', viewValue: '1:00 AM' },
    { value: '1:15am', viewValue: '1:15 AM' },
    { value: '1:30am', viewValue: '1:30 AM' },
    { value: '1:45am', viewValue: '1:45 AM' },
    { value: '2:00am', viewValue: '2:00 AM' },
    { value: '2:15am', viewValue: '2:15 AM' },
    { value: '2:30am', viewValue: '2:30 AM' },
    { value: '2:45am', viewValue: '2:45 AM' },
    { value: '3:00am', viewValue: '3:00 AM' },
    { value: '3:15am', viewValue: '3:15 AM' },
    { value: '3:30am', viewValue: '3:30 AM' },
    { value: '3:45am', viewValue: '3:45 AM' },
    { value: '4:00am', viewValue: '4:00 AM' },
    { value: '4:15am', viewValue: '4:15 AM' },
    { value: '4:30am', viewValue: '4:30 AM' },
    { value: '4:45am', viewValue: '4:45 AM' },
    { value: '5:00am', viewValue: '5:00 AM' },
    { value: '5:15am', viewValue: '5:15 AM' },
    { value: '5:30am', viewValue: '5:30 AM' },
    { value: '5:45am', viewValue: '5:45 AM' },
    { value: '6:00am', viewValue: '6:00 AM' },
    { value: '6:15am', viewValue: '6:15 AM' },
    { value: '6:30am', viewValue: '6:30 AM' },
    { value: '6:45am', viewValue: '6:45 AM' },
    { value: '7:00am', viewValue: '7:00 AM' },
    { value: '7:15am', viewValue: '7:15 AM' },
    { value: '7:30am', viewValue: '7:30 AM' },
    { value: '7:45am', viewValue: '7:45 AM' },
    { value: '8:00am', viewValue: '8:00 AM' },
    { value: '8:15am', viewValue: '8:15 AM' },
    { value: '8:30am', viewValue: '8:30 AM' },
    { value: '8:45am', viewValue: '8:45 AM' },
    { value: '9:00am', viewValue: '9:00 AM' },
    { value: '9:15am', viewValue: '9:15 AM' },
    { value: '9:30am', viewValue: '9:30 AM' },
    { value: '9:45am', viewValue: '9:45 AM' },
    { value: '10:00am', viewValue: '10:00 AM' },
    { value: '10:15am', viewValue: '10:15 AM' },
    { value: '10:30am', viewValue: '10:30 AM' },
    { value: '10:45am', viewValue: '10:45 AM' },
    { value: '11:00am', viewValue: '11:00 AM' },
    { value: '11:15am', viewValue: '11:15 AM' },
    { value: '11:30am', viewValue: '11:30 AM' },
    { value: '11:45am', viewValue: '11:45 AM' },
    { value: '12:00pm', viewValue: '12:00 PM' },
    { value: '12:15pm', viewValue: '12:15 PM' },
    { value: '12:30pm', viewValue: '12:30 PM' },
    { value: '12:45pm', viewValue: '12:45 PM' },
    { value: '1:00pm', viewValue: '1:00 PM' },
    { value: '1:15pm', viewValue: '1:15 PM' },
    { value: '1:30pm', viewValue: '1:30 PM' },
    { value: '1:45pm', viewValue: '1:45 PM' },
    { value: '2:00pm', viewValue: '2:00 PM' },
    { value: '2:15pm', viewValue: '2:15 PM' },
    { value: '2:30pm', viewValue: '2:30 PM' },
    { value: '2:45pm', viewValue: '2:45 PM' },
    { value: '3:00pm', viewValue: '3:00 PM' },
    { value: '3:15pm', viewValue: '3:15 PM' },
    { value: '3:30pm', viewValue: '3:30 PM' },
    { value: '3:45pm', viewValue: '3:45 PM' },
    { value: '4:00pm', viewValue: '4:00 PM' },
    { value: '4:15pm', viewValue: '4:15 PM' },
    { value: '4:30pm', viewValue: '4:30 PM' },
    { value: '4:45pm', viewValue: '4:45 PM' },
    { value: '5:00pm', viewValue: '5:00 PM' },
    { value: '5:15pm', viewValue: '5:15 PM' },
    { value: '5:30pm', viewValue: '5:30 PM' },
    { value: '5:45pm', viewValue: '5:45 PM' },
    { value: '6:00pm', viewValue: '6:00 PM' },
    { value: '6:15pm', viewValue: '6:15 PM' },
    { value: '6:30pm', viewValue: '6:30 PM' },
    { value: '6:45pm', viewValue: '6:45 PM' },
    { value: '7:00pm', viewValue: '7:00 PM' },
    { value: '7:15pm', viewValue: '7:15 PM' },
    { value: '7:30pm', viewValue: '7:30 PM' },
    { value: '7:45pm', viewValue: '7:45 PM' },
    { value: '8:00pm', viewValue: '8:00 PM' },
    { value: '8:15pm', viewValue: '8:15 PM' },
    { value: '8:30pm', viewValue: '8:30 PM' },
    { value: '8:45pm', viewValue: '8:45 PM' },
    { value: '9:00pm', viewValue: '9:00 PM' },
    { value: '9:15pm', viewValue: '9:15 PM' },
    { value: '9:30pm', viewValue: '9:30 PM' },
    { value: '9:45pm', viewValue: '9:45 PM' },
    { value: '10:00pm', viewValue: '10:00 PM' },
    { value: '10:15pm', viewValue: '10:15 PM' },
    { value: '10:30pm', viewValue: '10:30 PM' },
    { value: '10:45pm', viewValue: '10:45 PM' },
    { value: '11:00pm', viewValue: '11:00 PM' },
    { value: '11:15pm', viewValue: '11:15 PM' },
    { value: '11:30pm', viewValue: '11:30 PM' },
    { value: '11:45pm', viewValue: '11:45 PM' }
  ];

  minutes: Minute[] = [
    { value: 'min', viewValue: 'min' },
    { value: 'hr', viewValue: 'hr' }
  ]

  otherPricingTypes: OtherPricingType[] = [
    { value: 'EarlyBird', viewValue: 'EarlyBird' },
    { value: 'MidDay', viewValue: 'MidDay' },
    { value: 'Evening', viewValue: 'Evening' },
    { value: 'AllDay', viewValue: 'AllDay' },
    { value: 'Nightly', viewValue: 'Nightly' },
    { value: 'Weekend', viewValue: 'Weekend' },
    { value: 'Special', viewValue: 'Special' }
  ]

  checkoutTypes: CheckoutType[] = [
    { value: 'Before', viewValue: 'EarlyBird' },
    { value: 'Max Hrs', viewValue: 'MidDay' }
  ]

  constructor() { }

  getGroups(): Group[] {
    return this.groups;
  }

  getCatagories():  ParkingCategory[] {
    return this.categories;
  }

  getParkingTypes(): ParkingType[] {
    return this.parking_types;
  }

  getPricingTypes(): PricingType[] {
    return this.pricing_types;
  }

  getAirports(): Airport[] {
    return this.airports;
  }

  getDates(): Dates[] {
    return this.dates;
  }

  getHours(): Hour[] {
    return this.hours;
  }

  getTimes(): Time[] {
    return this.times;
  }

  getMinutes(): Minute[] {
    return this.minutes;
  }

  getOtherPricingTypes(): OtherPricingType[] {
    return this.otherPricingTypes;
  }
  
  getCheckoutTypes(): CheckoutType[]{
    return this.checkoutTypes;
  }
 
}
