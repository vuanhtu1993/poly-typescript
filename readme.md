### Typescript 
TypeScript is JavaScript with syntax for types.
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## Static type-checker
## Compiler
```
tsc greeting.ts -w
```

## I. DataType
### 1. Primitive string/number/boolean
### 2. Arrays Primitive[] Array<Primitive>
### 3. Any
### 4. Explicit and Implicit
### 5. Function
### 6. Object types {}
#### Optional Properties ?
### 7. Union type Primitive|Primitive|Primitive
```javascript
  const unionFunction = (a: string | number) => {
    if(typeof a == "string")
    console.log(a.toLowerCase());
    
  }
```
### 8. Null and Undefined
```javascript
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

```
#### Non-null assertion !
```javascript
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```


