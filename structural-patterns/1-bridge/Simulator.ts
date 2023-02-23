import { Message } from './Message';
import { Mail } from './Carrier';

const message = new Message('hello world', new Mail);
message.send();
