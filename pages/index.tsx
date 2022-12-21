import React, { useState } from "react";
import { themeList } from "public/theme-list";

export default function Home() {
  console.log(themeList);
  const [theme, setTheme] = useState("");
  const [point, setPoint] = useState(0);
  const setNewTheme = () => {
    const newTheme = themeList[Math.floor(Math.random() * themeList.length)];
    setTheme(newTheme);
  };
  return (
    <div className="m-8 text-center">
      <div>
        <p className="mb-8">お題は？</p>
        <p className="text-xl">{theme}</p>
        <button
          className="mt-12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={setNewTheme}
        >
          これだ！
        </button>
      </div>
      <div className="flex gap-2 mt-10 justify-center">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setPoint(point + 1)}
        >
          伝わった！
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          パス！
        </button>
      </div>
      <div className="m-16">
        <p className="m-4">獲得ポイント</p>
        <p className="text-xl">{point}</p>
      </div>
    </div>
  );
}
