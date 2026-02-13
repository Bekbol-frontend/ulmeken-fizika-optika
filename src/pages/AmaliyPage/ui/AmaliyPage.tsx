import { Section } from "@/shared/ui/Section";
import { Button, Card, Col, Row } from "antd";
import styles from "./AmaliyPage.module.scss";
import AmaliyImg from "@/shared/assets/amaliy/amaliy.jpg";
import TestImg from "@/shared/assets/maruza/test.jpg";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/shared/config/routeConfig";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { BackBtn } from "@/shared/ui/BackBtn";

function AmaliyPage() {
  const navigate = useNavigate();
  const { sm } = useResponsive();

  return (
    <Section className={styles.section}>
      <BackBtn />
      <div className={styles.block}>
        <Row gutter={[20, 20]}>
          <Col span={sm ? 12 : 24}>
            <Card
              cover={
                <img
                  draggable={false}
                  alt="example"
                  src={AmaliyImg}
                  className={styles.img}
                />
              }
              className={styles.card}
            >
              <Button
                type="primary"
                className={styles.btn}
                onClick={() => navigate(appRoutes.amaliyMavzu)}
              >
                Masala yechish namunasi
              </Button>
            </Card>
          </Col>

          <Col span={sm ? 12 : 24}>
            <Card
              cover={
                <img
                  draggable={false}
                  alt="example"
                  src={TestImg}
                  className={styles.img}
                />
              }
              className={styles.card}
            >
              <Button
                type="primary"
                className={styles.btn}
                onClick={() => navigate(appRoutes.maruzaTest)}
              >
                Mustaqil yechish uchun masalalar
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </Section>
  );
}

export default AmaliyPage;
