export const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("エラーが発生したため、データ取得失敗");
  }

  const json = await response.json();
  return json;
};