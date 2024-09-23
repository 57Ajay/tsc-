export function gen<T>(arg: T){
    return arg;
}

//both are similer
export function arr_1<T>(arr: T[]){
    return arr[0];
}

export function arr_2<T>(arr: Array<T>){
    return arr;
}