import { PaymentMethodInterface } from './PaymentMethodInterface';

export class CreditCardPayment implements PaymentMethodInterface {
    private cardNumber: string;
    private cvv: string;
    private dateOfExpiry: string;

    constructor(cardNumber: string, cvv: string, dateOfExpiry: string) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.dateOfExpiry = dateOfExpiry;
    }

    public pay(amount: number): void {
        console.log(`Credit card: ${amount} paid.`);
    }
}