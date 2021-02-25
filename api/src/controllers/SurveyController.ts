import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveyRepository';

class SurveyController{
  async findAll(req:Request, res: Response){
    const SurveyRepository = getCustomRepository(SurveysRepository);

    const surveys = await SurveyRepository.find()

    return res.status(200).json(surveys);
  }

  async create(req:Request, res: Response){
    const { title, description } = req.body;

    const surveysRepository = getCustomRepository(SurveysRepository)

    const survey = surveysRepository.create({
      title,
      description
    });

    await surveysRepository.save(survey);

    return res.status(201).json(survey);

  }
}

export { SurveyController }