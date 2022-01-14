export interface BasketItem {
  productId: number;
  name: string;
  pictureUrl: string;
  brand: string;
  type: string;
  price: number;
  quantity: number;
}

export interface Basket {
  id: number;
  buyerId: string;
  items: BasketItem[];
  paymentIntentId?: string;
  clientSecret?: string;
}
