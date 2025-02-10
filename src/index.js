const runSDK = ({
  account_id,
  asst_id,
  params={},
  width,
  height,
  env
}) => {
  if (account_id && asst_id ) {
    const envUrl = env === 'production' ? 'https://dashboard.dacoidchat.com' : (env === 'local' ? 'http://localhost:5173':'https://chatbot-frontend-i8ao.vercel.app')
    const baseUrl =  `${envUrl}/embed/${account_id}/${asst_id}`
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
    iframe.style.zIndex = '100';
    iframe.style.border = '0';
    iframe.style.overflowY = 'auto';

    // Check screen size
    const isLaptop = window.matchMedia('(min-width: 1024px)').matches;

    if (isLaptop) {
      // Desktop layout
      iframe.style.position = 'fixed';
      iframe.style.bottom = '10px';
      iframe.style.right = '10px';
      iframe.style.width = width ? `${width}px` : '360px';
      iframe.style.height = height ? `${height}px` : '700px';
    } else {
      // Mobile layout
      iframe.style.position = 'fixed';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
    }

    document.body.appendChild(iframe);
  } else {
    console.error("Account and Assistant id's are required.");
    return null;
  }

};

window.dacoidSDK = {
  init: runSDK,
};
