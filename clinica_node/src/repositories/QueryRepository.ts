import { isEqual } from 'date-fns';
import QueryModel from '../models/QueryModel';

interface CreateQueryDTO {
  doctor: string;
  date: Date;
  type: string;
  value: number;
}
class QueryRepository {
  private allMedicalQuerys: QueryModel[];

  constructor() {
    this.allMedicalQuerys = [];
  }

  public all(): QueryModel[] {
    return this.allMedicalQuerys;
  }

  public findByDate(date: Date): QueryModel | null {
    const findQuery = this.allMedicalQuerys.find(query =>
      isEqual(date, query.date),
    );

    return findQuery || null;
  }

  public create({ doctor, date, type, value }: CreateQueryDTO): QueryModel {
    const medicalQuery = new QueryModel({ doctor, date, type, value });

    this.allMedicalQuerys.push(medicalQuery);

    return medicalQuery;
  }
}

export default QueryRepository;
