import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { User } from '../models/User';
import { UsersRepository } from '../repositories/UsersRepositories';

class UserController {

  async findAll(req: Request, res: Response){
    const usersRepository = getRepository(User)

    const users = await usersRepository.find();

    return res.status(200).json(users);
  }

  async findOne(req: Request, res: Response){
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne(req.params.id)
  
    return res.status(200).json(user)
  }
  
  async create(req: Request, res: Response){
    const { name, email } = req.body; 

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if(userAlreadyExists){
      return res.status(400).json({
        error: 'User already exists!',
      });
    }

    const user = usersRepository.create({
      name, email
    });

    await usersRepository.save(user);
   
    return res.status(201).json(user);
  }
}

export { UserController };
