// Generic
// Là một tính năng cho phép hàm, class và interface 
// có thể sử dụng cho nhiều kiểu dữ liệu khác nhau

// Generic for function
function showStringData(a: string): string {
    return a
}

function showNumberData(a: number): number{
    return a
}

function showData<T>(a: T): T {
    return a
}

// Generic for map
function anhtu_map<T, U>(arr: T[], callback: (value: T, index: number, array: T[]) => U): U[] {
    const result: U[] = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }