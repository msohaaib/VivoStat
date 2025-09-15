/* eslint-disable no-undef */
import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint(
    process.env.REACT_APP_APPWRITE_ENDPOINT ||
      "https://fra.cloud.appwrite.io/v1"
  ) // Your Appwrite endpoint
  .setProject(
    process.env.REACT_APP_APPWRITE_PROJECT_ID || "68c89239001252c2e9e2"
  ); // Your Project ID from the dashboard URL

const account = new Account(client);

export { client, account, ID };
