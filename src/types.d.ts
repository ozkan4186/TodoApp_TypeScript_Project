interface TodoType{
  task:string,
  id:string|number,
  isDone:boolean
}
type AddFn=(text:string)=>void