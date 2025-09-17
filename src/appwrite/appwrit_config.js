import { Client, Account, ID, Functions, Databases } from "appwrite";

const client = new Client()
  .setEndpoint(
    import.meta.env.VITE_APPWRITE_ENDPOINT || "https://fra.cloud.appwrite.io/v1"
  )
  .setProject(
    import.meta.env.VITE_APPWRITE_PROJECT_ID || "68c89239001252c2e9e2"
  );

const account = new Account(client);

export { client, account, ID };
