const assert = require("assert");

function add(a, b) {
  return a + b;
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Simple test
assert.strictEqual(add(4, 3), 7, "4 + 3 should be 7");
assert.strictEqual(
  fibonacci(50),
  12586269025,
  "Fibonacci of 50 should be 12586269025",
);

console.log("All tests passed!");
