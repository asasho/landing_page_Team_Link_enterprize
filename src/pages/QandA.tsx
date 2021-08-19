import React from "react";
import styles from "./QandA.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const QandA: React.FC = () => {
  return (
    <div className={styles.q_and_a}>
      <div className={styles.category}>
        <h1>よくあるお問い合わせ</h1>
        <div className={styles.table}>
          <Link to="category_1" smooth={true} offset={-100}>
            <h3>1. Team Linkについて</h3>
          </Link>
          <Link to="category_2" smooth={true} offset={-100}>
            <h3>2. Team Linkの登録について</h3>
          </Link>
          <Link to="category_3" smooth={true} offset={-100}>
            <h3>3. Team Linkの使い方について</h3>
          </Link>
          <Link to="category_4" smooth={true} offset={-100}>
            <h3>4. サービスページ作成について</h3>
          </Link>
          <Link to="category_5" smooth={true} offset={-100}>
            <h3>5. 検索機能について</h3>
          </Link>
          <Link to="category_6" smooth={true} offset={-100}>
            <h3>6. メッセージ機能について</h3>
          </Link>
          <Link to="category_7" smooth={true} offset={-100}>
            <h3>7. 法人アカウント管理について</h3>
          </Link>
          <Link to="category_8" smooth={true} offset={-100}>
            <h3>8. 有料プランについて</h3>
          </Link>
        </div>
      </div>

      <div className={styles.qa_container}>
        <Element name="category_1" className={styles.qa_wrap}>
          <h1>1. Team Linkについて</h1>
          <Accordion allowZeroExpanded>
            {items1.map((i) => (
              <div className={styles.QAset}>
                <AccordionItem key={i.uuid}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className={styles.question}>
                        <div className={styles.icon_q}>Q</div>
                        <h3>{i.heading}</h3>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className={styles.answer}>
                      <div className={styles.icon_a}>A</div>
                      <h3>{i.content}</h3>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </Element>

        <Element name="category_2" className={styles.qa_wrap}>
          <h1>2. Team Linkの登録について</h1>
          <Accordion allowZeroExpanded>
            {items2.map((i) => (
              <div className={styles.QAset}>
                <AccordionItem key={i.uuid}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className={styles.question}>
                        <div className={styles.icon_q}>Q</div>
                        <h3>{i.heading}</h3>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className={styles.answer}>
                      <div className={styles.icon_a}>A</div>
                      <h3>{i.content}</h3>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </Element>

        <Element name="category_3" className={styles.qa_wrap}>
          <h1>3. Team Linkの使い方について</h1>
          <Accordion allowZeroExpanded>
            {items3.map((i) => (
              <div className={styles.QAset}>
                <AccordionItem key={i.uuid}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className={styles.question}>
                        <div className={styles.icon_q}>Q</div>
                        <h3>{i.heading}</h3>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className={styles.answer}>
                      <div className={styles.icon_a}>A</div>
                      <h3>{i.content}</h3>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </Element>

        <Element name="category_4" className={styles.qa_wrap}>
          <h1>4. サービスページ作成について</h1>
          <Accordion allowZeroExpanded>
            {items4.map((i) => (
              <div className={styles.QAset}>
                <AccordionItem key={i.uuid}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className={styles.question}>
                        <div className={styles.icon_q}>Q</div>
                        <h3>{i.heading}</h3>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className={styles.answer}>
                      <div className={styles.icon_a}>A</div>
                      <h3>{i.content}</h3>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </Element>

        <Element name="category_5" className={styles.qa_wrap}>
          <h1>5. 検索機能について</h1>
          <Accordion allowZeroExpanded>
            {items5.map((i) => (
              <div className={styles.QAset}>
                <AccordionItem key={i.uuid}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className={styles.question}>
                        <div className={styles.icon_q}>Q</div>
                        <h3>{i.heading}</h3>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className={styles.answer}>
                      <div className={styles.icon_a}>A</div>
                      <h3>{i.content}</h3>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </Element>

        <Element name="category_6" className={styles.qa_wrap}>
          <h1>6. メッセージ機能について</h1>
          <Accordion allowZeroExpanded>
            {items6.map((i) => (
              <div className={styles.QAset}>
                <AccordionItem key={i.uuid}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className={styles.question}>
                        <div className={styles.icon_q}>Q</div>
                        <h3>{i.heading}</h3>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className={styles.answer}>
                      <div className={styles.icon_a}>A</div>
                      <h3>{i.content}</h3>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </Element>

        <Element name="category_7" className={styles.qa_wrap}>
          <h1>7. 法人アカウントについて</h1>
          <Accordion allowZeroExpanded>
            {items7.map((i) => (
              <div className={styles.QAset}>
                <AccordionItem key={i.uuid}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className={styles.question}>
                        <div className={styles.icon_q}>Q</div>
                        <h3>{i.heading}</h3>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className={styles.answer}>
                      <div className={styles.icon_a}>A</div>
                      <h3>{i.content}</h3>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </Element>

        <Element name="category_8" className={styles.qa_wrap}>
          <h1>8. 有料プランについて</h1>
          <Accordion allowZeroExpanded>
            {items8.map((i) => (
              <div className={styles.QAset}>
                <AccordionItem key={i.uuid}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className={styles.question}>
                        <div className={styles.icon_q}>Q</div>
                        <h3>{i.heading}</h3>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className={styles.answer}>
                      <div className={styles.icon_a}>A</div>
                      <h3>{i.content}</h3>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </Element>
      </div>
    </div>
  );
};

export default QandA;

const items1 = [
  {
    uuid: 1,
    heading: "Team Link（チームリンク）はどのようなサービスですか？",
    content:
      "経営層の方と企業の方がマッチングできるSNSサービスです。経営層の方は業界のプロである企業の方から自社の課題を無料で相談することが出来ます。一方、企業の方は「⓵自社のPR広告を掲載」、「⓶社長に直接提案」、「⓷経営者の方の質問への回答」が可能であり、社長の方と繋がる機会をつくることができます。",
  },
  {
    uuid: 2,
    heading: "どのような企業が登録されていますか？",
    content:
      "BtoB企業の方とBtoC企業の方が半数ずつ登録いただいております。BtoB企業の方はIT系・システム開発会社、マーケティング会社、経営コンサルティング会社、Web制作会社などざまざまな業種の方に登録いおただいております。",
  },
];

const items2 = [
  {
    uuid: 1,
    heading: "サービス対象に関して教えてください",
    content:
      "無料相談の登録ができる方は決裁権を持つ方に限定させていただきます。したがって経営者以外の方でも取締役や執行役員の方でも登録は可能です。",
  },
  {
    uuid: 2,
    heading: "1社で複数の社員が掲載することは可能ですか？",
    content: "可能です。",
  },
];

const items3 = [
  { uuid: 1, heading: "基本的な使い方がわからない。", content: "" },
  { uuid: 2, heading: "使い方や活用方法について相談したい", content: "" },
];

const items4 = [
  {
    uuid: 1,
    heading: "サービスページとは何ですか？",
    content:
      "掲載企業様が無料で掲載していただける自社PR様のページです。「自社の特徴」、「解決可能な課題」、「強み」などをアピールすることで経営層の方からオファーを受けることが出来ます。",
  },
  {
    uuid: 2,
    heading: "掲載数に制限はありますか？",
    content: "ありません。掲載数に関わらず無料でご利用いただけます。",
  },
];

const items5 = [
  {
    uuid: 1,
    heading: "検索方法を教えてください。",
    content:
      "「解決したい課題」や「特定の業種の企業」などで検索を書けることで貴社のニーズにあったパートナー企業を探すことができます。",
  },
  {
    uuid: 2,
    heading: "自社の検索順位を上げたい",
    content:
      "プロフィールを充実させたり、自社のサービスサイトの掲載に力を入れたりしていただくことで検索順位が上がりやすくなります。",
  },
];

const items6 = [
  {
    uuid: 1,
    heading: "メッセージ機能とは何ですか？",
    content:
      "貴社が気になった企業様/経営層の方へメッセージを送信できる機能です。メッセージのやり取りを通して相手先の企業様/経営層の方と繋がることができます。",
  },
  {
    uuid: 2,
    heading: "メッセージを送信できる数に制限はありますか？",
    content:
      "経営層の方の場合は制限がございませんので無料で相談いただけます。一方、掲載企業の方は送信するメッセージの数によって有料プランに入っていただく必要があります。有料プランの詳細はこちら()を参照してください",
  },
  {
    uuid: 3,
    heading:
      "メッセージを受信して返信する際もメッセージ数にカウントされますか？",
    content: "",
  },
  {
    uuid: 4,
    heading:
      "一度メッセージを送った相手からメッセージを送受信する頻度に制限はありますか？",
    content:
      "一度メッセージを送った方とのやり取りに制限はございません。有料プランの方も初回メッセージ送信以降は追加で料金が発生することはありません。",
  },
  {
    uuid: 4,
    heading: "メッセージの返信が来ません",
    content:
      "メッセージの返信率はメッセージ内容によって30%〜70%と大きく変わります。共創のイメージがわきやすいメッセージを送りましょう。",
  },
];

const items7 = [
  {
    uuid: 1,
    heading: "メールマガジン/お知らせの配信を停止したい。",
    content: "アッカウント管理ページ内の「メール配信設定」より設定が可能です。",
  },
  { uuid: 2, heading: "担当者を変更/削除したい。", content: "" },
  { uuid: 3, heading: "退会したい。", content: "" },
];

const items8 = [
  { uuid: 1, heading: "有料プランの内容を教えてください", content: "" },
];
