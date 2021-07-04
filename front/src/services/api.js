// 通信部分のAPI
const host = "http://localhost:8080/api";
const url = (path) => `${host}/${path}`;

export const get = async (path) => {
  // fetch()は非同期通信でリクエストを発行し、そのレスポンスを取得するメソッド
  const resp = await fetch(url(path));
  // fetchで取得した情報の中でjsonデータだけを取得
  const result = await resp.json();
  // awaitがついた処理が終わるまで、return resultは実行されない
  return result;
};
