export class ExerciseModel {
  name: string;
  displayName: string;
  date?: Date;
  completed: boolean;

  constructor(
    name: string,
    displayName: string,
    date: Date = null,
    completed: boolean = false) {

    this.name = name;
    this.displayName = displayName;
    this.date = date;
    this.completed = completed
  }
}
