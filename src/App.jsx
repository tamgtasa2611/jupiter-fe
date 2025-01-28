import { useState } from "react";
import "./App.css";
import { Button, ConfigProvider } from "antd";

import enUS from "antd/locale/en_US";
import viVN from "antd/locale/vi_VN";
import dayjs from "dayjs";

import "dayjs/locale/vi";

dayjs.locale("vi");

function App() {
  const [locale, setLocal] = useState(viVN);
  const [count, setCount] = useState(0);
  const changeLocale = (e) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
    if (!localeValue) {
      dayjs.locale("vi");
    } else {
      dayjs.locale("en");
    }
  };

  return (
    <ConfigProvider locale={locale}>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </ConfigProvider>
  );
}

export default App;
