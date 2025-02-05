
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
            // Create the iframe element
            const iframe = document.createElement('iframe');
            iframe.src = iframeUrl;
            iframe.style.position = 'fixed';
            iframe.style.bottom = '10px';
            iframe.style.right = '10px';
            iframe.style.height = height || '100%';
            iframe.style.maxHeight = '600px';
            iframe.style.overflowY = 'auto';
            iframe.style.width = width || 'auto';
            iframe.style.zIndex = '100';
            iframe.frameBorder = '0';

            // Append the iframe to the body
            document.body.appendChild(iframe);
  } else {
    console.error(
      "Account and Assistant id's are required."
    );
    return null;
  }

};

window.dacoidSDK = {
  init: runSDK,
};
