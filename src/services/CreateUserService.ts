import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
    name: string;
    email: string;
    password: string;
}

export default class CreateUserService {
    public async execute({ name, email, password }: Request): Promise<User> {
        const usersRepository = getRepository(User);
        const checkUsersExists = await usersRepository.findOne({
            where: { email },
        });

        const hashedPassword = await hash(password, 8);

        if (checkUsersExists) {
            throw new AppError('Email adress already used.', 400);
        }

        const user = usersRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        await usersRepository.save(user);

        return user;
    }
}
