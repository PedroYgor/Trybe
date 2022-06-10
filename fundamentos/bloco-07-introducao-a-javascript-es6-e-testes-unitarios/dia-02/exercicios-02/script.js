const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
console.log();

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// 1
const customerInfo = (order) => {
  const namePersonDelivery = order.order.delivery.deliveryPerson;
  const nameOrder = order.name;
  const phoneNumberOrder = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;
  return `Olá ${namePersonDelivery}, entrega para: ${nameOrder}, Telefone: ${phoneNumberOrder}, R. ${street}, N° ${number}, AP: ${apartment}`;
}

console.log(customerInfo(order));

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.
// 2
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.order.delivery.deliveryPerson = 'Luis Silva';
  order.payment.total = 50;
  const namePersonDelivery = order.order.delivery.deliveryPerson;
  const price = order.payment.total.toFixed(2);
  const pizza = Object.keys(order.order.pizza).join(', ');
  const drinks = order.order.drinks.coke.type;

  return `Olá ${namePersonDelivery}, o total do seu pedido de ${pizza} e ${drinks} é R$ ${price}`
}

console.log(orderModifier(order));