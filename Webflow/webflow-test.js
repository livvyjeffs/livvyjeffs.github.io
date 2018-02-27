const Webflow = require('webflow-api');

// Initialize the API
const api = new Webflow({ token: 'api-token' });

// Fetch a site
api.site({ siteId: '580e63e98c9a982ac9b8b741' }).then(site => console.log(site));