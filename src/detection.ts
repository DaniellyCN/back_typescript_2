function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
                 
    }
  }



type Fihs = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fihs | Bird | Human) {
  if ("swim" in animal) {
    animal;
  } else {
    animal;
  }
}