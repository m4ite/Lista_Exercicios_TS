import { Veiculo } from './Veiculo';

export class Carro implements Veiculo { // herda de veículo

  // atributos
  modelo: string;
  velocidade: number;

  constructor(modelo: string) { //"função" para criar um carro
    this.modelo = modelo;
    this.velocidade = 0;
  }

  //métodos
  acelerar(): void {
    this.velocidade += 10; // adiciona 10 na velocidade do carro
    console.log(`${this.modelo} acelerou para ${this.velocidade} km/h.`);
  }

  frear(): void {
    this.velocidade = Math.max(this.velocidade - 10, 0); // tira 10 da velocidade, mas o Math.max faz com que não fique menor do que 0
    console.log(`${this.modelo} reduziu para ${this.velocidade} km/h.`);
  }
}