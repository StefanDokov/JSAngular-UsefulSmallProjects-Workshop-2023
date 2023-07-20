import 'dotenv/config';
import 'module-alias/register';
import validateEnv from './utils/vaildateEnv';
import App from './app';
import PostController from './resources/post/post.controller';
import UserController from './resources/user/user.controller';
import RentController from './resources/rents/rents.controller';

validateEnv(); 

const app = new App([new PostController(), new UserController(), new RentController()], Number(process.env.PORT));

app.listen();