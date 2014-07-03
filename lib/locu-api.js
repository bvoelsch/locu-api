/*!
 * locu-api
 * Copyright(c) 2014 Brian Voelschow <bvoelsch@gmail.com>
 * MIT Licensed
 */

/**
 * Dependencies
 */
var https = require('https');
/**
 * Expose Locu-API
 */

var LocuAPI = function (key, options) {
  if(!options) options = {};
  options = _.defaults(options, {
    server : 'https://api.locu.com',
    version : 'v2',
    path : 'venue/search',
    fields : [],
    venue_queries : [],
    menu_item_quries : [],
    limit : 200,
  });
};
