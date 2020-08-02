import { Texture, Rectangle, BaseTexture } from "pixi.js";
import { Game } from "../game/game";

export class Spritesheet extends Texture {
  private _tileWidth: number;
  private _tileHeight: number;

  constructor(texture: BaseTexture) {
    super(texture);

    this._tileWidth = Game.Instance.tileWidth
    this._tileHeight = Game.Instance.tileHeight

    this.setTile(0, 0);
  }

  public setTile(tilesheetX: number, tilesheetY: number): void {
    this.frame = new Rectangle(
      tilesheetX * this._tileWidth,
      tilesheetY * this._tileHeight,
      this._tileWidth,
      this._tileHeight
    );

    this.updateUvs();
  }
}