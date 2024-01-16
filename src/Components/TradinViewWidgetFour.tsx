import React, { useEffect, useRef } from 'react';

const TradinViewWidgetFour: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
        {
          "width": 1000,
          "height": 490,
          "defaultColumn": "overview",
          "screener_type": "crypto_mkt",
          "displayCurrency": "USD",
          "colorTheme": "light",
          "locale": "en"
        }
      `;
      containerRef.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      const widgetContainer = containerRef.current;
      if (widgetContainer) {
        while (widgetContainer.firstChild) {
          widgetContainer.removeChild(widgetContainer.firstChild);
        }
      }
    };
  }, []);

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

export default TradinViewWidgetFour;
