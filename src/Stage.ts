import map from "./map";

const CONTEXT = "2d";
const BACKGROUND = "#181A37";

const TEXT_PROPERTIES = {
  FONT_SIZE: {
    TITLE: "30px",
    SUBTITLE: "12px",
  },
  FONT_FAMILY: "Futurist",
  COLOUR_RGB: [169, 140, 83],
  TRANSPAENCY: 0.01,
  ALIGN: "center",
}

export default class Stage {
  canvas: HTMLCanvasElement | null;
  ctx: any;

  constructor(elementID: string) {
    this.canvas = <HTMLCanvasElement> document.getElementById(elementID);
    this.canvas.style.background = BACKGROUND;
    this.canvas.width = document.documentElement.clientWidth;
    this.canvas.height = document.documentElement.clientHeight;
    this.ctx = this.canvas.getContext(CONTEXT);
    window.addEventListener('resize', this.updateWindowSize.bind(this));
  }

  updateWindowSize() {
    if (this.canvas === null) return;
    this.canvas.width = document.documentElement.clientWidth;
    this.canvas.height = document.documentElement.clientHeight;
  }

  clear() {
    if (this.canvas === null) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  displayText(text: string, height: number, font: string, resultsSize: number) {
    if (this.canvas === null) return;
    const opacity = map(resultsSize, 0, resultsSize, 0, 1) / 100;
    this.ctx.save();
    this.ctx.font = font + " " + TEXT_PROPERTIES.FONT_FAMILY;
    this.ctx.fillStyle = "rgba(" + TEXT_PROPERTIES.COLOUR_RGB.join(", ") + ", " + opacity + ")";
    this.ctx.textAlign = TEXT_PROPERTIES.ALIGN;
    this.ctx.fillText(text, this.canvas.width/2, height);
    this.ctx.restore();
  }

  drawTitle(resultsArray: string[]) {
    if (this.canvas === null) return;
    for (var result of resultsArray) {
      this.displayText(result, this.canvas.height / 2, TEXT_PROPERTIES.FONT_SIZE.TITLE, resultsArray.length);
    }
  }

  drawSubtitle(resultsArray: string[]) {
    if (this.canvas === null) return;
    for (var result of resultsArray) {
      this.displayText(result, this.canvas.height / 2 + 40, TEXT_PROPERTIES.FONT_SIZE.SUBTITLE, resultsArray.length);
    }
  }
}