// app/types/stationery.ts

// Define the valid categories as a union type
export type StationeryCategory =
  | 'Writing'
  | 'Paper'
  | 'Art Supplies'
  | 'Office'
  | 'School'
  | 'Craft'
  | 'Premium'
  | 'Accessories';

// Define the Stationery interface using the union type
export type Product = {
  id: number;
  name: string;
  price: number;
  category: StationeryCategory; // This links the type to the field
  image: string;
  desc: string;
};