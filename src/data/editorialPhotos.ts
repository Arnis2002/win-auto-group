import type { Photo } from '../types/vehicle';

/** Official vehicle photos used in the homepage and dealership sections. */
export const editorialPhotos: Record<'hero' | 'feature' | 'trade' | 'interior', Photo> = {
  hero: {
    file: 'https://hillzcdn.ca/winautogroup/thumb-2022-Honda-CR-V-33136972595814207.jpg',
    sourcePage: 'https://winautogroup.com/cars/used/2022-honda-crv-636234',
    alt: '2022 Honda CR-V listed by Win Auto Group',
    width: 1200,
    height: 900,
    author: 'Win Auto Group'
  },
  feature: {
    file: 'https://hillzcdn.ca/winautogroup/thumb-6714449762428993-BMW-M2-2024-cec29850-757c-11f1-9307-e9d318bec1b257850d2c-d8e6-4b93-a734-be433eabb061.jpg',
    sourcePage: 'https://winautogroup.com/cars/used/2024-bmw-m2-588602',
    alt: '2024 BMW M2 listed by Win Auto Group',
    width: 1200,
    height: 900,
    author: 'Win Auto Group'
  },
  trade: {
    file: 'https://hillzcdn.ca/winautogroup/thumb-2014-Ford-F-150-8051228838439124.jpg',
    sourcePage: 'https://winautogroup.com/cars/used/2014-ford-f150-623373',
    alt: '2014 Ford F-150 listed by Win Auto Group',
    width: 1200,
    height: 900,
    author: 'Win Auto Group'
  },
  interior: {
    file: 'https://hillzcdn.ca/winautogroup/thumb-2013-BMW-X5-6041980478199764cbb36bc8-d24e-43f8-aa10-1d668847bedb.jpg',
    sourcePage: 'https://winautogroup.com/cars/used/2013-bmw-x5-565687',
    alt: '2013 BMW X5 listed by Win Auto Group',
    width: 1200,
    height: 900,
    author: 'Win Auto Group'
  }
};