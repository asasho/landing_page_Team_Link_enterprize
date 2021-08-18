import MediaQuery from "react-responsive";
import styles from "./Cta.module.css";

const Cta = () => {
  return (
    <div>
      <MediaQuery minWidth={768}>
        <section className={styles.cta}>
          <p>
            <span>貴社のサービスを無料掲載しましょう</span>
          </p>
          <div className={styles.cta_pc}>
            <button className={styles.cta_pcwhite}>
              <span>無料で掲載する</span>
            </button>
            <a className={styles.cta_pcblue} href="/document">
              <span>掲載資料ダウンロード</span>
            </a>
          </div>
        </section>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <section className={styles.cta}>
          <p>
            <span>貴社のサービスを無料掲載しましょう</span>
          </p>
          <div className={styles.cta_sp}>
            <button className={styles.cta_blue}>
              <span> 無料で掲載する</span>
            </button>
            <a className={styles.cta_white} href="/document">
              <span>掲載資料ダウンロード</span>
            </a>
          </div>
        </section>
      </MediaQuery>
    </div>
  );
};

export default Cta;
