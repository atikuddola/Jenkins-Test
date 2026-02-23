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
assert.strictEqual(fibonacci(48), 4807526976, "The 48th Fibonacci number should be 4807526976");

console.log("All tests passed!");
