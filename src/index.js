const runSDK = ({
  account_id,
  asst_id,
  params={},
  width,
  height,
  envUrl
}) => {
  if (account_id && asst_id ) {

    //const envUrl = env === 'production' ? 'https://beta.dacoidchat.com' : (env === 'local' ? 'http://localhost:5173':'https://chatbot-frontend-i8ao.vercel.app')
    const baseUrl =  `${envUrl || 'https://beta.dacoidchat.com'}/embed/${account_id}/${asst_id}`
    // Helper function to format parameters as a query string
    const formatParams = (paramObj) => {
      return Object.keys(paramObj)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramObj[key])}`)
        .join('&');
    };

    // Determine the iframe URL based on provided params or current URL parameters
    let iframeUrl;
    if (Object.keys(params).length > 0) {
      // Use provided params
      iframeUrl = `${baseUrl}?${formatParams(params)}`;
    } else {
      // Use current URL parameters if no params are provided
      const currentUrlParams = window.location.search;
      iframeUrl = currentUrlParams ? `${baseUrl}${currentUrlParams}` : baseUrl;
    }

    const iframe = document.createElement('iframe');
    iframe.src = iframeUrl;
    iframe.style.zIndex = '1000000000';
    iframe.style.border = '0';
    iframe.style.overflowY = 'auto';

    // Check screen size
    const isLaptop = window.matchMedia('(min-width: 1024px)').matches;

    // Desktop layout
    iframe.style.position = 'fixed';
    iframe.style.bottom = '10px';
    iframe.style.right = '10px';
    iframe.style.width = width ? `${width}` : '360px';
    iframe.style.height = height ? `${height}` : '700px';
    if (!isLaptop) {
      // Mobile layout
      iframe.style.position = 'fixed';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
    }

    document.body.appendChild(iframe);

    // Wait for the iframe to load, then inject a script into its head
    iframe.onload = () => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDoc) {
          const script = iframeDoc.createElement('script');
          script.type = 'text/javascript';
          script.innerHTML = `
            console.log('Injected script running inside iframe');
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "qgj5g4g0d2");
          `;
          iframeDoc.head.appendChild(script);
        }
      } catch (error) {
        console.error("Failed to inject script inside iframe:", error);
      }
    };

  } else {
    console.error("Account and Assistant id's are required.");
    return null;
  }

};

window.dacoidSDK = {
  init: runSDK,
};
