import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

/**
 * @title Drag&Drop connected sorting group
 */
@Component({
  selector: "app-drag",
  templateUrl: "./drag.component.html",
  styleUrls: ["./drag.component.scss"]
})
export class DragComponent {
  todo = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];

  done = ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"];

  drop (event: CdkDragDrop<string[]>) {
    console.log(event.currentIndex);
    console.log(event.previousIndex);
    console.log(event.container.data);
    console.log(event.previousContainer.data);
    
    this.done.push(this.todo[event.previousIndex]);
    this.todo.splice(event.previousIndex, 1);
    // this.todo = this.todo.splice(1, event.currentIndex);
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex
    //   );
    // } else {
    //   transferArrayItem(
    //     event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex
    //   );
    // }
  }
}
