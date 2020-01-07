export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_6UJqzvdVspSDWuI3slAaztJn00sO3ivj0p",
    s3: {
      REGION: "us-east-1",
      BUCKET: "artcenter-app-api-dev-attachmentsbucket-1u4057m8vrc05"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://p9gor2zuue.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_554AoiVWT",
      APP_CLIENT_ID: "2eq3vvtljbbicep690evgk1th9",
      IDENTITY_POOL_ID: "us-east-1:e8bf2b1b-592f-4352-8f77-e612bd5158e9"
    }
};