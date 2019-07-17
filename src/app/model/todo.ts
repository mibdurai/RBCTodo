export class Todo {
    id: Number;
    task: string;
    completed: boolean;
    duedate: Date; // nullable

    constructor() {
        this.task = '';
        this.completed = false;      
    }
}
