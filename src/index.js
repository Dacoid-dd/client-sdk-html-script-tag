const runSDK = ({
  account_id,
  asst_id,
  params={},
  width,
  height,
  envUrl
}) => {
  if (account_id && asst_id ) {

    // Use the provided envUrl if available, otherwise construct from current location
    let baseUrl;
    if (envUrl) {
      baseUrl = `${envUrl}/embed/${account_id}/${asst_id}`;
    } else {
      // Fallback to current domain
      const currentDomain = window.location.origin;
      baseUrl = `${currentDomain}/embed/${account_id}/${asst_id}`;
    }
    
    // Helper function to format parameters as a query string
    const formatParams = (paramObj) => {
      return Object.keys(paramObj)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramObj[key])}`)
        .join('&');
    };

    const isExternalEmbed = true;
    
    // Add isExternalEmbed to params
    const allParams = {
      ...params,
      isExternalEmbed: isExternalEmbed ? "true" : "false"
    };

    // Determine the iframe URL based on provided params or current URL parameters
    let iframeUrl;
    if (Object.keys(allParams).length > 0) {
      // Use provided params
      iframeUrl = `${baseUrl}?${formatParams(allParams)}`;
    } else {
      // Use current URL parameters if no params are provided
      const currentUrlParams = window.location.search;
      iframeUrl = currentUrlParams ? `${baseUrl}${currentUrlParams}` : baseUrl;
    }

    console.log("Loading iframe from:", iframeUrl);
    console.log("Is external embed:", isExternalEmbed);

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
