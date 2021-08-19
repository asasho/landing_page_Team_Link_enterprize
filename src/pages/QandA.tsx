import React from "react";
import styles from "./QandA.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const QandA: React.FC = () => {
  return (
    <div>
      <div className={styles.category}></div>
      <div className={styles.qa_container}>
        <div className={styles.qa_wrap}>
          <h1>1. Team Linkについて</h1>
          <Accordion allowZeroExpanded>
            {items1.map((i) => (
              <AccordionItem key={i.uuid}>
                <AccordionItemHeading>
                  <AccordionItemButton>{i.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{i.content}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className={styles.qa_wrap}>
          <h1>2. Team Linkの登録について</h1>
          <Accordion allowZeroExpanded>
            {items2.map((i) => (
              <AccordionItem key={i.uuid}>
                <AccordionItemHeading>
                  <AccordionItemButton>{i.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{i.content}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className={styles.qa_wrap}>
          <h1>3. Team Linkの使い方について</h1>
          <Accordion allowZeroExpanded>
            {items3.map((i) => (
              <AccordionItem key={i.uuid}>
                <AccordionItemHeading>
                  <AccordionItemButton>{i.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{i.content}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className={styles.qa_wrap}>
          <h1>4. サービスページ作成について</h1>
          <Accordion allowZeroExpanded>
            {items4.map((i) => (
              <AccordionItem key={i.uuid}>
                <AccordionItemHeading>
                  <AccordionItemButton>{i.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{i.content}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className={styles.qa_wrap}>
          <h1>5. 検索機能について</h1>
          <Accordion allowZeroExpanded>
            {items5.map((i) => (
              <AccordionItem key={i.uuid}>
                <AccordionItemHeading>
                  <AccordionItemButton>{i.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{i.content}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className={styles.qa_wrap}>
          <h1>6. メッセージ機能について</h1>
          <Accordion allowZeroExpanded>
            {items6.map((i) => (
              <AccordionItem key={i.uuid}>
                <AccordionItemHeading>
                  <AccordionItemButton>{i.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{i.content}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className={styles.qa_wrap}>
          <h1>7. 法人アカウントについて</h1>
          <Accordion allowZeroExpanded>
            {items7.map((i) => (
              <AccordionItem key={i.uuid}>
                <AccordionItemHeading>
                  <AccordionItemButton>{i.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{i.content}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className={styles.qa_wrap}>
          <h1>8. 有料プランについて</h1>
          <Accordion allowZeroExpanded>
            {items8.map((i) => (
              <AccordionItem key={i.uuid}>
                <AccordionItemHeading>
                  <AccordionItemButton>{i.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{i.content}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
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
  { uuid: 3, heading: "", content: "" },
];

const items6 = [
  { uuid: 1, heading: "", content: "" },
  { uuid: 2, heading: "", content: "" },
  { uuid: 3, heading: "", content: "" },
];

const items7 = [
  { uuid: 1, heading: "", content: "" },
  { uuid: 2, heading: "", content: "" },
  { uuid: 3, heading: "", content: "" },
];

const items8 = [
  { uuid: 1, heading: "", content: "" },
  { uuid: 2, heading: "", content: "" },
  { uuid: 3, heading: "", content: "" },
];
