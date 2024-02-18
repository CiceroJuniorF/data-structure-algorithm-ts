import { DecimalToBinary } from "./DecimalToBinary";

test("Deve converte o numero 10 para binário 1010 usando a classe Stack", () =>{
    expect(DecimalToBinary.run(10)).toEqual("1010");
} );

test("Deve converte o numero 5000 para binário 1001110001000 usando a classe Stack", () =>{
    expect(DecimalToBinary.run(5000)).toEqual("1001110001000");
} );