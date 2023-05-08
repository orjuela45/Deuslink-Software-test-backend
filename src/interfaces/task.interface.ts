export interface TaskInterface{
  title: string,
  description?: string,
  tags?: string[],
  date: Date,
  pinned: boolean
  icon?: string 
}