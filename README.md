# AngularAdvancedForms

## Check full guide [here](https://techpickups.com/quick-guide-to-advanced-forms-in-angular-10-min/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Sample form values

{
    "group": {
        "value": "group_1",
        "viewValue": "Group 1"
    },
    "parking_category": {
        "value": "airport",
        "viewValue": "Airport"
    },
    "parking_type": {
        "value": "covered_valet",
        "viewValue": "Covered Valet"
    },
    "pricing_type": {
        "value": "hourly",
        "viewValue": "Hourly"
    },
    "price": 54,
    "additional_fee": "additional_fee_yes",
    "airport_name": {
        "value": "airport 1",
        "viewValue": "Airport 1"
    },
    "distance_to_airport": 12,
    "shuttle_service": "shuttle_yes",
    "shuttle_description": "Shuttle Description",
    "price_group": {
        "custom_price": "custom_price_no",
        "upto_price_array": [
            {
                "start_day": {
                    "value": "friday",
                    "viewValue": "Friday"
                },
                "end_day": {
                    "value": "thursday",
                    "viewValue": "Thursday"
                },
                "h24hour": 24,
                "price24hour": 433,
                "overnight_enabled": "",
                "start_time": "",
                "end_time": "",
                "overtime_price": 9,
                "max_hours": 4,
                "overtime_start": {
                    "value": "12:15am",
                    "viewValue": "12:15 AM"
                },
                "overtime_enable": true,
                "overtime_end": {
                    "value": "12:45am",
                    "viewValue": "12:45 AM"
                },
                "price_array": [
                    {
                        "hour": {
                            "value": "4",
                            "viewValue": "4"
                        },
                        "price_2": 67,
                        "first_time": "",
                        "first_type": "",
                        "first_price": "",
                        "every_time": "",
                        "every_type": "",
                        "every_price": "",
                        "daily_maximum": ""
                    },
                    {
                        "hour": {
                            "value": "5",
                            "viewValue": "5"
                        },
                        "price_2": 56,
                        "first_time": "",
                        "first_type": "",
                        "first_price": "",
                        "every_time": "",
                        "every_type": "",
                        "every_price": "",
                        "daily_maximum": ""
                    }
                ]
            }
        ],
        "other_pricing_type_array": [
            {
                "other_pricing_type": {
                    "value": "Nightly",
                    "viewValue": "Nightly"
                },
                "weekday_start": {
                    "value": "thursday",
                    "viewValue": "Thursday"
                },
                "weekday_end": {
                    "value": "thursday",
                    "viewValue": "Thursday"
                },
                "checkin_start": {
                    "value": "1:00am",
                    "viewValue": "1:00 AM"
                },
                "checking_end": {
                    "value": "12:45am",
                    "viewValue": "12:45 AM"
                },
                "checkout_type": {
                    "value": "Max Hrs",
                    "viewValue": "MidDay"
                },
                "checkout_time": {
                    "value": "12:45am",
                    "viewValue": "12:45 AM"
                },
                "checkout_price": 87
            }
        ]
    },
    "pricing": [
        {
            "fee_label": "Fee Label",
            "fees_type": "Fee type",
            "amount": 9
        },
        {
            "fee_label": "Fee Label 2",
            "fees_type": "Fee Type 2",
            "amount": 45
        }
    ]
}