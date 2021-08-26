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
              4. 個人アカウント管理について
            </ScrollLink>
          </div>

          <div className={styles.table_item}>
            <ScrollLink
              to="category_5"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              5. 相談機能について
            </ScrollLink>
          </div>

          <div className={styles.table_item}>
            <ScrollLink
              to="category_6"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              6. 企業へのお問い合わせ機能について
            </ScrollLink>
          </div>

          <div className={styles.table_item}>
            <ScrollLink
              to="category_7"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              7. サービス検索機能について
            </ScrollLink>
          </div>

          <div className={styles.table_item}>
            <ScrollLink
              to="category_8"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              8. 法人アカウント管理について
            </ScrollLink>
          </div>

          <div className={styles.table_item}>
            <ScrollLink
              to="category_9"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              9. サービスページ作成について
            </ScrollLink>
          </div>
          {/* <div className={styles.table_item}>
            <ScrollLink
              to="category_6"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              6. メッセージ機能について
            </ScrollLink>
          </div> */}

          <div className={styles.table_item}>
            <ScrollLink
              to="category_10"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              10. 質問回答機能について
            </ScrollLink>
          </div>

          <div className={styles.table_item}>
            <ScrollLink
              to="category_11"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              11. 直接提案機能について
            </ScrollLink>
          </div>

          <div className={styles.table_item}>
            <ScrollLink
              to="category_12"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              12. 社長の検索機能について
            </ScrollLink>
          </div>

          <div className={styles.table_item}>
            <ScrollLink
              to="category_13"
              smooth={true}
              offset={-100}
              className={styles.link_btn}
            >
              13. その他
            </ScrollLink>
          </div>
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
                      <h3>
                        {i.content}
                        <br />
                        {i.content2}
                      </h3>
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
          <h1>4. 個人アカウントについて</h1>
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

        <ScrollElement name="category_5" className={styles.qa_wrap}>
          <h1>5. 相談機能について</h1>
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

        <ScrollElement name="category_6" className={styles.qa_wrap}>
          <h1>6. 企業へのお問い合わせ機能</h1>
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

        <ScrollElement name="category_7" className={styles.qa_wrap}>
          <h1>7. サービス検索機能について</h1>
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
                      <h3>{i.content}</h3>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            ))}
          </StyledAccordion>
        </ScrollElement>

        {/* <ScrollElement name="category_6" className={styles.qa_wrap}>
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
        </ScrollElement> */}

        <ScrollElement name="category_8" className={styles.qa_wrap}>
          <h1>8. 法人アカウントについて</h1>
          <StyledAccordion allowMultipleExpanded>
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

        <ScrollElement name="category_9" className={styles.qa_wrap}>
          <h1>9. サービスページ作成について</h1>
          <StyledAccordion allowMultipleExpanded>
            {items9.map((i) => (
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

        <ScrollElement name="category_10" className={styles.qa_wrap}>
          <h1>10. 質問回答機能について</h1>
          <StyledAccordion allowMultipleExpanded>
            {items10.map((i) => (
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

        <ScrollElement name="category_11" className={styles.qa_wrap}>
          <h1>11. 直接提案機能について</h1>
          <StyledAccordion allowMultipleExpanded>
            {items11.map((i) => (
              <div className={styles.QAset}>
                <AccordionItem key={i.uuid}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className={styles.question}>
                        <div className={styles.icon_q}>Q</div>
                        <h3>
                          {i.heading}
                          <br />
                          <br />
                          {i.url}
                          {i.tag}
                        </h3>
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

        <ScrollElement name="category_12" className={styles.qa_wrap}>
          <h1>12. 社長の検索機能について</h1>
          <StyledAccordion allowMultipleExpanded>
            {items12.map((i) => (
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

        <ScrollElement name="category_13" className={styles.qa_wrap}>
          <h1>13. その他</h1>
          <StyledAccordion allowMultipleExpanded>
            {items13.map((i) => (
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
      "経営層の方と企業の方がマッチングできるプラットフォームサービスです。経営層の方は無料で相談できる企業の方と繋がることが出来ます。一方、企業の方は「⓵自社のサービスページを掲載」、「⓶社長に直接提案」、「⓷経営者の方の質問への回答」が可能であり、社長の方と繋がる機会を創出できます。",
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
    content: "原則、法人格をお持ちの企業様を対象とさせて頂いております。",
    content2: "※個人事業主の方は対象外とさせて頂いております。",
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
      <a
        href="https://team-link.jp/inquiry"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/inquiry
      </a>
    ),
  },
];

const items4 = [
  {
    uuid: 1,
    heading: "メールマガジン/お知らせの配信を停止したい。",
    content: "アカウント管理ページ内の「メール配信設定」より設定が可能です。",
    url: "",
  },

  {
    uuid: 2,
    heading: "プロフィールを変更したい。",
    content:
      "まず、ログイン後の画面の右上のプロフィール画像のアイコンをクリックしていただきます。そのあと「プロフィールを編集」よりプロフィールを変更することができます。",
    url: "",
    tag: "",
  },

  {
    uuid: 3,
    heading: "登録したメールアドレスを変更したい。",
    content: "以下URLよりメールアドレスを変更することができます。",
    url: "お問い合わせフォームURL：",
    tag: (
      <a
        href="https://team-link.jp/account-setting/email-setting"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/account-setting/email-setting
      </a>
    ),
  },

  {
    uuid: 4,
    heading: "プロフィールに自社ニーズを追加したい。",
    content:
      "まず、ログイン後の画面の右上のプロフィール画像のアイコンをクリックしていただきます。そのあと「設定」を選択していただだきます。そのあと遷移したページで「貴社のニーズの編集」より追加することができます。",
    url: "お問い合わせフォームURL：",
    tag: (
      <a
        href="https://team-link.jp/account-setting/need-setting"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/account-setting/need-setting
      </a>
    ),
  },

  {
    uuid: 5,
    heading: "アカウントの削除について。",
    content:
      "原則としてアカウントの削除は事務局にて承っております。以下お問い合わせフォームよりご希望の対応をお知らせください。",
    url: "お問い合わせフォームURL：",
    tag: (
      <a
        href="https://team-link.jp/inquiry"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/inquiry
      </a>
    ),
  },
  {
    uuid: 6,
    heading: "退会したい",
    content:
      "原則として退会は事務局にて承っております。以下お問い合わせフォームよりご希望の対応をお知らせください。",
    url: "お問い合わせフォームURL：",
    tag: (
      <a
        href="https://team-link.jp/inquiry"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/inquiry
      </a>
    ),
  },
];

const items5 = [
  {
    uuid: 1,
    heading: "相談機能とはどのような機能ですか。",
    content:
      "自社が抱える課題に関する相談を投稿することができる機能です。投稿内容を閲覧した企業の方から回答をもらうことができます。",
    url: "",
    tag: "",
  },
  {
    uuid: 2,
    heading: "相談は誰でもできますか？",
    content: "ご登録いただいた決裁権を持つ方であれば誰でも可能です。",
    url: "",
    tag: "",
  },
  {
    uuid: 3,
    heading: "相談できる数に制限はありますか？",
    content:
      "制限がございません。相談した数に関わらず無料でご利用いただけます。",
  },
  {
    uuid: 4,
    heading: "相談内容を投稿したい。",
    content:
      "ログイン後の画面の右上にある「相談を投稿する」ボタンより相談内容を記入し、投稿することができます。",
    url: "",
    tag: "",
  },
  {
    uuid: 5,
    heading: "相談内容を編集したい。",
    content:
      "原則として登録者の方からの相談内容の編集はできません。以下お問い合わせフォームよりご希望の対応をお知らせください。",
    url: "お問い合わせフォームURL：",
    tag: (
      <a
        href="https://team-link.jp/inquiry"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/inquiry
      </a>
    ),
  },
  {
    uuid: 6,
    heading: "相談内容にハッシュタグをつけたい。",
    content:
      "相談を新規作成時に「投稿した質問に合うトピックに選んでください」から選択した項目がハッシュタグになります。",
    url: "",
    tag: "",
  },
];

const items6 = [
  {
    uuid: 1,
    heading: "お問い合わせ機能とは何ですか？",
    content:
      "企業のサービスページを閲覧した際に、気になった企業の方に気軽にメッセージを送信することができる機能です。",
    url: "",
    tag: "",
  },
  {
    uuid: 2,
    heading: "気になる企業があるのでお問い合わせしたい。",
    content:
      "気になった企業のサービスページから詳細ページに移動していただき、「気軽にメッセージを送る」ボタンからお問い合わせができます。",
    url: "",
    tag: "",
  },
  {
    uuid: 3,
    heading: "お問い合わせできる数に制限はありますか？",
    content:
      "制限がございません。お問い合わせした数に関わらず無料でご利用いただけます。",
  },
  {
    uuid: 4,
    heading: "お問い合わせ内容を編集したい。",
    content:
      "お問い合わせ内容の編集は事務局にて承っております。以下お問い合わせフォームよりご希望の対応をお知らせください。",
    url: "お問い合わせフォームURL：",
    tag: (
      <a
        href="https://team-link.jp/inquiry"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/inquiry
      </a>
    ),
  },
  {
    uuid: 5,
    heading: "掲載企業に問い合わせたが返信が返ってこない。",
    content:
      "メッセージの返信率はメッセージ内容によって大きく変わります。肩書き・役職を明記し、貴社の説明を分かりやすく簡潔にしましょう。また、一方的な営業・提案は敬遠されやすいので意見交換のスタンスでやり取りをすると良いです。",
    url: "",
    tag: "",
  },
];

const items7 = [
  {
    uuid: 1,
    heading: "サービスの検索方法を教えてください。",
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

// const items14 = [
//   {
//     uuid: 1,
//     heading: "メッセージ機能とは何ですか？",
//     content:
//       "貴社が気になった企業様/経営層の方へメッセージを送信できる機能です。メッセージのやり取りを通して相手先の企業様/経営層の方と繋がることができます。",
//   },
//   {
//     uuid: 2,
//     heading: "メッセージを送信できる数に制限はありますか？",
//     content: "経営層の方の場合は制限がございませんので無料で相談いただけます。",
//   },
//   // {
//   //   uuid: 3,
//   //   heading:
//   //     "メッセージを受信して返信する際もメッセージ数にカウントされますか？",
//   //   content: "",
//   // },
//   // {
//   //   uuid: 4,
//   //   heading:
//   //     "一度メッセージを送った相手からメッセージを送受信する頻度に制限はありますか？",
//   //   content:
//   //     "一度メッセージを送った方とのやり取りに制限はございません。有料プランの方も初回メッセージ送信以降は追加で料金が発生することはありません。",
//   // },
//   {
//     uuid: 3,
//     heading: "社長からメッセージの返信が来ない。",
//     content:
//       "メッセージの返信率はメッセージ内容によって大きく変わります。肩書き・役職を明記し、貴社の説明を分かりやすく簡潔にしましょう。また、一方的な営業・提案は敬遠されやすいので意見交換のスタンスでやり取りをすると良いです。",
//   },
//   {
//     uuid: 4,
//     heading: "掲載企業に問い合わせたが返信が返ってこない。",
//     content:
//       "メッセージの返信率はメッセージ内容によって大きく変わります。肩書き・役職を明記し、貴社の説明を分かりやすく簡潔にしましょう。また、一方的な営業・提案は敬遠されやすいので意見交換のスタンスでやり取りをすると良いです。",
//   },
// ];

const items8 = [
  {
    uuid: 1,
    heading: "メールマガジン/お知らせの配信を停止したい。",
    content: "アカウント管理ページ内の「メール配信設定」より設定が可能です。",
    url: "",
  },
  {
    uuid: 2,
    heading: "担当者を追加したい。",
    content:
      "以下URLより「アカウントと請求」に移動していただきます。そのあと「ユーザーを招待」ボタンより担当者を追加することができます。",
    url: "アカウントと請求：",
    tag: (
      <a
        href="https://team-link.jp/publishing/accounts/member"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/publishing/accounts/member
      </a>
    ),
  },
  {
    uuid: 3,
    heading: "担当者を変更・削除したい。",
    content:
      "原則として担当者の変更・変更は事務局にて承っております。以下お問い合わせフォームよりご希望の対応をお知らせください。",
    url: "お問い合わせフォームURL：",
    tag: (
      <a
        href="https://team-link.jp/inquiry"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/inquiry
      </a>
    ),
  },
  {
    uuid: 4,
    heading: "登録したメールアドレスを変更したい。",
    content: "以下URLよりメールアドレスを変更することができます。",
    url: "お問い合わせフォームURL：",
    tag: (
      <a
        href="https://team-link.jp/account-setting/email-setting"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/account-setting/email-setting
      </a>
    ),
  },
  {
    uuid: 5,
    heading: "会社ページカバー画像を変更したい。",
    content:
      "まず、ログイン後の画面の右上のプロフィール画像のアイコンをクリックしていただきます。そのあと「会社ページへ移動」を選択し、「カバー画像を変更」から変更することができます。",
    url: "",
    tag: "",
  },
  {
    uuid: 6,
    heading: "推奨されているカバー画像のサイズはありますか？",
    content: "2560px × 840px　の大きさの画像を推奨します。",
    url: "",
    tag: "",
  },
  {
    uuid: 7,
    heading: "会社ページの基本情報の編集をしたい。",
    content:
      "まず、ログイン後の画面の右上のプロフィール画像のアイコンをクリックしていただきます。「会社情報」から変更することができます。",
    url: "",
    tag: "",
  },
  {
    uuid: 8,
    heading: "サービスページ掲載の停止・社長からのお問い合わせの停止を行いたい",
    content:
      "原則としてサービスページ掲載の停止および社長からのお問い合わせの停止は事務局にて承っております。以下お問い合わせフォームよりご希望の対応をお知らせください。",
    url: "お問い合わせフォームURL：",
    tag: (
      <a
        href="https://team-link.jp/inquiry"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/inquiry
      </a>
    ),
  },
  {
    uuid: 9,
    heading: "アカウントの削除について。",
    content:
      "原則としてアカウントの削除は事務局にて承っております。以下お問い合わせフォームよりご希望の対応をお知らせください。",
    url: "お問い合わせフォームURL：",
    tag: (
      <a
        href="https://team-link.jp/inquiry"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/inquiry
      </a>
    ),
  },

  {
    uuid: 11,
    heading: "退会したい",
    content:
      "原則として退会は事務局にて承っております。以下お問い合わせフォームよりご希望の対応をお知らせください。",
    url: "お問い合わせフォームURL：",
    tag: (
      <a
        href="https://team-link.jp/inquiry"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/inquiry
      </a>
    ),
  },
];

const items9 = [
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
  {
    uuid: 3,
    heading: "サービスページ掲載モードへのアクセス方法を知りたい",
    content: "以下リンクよりアクセスすることができます。",
    url: "サービスページ掲載モード:",
    tag: (
      <a
        href="https://team-link.jp/begin-a-service"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/begin-a-service
      </a>
    ),
  },
  {
    uuid: 4,
    heading: "サービスページを編集したい。",
    content:
      "以下URLより「貴社サービスページ一覧」に移動します。その後、編集したいサービスページの「編集」ボタンから編集が可能です。",
    url: "貴社サービスページ一覧:",
    tag: (
      <a
        href="https://team-link.jp/publishing/service"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/publishing/service
      </a>
    ),
  },
  {
    uuid: 5,
    heading: "サービスページを削除したい。",
    content:
      "以下URLより「貴社サービスページ一覧」に移動します。その後、削除したいサービスページの「削除」ボタンから削除が可能です。",
    url: "貴社サービスページ一覧:",
    tag: (
      <a
        href="https://team-link.jp/publishing/service"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/publishing/service
      </a>
    ),
  },
];

const items10 = [
  {
    uuid: 1,
    heading: "質問回答機能とは何ですか？",
    content:
      "社長が投稿した相談に対して回答ができる機能です。社長の方の相談に回答して課題解決に導くことを通して、社長とパートナーになる機会を創出できます。",
    url: "",
    tag: "",
  },
  {
    uuid: 2,
    heading: "社長の質問に回答したい。",
    content:
      "以下URLより相談内容一覧ページに移動していただきます。次に、回答したい質問の左下の「回答する」より質問に回答することができます。",
    url: "相談内容一覧ページ:",
    tag: (
      <a
        href="https://team-link.jp/publishing/councel"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/publishing/councel
      </a>
    ),
  },
  {
    uuid: 3,
    heading: "質問に回答できる回数に制限はありますか？",
    content:
      "制限がございません。質問の回数に関わらず無料でご利用いただけます。",
  },
  {
    uuid: 4,
    heading: "回答内容を編集・削除したい",
    content:
      "原則として一度回答した後で内容を編集・削除することはできません。以下お問い合わせフォームよりご希望の対応をお知らせください。",
    url: "お問い合わせフォームURL：",
    tag: (
      <a
        href="https://team-link.jp/inquiry"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/inquiry
      </a>
    ),
  },
];

const items11 = [
  {
    uuid: 1,
    heading: "直接提案機能とは何ですか？",
    content:
      "掲載企業様が気になる社長の方にメッセージを通して直接提案できる機能です。こちらの機能は質問回答機能とは異なり、掲載企業様から社長の方にアプローチをかけることができます。",
    url: "",
    tag: "",
  },
  {
    uuid: 2,
    heading: "社長に直接メッセージで提案したい。",
    content:
      "以下URLより、提案したい社長を選択して一番下の「詳細プロフィールを見る」よりメッセージを記入し、送信することができます。",
    url: "",
    tag: "",
  },
  {
    uuid: 3,
    heading: "直接提案機能で送信したメッセージを編集・削除したい。",
    content:
      "原則として一度送信したメッセージの編集・削除はできません。以下お問い合わせフォームよりご希望の対応をお知らせください。",
    url: "お問い合わせフォームURL：",
    tag: (
      <a
        href="https://team-link.jp/inquiry"
        style={{
          paddingLeft: "20px",
          textDecoration: "none",
          color: "#0095f6",
        }}
      >
        https://team-link.jp/inquiry
      </a>
    ),
  },
  {
    uuid: 4,
    heading: "社長からメッセージの返信が来ない。",
    content:
      "メッセージの返信率はメッセージ内容によって大きく変わります。肩書き・役職を明記し、貴社の説明を分かりやすく簡潔にしましょう。また、一方的な営業・提案は敬遠されやすいので意見交換のスタンスでやり取りをすると良いです。メッセージ記入欄の右上の「テンプレート」もご利用いただけます。",
    url: "",
    tag: "",
  },
];

const items12 = [
  {
    uuid: 1,
    heading: "社長の検索方法を教えてください。",
    content:
      "「ニーズ」や「業種」、「従業員数」などで検索をかけることで貴社が解決できるような課題や悩みを持った社長の方を探すことができます。",
  },
  {
    uuid: 2,
    heading: "自社の検索順位を上げたい",
    content:
      "プロフィールを充実させたり、自社のサービスサイトの掲載に力を入れたりしていただくことで検索順位が上がりやすくなります。",
  },
];

const items13 = [
  {
    uuid: 1,
    heading: "サービスを利用する際に推奨されているPC環境はありますか？",
    content: "はい。chrome（version90以上）またはfirefoxが望ましいです。",
  },
];

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
