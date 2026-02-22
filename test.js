const assert = require("assert");

function add(a, b) {
  return a + b;
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Simple test
assert.strictEqual(add(2, 3), 5, "2 + 3 should be 5");
assert.strictEqual(
  fibonacci(30),
  832040,
  "The 30th Fibonacci number should be 832040",
);

console.log("All tests passed!");
