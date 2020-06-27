import { uuid } from 'uuidv4';

class QueryModel {
  id: string;

  doctor: string;

  date: Date;

  type: string;

  value: number;

  constructor({ doctor, date, type, value }: Omit<QueryModel, 'id'>) {
    this.id = uuid();
    this.doctor = doctor;
    this.date = date;
    this.type = type;
    this.value = value;
  }
}

export default QueryModel;
