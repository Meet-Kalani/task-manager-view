export interface Task {
  _id: string;
  title: string;
  description?: string;
  status: string[];
  priority: string[];
  due_date?: Date;
  assigned_to?: string[];
  created_by?: string;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
