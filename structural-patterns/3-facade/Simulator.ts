//test Facade design pattern

import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { ShapeMaker } from "./ShapeMaker";

const shapeMaker = new ShapeMaker();

shapeMaker.drawCircle();
shapeMaker.drawRectangle();