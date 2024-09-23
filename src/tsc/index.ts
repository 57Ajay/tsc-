import { gen, arr_1, arr_2 } from "./generic";

const user = {
    name: "Ajay",
    age: 21
}

enum Direction {
    up = "up",
    down = "down",
    left = "left",
    right = "right"
}

const goSome = (dir: Direction) => {
    return dir.toString();
};

export const main = (): any[] => {
    return [
        1, user.age, user.name, goSome(Direction.up), gen(`Hello! ${user.name}`).toUpperCase(), gen([1,2,3,4,5]), arr_1(["Name", 1]), arr_2(["Name", 1])
    ]
}
