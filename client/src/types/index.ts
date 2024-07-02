import { MODELS } from '../../../sample/vehicleData'

export type Make = keyof typeof MODELS;
export type Model = keyof typeof MODELS[Make];
export type Badge = string;
