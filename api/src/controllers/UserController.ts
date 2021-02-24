import { Request, response, Response } from 'express'
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {

  async findAll(req: Request, res: Response){
    const usersRepository = getRepository(User)

    const users = await usersRepository.find({
      select: ['name', 'email', 'created_at']
    });

    return res.status(200).json(users);
  }

  async findOne(req: Request, res: Response){
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne(req.params.id,{
      select: ['name', 'email', 'created_at']
    })
    console.log(user)
    return res.status(200).json(user)
  }
  
  async create(req: Request, res: Response){
    const { name, email } = req.body; 

    const usersRepository = getRepository(User);

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
   
    return res.status(200).json(user);
  }
}

export { UserController } 