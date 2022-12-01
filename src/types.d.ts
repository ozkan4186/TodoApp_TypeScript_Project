interface TodoType{
  task:string,
  id:string|number,
  isDone:boolean
}
type AddFn=(text:string)=>void
type DeleteFn=(id:string|number)=>void
type ToogleFn=(item:TodoType)=>void