export class Connexion {
    private static instance: Connexion;

    private constructor() { }

    public static getInstance(): Connexion {
        if (!Connexion.instance) {
            Connexion.instance = new Connexion();
        }

        return Connexion.instance;
    }
}