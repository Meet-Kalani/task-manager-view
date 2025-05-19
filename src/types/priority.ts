export interface Priority {
  _id: string;
  label: string;
  description?: string;
  weight?: number;
  labelColor?: string;
  createdAt: Date;
  updatedAt: Date;
}
