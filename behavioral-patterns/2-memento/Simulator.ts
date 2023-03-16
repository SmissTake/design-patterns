import { TextDocument } from './TextDocument';

const textDocument = new TextDocument('Hello World');

textDocument.setText('Bonjour le monde');

textDocument.undo();
textDocument.undo();

textDocument.redo();
textDocument.setText('Hola Mundo');

textDocument.undo();
textDocument.redo();