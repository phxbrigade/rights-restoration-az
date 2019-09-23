import React from 'react';
// import './App.css';

// Converted from: https://www.azcourts.gov/clerkofcourt/Contact-Us
let court_info = {
  apache:    {url: "http://www.co.apache.az.us/superior-court/",
              fullname: 'Apache County Superior Court',
              phone_info: "Clerk's Office (928) 337-7550"},
  coshise:   {url: "https://www.cochise.az.gov/superior-court-divisions/home",
              fullname: 'Cochise County Superior Court',
              phone_info: "Clerk's Office (520) 432-8600 (Bisbee) and (520) 803-3060 (Sierra Vista)"},
  coconino:  {url: "http://www.coconino.az.gov/index.aspx?nid=132",
              fullname: 'Coconino County Superior Court',
              phone_info: "Clerk's Office (928) 679-7600"},
  gila:      {url: "http://www.gilacountyaz.gov/government/courts/clerk_of_the_court/index.php",
              fullname: 'Gila County Superior Court',
              phone_info: "Clerk's Office (928) 402-8866 (Globe) and (928) 474-3978 (Payson)"},
  graham:    {url: "http://www.graham.az.gov/courts-judicial/superior-court/",
              fullname: 'Graham County Superior Court',
              phone_info: "Clerk's Office (928) 428-3100"},
  greenlee:  {url: "http://www.co.greenlee.az.us/courts/",
              fullname: 'Greenlee County Superior Court',
              phone_info: "Clerk's Office (928) 865-4242"},
  lapaz:     {url: "http://www.lapazsuperiorcourtclerk.com/index.html",
              fullname: 'La Paz County Superior Court',
              phone_info: "Clerk's Office (928) 669-6131"},
  maricopa:  {url: "http://www.superiorcourt.maricopa.gov/index.asp",
              fullname: 'Maricopa County Superior Court',
              phone_info: "Clerk's Office (602) 372-5375"},
  mohave:    {url: "http://www.mohavecourts.com/index.html",
              fullname: 'Mohave County Superior Court',
              phone_info: "Clerk's Office (928) 753-0713 (Kingman), (928) 453-0701 (Lake Havasu City) and (928) 758-0730 (Bullhead City)"},
  navajo:    {url: "http://www.navajocountyaz.gov/Departments/Superior-Court",
              fullname: 'Navajo County Superior Court',
              phone_info: "Clerk's Office (928) 524-4188"},
  pima:      {url: "http://www.sc.pima.gov/",
              fullname: 'Pima County Superior Court',
              phone_info: "Clerk's Office (520) 724-3200"},
  pinal:     {url: "http://pinalcountyaz.gov/Departments/JudicialBranch/SuperiorCourt/Pages/Home.aspx",
              fullname: 'Pinal County Superior Court',
              phone_info: "Clerk's Office (520) 866-5300"},
  santacruz: {url: "http://www.co.santa-cruz.az.us/130/Superior-Court",
              fullname: 'Santa Cruz County Superior Court',
              phone_info: "Clerk's Office (520) 375-7700"},
  yavapai:   {url: "http://courts.yavapai.us/superiorcourt/",
              fullname: 'Yavapai County Superior Court',
              phone_info: "Clerk's Office (928) 771-3312"},
  yuma:      {url: "http://www.yumacountyaz.gov/government/courts/superior-court",
              fullname: 'Yuma County Superior Court',
              phone_info: "Clerk's Office (928) 817-4222"},
}

function Court(props) {
  const selected_court = court_info[props.court]
  return (
    <div className="Court">
      <p><a href={selected_court.url}>{selected_court.fullname}</a> – {selected_court.phone_info}</p>
    </div>
  );
}

export default Court;
