// 通信部分のAPI
const host = "http://localhost:8080/api";
const url = (path) => `${host}/${path}`;

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const get = async (path) => {
  // fetch()は非同期通信でリクエストを発行し、そのレスポンスを取得するメソッド
  const resp = await fetch(url(path));
  checkError(resp.status);
  // fetchで取得した情報の中でjsonデータだけを取得
  const result = await resp.json();
  // awaitがついた処理が終わるまで、return resultは実行されない
  return result;
};

// get()との違いは送るデータbodyを受け取っているところ
export const post = async (path, body) => {
  // bodyをjsonに変換
  // json で送っているということをサーバーに通知する必要があるので、HTTP のヘッダーにContent-Type: application/jsonを指定
  const options = { ...header, method: "POST", body: JSON.stringify(body) };
  // bodyやmethod、headerを合わせてfetch()のオプションとして指定
  const resp = await fetch(url(path), options);

  checkError(resp.status);

  const result = await resp.json();

  return result;
};

export const deleteRequest = async (path) => {
  const options = { method: "DELETE" };

  const resp = await fetch(url(path), options);
  checkError(resp.status);
  // DELETEは削除が完了するとStatus: 204 No Contentが戻ってくるためbodyは必要ない
  // awaitで処理が終わったらreturnする
  return;
};

const checkError = (status) => {
  // 今回は400以上の場合は全部まとめてエラーとして処理
  if (status >= 400) {
    throw new Error("エラーが発生しました。時間を置いて再度お試しください。");
  }
};
