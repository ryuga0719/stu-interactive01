import { Follow } from "./modules/Follow";


const follow = new Follow();

/**
 * 距離計算の時間調整
 */
const resetParamWithInterval = () => {
  // console.log("called");
  follow.resetParam();
  setTimeout(() => {
    resetParamWithInterval();
  }, 1);
};


resetParamWithInterval();

/**
 * 課題
 * resetParamWithIntervalが常時バックグラウンドで動作しているのでパフォーマンスが心配
 * 可能であればマウス座標が移動している時だけ発火させたいがうまくいかない。
 */