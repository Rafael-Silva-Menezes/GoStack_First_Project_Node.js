import { startOfHour } from 'date-fns';

import Query from '../models/QueryModel';
import QueryRepository from '../repositories/QueryRepository';

interface Request {
  doctor: string;
  date: Date;
  type: string;
  value: number;
}

class CreateQueryService {
  private queryRepository: QueryRepository;

  constructor(queryRepository: QueryRepository) {
    this.queryRepository = queryRepository;
  }

  public execute({ doctor, date, type, value }: Request): Query {
    const queryDate = startOfHour(date);

    const findQueryInSameDate = this.queryRepository.findByDate(queryDate);

    if (findQueryInSameDate) {
      throw Error('This query is already booked');
    }
    const query = this.queryRepository.create({
      doctor,
      date: queryDate,
      type,
      value,
    });
    return query;
  }
}

export default CreateQueryService;
