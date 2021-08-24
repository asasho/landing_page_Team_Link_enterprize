import styles from "./Top.module.css";
import ReactPlayer from "react-player";
import MediaQuery from "react-responsive";

const Top = () => {
  return (
    <main
      data-pg-key="top"
      style={{ overflow: "hidden" }}
      className={styles.head_main}
    >
      <section className={`${styles.head} ${styles.typesquare_tags}`}>
        <div className={`${styles.head_inner} ${styles.typesquare_tags}`}>
          <h1 className={`${styles.head_copy} ${styles.typesquare_tags}`}>
            <span>社長に直接</span>
            <br />
            <span>自社サービスを提案できる</span>
            <br />
            <span>集客プラットフォーム</span>
          </h1>
          <p className={styles.head_sub}>
            Team Link Adminは社長に
            <br />
            ツール、コンサル、システム開発などを
            <br />
            直接提案できる集客プラットフォームです
          </p>

          <div
            className={`${styles.head_btn} ${styles.button__wrap} ${styles.pc_on} ${styles.typesquare_tags}`}
          >
            <button
              className={`${styles.button} ${styles.red} ${styles._funnel_analysis} ${styles.typesquare_tags}`}
            >
              <span className={styles.typesquare_tags}>無料で掲載する</span>
            </button>
            <a
              className={`${styles.button} ${styles.white} ${styles._funnel_analysis} ${styles.typesquare_tags}`}
              href="/document"
            >
              <span className={styles.typesquare_tags}>
                掲載資料ダウンロード
              </span>
            </a>
          </div>
        </div>
        <div className={`${styles.device_img} ${styles.typesquare_tags}`}></div>

        <MediaQuery maxWidth={768}>
          <div
            className={`${styles.head_btn_sp} ${styles.sp_on} ${styles.typesquare_tags}`}
          >
            <a
              className={`${styles.head_cta} ${styles.blue} ${styles._btn_iphone} ${styles.typesquare_tags}`}
              href=""
              style={{ display: "block" }}
            >
              <span className={styles.typesquare_tags}>
                無料で
                <br />
                掲載する
              </span>
            </a>
            <a
              className={`${styles.head_cta} ${styles.white} ${styles.typesquare_tags}`}
              href="/document"
            >
              <span>
                掲載資料
                <br />
                ダウンロード
              </span>
            </a>
          </div>
        </MediaQuery>
      </section>
      <section className={styles.problem}>
        <div className={styles.problem_container}>
          <h2 className={styles.problem_heading}>
            <span style={{ display: "inline-block" }}>BtoBビジネスで、</span>
            <span style={{ display: "inline-block" }}>
              集客に苦労していませんか？
            </span>
          </h2>
          <p className={styles.problem_paragraph}>
            <span className={styles.problem_section}>
              <span className={styles.problem_text}>
                BtoBの集客には、資料請求系サイトへの掲載、電話営業、DM、広告、メディア構築、代理店営業などがありますが、
              </span>
              <span className={styles.problem_text}>
                近年、これらの集客コストが高くなっています。
              </span>
            </span>
            <span className={styles.problem_section}>
              <span className={styles.problem_text}>
                Team Linkはキーマンに直接提案することが可能なので、
              </span>
              <span className={styles.problem_text}>
                集客コストを大幅に下げることが可能です。
              </span>
            </span>
            <span className={styles.problem_section}>
              <span className={styles.problem_text}>
                また、自社商材を魅力的に見せる
              </span>
              <span className={styles.problem_text}>
                仕掛けも用意しています。
              </span>
            </span>
          </p>
        </div>
      </section>
      <section className={styles.benefit}>
        <div className={styles.benefit_container}>
          <div className={styles.benefit_wrapper}>
            <h2 className={styles.benefit_head}>
              <span className={styles.benefit_copy}>BtoB集客における</span>
              <span className={styles.benefit_copy}>Team Linkの強み</span>
            </h2>
            <p className={styles.benefit_paragraph}>
              Team Linkはキーマンである経営層を集客するプラットフォームです
            </p>
          </div>
          <div className={styles.benefit_features}>
            <div className={styles.benefit_reverse}>
              <div className={styles.benefit_img}>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <div
                    style={{ width: "100%", paddingBottom: "67.3333%" }}
                  ></div>
                  <img
                    src="https://d11l9ihcbn52nk.cloudfront.net/IMG/direct_approach.gif"
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                      opacity: 1,
                      transition: "opacity 500ms ease 0s",
                    }}
                  />
                </div>
              </div>
              <div className={styles.benefit_area}>
                <h2 className={styles.benefit_title}>
                  キーマンに
                  <br />
                  直接アプローチできる
                </h2>
                <p className={styles.benefit_text}>
                  法人営業では、担当者レベルで話を詰めていっても、キーマンがNOといって提案が白紙になることが多いです。ですが、Team
                  Linkを使えばキーマンに最初からアプローチできるので、そのような問題は起こりません。
                </p>
              </div>
            </div>
            <div className={styles.benefit_feature}>
              <div className={styles.benefit_img_left}>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <div
                    style={{ width: "100%", paddingBottom: "67.3333%" }}
                  ></div>
                  <img
                    src="https://d11l9ihcbn52nk.cloudfront.net/IMG/speedy.gif"
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                      opacity: 1,
                      transition: "opacity 500ms ease 0s",
                    }}
                  />
                </div>
              </div>
              <div className={styles.benefit_area_right}>
                <h2 className={styles.benefit_title}>契約までがスピーディー</h2>
                <p className={styles.benefit_text}>
                  通常の法人営業は、時間がかかる上、確定しないとお金が発生しないリスクがあります。しかし、Team
                  Linkは、キーマンにアプローチできるため、時間の大幅な短縮が可能です。
                </p>
              </div>
            </div>
            <div className={styles.benefit_reverse}>
              <div className={styles.benefit_img}>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <div
                    style={{ width: "100%", paddingBottom: "67.3333%" }}
                  ></div>
                  <img
                    src="https://d11l9ihcbn52nk.cloudfront.net/IMG/cheap.gif"
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                      opacity: 1,
                      transition: "opacity 500ms ease 0s",
                    }}
                  />
                </div>
              </div>
              <div className={styles.benefit_area}>
                <h2 className={styles.benefit_title}>集客コストが安い</h2>
                <p className={styles.benefit_text}>
                  通常、BtoBの集客は、資料請求系サイトへの掲載、電話営業、DM、広告、メディア構築、営業などをしますが、これらのコストは高いです。Team
                  Linkであれば、これらのステップを省くことができるので、集客コストを大幅に下げることが可能です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.point}>
        <div className={styles.point_title}>
          <div className={styles.point_text}>Team Linkの特徴</div>
        </div>
        <div className={styles.point_sub}>
          ターゲット層にしっかり伝わり、確度の高い提案が可能
        </div>
        <MediaQuery minWidth={768}>
          <section
            className={`${styles.point_service} ${styles.publish_service}`}
          >
            <div className={styles.point_content}>
              <h3 className={styles.point_heading}>
                ニーズにあわせ掲載し放題のサービス概要
              </h3>
              <div className={styles.point_description}>
                サービスを担当するのがどのようなチームなのか、どんな課題が解決できるのかなどを顧客の多彩なニーズに合わせ発信することができます。
              </div>
              <div className={styles.point_button}>
                <button className={styles.point_button_button}>
                  <div className={styles.point_button_soon_button}>
                    今すぐ掲載
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.point_video}>
              <ReactPlayer
                url="https://d32an07yf7y0nw.cloudfront.net/output/movie3team.m3u8"
                reload="auto"
                playing={true}
                autoPlay={true}
                muted={true}
                loop={true}
                style={{ objectFit: "cover" }}
                width="600px"
                height="auto"
                controls={false}
                playsinline={true}
              />
            </div>
          </section>
          <section className={`${styles.point_service} ${styles.direct_offer}`}>
            <div className={styles.point_video}>
              <ReactPlayer
                url="https://d32an07yf7y0nw.cloudfront.net/output/movie2team.m3u8"
                reload="auto"
                playing={true}
                autoPlay={true}
                muted={true}
                loop={true}
                style={{ objectFit: "cover" }}
                width="600px"
                height="auto"
                controls={false}
                playsinline={true}
              />
            </div>
            <div className={styles.point_content}>
              <h3 className={styles.point_heading}>社長に直接提案</h3>
              <div className={styles.point_description}>
                社長のニーズを基に直接メッセージを送ることができます。ニーズを基にメッセージを送ることができるので確度の高い提案が可能です。
              </div>
              <div className={styles.point_button}>
                <button className={styles.point_button_button}>
                  <div className={styles.point_button_soon_button}>
                    今すぐ掲載
                  </div>
                </button>
              </div>
            </div>
          </section>
          <section
            className={`${styles.point_service} ${styles.publish_service}`}
          >
            <div className={styles.point_content}>
              <h3 className={styles.point_heading}>
                自社認知につながる質問回答機能
              </h3>
              <div className={styles.point_description}>
                社長からの疑問に答えることで自社サービスの認知につなげることができます。
              </div>
              <div className={styles.point_button}>
                <button className={styles.point_button_button}>
                  <div className={styles.point_button_soon_button}>
                    今すぐ掲載
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.point_video}>
              <ReactPlayer
                url="https://d32an07yf7y0nw.cloudfront.net/output/movie1team.m3u8"
                reload="auto"
                playing={true}
                autoPlay={true}
                muted={true}
                loop={true}
                style={{ objectFit: "cover" }}
                width="600px"
                height="auto"
                controls={false}
                playsinline={true}
              />
            </div>
          </section>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <section className={styles.point_sm_main_content}>
            <ReactPlayer
              url="https://d32an07yf7y0nw.cloudfront.net/output/movie3team.m3u8"
              reload="auto"
              playing={true}
              autoPlay={true}
              muted={true}
              loop={true}
              style={{ objectFit: "cover" }}
              width="100%"
              height="auto"
              controls={false}
              playsinline={true}
            />
            <div className={styles.point_sm_content}>
              <h3 className={styles.point_sm_heading}>
                ニーズにあわせ掲載し放題のサービス概要
              </h3>
              <div className={styles.point_sm_text}>
                サービスを担当するのがどのようなチームなのか、どんな課題が解決できるのかなどを顧客の多彩なニーズに合わせ発信することができます。
              </div>
              <div>
                <button className={styles.point_sm_content_button_normal}>
                  <div className={styles.point_sm_content_button_black}>
                    今すぐ掲載する
                  </div>
                </button>
              </div>
            </div>
          </section>
          <section className={styles.point_sm_main_content}>
            <ReactPlayer
              url="https://d32an07yf7y0nw.cloudfront.net/output/movie2team.m3u8"
              reload="auto"
              playing={true}
              autoPlay={true}
              muted={true}
              loop={true}
              style={{ objectFit: "cover" }}
              width="100%"
              height="auto"
              controls={false}
              playsinline={true}
            />
            <div className={styles.point_sm_content}>
              <h3 className={styles.point_sm_heading}>社長に直接提案</h3>
              <div className={styles.point_sm_text}>
                社長のニーズを基に直接メッセージを送ることができます。ニーズを基にメッセージを送ることができるので確度の高い提案が可能です。
              </div>
              <div>
                <button className={styles.point_sm_content_button_normal}>
                  <div className={styles.point_sm_content_button_black}>
                    今すぐ掲載する
                  </div>
                </button>
              </div>
            </div>
          </section>
          <section className={styles.point_sm_main_content}>
            <ReactPlayer
              url="https://d32an07yf7y0nw.cloudfront.net/output/movie1team.m3u8"
              reload="auto"
              playing={true}
              autoPlay={true}
              muted={true}
              loop={true}
              style={{ objectFit: "cover" }}
              width="100%"
              height="auto"
              controls={false}
              playsinline={true}
            />
            <div className={styles.point_sm_content}>
              <h3 className={styles.point_sm_heading}>
                自社認知につながる質問回答機能
              </h3>
              <div className={styles.point_sm_text}>
                社長からの疑問に答えることで自社サービスの認知につなげることができます。
              </div>
              <div>
                <button className={styles.point_sm_content_button_normal}>
                  <div className={styles.point_sm_content_button_black}>
                    今すぐ掲載する
                  </div>
                </button>
              </div>
            </div>
          </section>
        </MediaQuery>
      </section>
    </main>
  );
};

export default Top;
