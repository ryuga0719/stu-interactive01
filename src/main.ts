
interface Position {
  x: number;
  y: number
}

// Follow class
class Follow {
  // mouse position
  public mouseX = 0;
  public mouseY = 0;

  // 追従要素の設定
  public child = document.querySelector<HTMLElement>('.child');
  public radius = 10; // 半径
  public diameter = this.radius * 2; // 直径


  public timer = 0;
  // public now = 0;
  public now: Position = {
    x: 0,
    y: 0
  }
  // public last = 0;
  public last: Position = {
    x: 0,
    y: 0
  }
  public offset = 0;
  public acceleration = 0;

  // constructor
  constructor() {
    // 追従要素の初期化
    this.child!.style.width = this.radius * 2 + "px";
    this.child!.style.height = this.radius * 2 + "px";

    this.bind();
  }


  /**
   * mouseHandler
   * @param {MouseEvent} e - マウスイベント
   */
  public mouseHandler(e: MouseEvent): void {
    // マウス座標の取得と表示
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;



    this.updateParam(this.mouseX, this.mouseY);
  }

  /**
   * updateParam
   * パラメータのアップデート
   * @param {number} mouseX - mouse x position
   * @param {number} mouseY - mouse y position
   */
  public updateParam(mouseX: number, mouseY: number): void {
    this.timer++;
    this.last.x = this.now.x;
    this.last.y = this.now.y;
    this.now.x = mouseX;
    this.now.y = mouseY;
    this.offset = this.calculateEuclidDistance(this.last.x, this.last.y, this.now.x, this.now.y);
    this.acceleration = this.offset / this.timer;
    this.acceleration = this.orgRound(this.acceleration, 10);

    console.log("🍓", this.acceleration);

    this.radius = this.acceleration * 25;
    this.diameter = this.radius * 2;
    this.child!.style.width = this.radius + "px";
    this.child!.style.height = this.radius + "px";

    this.child!.style.transform = 'translate(' + (this.mouseX - this.radius) + 'px, ' + (this.mouseY - this.radius) + 'px)';
  }

  /**
   * calculateEuclidDistance
   * 2点間のユークリッド距離を計算
   * @param {number} x1 - ポイント1のマウスのx座標
   * @param {number} y1 - ポイント1のマウスのy座標
   * @param {number} x2 - ポイント2のマウスのx座標
   * @param {number} y2 - ポイント2のマウスのy座標
   * @returns {number} 引数に入れた2点間のユークリッド距離
   *
   */
  public calculateEuclidDistance(
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): number {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  /**
   * orgRound
   * valueをbaseに入れた値で四捨五入する
   * @param {number} value - 四捨五入する数値
   * @param {number} base - 四捨五入する桁数(小数第一位なら10を代入)
   * @returns {number} 桁整理した数字
   *
   */
  public orgRound(value: number, base: number): number {
    return Math.round(value * base) / base;
  }

  /**
   * resetParam
   * 各パラメータのリセット
   */
  resetParam(): void {
    this.offset = 0;
    this.acceleration = 0;
    this.timer = 0;
  }

  /**
   * bind
   */
  public bind(): void {
    window.addEventListener('mousemove', this.mouseHandler.bind(this))
  }

}

const follow = new Follow();

setInterval(() => {
  follow.resetParam();
}, 5)