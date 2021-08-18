import React from "react";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_title}>
        <h1 className={styles.text}>プライバシーポリシー</h1>
        <span>個人情報保護方針</span>
      </div>

      <div className={styles.container}>
        <div className={styles.first}>
          <p>
            しゃんと株式会社（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを
            構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の適切
            な取り扱いに向けて推進致します。
          </p>
        </div>
        <div className={styles.detail}>
          <ul>
            <li>
              <div className={styles.title}>【個人情報の取得について】</div>
              <div className={styles.content}>
                <p>
                  当社は、偽りその他不正の手段によらず適正に個人情報を取得致します。
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>【個人情報の利用目的】</div>
              <div className={styles.content}>
                <p>
                  お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答とし
                  て、電子メールや資料のご送付に利用いたします。
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>【個人情報の管理】</div>
              <div className={styles.content}>
                <p>
                  当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・
                  改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等
                  の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>
                【個人情報の第三者への開示・提供の禁止】
              </div>
              <div className={styles.content}>
                <p>
                  当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個
                  人情報を第三者に開示いたしません。 ? お客さまの同意がある場合
                  お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合
                  法令に基づき開示することが必要である場合
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>【個人情報の委託について】</div>
              <div className={styles.content}>
                <p>
                  当社は、個人情報の取り扱いの全部または一部を第三者に委託する場合は、当該第三者について厳
                  正な調査を行い、取り扱いを委託された個人情報の安全管理が図られるよう、当該第三者に対する必
                  要かつ適切な監督を行います。
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>
                【個人情報の開示・訂正等について】
              </div>
              <div className={styles.content}>
                <p>
                  当社は、ご本人から自己の個人情報についての開示の請求がある場合、速やかに開示を致します。そ
                  の際、ご本人であることが確認できない場合には、開示に応じません。個人情報の内容に誤りがあり、
                  ご本人から訂正・追加・削除の請求がある場合、調査の上、速やかにこれらの請求に対応致します。そ
                  の際、ご本人であることが確認できない場合には、これらの請求に応じません。
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>【個人情報の安全対策】</div>
              <div className={styles.content}>
                <p>
                  当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>【ご本人の照会】</div>
              <div className={styles.content}>
                <p>
                  お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確
                  認の上、対応させていただきます。
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>【本方針の変更】</div>
              <div className={styles.content}>
                <p>
                  本方針の内容は変更されることがあります。
                  変更後の本方針については、当社が別途定める場合を除いて、当サイトに掲載した時から効力を生じ
                  るものとします。
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>【法令、規範の遵守と見直し】</div>
              <div className={styles.content}>
                <p>
                  当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリ
                  シーの内容を適宜見直し、その改善に努めます。
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>【免責事項】</div>
              <div className={styles.content}>
                <p>
                  ウイルスなどの有害物が含まれていないこと、および第三者からの不正なアクセスのないこと、その他
                  安全性に関する保証をすることはできません。また、掲載されている情報には万全を期していますが、
                  法律の改正その他の原因により当社の情報を利用することによって生じた損害に対して一切の責任
                  （間接損害・特別損害・結果的損害及び付随的損害）を負うものではありません。情報の利用に関しまし
                  ては全て最終自己責任で行って頂くようお願いします。
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>【プライバシーポリシーの変更】</div>
              <div className={styles.content}>
                <p>
                  当社は、プライバシーポリシーの全部または一部を変更することがあります。重要な変更がある場合に
                  は、サイト上に提示致します。
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>【お問い合せ】</div>
              <div className={styles.content}>
                <p>
                  当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。
                </p>
              </div>
              <div className={styles.name}>
                <p>
                  しゃんと株式会社
                  <br />
                  代表取締役　池本 克之
                </p>
              </div>
              <div className={styles.address}>
                <p>
                  〒150-0022東京都渋谷区恵比寿1丁目24-15
                  シエルブルー恵比寿EAST6F
                  <br />
                  TEL：03-6450-4931
                  <br />
                  Mail:info@shant.jp
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
