export interface TaskInterface{
  title: string,
  description?: string,
  tags?: string[],
  date: Date,
  time: Date,
  pinned: boolean
  icon?: string 
}