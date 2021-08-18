import { useState } from "react";
import styles from "./Header.module.css";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  const stateChangeHandler = (newState: any) => {
    setMenuOpenState(newState.isOpen);
  };

  if (menuOpenState === true) {
    document.body.setAttribute("style", "overflow: hidden;");
  } else {
    document.body.removeAttribute("style");
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a className={styles.header_a} href="/about/link">
          <img
            className={styles.header_logo}
            src="https://s3-ap-northeast-1.amazonaws.com/team-link-lp-picture/IMG/logoMain.png"
            alt="logo"
          />
        </a>
        <MediaQuery minWidth={886}>
          <ul className={styles.header_ul}>
            <li className={styles.header_li}>
              <a className={styles.tag} href="/about/features">
                機能
              </a>
            </li>
            <li className={styles.header_li}>
              <a href="/document" target="_blank" className={styles.tag}>
                お役立ち資料
              </a>
            </li>
          </ul>
        </MediaQuery>
      </div>
      <nav className={styles.header_nav}>
        <MediaQuery minWidth={886}>
          <ul className={styles.header_ul}>
            <li className={styles.header_li}>
              <a href="" className={styles.tag_left}>
                パートナー企業の方
                <br />
                はこちら
              </a>
            </li>

            <li className={styles.header_li}>
              <a href="" className={styles.btn_white}>
                ログイン
              </a>
            </li>
            <li className={styles.header_li}>
              <a href="" className={styles.btn_blue}>
                無料で掲載
              </a>
            </li>
          </ul>
        </MediaQuery>
        <MediaQuery maxWidth={886}>
          <StyledMenu>
            <Menu
              right
              isOpen={menuOpenState}
              burgerButtonClassName={"open_button"}
              customBurgerIcon={
                <>
                  {menuOpenState ? (
                    <CloseIcon style={{ fontSize: "40", zIndex: 2000 }} />
                  ) : (
                    <MenuIcon style={{ fontSize: "40", zIndex: 2000 }} />
                  )}
                </>
              }
              onStateChange={(state) => stateChangeHandler(state)}
            >
              <ul className={styles.header_ul}>
                <li className={styles.header_li}>
                  <a className={styles.tag} href="/about/features">
                    機能
                  </a>
                </li>
                <li className={styles.header_li}>
                  <a href="/document" target="_blank" className={styles.tag}>
                    お役立ち資料
                  </a>
                </li>
                <li className={styles.header_li}>
                  <a href="" className={styles.tag}>
                    パートナー企業の方はこちら
                  </a>
                </li>
                <li className={styles.header_li}>
                  <a href="" className={styles.btn_white}>
                    ログイン
                  </a>
                </li>
                <li className={styles.header_li}>
                  <a href="" className={styles.btn_blue}>
                    無料で掲載
                  </a>
                </li>
              </ul>
              <a className={styles.burger_a} href="/about/link">
                <img
                  className={styles.header_logo}
                  src="https://s3-ap-northeast-1.amazonaws.com/team-link-lp-picture/IMG/logoMain.png"
                  alt="logo"
                />
              </a>
            </Menu>
          </StyledMenu>
        </MediaQuery>
      </nav>
    </header>
  );
};

export default Header;

const StyledMenu = styled.div`
  .bm-overlay {
    top: 0 !important;
    left: 0 !important;
  }

  .bm-menu {
    overflow: hidden !important;
  }

  .bm-burger-button {
    position: fixed !important;
    z-index: 1200 !important;
    top: 15px;
    right: 20px;
  }

  .bm-menu-wrap {
    top: 0 !important;
  }

  .bm-item-list {
  }

  #react-burger-menu-btn {
    top: 0 !important;
    left: auto !important;
    right: 0 !important;
    width: 40px !important;
    height: 40px !important;
    z-index: 2000 !important;
    background-color: white;
  }
`;
