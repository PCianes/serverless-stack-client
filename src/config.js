export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-uploads-demodev",
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://4q2a7sdak4.execute-api.eu-west-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_ZYJJFaQMt",
    APP_CLIENT_ID: "5rm2hhbn60hlutj4b6ja0uibvt",
    IDENTITY_POOL_ID: "eu-west-1:320a1935-d692-440c-a339-767d84b00836",
  },
};
