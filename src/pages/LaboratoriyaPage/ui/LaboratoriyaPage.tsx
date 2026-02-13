import { Section } from "@/shared/ui/Section";
import { Card, Col, Row } from "antd";
import styles from "./LaboratoriyaPage.module.scss";

import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { BackBtn } from "@/shared/ui/BackBtn";
import Video1 from "@/shared/assets/labaratoriy/labaratoriy-1.mp4";
import Video2 from "@/shared/assets/labaratoriy/labaratoriy-2.mp4";

function LaboratoriyaPage() {
  const { sm } = useResponsive();

  return (
    <Section className={styles.section}>
      <BackBtn />
      <div className={styles.block}>
        <Row gutter={[20, 20]}>
          <Col span={sm ? 12 : 24}>
            <Card className={styles.card}>
              <video controls className={styles.video}>
                <source src={Video1} type="video/mp4" />
              </video>
            </Card>
          </Col>

          <Col span={sm ? 12 : 24}>
            <Card className={styles.card}>
              <video controls className={styles.video}>
                <source src={Video2} type="video/mp4" />
              </video>
            </Card>
          </Col>
        </Row>
      </div>
    </Section>
  );
}

export default LaboratoriyaPage;
