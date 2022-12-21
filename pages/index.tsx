import React, { useEffect, useState } from "react";
import { themeList } from "public/theme-list";

export default function Home() {
  const [theme, setTheme] = useState("");
  const [point, setPoint] = useState(0);
  const [secs, setSeconds] = useState(0);
  useEffect(() => {
    const sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  }, [secs]);
  const setNewTheme = () => {
    const newTheme = themeList[Math.floor(Math.random() * themeList.length)];
    setTheme(newTheme);
    setSeconds(20);
  };

  const success = () => {
    setPoint(point + 1);
    setNewTheme();
  };
  return (
    <div className="m-8 text-center">
      <div>
        <p className="mb-8">お題は？</p>
        <p className="text-xl">{theme}</p>
        {theme === "" && (
          <button
            className="mt-12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={setNewTheme}
          >
            これだ！
          </button>
        )}
      </div>
      <div className="flex gap-2 mt-10 justify-center">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={success}
        >
          伝わった！
        </button>
        <button
          disabled={secs !== 0}
          className={`bg-red-500 ${
            secs === 0 ? "hover:bg-red-700" : ""
          } text-white font-bold py-2 px-4 rounded`}
          onClick={() => setNewTheme()}
        >
          パス！
        </button>
      </div>
      <p className="mt-4">{secs}秒後にパスできます</p>
      <div className="m-16">
        <p className="m-4">獲得ポイント</p>
        <p className="text-xl">{point}</p>
      </div>
    </div>
  );
}
