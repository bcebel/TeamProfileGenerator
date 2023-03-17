const EmployeeTest = require("../lib/Employee.js");

// A testing suite for Arithmetic is created.
describe("EmployeeTest", () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe("name", () => {
    it("should create new instance of employee", () => {
      const name = "Brian";
      const testeroonie = new EmployeeTest("Brian", 123, "bce@bce.com");
      expect(testeroonie.name).toMatch(name);
    });
  });
});
