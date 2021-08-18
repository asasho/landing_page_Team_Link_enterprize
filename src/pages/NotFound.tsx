import styles from "./NotFound.module.css";

const NotFound = () => {
  document.body.setAttribute("style", "overflow: hidden;");

  return (
    <div className={styles.layout}>
      <a className={styles.header_a} href="/about/link">
        <img
          className={styles.header_logo}
          src="https://s3-ap-northeast-1.amazonaws.com/team-link-lp-picture/IMG/logoMain.png"
          alt="logo"
        />
      </a>
      <h1 className={styles.error}>Error 404</h1>
      <h2 className={styles.message}>お探しのページは見つかりません</h2>
      <p className={styles.text}>
        入力したアドレスが間違っているか、ページが移動した可能性があります。
      </p>
      <a className={styles.top} href="/about/link">
        <span>トップに戻る</span>
      </a>
    </div>
  );
};

export default NotFound;
