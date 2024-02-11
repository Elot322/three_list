export type TServicesResponse = {
  id: number;
  head: number | null;
  name: string;
  node: number;
  price: number;
  sorthead: number;
}[]

export type TServicesModel = {
  id: number;
  head: number | null;
  name: string;
  node: number;
  price: number;
  sorthead: number;
  children: any[]
}