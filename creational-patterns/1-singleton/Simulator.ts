import { Connexion } from './Connexion';

const s1 = Connexion.getInstance();
const s2 = Connexion.getInstance();

if (s1 === s2) {
    console.log('Connexion works, both variables contain the same instance.');
} else {
    console.log('Connexion failed, variables contain different instances.');
}