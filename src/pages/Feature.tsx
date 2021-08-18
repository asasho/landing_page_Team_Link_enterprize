import styles from "./Feature.module.css";
import { Helmet } from "react-helmet";

const Feature = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          サービス機能｜社長に直接提案できる集客プラットフォーム「Team
          Link」で新規案件を獲得しませんか？
        </title>
      </Helmet>
      <main className={styles.feature}>
        <div className={styles.content}>
          <section className={styles.headline}>
            <p>
              <span className={styles.headline_logo}>Team Link</span>
              は<br />
              社長に直接自社サービスを提案できる集客プラットフォームです。
            </p>
            <p>
              社長に直接提案できるため、契約がスピーディーに決まり、集客コストが非常に安いです。
            </p>
          </section>
          <section className={styles.function}>
            <div className={styles.item}>
              <div className={styles.item_item}>
                <div className={styles.note}>
                  <p className={`${styles.title} ${styles.title1}`}>
                    社長に直接提案
                    <br />
                    (オファー機能)
                  </p>
                  <p className={styles.description}>
                    社長に直接自社サービスを提案することができます。
                  </p>
                  <ul className={styles.point}>
                    <li>
                      社長のプロフィールを見て、社長のニーズ・業種などを基に確度の高い提案をすることが可能です。
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.item_item}>
                <img src="https://www.team-link.jp/static/media/direct_offer.7329f67c.png" />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_item}>
                <div className={styles.note}>
                  <p className={`${styles.title} ${styles.title2}`}>
                    詳細な条件を基に社長を絞り込める
                    <br />
                    (検索機能)
                  </p>
                  <p className={styles.description}>
                    詳細な検索条件を基に自社のターゲットとなる企業の社長を絞り込むことができます。
                  </p>
                  <ul className={styles.point}>
                    <li>
                      ニーズ、業種、地域、従業員数など社長の詳細な情報を基に自社のターゲットとなる企業の社長を検索できます。
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.item_item}>
                <img src="https://www.team-link.jp/static/media/search_boss.67c6a285.png" />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_item}>
                <div className={styles.note}>
                  <p className={`${styles.title} ${styles.title3}`}>
                    自社サービスの認知へと繋げる質問回答（質問回答機能）
                  </p>
                  <p className={styles.description}>
                    社長の疑問に答えることで自社サービスの認知へと繋げることができます。
                  </p>
                  <ul className={styles.point}>
                    <li>
                      投稿された課題の解決策を伝えることで、課題を投稿した経営層との関係構築が可能になります。
                    </li>
                    <li>
                      投稿された課題を見て顧客のニーズを図り、商談へつなげることができます。
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.item_item}>
                <img src="https://www.team-link.jp/static/media/Q&A%E5%9B%9E%E7%AD%94.4544789b.png" />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_item}>
                <div className={styles.note}>
                  <p className={`${styles.title} ${styles.title4}`}>
                    掲載し放題のサービス概要ページ（サービス掲載機能）
                  </p>
                  <p className={styles.description}>
                    顧客の多彩なニーズに合わせ、サービスページを公開本数の限りなく掲載できます。
                  </p>
                  <ul className={styles.point}>
                    <li>
                      どんな課題が解決できるのかなどを顧客の多彩なニーズに合わせ発信することができます。
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.item_item}>
                <img src="https://www.team-link.jp/static/media/publishing_searvice.023d2a6f.png" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Feature;
