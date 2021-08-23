import React from "react";
import styles from "./Faq.module.css";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
// import { Link, Element } from "react-scroll";
import { Link } from "react-router-dom";

const Scroll = require("react-scroll");

const Faq: React.FC = () => {
  const ScrollLink = Scroll.Link;
  const ScrollElement = Scroll.Element;

  return (
    <div className={styles.faq}>
      <div className={styles.category}>
        <div className={styles.faq_title}>
          <h1>よくあるお問い合わせ</h1>
        </div>
        <div className={styles.table}>
          <div className={styles.table_item}>
            <ScrollLink
              to="category_1"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              1. Team Linkについて
            </ScrollLink>
          </div>
          <div className={styles.table_item}>
            <ScrollLink
              to="category_2"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              2. Team Linkの登録について
            </ScrollLink>
          </div>
          <div className={styles.table_item}>
            <ScrollLink
              to="category_3"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              3. Team Linkの使い方について
            </ScrollLink>
          </div>
          <div className={styles.table_item}>
            <ScrollLink
              to="category_4"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              4. サービスページ作成について
            </ScrollLink>
          </div>
          <div className={styles.table_item}>
            <ScrollLink
              to="category_5"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              5. 検索機能について
            </ScrollLink>
          </div>
          <div className={styles.table_item}>
            <ScrollLink
              to="category_6"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              6. メッセージ機能について
            </ScrollLink>
          </div>
          <div className={styles.table_item}>
            <ScrollLink
              to="category_7"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              7. 法人アカウント管理について
            </ScrollLink>
          </div>
          {/* <div className={styles.table_item}>
            <Link
              to="category_8"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              8. 有料プランについて
            </Link>
          </div> */}
        </div>
      </div>

      <div className={styles.qa_container}>
        <ScrollElement name="category_1" className={styles.qa_wrap}>
          <h1>1. Team Linkについて</h1>
          <StyledAccordion allowMultipleExpanded>
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
          </StyledAccordion>
        </ScrollElement>

        <ScrollElement name="category_2" className={styles.qa_wrap}>
          <h1>2. Team Linkの登録について</h1>
          <StyledAccordion allowMultipleExpanded>
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
          </StyledAccordion>
        </ScrollElement>

        <ScrollElement name="category_3" className={styles.qa_wrap}>
          <h1>3. Team Linkの使い方について</h1>
          <StyledAccordion allowMultipleExpanded={true}>
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
                      <h3>
                        {i.content}
                        <br />
                        <br />
                        {i.url}
                        {i.tag}
                      </h3>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            ))}
          </StyledAccordion>
        </ScrollElement>

        <ScrollElement name="category_4" className={styles.qa_wrap}>
          <h1>4. サービスページ作成について</h1>
          <StyledAccordion allowMultipleExpanded>
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
          </StyledAccordion>
        </ScrollElement>

        <ScrollElement name="category_5" className={styles.qa_wrap}>
          <h1>5. 検索機能について</h1>
          <StyledAccordion allowMultipleExpanded>
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
          </StyledAccordion>
        </ScrollElement>

        <ScrollElement name="category_6" className={styles.qa_wrap}>
          <h1>6. メッセージ機能について</h1>
          <StyledAccordion allowMultipleExpanded>
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
          </StyledAccordion>
        </ScrollElement>

        <ScrollElement name="category_7" className={styles.qa_wrap}>
          <h1>7. 法人アカウントについて</h1>
          <StyledAccordion allowMultipleExpanded>
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
                      <h3>
                        {i.content}
                        <br />
                        <br />
                        {i.url}
                        {i.tag}
                      </h3>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            ))}
          </StyledAccordion>
        </ScrollElement>

        {/* <Element name="category_8" className={styles.qa_wrap}>
          <h1>8. 有料プランについて</h1>
          <StyledAccordion allowZeroExpanded>
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
          </StyledAccordion>
        </Element> */}
      </div>
    </div>
  );
};

export default Faq;

const items1 = [
  {
    uuid: 1,
    heading: "Team Link（チームリンク）はどのようなサービスですか？",
    content:
      "経営層の方と企業の方がマッチングできるSNSサービスです。経営層の方は無料で相談できる企業の方と繋がることが出来ます。一方、企業の方は「⓵自社のサービスページを掲載」、「⓶社長に直接提案」、「⓷経営者の方の質問への回答」が可能であり、社長の方と繋がる機会を創出できます。",
  },
  {
    uuid: 2,
    heading: "どのような企業が登録されていますか？",
    content:
      "中小企業やベンチャー企業を中心としたBtoB企業の方およびBtoC企業のにご登録いただいています。ビジネス領域ではAI等の先端領域から一次産業まで多種多様なご登録を頂いております。",
  },
];

