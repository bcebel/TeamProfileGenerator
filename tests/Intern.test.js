const InternTest = require("../lib/Intern.js");

// A testing suite for Arithmetic is created.
describe("InternTest", () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe("name", () => {
    it("should create new instance of employee", () => {
      const name = "bootcamp";
      const testeroonie2 = new InternTest(
        "Brian",
        123,
        "bce@bce.com",
        "bootcamp"
      );
      expect(testeroonie2.school).toMatch(name);
    });
  });
});
