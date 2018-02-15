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
    text: "Åland Islands",
    src: "countries/1f1e6-1f1fd.svg"
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
  }
];

export default { countries };
