import  { PaymentProcessor }  from   './PaymentProcessor' ;
import  { CreditCardPayment }  from   './CreditCardPayment' ;
import  { PaypalPayment }  from   './PaypalPayment' ;

const paypal = new PaypalPayment('email' ,  'password');
const creditCard = new CreditCardPayment('cardNumber' ,  'cvv' ,  'dateOfExpiry');

let paymentProcessor: PaymentProcessor = new PaymentProcessor(paypal);

paymentProcessor = new PaymentProcessor(paypal); // or creditCard
paymentProcessor.pay(100);
