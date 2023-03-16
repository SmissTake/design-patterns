import { MenuItem } from "./MenuItem";
import { MenuCollection } from "./MenuCollection";

const mainMenu = new MenuCollection("Main Menu");
const fileMenu = new MenuCollection("File Menu");

const newFile = new MenuItem("New File");
const openFile = new MenuItem("Open File");

const appMenu = new MenuCollection("App Menu");
const editMenu = new MenuCollection("Edit Menu");

fileMenu.add(newFile);
fileMenu.add(openFile);

mainMenu.add(fileMenu);
mainMenu.add(appMenu);
mainMenu.add(editMenu);

mainMenu.display(0);