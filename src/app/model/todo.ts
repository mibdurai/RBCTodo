export class Todo {
    id: Number;
    task: string;
    completed: boolean;
    dueDate: Date; // nullable

    constructor() {
        this.task = '';
        this.completed = false;      
    }
}
