import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {SelectItem} from  'primeng/primeng';

@Component({
  selector: 'app-yamanote-studios-country-dropdown',
  templateUrl: './yamanote-studios-country-dropdown.component.html',
  styleUrls: ['./yamanote-studios-country-dropdown.component.css']
})
export class YamanoteStudiosCountryDropdownComponent implements OnInit {

  formModel: any;
  isRequired: string;

  countries: SelectItem[];
  @Output() ngModelChange: EventEmitter<String> = new EventEmitter<String>();

  defaultValue:string = "US";

  constructor() {
    console.log("create a countries dropdown instance");
    this.countries = [];
    this.countries.push({value:null, label:'Select Country'});
    this.countries.push({value: "AF", label: 'Afghanistan'});
    this.countries.push({value: "AL", label: 'Albania'});
    this.countries.push({value: "DZ", label: 'Algeria'});
    this.countries.push({value: "AS", label: 'American Samoa'});
    this.countries.push({value: "AD", label: 'Andorra'});
    this.countries.push({value: "AO", label: 'Angola'});
    this.countries.push({value: "AI", label: 'Anguilla'});
    this.countries.push({value: "AQ", label: 'Antarctica'});
    this.countries.push({value: "AG", label: 'Antigua and Barbuda'});
    this.countries.push({value: "AR", label: 'Argentina'});
    this.countries.push({value: "AM", label: 'Armenia'});
    this.countries.push({value: "AW", label: 'Aruba'});
    this.countries.push({value: "AU", label: 'Australia'});
    this.countries.push({value: "AT", label: 'Austria'});
    this.countries.push({value: "AZ", label: 'Azerbaijan'});
    this.countries.push({value: "BS", label: 'Bahamas'});
    this.countries.push({value: "BH", label: 'Bahrain'});
    this.countries.push({value: "BD", label: 'Bangladesh'});
    this.countries.push({value: "BB", label: 'Barbados'});
    this.countries.push({value: "BY", label: 'Belarus'});
    this.countries.push({value: "BE", label: 'Belgium'});
    this.countries.push({value: "BZ", label: 'Belize'});
    this.countries.push({value: "BJ", label: 'Benin'});
    this.countries.push({value: "BM", label: 'Bermuda'});
    this.countries.push({value: "BT", label: 'Bhutan'});
    this.countries.push({value: "BO", label: 'Bolivia'});
    this.countries.push({value: "BA", label: 'Bosnia-Herzegovina'});
    this.countries.push({value: "BW", label: 'Botswana'});
    this.countries.push({value: "BV", label: 'Bouvet Island'});
    this.countries.push({value: "BR", label: 'Brazil'});
    this.countries.push({value: "IO", label: 'British Indian Ocean Territory'});
    this.countries.push({value: "BN", label: 'Brunei Darussalam'});
    this.countries.push({value: "BG", label: 'Bulgaria'});
    this.countries.push({value: "BF", label: 'Burkina Faso'});
    this.countries.push({value: "BI", label: 'Burundi'});
    this.countries.push({value: "KH", label: 'Cambodia'});
    this.countries.push({value: "CM", label: 'Cameroon'});
    this.countries.push({value: "CA", label: 'Canada'});
    this.countries.push({value: "CV", label: 'Cape Verde'});
    this.countries.push({value: "KY", label: 'Cayman Islands'});
    this.countries.push({value: "CF", label: 'Central African Republic'});
    this.countries.push({value: "TD", label: 'Chad'});
    this.countries.push({value: "CL", label: 'Chile'});
    this.countries.push({value: "CN", label: 'China'});
    this.countries.push({value: "CX", label: 'Christmas Island'});
    this.countries.push({value: "CC", label: 'Cocos (Keeling) Islands'});
    this.countries.push({value: "CO", label: 'Colombia'});
    this.countries.push({value: "KM", label: 'Comoros'});
    this.countries.push({value: "CG", label: 'Congo'});
    this.countries.push({value: "CK", label: 'Cook Islands'});
    this.countries.push({value: "CR", label: 'Costa Rica'});
    this.countries.push({value: "HR", label: 'Croatia'});
    this.countries.push({value: "CU", label: 'Cuba'});
    this.countries.push({value: "CW", label: 'Curacao'});
    this.countries.push({value: "CY", label: 'Cyprus'});
    this.countries.push({value: "CZ", label: 'Czech Republic'});
    this.countries.push({value: "CD", label: 'Democratic Republic of The Congo'});
    this.countries.push({value: "DK", label: 'Denmark'});
    this.countries.push({value: "DJ", label: 'Djibouti'});
    this.countries.push({value: "DM", label: 'Dominica'});
    this.countries.push({value: "DO", label: 'Dominican Republic'});
    this.countries.push({value: "TP", label: 'East Timor'});
    this.countries.push({value: "EC", label: 'Ecuador'});
    this.countries.push({value: "EG", label: 'Egypt'});
    this.countries.push({value: "SV", label: 'El Salvador'});
    this.countries.push({value: "GQ", label: 'Equatorial Guinea'});
    this.countries.push({value: "ER", label: 'Eritrea'});
    this.countries.push({value: "EE", label: 'Estonia'});
    this.countries.push({value: "ET", label: 'Ethiopia'});
    this.countries.push({value: "FK", label: 'Falkland Islands'});
    this.countries.push({value: "FO", label: 'Faroe Islands'});
    this.countries.push({value: "FJ", label: 'Fiji'});
    this.countries.push({value: "FI", label: 'Finland'});
    this.countries.push({value: "CS", label: 'Former Czechoslovakia'});
    this.countries.push({value: "SU", label: 'Former USSR'});
    this.countries.push({value: "FR", label: 'France'});
    this.countries.push({value: "FX", label: 'France (European Territory)'});
    this.countries.push({value: "GF", label: 'French Guyana'});
    this.countries.push({value: "TF", label: 'French Southern Territories'});
    this.countries.push({value: "GA", label: 'Gabon'});
    this.countries.push({value: "GM", label: 'Gambia'});
    this.countries.push({value: "GE", label: 'Georgia'});
    this.countries.push({value: "DE", label: 'Germany'});
    this.countries.push({value: "GH", label: 'Ghana'});
    this.countries.push({value: "GI", label: 'Gibraltar'});
    this.countries.push({value: "GR", label: 'Greece'});
    this.countries.push({value: "GL", label: 'Greenland'});
    this.countries.push({value: "GD", label: 'Grenada'});
    this.countries.push({value: "GP", label: 'Guadeloupe (French)'});
    this.countries.push({value: "GU", label: 'Guam (USA)'});
    this.countries.push({value: "GT", label: 'Guatemala'});
    this.countries.push({value: "GN", label: 'Guinea'});
    this.countries.push({value: "GW", label: 'Guinea Bissau'});
    this.countries.push({value: "GY", label: 'Guyana'});
    this.countries.push({value: "HT", label: 'Haiti'});
    this.countries.push({value: "HM", label: 'Heard and McDonald Islands'});
    this.countries.push({value: "HN", label: 'Honduras'});
    this.countries.push({value: "HK", label: 'Hong Kong'});
    this.countries.push({value: "HU", label: 'Hungary'});
    this.countries.push({value: "IS", label: 'Iceland'});
    this.countries.push({value: "IN", label: 'India'});
    this.countries.push({value: "ID", label: 'Indonesia'});
    this.countries.push({value: "IR", label: 'Iran'});
    this.countries.push({value: "IQ", label: 'Iraq'});
    this.countries.push({value: "IE", label: 'Ireland'});
    this.countries.push({value: "IL", label: 'Israel'});
    this.countries.push({value: "IT", label: 'Italy'});
    this.countries.push({value: "CI", label: 'Ivory Coast (Cote D&#39;Ivoire)'});
    this.countries.push({value: "JM", label: 'Jamaica'});
    this.countries.push({value: "JP", label: 'Japan'});
    this.countries.push({value: "JO", label: 'Jordan'});
    this.countries.push({value: "KZ", label: 'Kazakhstan'});
    this.countries.push({value: "KE", label: 'Kenya'});
    this.countries.push({value: "KI", label: 'Kiribati'});
    this.countries.push({value: "KW", label: 'Kuwait'});
    this.countries.push({value: "KG", label: 'Kyrgyzstan'});
    this.countries.push({value: "LA", label: 'Laos'});
    this.countries.push({value: "LV", label: 'Latvia'});
    this.countries.push({value: "LB", label: 'Lebanon'});
    this.countries.push({value: "LS", label: 'Lesotho'});
    this.countries.push({value: "LR", label: 'Liberia'});
    this.countries.push({value: "LY", label: 'Libya'});
    this.countries.push({value: "LI", label: 'Liechtenstein'});
    this.countries.push({value: "LT", label: 'Lithuania'});
    this.countries.push({value: "LU", label: 'Luxembourg'});
    this.countries.push({value: "MO", label: 'Macau'});
    this.countries.push({value: "MK", label: 'Macedonia'});
    this.countries.push({value: "MG", label: 'Madagascar'});
    this.countries.push({value: "MW", label: 'Malawi'});
    this.countries.push({value: "MY", label: 'Malaysia'});
    this.countries.push({value: "MV", label: 'Maldives'});
    this.countries.push({value: "ML", label: 'Mali'});
    this.countries.push({value: "MT", label: 'Malta'});
    this.countries.push({value: "MH", label: 'Marshall Islands'});
    this.countries.push({value: "MQ", label: 'Martinique (French)'});
    this.countries.push({value: "MR", label: 'Mauritania'});
    this.countries.push({value: "MU", label: 'Mauritius'});
    this.countries.push({value: "YT", label: 'Mayotte'});
    this.countries.push({value: "MX", label: 'Mexico'});
    this.countries.push({value: "FM", label: 'Micronesia'});
    this.countries.push({value: "MD", label: 'Moldavia'});
    this.countries.push({value: "MC", label: 'Monaco'});
    this.countries.push({value: "MN", label: 'Mongolia'});
    this.countries.push({value: "MS", label: 'Montserrat'});
    this.countries.push({value: "MA", label: 'Morocco'});
    this.countries.push({value: "MZ", label: 'Mozambique'});
    this.countries.push({value: "MM", label: 'Myanmar'});
    this.countries.push({value: "NA", label: 'Namibia'});
    this.countries.push({value: "NR", label: 'Nauru'});
    this.countries.push({value: "NP", label: 'Nepal'});
    this.countries.push({value: "NL", label: 'Netherlands'});
    this.countries.push({value: "AN", label: 'Netherlands Antilles'});
    this.countries.push({value: "NT", label: 'Neutral Zone'});
    this.countries.push({value: "NC", label: 'New Caledonia (French)'});
    this.countries.push({value: "NZ", label: 'New Zealand'});
    this.countries.push({value: "NI", label: 'Nicaragua'});
    this.countries.push({value: "NE", label: 'Niger'});
    this.countries.push({value: "NG", label: 'Nigeria'});
    this.countries.push({value: "NU", label: 'Niue'});
    this.countries.push({value: "NF", label: 'Norfolk Island'});
    this.countries.push({value: "MP", label: 'Northern Mariana Islands'});
    this.countries.push({value: "KP", label: 'North Korea'});
    this.countries.push({value: "NO", label: 'Norway'});
    this.countries.push({value: "OM", label: 'Oman'});
    this.countries.push({value: "PK", label: 'Pakistan'});
    this.countries.push({value: "PW", label: 'Palau'});
    this.countries.push({value: "PA", label: 'Panama'});
    this.countries.push({value: "PG", label: 'Papua New Guinea'});
    this.countries.push({value: "PY", label: 'Paraguay'});
    this.countries.push({value: "PE", label: 'Peru'});
    this.countries.push({value: "PH", label: 'Philippines'});
    this.countries.push({value: "PN", label: 'Pitcairn Island'});
    this.countries.push({value: "PL", label: 'Poland'});
    this.countries.push({value: "PF", label: 'Polynesia (French)'});
    this.countries.push({value: "PT", label: 'Portugal'});
    this.countries.push({value: "PR", label: 'Puerto Rico'});
    this.countries.push({value: "QA", label: 'Qatar'});
    this.countries.push({value: "RE", label: 'Reunion (French)'});
    this.countries.push({value: "RO", label: 'Romania'});
    this.countries.push({value: "RU", label: 'Russian Federation'});
    this.countries.push({value: "RW", label: 'Rwanda'});
    this.countries.push({value: "GS", label: 'S. Georgia and S. Sandwich Isls.'});
    this.countries.push({value: "SH", label: 'Saint Helena'});
    this.countries.push({value: "KN", label: 'Saint Kitts and Nevis'});
    this.countries.push({value: "LC", label: 'Saint Lucia'});
    this.countries.push({value: "MF", label: 'Saint Martin'});
    this.countries.push({value: "PM", label: 'Saint Pierre and Miquelon'});
    this.countries.push({value: "ST", label: 'Saint Tome (Sao Tome) and Principe'});
    this.countries.push({value: "VC", label: 'Saint Vincent and Grenadines'});
    this.countries.push({value: "WS", label: 'Samoa'});
    this.countries.push({value: "SM", label: 'San Marino'});
    this.countries.push({value: "SA", label: 'Saudi Arabia'});
    this.countries.push({value: "SN", label: 'Senegal'});
    this.countries.push({value: "SC", label: 'Seychelles'});
    this.countries.push({value: "SL", label: 'Sierra Leone'});
    this.countries.push({value: "SG", label: 'Singapore'});
    this.countries.push({value: "SX", label: 'Sint Maarten'});
    this.countries.push({value: "SK", label: 'Slovak Republic'});
    this.countries.push({value: "SI", label: 'Slovenia'});
    this.countries.push({value: "SB", label: 'Solomon Islands'});
    this.countries.push({value: "SO", label: 'Somalia'});
    this.countries.push({value: "ZA", label: 'South Africa'});
    this.countries.push({value: "KR", label: 'South Korea'});
    this.countries.push({value: "ES", label: 'Spain'});
    this.countries.push({value: "LK", label: 'Sri Lanka'});
    this.countries.push({value: "SD", label: 'Sudan'});
    this.countries.push({value: "SR", label: 'Surilabel'});
    this.countries.push({value: "SJ", label: 'Svalbard and Jan Mayen Islands'});
    this.countries.push({value: "SZ", label: 'Swaziland'});
    this.countries.push({value: "SE", label: 'Sweden'});
    this.countries.push({value: "CH", label: 'Switzerland'});
    this.countries.push({value: "SY", label: 'Syria'});
    this.countries.push({value: "TJ", label: 'Tadjikistan'});
    this.countries.push({value: "TW", label: 'Taiwan'});
    this.countries.push({value: "TZ", label: 'Tanzania'});
    this.countries.push({value: "TH", label: 'Thailand'});
    this.countries.push({value: "TG", label: 'Togo'});
    this.countries.push({value: "TK", label: 'Tokelau'});
    this.countries.push({value: "TO", label: 'Tonga'});
    this.countries.push({value: "TT", label: 'Trinidad and Tobago'});
    this.countries.push({value: "TN", label: 'Tunisia'});
    this.countries.push({value: "TR", label: 'Turkey'});
    this.countries.push({value: "TM", label: 'Turkmenistan'});
    this.countries.push({value: "TC", label: 'Turks and Caicos'});
    this.countries.push({value: "TV", label: 'Tuvalu'});
    this.countries.push({value: "UG", label: 'Uganda'});
    this.countries.push({value: "UA", label: 'Ukraine'});
    this.countries.push({value: "AE", label: 'United Arab Emirates'});
    this.countries.push({value: "GB", label: 'United Kingdom'});
    this.countries.push({value: "US", label: 'United States Of America'});
    this.countries.push({value: "UY", label: 'Uruguay'});
    this.countries.push({value: "UM", label: 'USA Minor Outlying Islands'});
    this.countries.push({value: "UZ", label: 'Uzbekistan'});
    this.countries.push({value: "VU", label: 'Vanuatu'});
    this.countries.push({value: "VA", label: 'Vatican City State'});
    this.countries.push({value: "VE", label: 'Venezuela'});
    this.countries.push({value: "VN", label: 'Vietnam'});
    this.countries.push({value: "VG", label: 'Virgin Islands (British)'});
    this.countries.push({value: "VI", label: 'Virgin Islands (USA)'});
    this.countries.push({value: "WF", label: 'Wallis and Futuna Islands'});
    this.countries.push({value: "EH", label: 'Western Sahara'});
    this.countries.push({value: "YE", label: 'Yemen'});
    this.countries.push({value: "YU", label: 'Yugoslavia'});
    this.countries.push({value: "ZM", label: 'Zambia'});
    this.countries.push({value: "ZW", label: 'Zimbabwe'});


  }


  ngOnInit() {

    if(this.formModel == '' || null){
      this.formModel = this.defaultValue;
    }
  }

}
