
import axios from 'axios'

const user = {
  name: "tpa",
  id: 1,
  organization: 1,
  location: 22,
  group: 12,
  timesheet: []
};


let phone = new RegExp('+7')


interface Address {
  id: number
  area?: number
  short?: string
  full?: string
}

interface User {
  id: number
  username?: string
  phone?: string
  firstName: string
  lastName: string
  middleName?: string
  providers?: []
  role: string
}


async function getUser(id: number) {
  let request = await fetch('https://it.anabasis.pro/api/users/${id}')
}

function createUser() {

}
 
 
function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)

 // const newUser = { ...user, ...update }
  //saveUser(id, newUser)

}
 



class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const fuser: User = new UserAccount("Murphy", 1);

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;


function getLength(obj: string | string[]) {
  return obj.length;
}

function wrapInArray(obj: string | string[]) {

  if (typeof obj === "string") {
    return [obj];
            // (parameter) obj: string
  }
  return obj;
}


interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
 
// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;
 
// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();
 

