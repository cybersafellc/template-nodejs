import logger from "../src/applications/logging.js";

describe("winston", () => {
  it("test winston error", async () => {
    await logger.error("testing error");
  });
  it("test winston info", async () => {
    await logger.info("testing info");
  });
});
