import React, { useEffect, useRef } from 'react';

const TradingViewWidgetThree: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(true); // To track component mount state

  useEffect(() => {
    // Cleanup function to be executed on component unmount
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (containerRef.current && isMounted.current) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
        {
          "symbol": "COINBASE:BTCUSD",
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "dateRange": "12M",
          "colorTheme": "light",
          "isTransparent": false,
          "autosize": true,
          "largeChartUrl": "",
          "chartOnly": false
        }
      `;
      containerRef.current.appendChild(script);
    }
  }, [isMounted]); // Add isMounted to dependency array

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidgetThree;
