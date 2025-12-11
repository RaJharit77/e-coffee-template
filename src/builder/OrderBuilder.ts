import type { Order } from '../types/order';
import type { Coffee } from '../types/coffee';
import type { PaymentMethod } from '../types/paymentMethod';
import type { DeliveryMethod } from '../types/deliveryMethod';

export class OrderBuilder {
    private order: Partial<Order> = {
        id: Math.random().toString(36).substr(2, 9),
        status: 'pending',
        createdAt: new Date()
    };

    setCoffee(coffee: Coffee): OrderBuilder {
        this.order.coffee = coffee;
        return this;
    }

    setPayment(payment: PaymentMethod): OrderBuilder {
        this.order.payment = payment;
        return this;
    }

    setDelivery(delivery: DeliveryMethod): OrderBuilder {
        this.order.delivery = delivery;
        return this;
    }

    build(): Order {
        if (!this.order.coffee || !this.order.payment || !this.order.delivery) {
            throw new Error('Missing required order components');
        }

        return {
            id: this.order.id!,
            coffee: this.order.coffee,
            payment: this.order.payment,
            delivery: this.order.delivery,
            status: 'pending',
            createdAt: new Date()
        };
    }
}