import type { Vehicle } from '../types/vehicle';

const currency = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  currencyDisplay: 'code',
  maximumFractionDigits: 0
});
const currencyCents = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  currencyDisplay: 'code',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const integer = new Intl.NumberFormat('en-US');

export function formatPrice(value: number | null): string {
  return value == null ? 'Call for price' : currency.format(value);
}

export function formatCurrency(value: number, cents = false): string {
  return cents ? currencyCents.format(value) : currency.format(value);
}

export function formatKilometres(value: number): string {
  return `${integer.format(value)} km`;
}

export function formatNumber(value: number): string {
  return integer.format(value);
}

export function vehicleName(v: Pick<Vehicle, 'year' | 'make' | 'model'>): string {
  return `${v.year} ${v.make} ${v.model}`;
}

export function vehicleFullName(v: Vehicle): string {
  return v.trim ? `${vehicleName(v)} ${v.trim}` : vehicleName(v);
}

export function orUnknown(value: string | number | null | undefined, fallback = 'Not listed'): string {
  return value == null || value === '' ? fallback : String(value);
}