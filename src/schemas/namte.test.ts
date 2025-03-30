import { nameSchema } from "./name";
import {describe, it, expect} from 'vitest';

describe("nameSchema", () => {
  it("英語、日本、数字が入力できる", () => {
    const validNames = [
      { firstName: "John", lastName: "Doe" },
      { firstName: "Jane", lastName: "Smith" },
      { firstName: "あいうえお", lastName: "かきくけこ" }, // Japanese characters
      { firstName: "John123", lastName: "Doe456" }, // Alphanumeric
    ];

    validNames.forEach((name) => {
      expect(nameSchema.safeParse(name).success).toBe(true);
    });
  });

  it("未入力や空のとき、エラーにする", () => {
    const invalidNames = [
      { firstName: "", lastName: "Doe" }, // Empty first name
      { firstName: "John", lastName: "" }, // Empty last name
      { firstName: null, lastName: "Doe" }, // Null first name
      { firstName: "John", lastName: null }, // Null last name
      { firstName: undefined, lastName: "Doe" }, // Undefined first name
      { firstName: "John", lastName: undefined }, // Undefined last name
    ];

    invalidNames.forEach((name) => {
      expect(nameSchema.safeParse(name).success).toBe(false);
    });
  });
})