class Raindrops {

  convert(input: number) {
    let output = "";

    if (input % 3 == 0) output+= "Pling";
    if (input % 5 == 0) output+= "Plang";
    if (input % 7 == 0) output+= "Plong";
    
    return output == "" ? input.toString() : output;
  }

}

export default Raindrops
