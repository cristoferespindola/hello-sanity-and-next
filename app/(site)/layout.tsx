interface LayoutProps {
  children: React.ReactNode;
}

import "./styles.css";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import Menu from "./components/Menu/Menu";

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html style={{ fontSize: "16px" }} className="u-responsive-lg">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta
          name="page_type"
          content="np-template-header-footer-from-plugin"
        />
        <title>Projetoautismo</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://business-coaching.nicepage.io/nicepage.css?version=02ec861f-0d8c-4f94-8830-16318dd53166"
          media="screen"
        />
        <script
          className="u-script"
          type="text/javascript"
          src="https://static.nicepage.com/shared/assets/jquery-1.9.1.min.js"
        ></script>
        <script
          className="u-script"
          type="text/javascript"
          src="https://capp.nicepage.com/b43181ba4599830e1e030a5394a67d335e00b10c/nicepage.js"
        ></script>
        <meta name="generator" content="Nicepage 2.21.2, nicepage.com" />
        <link rel="stylesheet" href="./styles.css" />

        <link
          id="u-theme-google-font"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
        />
        <link
          id="u-page-google-font"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=heading-font|text-font"
        />
        <meta property="og:title" content="Page 11" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#d61728" />
      </head>
      <body className="u-body">
        <Menu />
        <header className="u-clearfix u-header" id="sec-5427">
          <div className="u-align-left u-clearfix u-sheet u-sheet-1">
            <div className="header-row">
              <Link href={"/"}>
                <Image
                  src="/images/logo_julia_cut.png"
                  alt=""
                  className=""
                  width="250"
                  height="176"
                />
              </Link>
              <h3 className="u-align-left-xs u-headline u-text u-text-1 title-site">
                <span className="text-color-1">P</span>rojeto
                <br />
                <span className="text-color-2">A</span>utismo
              </h3>
              <Image
                src="/images/calendario.png"
                alt=""
                className="calendar-img"
                width={170}
                height={170}
              />
            </div>
          </div>
        </header>
        <div className="RootLayout">{children}</div>
        <footer
          className="u-clearfix u-footer u-palette-4-dark-3"
          id="sec-b3de"
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
              <div className="u-gutter-0 u-layout">
                <div className="u-layout-row">
                  <div className="u-align-center-sm u-align-center-xs u-align-left-md u-align-left-xl u-container-style u-layout-cell u-left-cell u-size-100 u-size-100-md u-layout-cell-1">
                    <div className="u-container-layout u-container-layout-1">
                      {/* <!-- <div className="u-social-icons u-spacing-8 u-social-icons-1">
                    <Link className="u-social-url" target="_blank" href="">
                      <span
                        className="u-icon u-icon-circle u-social-facebook u-social-type-line u-icon-1"
                      >
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112.2 112.2"
                          style="width: 32px"
                        >
                          <use href="#svg-bc59"></use>
                        </svg>
                        <svg
                          x="0px"
                          y="0px"
                          viewBox="0 0 112.2 112.2"
                          style="enable-background: new 0 0 112.2 112.2"
                          space="preserve"
                          id="svg-bc59"
                          className="u-svg-content"
                        >
                          <g>
                            <path
                              d="M56.1,4c28.7,0,52.1,23.4,52.1,52.1s-23.4,52.1-52.1,52.1S4,84.8,4,56.1S27.4,4,56.1,4 M56.1,0C25.1,0,0,25.1,0,56.1 s25.1,56.1,56.1,56.1s56.1-25.1,56.1-56.1S87.1,0,56.1,0L56.1,0z"
                            ></path>
                            <path
                              d="M60.2,97H45c-1.1,0-2-0.9-2-2V60.3h-5.2c-1.1,0-2-0.9-2-2V45.4c0-1.1,0.9-2,2-2H43v-6.3c0-8.4,4.5-17.3,17.3-17.3l11.2,0 c1.1,0,2,0.9,2,2v12.5c0,1.1-0.9,2-2,2h-8.2c-0.8,0-1.2,0.3-1.2,1.5v5.6h9.3c0.6,0,1.1,0.2,1.5,0.7c0.4,0.4,0.6,1,0.5,1.5l-1.3,12.9 c-0.1,1-1,1.8-2,1.8h-8V95C62.2,96.1,61.3,97,60.2,97z M47,93h11.2V58.3c0-1.1,0.9-2,2-2h8.2l0.9-8.9h-9.1c-1.1,0-2-0.9-2-2v-7.6 c0-3.8,2.6-5.5,5.2-5.5h6.2v-8.5l-9.2,0C48,23.8,47,33.9,47,37.1v8.3c0,1.1-0.9,2-2,2h-5.2v8.9H45c1.1,0,2,0.9,2,2V93z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </Link>
                    <Link className="u-social-url" target="_blank" href="">
                      <span
                        className="u-icon u-icon-circle u-social-twitter u-social-type-line u-icon-2"
                      >
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112.2 112.2"
                          style="width: 32px"
                        >
                          <use href="#svg-33bc"></use>
                        </svg>
                        <svg
                          x="0px"
                          y="0px"
                          viewBox="0 0 112.2 112.2"
                          style="enable-background: new 0 0 112.2 112.2"
                          space="preserve"
                          id="svg-33bc"
                          className="u-svg-content"
                        >
                          <g>
                            <path
                              d="M56.1,4c28.7,0,52.1,23.4,52.1,52.1s-23.4,52.1-52.1,52.1S4,84.8,4,56.1S27.4,4,56.1,4 M56.1,0C25.1,0,0,25.1,0,56.1 s25.1,56.1,56.1,56.1s56.1-25.1,56.1-56.1S87.1,0,56.1,0L56.1,0z"
                            ></path>
                            <path
                              d="M45.8,89.2c-7.8,0-15.3-2.2-21.7-6.3c-0.8-0.5-1.1-1.5-0.8-2.3c0.3-0.9,1.1-1.4,2.1-1.3l0.3,0c1,0.1,1.8,0.2,2.7,0.2 c4.1,0,8-0.9,11.4-2.7c-4.3-1.6-7.7-5.1-9.2-9.7c-0.2-0.6-0.1-1.4,0.4-1.9c0.1-0.1,0.2-0.2,0.3-0.3c-3.4-2.8-5.6-7.1-5.6-11.8v-0.2 c0-0.7,0.4-1.4,1-1.7c0.3-0.2,0.7-0.3,1.1-0.3c-1.3-2.3-1.9-4.8-1.9-7.5c0-2.8,0.7-5.5,2.1-7.7c0.3-0.6,0.9-0.9,1.6-1 c0.7,0,1.3,0.2,1.7,0.7c5.9,7.3,14.5,11.9,23.8,13.1c0-0.3,0-0.6,0-0.9c0-8.5,6.9-15.4,15.4-15.4c3.9,0,7.7,1.4,10.4,4 c2.3-0.6,4.6-1.5,6.9-2.8c0.7-0.4,1.6-0.3,2.3,0.2c0.6,0.5,0.9,1.4,0.6,2.2c-0.3,1.1-0.8,2.1-1.4,3.1c0.1-0.1,0.3-0.1,0.4-0.2 c0.8-0.4,1.8-0.2,2.4,0.5c0.6,0.7,0.6,1.7,0.1,2.4c-1.7,2.5-3.8,4.8-6.2,6.8V49C86,68.8,71,89.2,45.8,89.2z M33.3,83 c4,1.4,8.2,2.2,12.5,2.2C68.5,85.2,82,66.8,82,49v-1.7c0-0.6,0.3-1.2,0.8-1.6c0.6-0.5,1.2-1,1.8-1.6c-0.5,0.1-1,0.2-1.6,0.2 c-0.9,0.1-1.8-0.5-2.1-1.3c-0.3-0.9,0.1-1.9,0.9-2.4c0.6-0.3,1.1-0.7,1.6-1.1c-0.9,0.3-1.8,0.5-2.7,0.7c-0.7,0.1-1.4-0.1-1.9-0.6 c-2.1-2.3-5.1-3.6-8.3-3.6c-6.3,0-11.4,5.1-11.4,11.4c0,1,0.1,1.8,0.3,2.7c0.1,0.6,0,1.2-0.4,1.7c-0.4,0.5-1,0.7-1.6,0.7 C47,52,37.3,47.6,30.3,40.3c-0.3,1-0.4,2-0.4,3c0,3.8,1.9,7.4,5.1,9.5c0.7,0.5,1.1,1.4,0.8,2.3c-0.3,0.9-1.1,1.4-2,1.4 c-1.2-0.1-2.5-0.3-3.6-0.6c1.1,4.1,4.5,7.4,8.8,8.2c0.9,0.2,1.6,1,1.6,1.9c0,0.9-0.6,1.8-1.5,2c-1.1,0.3-2.2,0.5-3.3,0.5 c2,3.1,5.5,5.1,9.3,5.1c0.8,0,1.6,0.6,1.9,1.4c0.3,0.8,0,1.7-0.7,2.2C42.5,80.3,38.1,82.2,33.3,83z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </Link>
                    <Link className="u-social-url" target="_blank" href="">
                      <span
                        className="u-icon u-icon-circle u-social-instagram u-social-type-line u-icon-3"
                      >
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112.2 112.2"
                          style="width: 32px"
                        >
                          <use href="#svg-8b82"></use>
                        </svg>
                        <svg
                          x="0px"
                          y="0px"
                          viewBox="0 0 112.2 112.2"
                          style="enable-background: new 0 0 112.2 112.2"
                          space="preserve"
                          id="svg-8b82"
                          className="u-svg-content"
                        >
                          <g>
                            <path
                              d="M56.1,4c28.7,0,52.1,23.4,52.1,52.1s-23.4,52.1-52.1,52.1S4,84.8,4,56.1S27.4,4,56.1,4 M56.1,0C25.1,0,0,25.1,0,56.1 s25.1,56.1,56.1,56.1s56.1-25.1,56.1-56.1S87.1,0,56.1,0L56.1,0z"
                            ></path>
                            <path
                              d="M76.3,41.9c-3.4,0-6.2-2.8-6.2-6.2c0-3.4,2.8-6.2,6.2-6.2s6.2,2.8,6.2,6.2C82.5,39.1,79.7,41.9,76.3,41.9z M76.3,33.5 c-1.2,0-2.2,1-2.2,2.2c0,1.2,1,2.2,2.2,2.2s2.2-1,2.2-2.2C78.5,34.5,77.5,33.5,76.3,33.5z"
                            ></path>
                            <path
                              d="M55.9,76C44.9,76,36,67.1,36,56.1c0-11,8.9-19.9,19.9-19.9c11,0,19.9,8.9,19.9,19.9C75.8,67.1,66.9,76,55.9,76z M55.9,40.2 c-8.8,0-15.9,7.1-15.9,15.9S47.1,72,55.9,72s15.9-7.1,15.9-15.9S64.7,40.2,55.9,40.2z"
                            ></path>
                            <path
                              d="M73.1,92.9H38.6c-10.8,0-19.5-8.8-19.5-19.6V38.8c0-10.8,8.7-19.5,19.5-19.5h34.5c10.8,0,19.5,8.7,19.5,19.5v34.6 C92.6,84.2,83.9,92.9,73.1,92.9z M38.6,23.3c-8.5,0-15.5,7-15.5,15.5v34.5c0,8.6,7,15.6,15.5,15.6h34.5c8.5,0,15.5-7,15.5-15.5V38.8 c0-8.5-7-15.5-15.5-15.5H38.6z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </Link>
                    <Link className="u-social-url" target="_blank" href="">
                      <span
                        className="u-icon u-icon-circle u-social-linkedin u-social-type-line u-icon-4"
                      >
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112.2 112.2"
                          style="width: 32px"
                        >
                          <use href="#svg-f0d6"></use>
                        </svg>
                        <svg
                          x="0px"
                          y="0px"
                          viewBox="0 0 112.2 112.2"
                          style="enable-background: new 0 0 112.2 112.2"
                          space="preserve"
                          id="svg-f0d6"
                          className="u-svg-content"
                        >
                          <g>
                            <path
                              d="M56.1,4c28.7,0,52.1,23.4,52.1,52.1s-23.4,52.1-52.1,52.1S4,84.8,4,56.1S27.4,4,56.1,4 M56.1,0C25.1,0,0,25.1,0,56.1 s25.1,56.1,56.1,56.1s56.1-25.1,56.1-56.1S87.1,0,56.1,0L56.1,0z"
                            ></path>
                            <path
                              d="M87.6,85.7H74.2c-1.1,0-2-0.9-2-2V62.2c0-7.1-3.5-7.1-4.8-7.1c-3.2,0-4.6,2.6-5,3.7c-0.1,0.3-0.3,1-0.3,2.5v22.5 c0,1.1-0.9,2-2,2H46.7c-0.5,0-1-0.2-1.4-0.6c-0.4-0.4-0.6-0.9-0.6-1.4c0-0.4,0.2-36.5,0-40.2c0-0.5,0.2-1.1,0.6-1.5 c0.4-0.4,0.9-0.6,1.4-0.6h13.4c1.1,0,2,0.9,2,2v0.4c2.3-1.9,5.5-3.3,10.1-3.3c10.8,0,17.4,7.7,17.4,20.1v23.1 C89.6,84.8,88.7,85.7,87.6,85.7z M76.2,81.7h9.4V60.6c0-10.3-4.9-16.1-13.4-16.1c-5.6,0-8.3,2.7-10.2,5.4c-0.3,0.8-1,1.4-1.9,1.4 c-0.7,0-1.4-0.4-1.8-1c-0.3-0.5-0.4-1.1-0.2-1.6v-3.3h-9.4c0.1,7.4,0,29.5,0,36.3h9.4V61.2c0-1.8,0.2-3,0.6-4 c1.5-3.8,4.8-6.1,8.7-6.1c2.6,0,8.8,1.1,8.8,11.1V81.7z M39.3,85.7H25.9c-1.1,0-2-0.9-2-2V43.4c0-1.1,0.9-2,2-2h13.4 c1.1,0,2,0.9,2,2v40.3C41.3,84.8,40.4,85.7,39.3,85.7z M27.9,81.7h9.4V45.4h-9.4V81.7z M32.6,39.9c-5.5,0-9.5-3.8-9.5-9 c0-5.2,4-9,9.6-9c5.5,0,9.4,3.7,9.5,8.9C42.2,36.1,38.1,39.9,32.6,39.9z M32.7,26c-3.3,0-5.6,2-5.6,5c0,2.9,2.2,5,5.4,5 c3.4,0,5.7-2,5.7-5C38.1,27.9,35.9,26,32.7,26z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </Link>
                  </div> */}
                      <p>
                        Esse site é de caráter informativo, com imagens
                        retiradas perante assinatura no Canva{" "}
                        <Link href="https://www.canva.com/" target="_blank">
                          (https://www.canva.com/)
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="u-align-center-sm u-align-center-xl u-align-right-md u-container-style u-layout-cell u-size-100 u-size-100-md u-layout-cell-2">
                    <div className="u-container-layout u-container-layout-2">
                      {/* <!-- <h2 className="u-text u-text-1">Vamos conversar? <br /></h2> */}
                    </div>
                  </div>
                  <div className="u-align-center-sm u-align-center-xs u-align-left-md u-align-right-lg u-align-right-xl u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-3">
                    {/* <!-- <div className="u-container-layout u-container-layout-3">
                  <a
                    href="#"
                    className="u-border-2 u-border-palette-1-base u-btn u-button-style u-text-body-alt-color u-btn-1"
                    >Contate-Nos</a
                  >
                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- <section className="u-backlink u-clearfix u-grey-80">
      <a
        className="u-link"
        href="https://nicepage.com/website-templates"
        target="_blank"
      >
        <span>Template</span>
      </Link>
      <p className="u-text">
        <span> criado com </span>
      </p>
      <a
        className="u-link"
        href="https://nicepage.com/website-builder"
        target="_blank"
      >
        <span>Nicepage</span> </a
      >.
    </section> */}
      </body>
    </html>
  );
};

export default RootLayout;
