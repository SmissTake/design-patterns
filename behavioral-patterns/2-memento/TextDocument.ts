import { TextMemento } from './TextMemento';

export class TextDocument {
    private text: string;
    private undoStack: TextMemento[] = [];
    private redoStack: TextMemento[] = [];

    constructor(text: string) {
        console.log(`Creating text document with text : ${text}`);
        this.text = text;
    }

    public setText(text: string): void {
        console.log(`Setting text to : ${text}`);
        this.undoStack.push(new TextMemento(this.text));
        this.text = text;
    }

    public getText(): string {
        return this.text;
    }

    public undo(): void {
        if (this.undoStack.length > 0) {
            const memento = this.undoStack.pop();
            this.redoStack.push(new TextMemento(this.text));
            this.text = memento!.getText();
            console.log(`Undo to : ${this.text}`);
        }
        else {
            console.log('Nothing to undo');
        }
    }

    public redo(): void {
        if (this.redoStack.length > 0) {
            const memento = this.redoStack.pop();
            this.undoStack.push(new TextMemento(this.text));
            this.text = memento!.getText();
            console.log(`Redo to : ${this.text}`);
        }
        else {
            console.log('Nothing to redo');
        }
    }
}