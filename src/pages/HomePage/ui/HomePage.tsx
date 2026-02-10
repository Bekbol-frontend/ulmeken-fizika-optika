import { Section } from "@/shared/ui/Section";
import styles from "./HomePage.module.scss";
import { Typography } from "antd";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

const { Title } = Typography;

function HomePage() {
  const { sm } = useResponsive();

  return (
    <Section className={styles.homePage}>
      <div className={styles.box}>
        <Title className={styles.title} level={sm ? 1 : 4}>
          Optika fa'nidan mustaqil ta'lim olish metodikasi
        </Title>

        <HomeMenu />
      </div>
    </Section>
  );
}

export default HomePage;
