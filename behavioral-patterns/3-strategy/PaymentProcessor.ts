import { PaymentMethodInterface } from "./PaymentMethodInterface";

export class PaymentProcessor {
    private paymentMethod: PaymentMethodInterface;

    constructor(paymentMethod: PaymentMethodInterface) {
        this.paymentMethod = paymentMethod;
    }

    public pay(amount: number): void {
        this.paymentMethod.pay(amount);
    }
}