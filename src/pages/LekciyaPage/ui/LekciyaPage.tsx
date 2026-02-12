import { useState } from "react";
import { Section } from "@/shared/ui/Section";
import styles from "./LekciyaPage.module.scss";
import { Button, Card, Col, Row, Modal } from "antd";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { BackBtn } from "@/shared/ui/BackBtn";

interface Lekciya {
  name: string;
  file: string;
}

const lekciyalar: Lekciya[] = Array.from({ length: 12 }, (_, i) => ({
  name: `Lekciya-${i + 1}`,
  file: `/lekcia/pdf/Maruza ${i + 1}.pdf`,
}));

const LekciyaPage: React.FC = () => {
  const { sm } = useResponsive();

  const [visible, setVisible] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const openModal = (file: string) => {
    setSelectedFile(file);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setSelectedFile(null);
  };

  return (
    <Section className={styles.section}>
      <BackBtn />

      <Card className={styles.card}>
        <Row gutter={[10, 10]}>
          {lekciyalar.map((lekciya) => (
            <Col key={lekciya.name} span={sm ? 12 : 24}>
              <Button
                type="primary"
                className={styles.btn}
                onClick={() => openModal(lekciya.file)}
              >
                {lekciya.name}
              </Button>
            </Col>
          ))}
        </Row>
      </Card>

      <Modal
        title="Lekciya"
        open={visible}
        onCancel={closeModal}
        footer={null}
        width="80%"
        style={{ top: 20 }}
        styles={{
          body: { height: "80vh", padding: 0 },
        }}
      >
        {selectedFile && (
          <iframe
            src={selectedFile}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="PDF Viewer"
          />
        )}
      </Modal>
    </Section>
  );
};

export default LekciyaPage;
