import type { ReactNode } from "react";
import { ConfigProvider } from "antd";

interface IProps {
  children: ReactNode;
}

function AppConfig({ children }: IProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "var(--font-roboto)",
          fontSize: 17,
        },
        components: {
          Button: {
            controlHeight: 38,
            colorPrimary: "var(--primary)",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AppConfig;
