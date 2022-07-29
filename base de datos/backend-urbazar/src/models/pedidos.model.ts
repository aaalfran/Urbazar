import {Entity, model, property} from '@loopback/repository';

@model()
class Address extends Entity {
  @property({
    type: 'string',
    required: true
  })
  ciudadela: string;

  @property({
    type: 'string',
    required: true
  })
  manzana: string;

  @property({
    type: 'string',
    required: true
  })
  villa: string;

}

@model()
class PaymentMethod extends Entity {
  @property({
    type: 'string',
    required: true
  })
  typeOfCard: string;

  @property({
    type: 'string',
    required: true
  })
  lastDigits: string;
}

@model()
class Stars extends Entity {
  @property({
    type: 'number',
    required: true
  })
  number: number;

  @property({
    type: 'number',
    required: true
  })
  numberOfVotes: number;
}

@model()
class Products extends Entity {
  @property({
    type: 'string',
    required: true
  })
  source: string;

  @property({
    type: 'string',
    required: true
  })
  nombre: string;

  @property({
    type: 'number',
    required: true
  })
  precio: number;

  @property({
    type: 'number',
    required: true
  })
  quantity: number;

  @property({
    type: Stars,
    required: true
  })
  stars: Stars;

  @property({
    type: 'string',
    required: true
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true
  })
  vendor: string;
}

@model()
class OrderSummary extends Entity {
  @property({
    type: 'number',
    required: true
  })
  totalProducts: number;

  @property({
    type: 'number',
    required: true
  })
  totalDelivery: number;

  @property({
    type: 'number',
    required: true
  })
  totalWithoutTaxes: number;

  @property({
    type: 'number',
    required: true
  })
  taxes: number;

  @property({
    type: 'number',
    required: true
  })
  total: number;
}

@model()
export class Pedidos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'number',
    required: true,
  })
  personaId: number;

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: Address,
    required: true,
  })
  deliveryAddress: Address;

  @property({
    type: PaymentMethod,
    required: true,
  })
  paymentMethod: PaymentMethod;

  @property({
    type: 'array',
    required: true,
    itemType: Products
  })
  products: Products[];

  @property({
    type: OrderSummary,
    required: true,
  })
  orderSummary: OrderSummary;
}

export interface PedidosRelations {
  // describe navigational properties here
}

export type PedidosWithRelations = Pedidos & PedidosRelations;