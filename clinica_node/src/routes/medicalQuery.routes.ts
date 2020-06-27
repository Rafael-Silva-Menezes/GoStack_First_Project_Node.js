import { Router } from 'express';
import { parseISO } from 'date-fns';

import QueryRepository from '../repositories/QueryRepository';
import CreateQueryService from '../services/CreateQueryService';

const queryRouter = Router();
const queryRepository = new QueryRepository();

queryRouter.get('/', (request, response) => {
  const allMedicalQuerys = queryRepository.all();
  return response.json(allMedicalQuerys);
});

queryRouter.post('/', (request, response) => {
  try {
    const { doctor, date, type, value } = request.body;

    const parsedDate = parseISO(date);
    const createQuery = new CreateQueryService(queryRepository);
    const query = createQuery.execute({
      doctor,
      date: parsedDate,
      type,
      value,
    });

    return response.json(query);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default queryRouter;
