const EngineerTest = require("../lib/Engineer.js");

// A testing suite for Arithmetic is created.
describe("EngineerTest", () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe("name", () => {
    it("should create new instance of employee", () => {
      const name = "githubname";
      const testeroonie2 = new EngineerTest(
        "Brian",
        123,
        "bce@bce.com",
        "githubname"
      );
      expect(testeroonie2.GitHub).toMatch(name);
    });
  });
});
