import { PaymentMethodInterface } from "./PaymentMethodInterface";

export class PaypalPayment implements PaymentMethodInterface {
    private email: string;
    private password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
    
    public pay(amount: number): void {
        console.log(`Paypal: ${amount} paid.`);
    }
}