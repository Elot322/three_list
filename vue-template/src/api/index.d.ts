export abstract class Api {
  abstract async get(endpoint: string): Promise<any>;
  abstract async post(endpoint: string): Promise<any>;
  abstract async delete(endpoint: string): Promise<any>;

  constructor() {
    this.get();
    this.post();
    this.delete();
  }
}

export namespace NsServicesApi {
  export type TServices = {
    services: {
      id: number;
      head: number | null;
      name: string;
      node: number;
      price: number;
      sorthead: number;
    }[]
  }
}