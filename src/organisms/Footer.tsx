import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgb(247, 247, 247)",
        borderTop: "1px solid rgb(221, 221, 221)",
      }}
    >
      <div className={styles.team_link_footer_width}>
        <div className={styles.team_link_footer_top}>
          <section className={styles.team_link_footer_list}>
            <h4 className={styles.team_link_footer_list_title}>About</h4>
            <ul className={styles.team_link_footer_list_list}>
              <li className={styles.team_link_footer_list_item}>
                <a
                  href="https://shant.jp/company/"
                  target="_blank"
                  className={styles.team_link_footer_list_link}
                >
                  運営会社
                </a>
              </li>
              <li className={styles.team_link_footer_list_item}>
                <a className={styles.team_link_footer_list_link} href="">
                  利用規約
                </a>
              </li>
              <li className={styles.team_link_footer_list_item}>
                <a className={styles.team_link_footer_list_link} href="">
                  プライバシー
                </a>
              </li>
              <li className={styles.team_link_footer_list_item}>
                <a
                  target="_blank"
                  className={styles.team_link_footer_list_link}
                  href="/about/list"
                >
                  掲載をご希望の方
                </a>
              </li>
            </ul>
          </section>
          <section className={styles.team_link_footer_list}>
            <h4 className={styles.team_link_footer_list_title}>Product</h4>
            <ul className={styles.team_link_footer_list_list}>
              <li className={styles.team_link_footer_list_item}>
                <a className={styles.team_link_footer_list_link} href="/">
                  Team Link
                </a>
              </li>
              <li className={styles.team_link_footer_list_item}>
                <a
                  className={styles.team_link_footer_list_link}
                  href="/about/list"
                >
                  Team Link Admin
                </a>
              </li>
              <li className={styles.team_link_footer_list_item}>
                <a
                  href="https://www.id_shukatsu.com/"
                  target="_blank"
                  className={styles.team_link_footer_list_link}
                >
                  ID就活
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
