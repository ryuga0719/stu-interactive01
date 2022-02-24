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
export const calculateEuclidDistance = (x1: number, y1: number, x2: number, y2: number): number => {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

/**
 * orgRound
 * valueをbaseに入れた値で四捨五入する
 * @param {number} value - 四捨五入する数値
 * @param {number} base - 四捨五入する桁数(小数第一位なら10を代入)
 * @returns {number} 桁整理した数字
 *
 */
export const orgRound = (value: number, base: number): number => {
  return Math.round(value * base) / base;
};

/**
 * calculateAcceleration
 * 加速度を算出する
 * @param {number} distance - 区間
 * @param {number} time - 時間
 * @returns {number} 加速度
 */
export const calculateAcceleration = (distance: number, time: number): number => {
  const acceleration = distance / time;
  return orgRound(acceleration, 10);
};
