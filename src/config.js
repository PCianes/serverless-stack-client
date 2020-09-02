const dev = {
  STRIPE_KEY: "pk_test_dWFGbfBf1OkmSoNS8QAu1R7a00HSKb10om",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-10tjayp9ockit",
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://api.updaterpress.es/dev",
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_rWO8likcC",
    APP_CLIENT_ID: "5g5j2afh2ilqv88lihiud9huk2",
    IDENTITY_POOL_ID: "eu-west-1:ad6b7a87-9a8b-4459-8022-c8234301c61c",
  },
};

const prod = {
  STRIPE_KEY: "pk_test_dWFGbfBf1OkmSoNS8QAu1R7a00HSKb10om",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1s4te7fwgikkz",
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://api.updaterpress.es/prod",
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_iEI265Gwz",
    APP_CLIENT_ID: "5dbqf292j36kevd4tsfngepc7u",
    IDENTITY_POOL_ID: "eu-west-1:f2df67b2-d6dc-4b09-bc1e-3dcef5c3795b",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
