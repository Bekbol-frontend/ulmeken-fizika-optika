import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.scss";

const { Content } = Layout;

function AppLayout() {
  return (
    <Layout className={styles.layout}>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default AppLayout;
