function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(5, 5); // Correct usage

function addString(a: string, b: string): string {
  return a + b;
}

const result2 = addString("hello", " world"); // Correct Usage
console.log(result1, result2); 