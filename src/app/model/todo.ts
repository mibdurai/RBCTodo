export class Todo {
    id: Number;
    task: string;
    completed: boolean;
    duedate: Date; 

    constructor() {
        this.task = '';
        this.completed = false;      
    }
}
