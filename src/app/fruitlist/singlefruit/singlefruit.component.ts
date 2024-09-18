import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {
@Input()singleFruit = {
    name: "Apfel",
    img:"apple.png",
    description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
    genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
    stars: 2.3,
    reviews:[{name: "Kevin W.", text: "ist lecker"},{name: "Arne P.", text: "nicht so meins"}],
};

inputData="";

@Output()fruitname = new EventEmitter <string>();
//der neu erstellte Eventemitter bekommt auch einen Typ zugeordnet ( in dem Fall string, weil es ein Kommentar ist)

addComment(){
  this.fruitname.emit(this.inputData)
  //emit heißt, dass der eventemitter abgefeuert wird
  this.inputData ="";
  // Damit das Feld nach dem Absenden wieder geleert wird

}
}
