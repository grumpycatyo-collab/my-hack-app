// api/index.ts (for example purposes, might contain fake API calls or TS interfaces)

export interface Phone {
    id: number;
    model: string;
    price: number;
  }
  
  export const fetchPhones = (): Phone[] => {
    return [
      { id: 1, model: 'Phone X', price: 999 },
      { id: 2, model: 'Phone Y', price: 799 },
      { id: 3, model: 'Phone Z', price: 699 },
    ];
  };