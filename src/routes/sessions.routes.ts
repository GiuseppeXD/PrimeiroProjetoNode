import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    try {
        const { password, email } = request.body;

        const authenticateUser = new AuthenticateUserService();

        const { user, token } = await authenticateUser.execute({
            email,
            password,
        });

        delete user.password;

        return response.status(200).json({ user, token });
    } catch (err) {
        return response.status(err.statusCode).json({ error: err.message });
    }
});

export default sessionsRouter;
