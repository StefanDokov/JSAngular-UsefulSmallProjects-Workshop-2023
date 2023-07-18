
import UserModel from "./user.model";
import token from "@/utils/token";

class UserService {
    private user = UserModel;

    // register a new user

    public async register(
        username: string,
        email: string,
        password: string,
    ): Promise<string | Error> {
        try {
            const user = await this.user.create({
                username, email, password
            })

            const accessToken = token.createToken(user);
            return accessToken;
        } catch (error) {
            throw new Error('Unable to create user');
        }
    }

    // attempt a login


    public async login(
        email: string,
        password: string
    ): Promise<string | Error> {
        try {
            const user = await this.user.findOne({email});
            if (!user) {
                throw new Error ('Unable to find a user with that Email Address')
            }
            if (await user.isValidPassword(password)) {
                return token.createToken(user);
            } else {
                throw new Error('Wrong credentials given');
            }
        } catch (error) {
            throw new Error('Unable to login user');
        }
    }

}

export default UserService;