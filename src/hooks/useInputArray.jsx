import { useCallback, useState } from 'react';

// 要素追加function
export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, serArray] = useState([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    serArray((prevArray) => {
      if (prevArray.some(item => item === text)) {
        alert("同じ要素があります。");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return{text, array, handleChange, handleAdd};
}