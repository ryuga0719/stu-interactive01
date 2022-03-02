import { calculateEuclidDistance, calculateAcceleration } from "./Math";
import { Position } from "../models/interface";


/**
 * Follow class
 */
export class Follow {
  /**
   * マウスのポジション
   */
  public mouse: Position = {
    x: 0,
    y: 0,
  };

  /**
   * 追従要素の設定
   */
  public child = <HTMLElement>document.querySelector(".child");
  public childStyle = window.getComputedStyle(this.child);
  public diameter; // 直径
  public radius; // 半径

  /**
   * 微小時間
   */
  public timer = 0;

  /**
   * 微笑区間座標（現在）
   */
  public now: Position = {
    x: 0,
    y: 0,
  };

  /**
   * 微笑区間座標（過去）
   */
  public prev: Position = {
    x: 0,
    y: 0,
  };

  /**
   * 微小区間
   */
  public distance = 0;

  /**
   * 加速度
   */
  public acceleration = 0;

  /**
   * 拡大倍率
   */
  public ratio = 7;

  // constructor
  constructor() {
    // 追従要素の初期設定
    this.diameter = Number(this.childStyle.getPropertyValue("width"));
    this.radius = this.diameter / 2;

    this.bind();
  }

  /**
   * mouseHandler
   * @param {MouseEvent} e - マウスイベント
   */
  public mouseHandler(e: MouseEvent): void {
    // マウス座標の取得と表示
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;

    // パラメータのアップデート
    this.updateParam(this.mouse.x, this.mouse.y);

  }

  /**
   * updateParam
   * パラメータのアップデート
   * @param {number} mouseX - mouse x position
   * @param {number} mouseY - mouse y position
   */
  public updateParam(mouseX: number, mouseY: number): void {
    // 座標と時間のアップデート
    this.timer++;
    // console.log(this.timer);
    this.prev.x = this.now.x;
    this.prev.y = this.now.y;
    this.now.x = mouseX;
    this.now.y = mouseY;

    // 微小区間の計算
    this.distance = calculateEuclidDistance(this.prev.x, this.prev.y, this.now.x, this.now.y);

    // 加速度計算
    this.acceleration = calculateAcceleration(this.distance, this.timer);

    // 追従要素のアップデート
    this.radius = this.acceleration * this.ratio;
    this.diameter = this.radius * 2;

    this.child!.style.width = this.diameter + "px";
    this.child!.style.height = this.diameter + "px";

    this.child!.style.transform = "translate(" + (this.mouse.x - this.radius) + "px, " + (this.mouse.y - this.radius) + "px)";
  }

  /**
   * resetParam
   * 各パラメータのリセット
   */
  resetParam(): void {
    this.distance = 0;
    this.acceleration = 0;
    this.timer = 0;
  }

  /**
   * bind
   */
  public bind(): void {
    window.addEventListener("mousemove", this.mouseHandler.bind(this));
  }
}
