const countries = [
  {
    text: "Norway",
    src: "countries/1f1e7-1f1fb.svg"
  },
  {
    text: "Switzerland",
    src: "countries/1f1e8-1f1ed.svg"
  },
  {
    text: "Germany",
    src: "countries/1f1e9-1f1ea.svg"
  },
  {
    text: "France",
    src: "countries/1f1eb-1f1f7.svg"
  },
  {
    text: "United Kingdom",
    src: "countries/1f1ec-1f1e7.svg"
  },
  {
    text: "Andorra",
    src: "countries/1f1e6-1f1e9.svg"
  },
  {
    text: "United Arab Emirates",
    src: "countries/1f1e6-1f1ea.svg"
  },
  {
    text: "Afghanistan",
    src: "countries/1f1e6-1f1eb.svg"
  },
  {
    text: "Albania",
    src: "countries/1f1e6-1f1f1.svg"
  },
  {
    text: "Armenia",
    src: "countries/1f1e6-1f1f2.svg"
  },
  {
    text: "Antarctica",
    src: "countries/1f1e6-1f1f6.svg"
  },
  {
    text: "Argentina",
    src: "countries/1f1e6-1f1f7.svg"
  },
  {
    text: "Austria",
    src: "countries/1f1e6-1f1f9.svg"
  },
  {
    text: "Australia",
    src: "countries/1f1e6-1f1fa.svg"
  },
  {
    text: "Aruba",
    src: "countries/1f1e6-1f1fc.svg"
  },
  {
    text: "Azerbaijan",
    src: "countries/1f1e6-1f1ff.svg"
  },
  {
    text: "Bosnia & Herzegovina",
    src: "countries/1f1e7-1f1e6.svg"
  },
  {
    text: "Barbados",
    src: "countries/1f1e7-1f1e7.svg"
  },
  {
    text: "Bangladesh",
    src: "countries/1f1e7-1f1e9.svg"
  },
  {
    text: "Belgium",
    src: "countries/1f1e7-1f1ea.svg"
  },
  {
    text: "Burkina Faso",
    src: "countries/1f1e7-1f1eb.svg"
  },
  {
    text: "Bulgaria",
    src: "countries/1f1e7-1f1ec.svg"
  },
  {
    text: "Bahrain",
    src: "countries/1f1e7-1f1ed.svg"
  },
  {
    text: "Burundi",
    src: "countries/1f1e7-1f1ee.svg"
  },
  {
    text: "Benin",
    src: "countries/1f1e7-1f1ef.svg"
  },
  {
    text: "Bolivia",
    src: "countries/1f1e7-1f1f4.svg"
  },
  {
    text: "Brazil",
    src: "countries/1f1e7-1f1f7.svg"
  },
  {
    text: "Bahamas",
    src: "countries/1f1e7-1f1f8.svg"
  },
  {
    text: "Belarus",
    src: "countries/1f1e7-1f1fe.svg"
  },
  {
    text: "Belize",
    src: "countries/1f1e7-1f1ff.svg"
  },
  {
    text: "Canada",
    src: "countries/1f1e8-1f1e6.svg"
  },
  {
    text: "Chile",
    src: "countries/1f1e8-1f1f1.svg"
  },
  {
    text: "Cameroon",
    src: "countries/1f1e8-1f1f2.svg"
  },
  {
    text: "China",
    src: "countries/1f1e8-1f1f3.svg"
  },
  {
    text: "Colombia",
    src: "countries/1f1e8-1f1f4.svg"
  },
  {
    text: "Costa Rica",
    src: "countries/1f1e8-1f1f7.svg"
  },
  {
    text: "Cuba",
    src: "countries/1f1e8-1f1fa.svg"
  },
  {
    text: "Cyprus",
    src: "countries/1f1e8-1f1fe.svg"
  },
  {
    text: "Czechia",
    src: "countries/1f1e8-1f1ff.svg"
  },
  {
    text: "Denmark",
    src: "countries/1f1e9-1f1f0.svg"
  },
  {
    text: "Dominican Republic",
    src: "countries/1f1e9-1f1f4.svg"
  },
  {
    text: "Algeria",
    src: "countries/1f1e9-1f1ff.svg"
  },
  {
    text: "Spain",
    src: "countries/1f1ea-1f1e6.svg"
  },
  {
    text: "Ecuador",
    src: "countries/1f1ea-1f1e8.svg"
  },
  {
    text: "Estonia",
    src: "countries/1f1ea-1f1ea.svg"
  },
  {
    text: "Egypt",
    src: "countries/1f1ea-1f1ec.svg"
  },
  {
    text: "Eritrea",
    src: "countries/1f1ea-1f1f7.svg"
  },
  {
    text: "European Union",
    src: "countries/1f1ea-1f1fa.svg"
  },
  {
    text: "Finland",
    src: "countries/1f1eb-1f1ee.svg"
  },
  {
    text: "Gabon",
    src: "countries/1f1ec-1f1e6.svg"
  },
  {
    text: "Grenada",
    src: "countries/1f1ec-1f1e9.svg"
  },
  {
    text: "Georgia",
    src: "countries/1f1ec-1f1ea.svg"
  },
  {
    text: "Ghana",
    src: "countries/1f1ec-1f1ed.svg"
  },
  {
    text: "Gibraltar",
    src: "countries/1f1ec-1f1ee.svg"
  },
  {
    text: "Greenland",
    src: "countries/1f1ec-1f1f1.svg"
  },
  {
    text: "Guinea",
    src: "countries/1f1ec-1f1f3.svg"
  },
  {
    text: "Greeece",
    src: "countries/1f1ec-1f1f7.svg"
  },
  {
    text: "Guatemala",
    src: "countries/1f1ec-1f1f9.svg"
  },
  {
    text: "Guyana",
    src: "countries/1f1ec-1f1fe.svg"
  },
  {
    text: "Honduras",
    src: "countries/1f1ed-1f1f3.svg"
  },
  {
    text: "Croatia",
    src: "countries/1f1ed-1f1f7.svg"
  },
  {
    text: "Haiti",
    src: "countries/1f1ed-1f1f9.svg"
  },
  {
    text: "Hungary",
    src: "countries/1f1ed-1f1fa.svg"
  },
  {
    text: "Canary Islands",
    src: "countries/1f1ee-1f1e8.svg"
  },
  {
    text: "Indonesia",
    src: "countries/1f1ee-1f1e9.svg"
  },
  {
    text: "Ireland",
    src: "countries/1f1ee-1f1ea.svg"
  },
  {
    text: "Israel",
    src: "countries/1f1ee-1f1f1.svg"
  },
  {
    text: "India",
    src: "countries/1f1ee-1f1f3.svg"
  },
  {
    text: "Iraq",
    src: "countries/1f1ee-1f1f6.svg"
  },
  {
    text: "Iran",
    src: "countries/1f1ee-1f1f7.svg"
  },
  {
    text: "Iceland",
    src: "countries/1f1ee-1f1f8.svg"
  },
  {
    text: "Italy",
    src: "countries/1f1ee-1f1f9.svg"
  },
  {
    text: "Jamaica",
    src: "countries/1f1ef-1f1f2.svg"
  },
  {
    text: "Jordan",
    src: "countries/1f1ef-1f1f4.svg"
  },
  {
    text: "Japan",
    src: "countries/1f1ef-1f1f5.svg"
  },
  {
    text: "Kenya",
    src: "countries/1f1f0-1f1ea.svg"
  },
  {
    text: "Kyrgyzstan",
    src: "countries/1f1f0-1f1ec.svg"
  },
  {
    text: "North Korea",
    src: "countries/1f1f0-1f1f5.svg"
  },
  {
    text: "South Korea",
    src: "countries/1f1f0-1f1f7.svg"
  },
  {
    text: "Kuwait",
    src: "countries/1f1f0-1f1fc.svg"
  },
  {
    text: "Kazakhstan",
    src: "countries/1f1f0-1f1ff.svg"
  },
  {
    text: "Laos",
    src: "countries/1f1f1-1f1e6.svg"
  },
  {
    text: "Lebanon",
    src: "countries/1f1f1-1f1e7.svg"
  },
  {
    text: "Liechtenstein",
    src: "countries/1f1f1-1f1ee.svg"
  },
  {
    text: "Liberia",
    src: "countries/1f1f1-1f1f7.svg"
  },
  {
    text: "Lithuania",
    src: "countries/1f1f1-1f1f9.svg"
  },
  {
    text: "Luxembourg",
    src: "countries/1f1f1-1f1fa.svg"
  },
  {
    text: "Latvia",
    src: "countries/1f1f1-1f1fb.svg"
  },
  {
    text: "Libya",
    src: "countries/1f1f1-1f1fe.svg"
  },
  {
    text: "Morocco",
    src: "countries/1f1f2-1f1e6.svg"
  },
  {
    text: "Monaco",
    src: "countries/1f1f2-1f1e8.svg"
  },
  {
    text: "Moldova",
    src: "countries/1f1f2-1f1e9.svg"
  },
  {
    text: "Macedonia",
    src: "countries/1f1f2-1f1f0.svg"
  },
  {
    text: "Mali",
    src: "countries/1f1f2-1f1f1.svg"
  },
  {
    text: "Mongolia",
    src: "countries/1f1f2-1f1f3.svg"
  },
  {
    text: "Malta",
    src: "countries/1f1f2-1f1f9.svg"
  },
  {
    text: "Malawi",
    src: "countries/1f1f2-1f1fc.svg"
  },
  {
    text: "Mexico",
    src: "countries/1f1f2-1f1fd.svg"
  },
  {
    text: "Malaysia",
    src: "countries/1f1f2-1f1fe.svg"
  },
  {
    text: "Mozambique",
    src: "countries/1f1f2-1f1ff.svg"
  },
  {
    text: "Namibia",
    src: "countries/1f1f3-1f1e6.svg"
  },
  {
    text: "Nigeria",
    src: "countries/1f1f3-1f1ec.svg"
  },
  {
    text: "Nicaragua",
    src: "countries/1f1f3-1f1ee.svg"
  },
  {
    text: "Netherlands",
    src: "countries/1f1f3-1f1f1.svg"
  },
  {
    text: "Nepal",
    src: "countries/1f1f3-1f1f5.svg"
  },
  {
    text: "New Zealand",
    src: "countries/1f1f3-1f1ff.svg"
  },
  {
    text: "Oman",
    src: "countries/1f1f4-1f1f2.svg"
  },
  {
    text: "Panama",
    src: "countries/1f1f5-1f1e6.svg"
  },
  {
    text: "Peru",
    src: "countries/1f1f5-1f1ea.svg"
  },
  {
    text: "Pakistan",
    src: "countries/1f1f5-1f1f0.svg"
  },
  {
    text: "Poland",
    src: "countries/1f1f5-1f1f1.svg"
  },
  {
    text: "Puerto Rico",
    src: "countries/1f1f5-1f1f7.svg"
  },
  {
    text: "Palestine",
    src: "countries/1f1f5-1f1f8.svg"
  },
  {
    text: "Portugal",
    src: "countries/1f1f5-1f1f9.svg"
  },
  {
    text: "Quatar",
    src: "countries/1f1f6-1f1e6.svg"
  },
  {
    text: "Romania",
    src: "countries/1f1f7-1f1f4.svg"
  },
  {
    text: "Serbia",
    src: "countries/1f1f7-1f1f8.svg"
  },
  {
    text: "Russia",
    src: "countries/1f1f7-1f1fa.svg"
  },
  {
    text: "Rwanda",
    src: "countries/1f1f7-1f1fc.svg"
  },
  {
    text: "Saudi Arabia",
    src: "countries/1f1f8-1f1e6.svg"
  },
  {
    text: "Sudan",
    src: "countries/1f1f8-1f1e9.svg"
  },
  {
    text: "Sweden",
    src: "countries/1f1f8-1f1ea.svg"
  },
  {
    text: "Singapore",
    src: "countries/1f1f8-1f1ec.svg"
  },
  {
    text: "Slovenia",
    src: "countries/1f1f8-1f1ee.svg"
  },
  {
    text: "Slovakia",
    src: "countries/1f1f8-1f1f0.svg"
  },
  {
    text: "Sierra Leone",
    src: "countries/1f1f8-1f1f1.svg"
  },
  {
    text: "San Marino",
    src: "countries/1f1f8-1f1f2.svg"
  },
  {
    text: "Senegal",
    src: "countries/1f1f8-1f1f3.svg"
  },
  {
    text: "Somalia",
    src: "countries/1f1f8-1f1f4.svg"
  },
  {
    text: "El Salvador",
    src: "countries/1f1f8-1f1fb.svg"
  },
  {
    text: "Syria",
    src: "countries/1f1f8-1f1fe.svg"
  },
  {
    text: "Swaziland",
    src: "countries/1f1f8-1f1ff.svg"
  },
  {
    text: "Togo",
    src: "countries/1f1f9-1f1ec.svg"
  },
  {
    text: "Thailand",
    src: "countries/1f1f9-1f1ed.svg"
  },
  {
    text: "Tajikistan",
    src: "countries/1f1f9-1f1ef.svg"
  },
  {
    text: "Turkmenistan",
    src: "countries/1f1f9-1f1f2.svg"
  },
  {
    text: "Tunisia",
    src: "countries/1f1f9-1f1f3.svg"
  },
  {
    text: "Tonga",
    src: "countries/1f1f9-1f1f4.svg"
  },
  {
    text: "Turkey",
    src: "countries/1f1f9-1f1f7.svg"
  },
  {
    text: "Trinidad & Tobago",
    src: "countries/1f1f9-1f1f9.svg"
  },
  {
    text: "Taiwan",
    src: "countries/1f1f9-1f1fc.svg"
  },
  {
    text: "Ukraine",
    src: "countries/1f1fa-1f1e6.svg"
  },
  {
    text: "Uganda",
    src: "countries/1f1fa-1f1ec.svg"
  },
  {
    text: "United States",
    src: "countries/1f1fa-1f1f2.svg"
  },
  {
    text: "Uruguay",
    src: "countries/1f1fa-1f1fe.svg"
  },
  {
    text: "Uzbekistan",
    src: "countries/1f1fa-1f1ff.svg"
  },
  {
    text: "Venezuela",
    src: "countries/1f1fb-1f1ea.svg"
  },
  {
    text: "Vietnam",
    src: "countries/1f1fb-1f1f3.svg"
  },
  {
    text: "Samoa",
    src: "countries/1f1fc-1f1f8.svg"
  },
  {
    text: "Yemen",
    src: "countries/1f1fe-1f1ea.svg"
  },
  {
    text: "South Africa",
    src: "countries/1f1ff-1f1e6.svg"
  },
  {
    text: "Zambia",
    src: "countries/1f1ff-1f1f2.svg"
  },
  {
    text: "Zimbabwe",
    src: "countries/1f1ff-1f1fc.svg"
  }
];

export default { countries };
