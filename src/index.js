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
    

    // Function to apply correct styles based on screen size
    const applyResponsiveStyles = () => {
      if (window.innerWidth < 1024) {
        // Mobile layout
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
      } else {
        // Desktop layout
        iframe.style.width = width ? `${width}` : '360px';
        iframe.style.height = height ? `${height}` : '700px';
      }
    };

    // Apply styles initially and on window resize
    applyResponsiveStyles();
    window.addEventListener('resize', applyResponsiveStyles);

    document.body.appendChild(iframe);

    

  } else {
    console.error("Account and Assistant id's are required.");
    return null;
  }

};

window.dacoidSDK = {
  init: runSDK,
};
