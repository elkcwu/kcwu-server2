module.exports = {
	express: {
    maxRequestSize: 52428800
  },
	appSettings: {
    node_env: 'local',
    product: 'lcs',
    version: '1',
    enableRetry: true,
    enableRetryNotificationEngine: false,
    enableRetryRerunSteps: false,
    httpTimeout:20000,
    port: 8080,
    clusterize: {
      cpuLimit: 1
    }
  }
//  	lpsRouteURL: {
//     url:'http://dev.api.realtor.com/lead/v4/create'
//   },
  
//   lcsRouteURL: {
//     url:'http://qa.leadcapture.realtor.com/leads/create'
//   },
//   lpsRouting : require('./lpsRouting/lpsRoute_dev.json')
};
