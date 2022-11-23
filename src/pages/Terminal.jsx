import React from "react";

const Terminal = () => {
  return (
    <>
      <div className="container">
        <section className="main-constructor col-md-12 col-xl-8">
          <div className="main-constructor_chart">
            <div className="tradingview-clac" style={{ height: "500px" }}>
              <div
                className="tradingview-widget-container"
                style={{ height: "calc(100% - 32px)" }}
              >
                <div id="tradingview_442b1" style={{ height: "100%" }}>
                  <div
                    id="tradingview_7a2e4-wrapper"
                    style={{
                      position: "relative",
                      boxSizing: "content-box",
                      width: "100%",
                      height: "100%",
                      margin: "0 auto !important",
                      padding: "0 !important",
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Trebuchet MS", Roboto, Ubuntu, sans-serif',
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "transparent",
                        padding: "0 !important",
                      }}
                    >
                      <iframe
                        id="tradingview_7a2e4"
                        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_7a2e4&symbol=BINANCE%3A&interval=30&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Europe%2FRiga&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=wundertrading.com&utm_medium=widget_new&utm_campaign=chart&utm_term=BINANCE%3A#%7B%22page-uri%22%3A%22wundertrading.com%2Fen%2Ftrader%2Ftrading-terminal%22%7D"
                        style={{
                          width: "100%",
                          height: "100%",
                          margin: "0 !important",
                          padding: "0 !important",
                        }}
                        frameBorder={0}
                        allowTransparency="true"
                        scrolling="no"
                        allowFullScreen=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="loading-dots"
                  style={{ paddingTop: "20%", display: "none" }}
                >
                  <h2 className="title">Loading Trading View</h2>
                  <h2 className="dot one">.</h2>
                  <h2 className="dot two">.</h2>
                  <h2 className="dot three">.</h2>
                </div>
                <div
                  id="by-trading-view"
                  style={{ width: "100%" }}
                  className="tradingview-widget-copyright"
                >
                  <a
                    href="https://www.tradingview.com/symbols/BINANCE-BTCUSDT/"
                    rel="noopener"
                    target="_blank"
                  >
                    <span id="tradingview-pair-symbol" className="blue-text">
                      BINANCE: chart
                    </span>
                  </a>
                  by TradingView
                </div>
              </div>
            </div>
          </div>{" "}
        </section>
      </div>
    </>
  );
};

export default Terminal;