const items2 = [
  {
    uuid: 1,
    heading: "サービス対象に関して教えてください",
    content:
      "原則、法人格をお持ちの企業様を対象とさせて頂いております。\n※個人事業主の方は対象外とさせて頂いております。",
  },
];

const items3 = [
  {
    uuid: 1,
    heading: "基本的な使い方がわからない。",
    content:
      "Team Linkの資料を見ていただくと具体的な機能の使い方を知ることができます。資料請求ページよりTeam Linkの資料を請求することができます。",
    url: "資料請求ページURL：",
    tag: (
      <a
        href="https://team-link.jp/document"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/document
      </a>
    ),
  },
  {
    uuid: 2,
    heading: "使い方や活用方法について相談したい",
    content:
      "具体的な相談内容を以下お問い合わせフォームよりお問い合わせいただければと思います。使い方や活用方法についてご説明いたします。",
    url: "お問い合わせフォームURL：",
    tag: (
      <Link
        to="/contact"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        お問い合わせフォームはこちら
      </Link>
    ),
  },
];

const items4 = [
  {
    uuid: 1,
    heading: "サービスページとは何ですか？",
    content:
      "掲載企業様が無料で掲載していただける自社PR用のページです。「自社の特徴」、「解決可能な課題」、「強み」などをアピールすることで経営層の方からのメッセージを受け取る機会を創出できます。",
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
    content: "経営層の方の場合は制限がございませんので無料で相談いただけます。",
  },
  // {
  //   uuid: 3,
  //   heading:
  //     "メッセージを受信して返信する際もメッセージ数にカウントされますか？",
  //   content: "",
  // },
  // {
  //   uuid: 4,
  //   heading:
  //     "一度メッセージを送った相手からメッセージを送受信する頻度に制限はありますか？",
  //   content:
  //     "一度メッセージを送った方とのやり取りに制限はございません。有料プランの方も初回メッセージ送信以降は追加で料金が発生することはありません。",
  // },
  {
    uuid: 4,
    heading: "メッセージの返信が来ません",
    content:
      "メッセージの返信率はメッセージ内容によって大きく変わります。肩書き・役職を明記し、貴社の説明を分かりやすく簡潔にしましょう。また、一方的な営業・提案は敬遠されやすいので意見交換のスタンスでやり取りをすると良いです。",
  },
];

const items7 = [
  {
    uuid: 1,
    heading: "メールマガジン/お知らせの配信を停止したい。",
    content: "アカウント管理ページ内の「メール配信設定」より設定が可能です。",
  },
  {
    uuid: 2,
    heading: "担当者を変更したい。",
    content:
      "担当者変更は事務局にて承っております。以下お問い合わせフォームよりご希望の対応をお知らせください。",
    url: "お問い合わせフォームURL：",
    tag: (
      <Link
        to="/contact"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        お問い合わせフォームはこちら
      </Link>
    ),
  },
  {
    uuid: 2,
    heading: "担当者を変更したい。",
    content:
      "退会は事務局にて承っております。以下お問い合わせフォームより退会希望の旨をお知らせください。",
    url: "お問い合わせフォームURL：",
    tag: (
      <Link
        to="/contact"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        お問い合わせフォームはこちら
      </Link>
    ),
  },
];

// const items8 = [
//   { uuid: 1, heading: "有料プランの内容を教えてください", content: "" },
// ];

const StyledAccordion = styled(Accordion)`
  .accordion__button {
    background-color: white !important;
    width: auto !important;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 0;
    :before {
      color: #0095f6;
      margin: 15px 18px 0 12px;
      height: 12px;
      width: 12px;
      transform: rotate(45deg);
      @media (max-width: 768px) {
        height: 10px;
        width: 10px;
      }
    }
  }
  .accordion__button[aria-expanded="true"]::before,
  .accordion__button[aria-selected="true"]::before {
    transform: rotate(225deg);
    margin: 20px 18px 0 12px;
  }
  .accordion__item {
    border: none;
  }
  .accordion__button {
    border-radius: 5px;
  }
  .accordion__panel {
    padding: 0;
  }
`;
