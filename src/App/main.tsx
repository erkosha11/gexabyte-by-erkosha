import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router.tsx";
import "./index.scss";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      components: {
        Select: {
          colorTextBase: "#000",
        },
      },
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigProvider>
);
