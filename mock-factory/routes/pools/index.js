const { buildResponse, PARAMS, PARAM_DICTIONARY, openJsonFile } = require('../../utils');


const ROUTES = {
  '{authority}/pools': {
    name: 'Get pools',
    pathParameters: {
      [PARAMS.BASE_AUTHORITY]: PARAM_DICTIONARY[PARAMS.BASE_AUTHORITY],
      [PARAMS.AUTHORITY]: PARAM_DICTIONARY[PARAMS.AUTHORITY],
    },
    times: {
      'unlimited': true
    },
    callback: function (request) {
      console.log('GET pools', { request });
      if (request.method !== 'GET') {
        return buildResponse({ data: { error: 'Method not allowed' }, statusCode: 405 })
      }
      const data = openJsonFile('pools/get-pools', 'default');
      return buildResponse({ data })
    }
  },
  '{authority}/pools/{poolIds}': {
    name: 'Get pool',
    pathParameters: {
      [PARAMS.BASE_AUTHORITY]: PARAM_DICTIONARY[PARAMS.BASE_AUTHORITY],
      [PARAMS.AUTHORITY]: PARAM_DICTIONARY[PARAMS.AUTHORITY],
      [PARAMS.POOL_ID]: PARAM_DICTIONARY[PARAMS.POOL_ID],
    },
    times: {
      'unlimited': true
    },
    callback: function (request) {
      console.log('GET pool', { request });
      if (request.method !== 'GET') {
        return buildResponse({ data: { error: 'Method not allowed' }, statusCode: 405 })
      }
      const data = openJsonFile('pools/get-pools-by-id', 'default');
      return buildResponse({ data })
    }
  },
  '{authority}/pools/{poolIds}/recipient-access': {
    name: 'Get pool recipient access',
    pathParameters: {
      [PARAMS.BASE_AUTHORITY]: PARAM_DICTIONARY[PARAMS.BASE_AUTHORITY],
      [PARAMS.AUTHORITY]: PARAM_DICTIONARY[PARAMS.AUTHORITY],
      [PARAMS.POOL_ID]: PARAM_DICTIONARY[PARAMS.POOL_ID],
    },
    times: {
      'unlimited': true
    },
    callback: function (request) {
      console.log('GET pool recipient access', { request });
      if (request.method !== 'GET') {
        return buildResponse({ data: { error: 'Method not allowed' }, statusCode: 405 })
      }
      const data = openJsonFile('pools/get-pool-access', 'default');
      return buildResponse({ data })
    }
  },
}


module.exports = ROUTES
