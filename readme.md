## Buoi 1: What is typescript-->
#### What is typescript - typescript roadmap
#### Cai dat moi truong typescript
```
npm install -g typescript
<!-- Loi power shell -->
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
### Homework
#### 1. Typescript va Javascript giong va khach nhau nhu the nao
#### 2. Tai sao phai su dung Typescript va phu hop voi nhung du an nao
#### 3. Cach khai bao va cac kieu du lieu trong typescript


## Buổi 2: Typescript 
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


