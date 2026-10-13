export type BodyStyle = 'SUV' | 'Sedan' | 'Coupe' | 'Hatchback' | 'Wagon' | 'Pickup Truck' | 'Truck';
export type FuelType = 'Gasoline' | 'Electric';
export type Drivetrain = 'AWD' | 'RWD' | 'FWD' | '4X4';

export interface Photo {
  /** Remote vehicle image URL */
  file: string;
  alt: string;
  width: number;
  height: number;
  author: string;
  sourcePage?: string;
  /** Only set when the license was verified on the file page */
  license?: string;
}

export interface Vehicle {
  id: string;
  listingId: string;
  sourceUrl: string;
  vin: string | null;
  year: number;
  make: string;
  model: string;
  trim: string | null;
  price: number | null;
  mileage: number;
  bodyStyle: BodyStyle;
  drivetrain: Drivetrain | null;
  fuelType: FuelType;
  engine: string | null;
  transmission: string | null;
  exteriorColor: string | null;
  interiorColor: string | null;
  titleStatus: string | null;
  /** Material disclosures from the source listing — always shown, never hidden */
  disclosures: string[];
  featured: boolean;
  description: string;
  photos: Photo[];
}