import { findServer } from "./findServer";

const run = async () => {
  try {
    const server = await findServer();
    console.log("Online server with the lowest priority:", server);
  } catch (error) {
    console.error(error);
  }
};

run();
