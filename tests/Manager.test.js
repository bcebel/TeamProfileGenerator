const ManagerTest = require("../lib/Manager.js");

// A testing suite for Arithmetic is created.
describe("ManagerTest", () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe("name", () => {
    it("should create new instance of employee", () => {
      const name = 111;
      const testeroonie2 = new ManagerTest("Brian", 123, "bce@bce.com", 111);
      expect(testeroonie2.officeNum).toEqual(name);
    });
  });
});
