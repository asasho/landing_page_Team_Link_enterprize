import React from "react";
import styles from "./TermsOfService.module.css";

const TermsOfService: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_title}>
        <h1 className={styles.text}>Team Link利用規約</h1>
      </div>

      <div className={styles.sub_title}>
        <h2>サイト利用規約</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.first}>
          <p>
            この度は、Team Linkをご覧いただき、誠にありがとうございます。 Team
            Link（https://www.team-link.jp、以下「当サイト」といいます）はしゃんと株式会社(以下
            当社)が運
            営しております。お客様が当サイトをご利用されるにあたっては、以下の利用規約をお読み頂き、
            同意
            される場合にのみご利用下さい。なお、本規約につきましては予告なく変更することがありますので、
            あらかじめ御了承下さい。
          </p>
        </div>
        <div className={styles.detail}>
          <ul>
            <li>
              <div className={styles.title}>第１条【サービス】</div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <p>
                      １．
                      当サイトの利用に際してはウェブにアクセスする必要がありますが、利用者は自らの費用と責任に
                      必要
                      な機器・ソフトウェア・通信手段等を用意し適切に接続・操作することとします。
                    </p>
                  </li>
                  <li>
                    <p>
                      ２．
                      当サイトでは将来、様々なサービスを追加したり、または変更・削除することがあります。
                    </p>
                  </li>
                  <li>
                    <p>
                      ３．
                      当社は、当サイトが提供及び付随するサービスに対する保証行為を一切しておりません。また、当
                      社は、
                      当サイトの提供するサービスの不確実性・サービス停止等に起因する利用者への損害につい
                      て、一切責任を
                      負わないものとします。詳細については、「免責事項について」をご覧下さい。
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.title}>第２条【個人情報の取り扱い】</div>
              <div className={styles.content}>
                <p>
                  当サイトとの利用に際して利用者から取得した氏名、メールアドレス、住所、電話番号等の個人情報
                  は、別途 定める「プライバシーポリシー」に則り取り扱われます。
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>第３条【著作権等知的財産権】</div>
              <div className={styles.content}>
                <p>
                  ．当サイト内のプログラム、商品写真その他の知的財産権は弊社に帰属します。利用者は、当該情報
                  を私用
                  目的で利用される場合にかぎり使用できます。当社に無断で、それを越えて、使用（複製、送
                  信、譲渡、二次 利用等を含む）することは禁じます。
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>第４条【禁止事項】</div>
              <div className={styles.content}>
                <div className={styles.forbid}>
                  <p>１．当社は、利用者が以下の行為を行うことを禁じます。</p>
                </div>
                <ul>
                  <li>
                    <p>
                      １）当社または第三者に損害を与える行為、または損害を与える恐れのある行為
                    </p>
                  </li>
                  <li>
                    <p>
                      ２）当社または第三者の財産、名誉、プライバシー等を侵害する行為、または侵害する恐れのある行為{" "}
                    </p>
                  </li>
                  <li>
                    <p>３）公序良俗に反する行為、またはその恐れのある行為</p>
                  </li>
                  <li>
                    <p>
                      ４）他人のメールアドレスを登録するなど、虚偽の申告、届出を行う行為
                    </p>
                  </li>
                  <li>
                    <p>
                      ５）コンピュータウィルス等有害なプログラムを使用または提供する行為
                    </p>
                  </li>
                  <li>
                    <p>
                      ６）迷惑メールやメールマガジン等を一方的に送付する行為
                    </p>
                  </li>
                  <li>
                    <p>
                      ７）その他、法令に違反する行為、またはその恐れがある行為
                    </p>
                  </li>
                  <li>
                    <p>８）その他当社が不適切と判断する行為</p>
                  </li>
                </ul>
                <div className={styles.forbid}>
                  <p>
                    ２．上記に違反した場合、当社は利用者に対し損害賠償請求をすることができることに利用者は同意し
                    ます。
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.title}>第５条【免責事項】</div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <p>
                      １．当社は、当サイトに掲載されている全ての情報を慎重に作成し、また管理しますが、その正確性およ
                      び完
                      全性などに関して、いかなる保証もするものではありません。
                    </p>
                  </li>
                  <li>
                    <p>
                      2．当社は、予告なしに、当サイトの運営を停止または中止し、また当サイトに掲載されている情報の全
                      部また は一部を変更する場合があります。
                    </p>
                  </li>
                  <li>
                    <p>
                      3．利用者が当サイトを利用したこと、または何らかの原因によりこれをご利用できなかったことにより生
                      じ
                      る一切の損害および第三者によるデータの書き込み、不正なアクセス、発言、メールの送信等に関し
                      て生じる
                      一切の損害について、当社は、何ら責任を負うものではありません。
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.title}>第６条【契約解除】</div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <p>
                      １．当社は、利用者が本規約に反する行為をした場合、即時にサービスを停止することができます。
                    </p>
                  </li>
                  <li>
                    <p>
                      ２．前項の事由が発生したとき、当社は利用者に損害賠償をすることができます。
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.title}>第７条【損害賠償】</div>
              <div className={styles.content}>
                <p>
                  本規約に違反した場合、当社に発生した損害を賠償していただきます。
                </p>
              </div>
            </li>
            <li>
              <div className={styles.title}>第８条【特例】</div>
              <div className={styles.content}>
                <p>
                  本規約に基づき、特別の規定が別途定められている場合があります。
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
