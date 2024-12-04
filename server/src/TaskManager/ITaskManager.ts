
export interface ITaskManager {
    addTask(name: string, content: string): boolean;
    getTasks(): Object;
    getTasksByName(names: string): Array<Object>
}