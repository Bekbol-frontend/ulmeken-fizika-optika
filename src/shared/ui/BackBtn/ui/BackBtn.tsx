import { Button } from "antd";
import styles from "./BackBtn.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function BackBtn() {
  const navigate = useNavigate();

  return (
    <Button
      type="primary"
      className={styles.btn}
      icon={<CloseOutlined />}
      onClick={() => navigate(-1)}
    />
  );
}

export default BackBtn;
