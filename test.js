
const fs = require("fs");
const assert = require("assert");

const html = fs.readFileSync("index.html", "utf8");

assert.ok(html.length > 0, "HTML file should not be empty");

assert.ok(html.includes("<!DOCTYPE html>"), "DOCTYPE should exist");

assert.ok(html.includes("<title>"), "Page title should exist");

assert.ok(html.includes("<body"), "Body element should exist");

assert.ok(html.includes("XYZ Company"), "Company name should exist");

console.log("All 5 tests passed successfully!");
