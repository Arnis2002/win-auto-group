import type { Vehicle } from '../types/vehicle';
import { dealership } from './dealership';

interface InventoryListing {
  listingId: string;
  year: number;
  make: string;
  model: string;
  price: number | null;
  mileage: number;
  bodyStyle: Vehicle['bodyStyle'];
  drivetrain: Vehicle['drivetrain'];
  fuelType: Vehicle['fuelType'];
  exteriorColor: string;
  interiorColor: string;
  engine: string;
  imageUrl: string;
}

/** Snapshot of Win Auto Group's public inventory; verify price and availability on the linked listing. */
const inventory: InventoryListing[] = [
  { listingId: '636234', year: 2022, make: 'Honda', model: 'CR-V', price: 25800, mileage: 136200, bodyStyle: 'SUV', drivetrain: 'AWD', fuelType: 'Gasoline', exteriorColor: 'Black', interiorColor: 'Black', engine: '4 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2022-Honda-CR-V-33136972595814207.jpg' },
  { listingId: '589196', year: 2017, make: 'BMW', model: '2-Series', price: 16950, mileage: 142764, bodyStyle: 'Coupe', drivetrain: 'AWD', fuelType: 'Gasoline', exteriorColor: 'White', interiorColor: 'Black', engine: '4 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-8095966020788661-BMW-2-Series-2017-ede2ee60-76d5-11f1-83e3-85dbfcaa24b383c9cf65-9b0e-4540-9bef-6307f1eb46f7.jpg' },
  { listingId: '588602', year: 2024, make: 'BMW', model: 'M2', price: 78000, mileage: 34460, bodyStyle: 'Coupe', drivetrain: 'RWD', fuelType: 'Gasoline', exteriorColor: 'Metallic Steel Gray', interiorColor: 'Matte Red', engine: '6 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-6714449762428993-BMW-M2-2024-cec29850-757c-11f1-9307-e9d318bec1b257850d2c-d8e6-4b93-a734-be433eabb061.jpg' },
  { listingId: '623373', year: 2014, make: 'Ford', model: 'F-150', price: 13800, mileage: 278042, bodyStyle: 'Pickup Truck', drivetrain: '4X4', fuelType: 'Gasoline', exteriorColor: 'Gray', interiorColor: 'Black', engine: '8 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2014-Ford-F-150-8051228838439124.jpg' },
  { listingId: '635437', year: 2023, make: 'Fisker', model: 'Ocean', price: 29800, mileage: 2100, bodyStyle: 'SUV', drivetrain: 'AWD', fuelType: 'Electric', exteriorColor: 'Blue', interiorColor: 'White', engine: 'Electric', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2023-Fisker-Ocean-6554641454594501.jpg' },
  { listingId: '635442', year: 2015, make: 'Tesla', model: 'Model S', price: 15800, mileage: 0, bodyStyle: 'Hatchback', drivetrain: 'AWD', fuelType: 'Electric', exteriorColor: 'Black', interiorColor: 'Beige', engine: 'Electric', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2015-Tesla-ModelS-4823921398103541.jpg' },
  { listingId: '635851', year: 2021, make: 'Infiniti', model: 'QX80', price: 33800, mileage: 111000, bodyStyle: 'SUV', drivetrain: '4X4', fuelType: 'Gasoline', exteriorColor: 'White', interiorColor: 'Black', engine: '8 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2021-Infiniti-QX80-6957676752813382.jpg' },
  { listingId: '625967', year: 2010, make: 'Nissan', model: 'Rogue', price: 3990, mileage: 190000, bodyStyle: 'SUV', drivetrain: 'AWD', fuelType: 'Gasoline', exteriorColor: 'Gray', interiorColor: 'Black', engine: '4 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2010-Nissan-Rogue-785311545641119546253b02-6ef4-4474-ac37-64b77b25c92d.jpg' },
  { listingId: '624031', year: 2020, make: 'Honda', model: 'CR-V', price: 18800, mileage: 209000, bodyStyle: 'Wagon', drivetrain: 'AWD', fuelType: 'Gasoline', exteriorColor: 'Red', interiorColor: 'Black', engine: '4 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2020-Honda-CR-V-48524851402093137113365e-dd3f-4b9d-ad89-e79d8d245133.jpg' },
  { listingId: '605252', year: 2015, make: 'Dodge', model: 'Journey', price: 6950, mileage: 198860, bodyStyle: 'SUV', drivetrain: 'AWD', fuelType: 'Gasoline', exteriorColor: 'White', interiorColor: 'Black', engine: '6 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2015-Dodge-Journey-69903777833449280344f888-3a65-4492-8c10-c0a61e546fd1.jpg' },
  { listingId: '526530', year: 2018, make: 'Volkswagen', model: 'Tiguan', price: 13800, mileage: 149260, bodyStyle: 'SUV', drivetrain: 'AWD', fuelType: 'Gasoline', exteriorColor: 'Black', interiorColor: 'Black', engine: '4 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2018-Volkswagen-Tiguan-5206083112052287c4d4dc5a-c2f7-46bf-bfec-84596c7c21db.jpg' },
  { listingId: '524369', year: 2018, make: 'Nissan', model: 'Qashqai', price: 12800, mileage: 149000, bodyStyle: 'SUV', drivetrain: 'AWD', fuelType: 'Gasoline', exteriorColor: 'Green', interiorColor: 'Black', engine: '4 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2018-Nissan-Qashqai-776368966272711688494dce-1f21-4d52-b844-935df90c0e2c.jpg' },
  { listingId: '535301', year: 2018, make: 'GMC', model: 'Sierra 1500', price: 16888, mileage: 219000, bodyStyle: 'Pickup Truck', drivetrain: '4X4', fuelType: 'Gasoline', exteriorColor: 'Black', interiorColor: 'Gray', engine: '8 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2018-GMC-Sierra1500-4648243322598366cac8862-2f26-4468-b126-b9f410038d85.jpg' },
  { listingId: '609159', year: 2017, make: 'Ford', model: 'F-150', price: 19800, mileage: 188619, bodyStyle: 'Pickup Truck', drivetrain: '4X4', fuelType: 'Gasoline', exteriorColor: 'Blue', interiorColor: 'Gray', engine: '6 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2017-Ford-F-150-317999288243302506df0012-43e6-4418-b6fc-28e4d6441027.jpg' },
  { listingId: '593355', year: 2019, make: 'Hyundai', model: 'Kona', price: 13800, mileage: 156834, bodyStyle: 'SUV', drivetrain: 'AWD', fuelType: 'Gasoline', exteriorColor: 'Metallic Ultra Blue', interiorColor: 'Black', engine: '4 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2019-Hyundai-Kona-25182250281150265836bbede-7ddd-498e-a9f4-e1ea38437e68.jpg' },
  { listingId: '573316', year: 2013, make: 'Acura', model: 'RDX', price: 10800, mileage: 172800, bodyStyle: 'Wagon', drivetrain: 'AWD', fuelType: 'Gasoline', exteriorColor: 'Gray', interiorColor: 'Black', engine: '6 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2013-ACURA-RDX-5346918401697323ff9c7581-709b-4163-892f-204e71791ac0.jpg' },
  { listingId: '563180', year: 2017, make: 'Chevrolet', model: 'Silverado 1500', price: 15800, mileage: 238500, bodyStyle: 'Truck', drivetrain: '4X4', fuelType: 'Gasoline', exteriorColor: 'Silver', interiorColor: 'Gray', engine: '8 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2017-CHEVROLET-SILVERADO1500-34377782154593994e91ff19b-0d50-4c13-a680-2083e23186f3.jpg' },
  { listingId: '547706', year: 2013, make: 'Ford', model: 'F-150', price: 12950, mileage: 232000, bodyStyle: 'Pickup Truck', drivetrain: '4X4', fuelType: 'Gasoline', exteriorColor: 'White', interiorColor: 'Black', engine: '6 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2013-Ford-F-150-98031843648854983f1294bc-ae3f-4e8d-a815-836ad8de656d.jpg' },
  { listingId: '556509', year: 2017, make: 'Subaru', model: 'Outback', price: 9800, mileage: 186978, bodyStyle: 'Wagon', drivetrain: 'AWD', fuelType: 'Gasoline', exteriorColor: 'Black', interiorColor: 'Black', engine: '6 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2017-Subaru-Outback-284805851483259296fc43fc-5c47-4ac3-a207-9e0bfe3b93a3.jpg' },
  { listingId: '543766', year: 2018, make: 'Chevrolet', model: 'Silverado 1500', price: 25800, mileage: 194500, bodyStyle: 'Pickup Truck', drivetrain: '4X4', fuelType: 'Gasoline', exteriorColor: 'Black', interiorColor: 'Black', engine: '8 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2018-Chevrolet-Silverado1500-6970590853264269957dbe9c-bbc9-4806-a253-6f19bc6678aa.jpg' },
  { listingId: '609160', year: 2017, make: 'Ford', model: 'Escape', price: null, mileage: 208929, bodyStyle: 'SUV', drivetrain: '4X4', fuelType: 'Gasoline', exteriorColor: 'Gold', interiorColor: 'Gray', engine: '4 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2017-Ford-Escape-4211973177639359ae498922-d234-416e-beb9-a8f22910f16e.jpg' },
  { listingId: '567406', year: 2016, make: 'Hyundai', model: 'Tucson', price: null, mileage: 182271, bodyStyle: 'SUV', drivetrain: 'AWD', fuelType: 'Gasoline', exteriorColor: 'Black', interiorColor: 'Black', engine: '4 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2016-Hyundai-Tucson-36517130870912906f1d8fed9-4602-4dae-b5c0-70797a100c9d.jpg' },
  { listingId: '565687', year: 2013, make: 'BMW', model: 'X5', price: null, mileage: 230000, bodyStyle: 'SUV', drivetrain: 'AWD', fuelType: 'Gasoline', exteriorColor: 'Black', interiorColor: 'Black', engine: '6 Cylinder', imageUrl: 'https://hillzcdn.ca/winautogroup/thumb-2013-BMW-X5-6041980478199764cbb36bc8-d24e-43f8-aa10-1d668847bedb.jpg' }
];

export const vehicles: Vehicle[] = inventory.map((listing, index) => {
  const sourceUrl = `${dealership.inventoryUrl}/used/${listing.year}-${listing.make.toLowerCase()}-${listing.model.toLowerCase().replace(/[- ]/g, '')}-${listing.listingId}`;
  const name = `${listing.year} ${listing.make} ${listing.model}`;

  return {
    id: `win-${listing.listingId}`,
    listingId: listing.listingId,
    sourceUrl,
    vin: null,
    year: listing.year,
    make: listing.make,
    model: listing.model,
    trim: null,
    price: listing.price,
    mileage: listing.mileage,
    bodyStyle: listing.bodyStyle,
    drivetrain: listing.drivetrain,
    fuelType: listing.fuelType,
    engine: listing.engine,
    transmission: 'Automatic',
    exteriorColor: listing.exteriorColor,
    interiorColor: listing.interiorColor,
    titleStatus: null,
    disclosures: [],
    featured: index < 6,
    description: `${name} listed by Win Auto Group. Confirm the current price, availability, vehicle history, and condition with the dealership.`,
    photos: [{
      file: listing.imageUrl,
      sourcePage: sourceUrl,
      alt: `${name} listed by Win Auto Group`,
      width: 1200,
      height: 900,
      author: 'Win Auto Group'
    }]
  };
});

export function getVehicle(id: string | undefined): Vehicle | undefined {
  return vehicles.find((v) => v.id === id);
}
