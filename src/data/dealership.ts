export const dealership = {
  name: 'Win Auto Group',
  shortName: 'Win Auto Group',
  logoUrl: 'https://hillzcdn.ca/winautogroup/458634379425678-420261958972711-Logo_(3).png',
  phoneDisplay: '+1 (416) 988-1515',
  phoneHref: 'tel:+14169881515',
  address: {
    street: '17315 Yonge St',
    city: 'Newmarket',
    state: 'ON',
    zip: 'L3Y 8Z2'
  },
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=17315+Yonge+St%2C+Newmarket%2C+ON+L3Y+8Z2',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=17315%20Yonge%20St%2C%20Newmarket%2C%20ON%20L3Y%208Z2&z=15&output=embed',
  reviewsUrl:
    'https://www.google.com/search?q=Win+Auto+Group+17315+Yonge+St+Newmarket+reviews',
  officialSite: 'https://winautogroup.com/',
  inventoryUrl: 'https://winautogroup.com/cars',
  financingUrl: 'https://winautogroup.com/forms/finance',
  tradeUrl: 'https://winautogroup.com/forms/value-your-trade',
  hours: [],
  appointmentNote: 'Please call to confirm current business hours before visiting.',
  inventoryDisclosure:
    'Win Auto Group notes that vehicles sold as-is are not represented as roadworthy. Its website lists certification fees of $999 CAD for cars and SUVs and $1,299 CAD for trucks; prices are plus tax and licence, and a $999 CAD financing fee may apply. Confirm the vehicle condition and all fees with the dealership.'
};

export const addressLine = `${dealership.address.street}, ${dealership.address.city}, ${dealership.address.state} ${dealership.address.zip}, Canada`;
