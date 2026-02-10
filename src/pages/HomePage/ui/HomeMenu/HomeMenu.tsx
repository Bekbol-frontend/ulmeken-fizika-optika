import { Button, Col, Row } from "antd";
import styles from "./HomeMenu.module.scss";
import { menuItems } from "../../menuItems";

function HomeMenu() {
  return (
    <Row justify="center" className={styles.row} gutter={[10, 10]}>
      {menuItems.map((el) => (
        <Col xs={24} sm={6} key={el.name}>
          <Button type="primary" className={styles.btn}>
            {el.name}
          </Button>
        </Col>
      ))}

      <Col xs={24} sm={12}>
        <Button type="primary" className={styles.btn}>
          Mualliflar haqida
        </Button>
      </Col>
      <Col xs={24} sm={12}>
        <Button type="primary" className={styles.btn}>
          Bogʻlanish
        </Button>
      </Col>
    </Row>
  );
}

export default HomeMenu;
