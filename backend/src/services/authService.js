import User from "~/models/user.model";
const signUp = async (reqBody) => {
    const newUser = await User.create({
        name: reqBody.name,
        email: reqBody.email,
        password: reqBody.password,
        passwordConfirm: reqBody.passwordConfirm
    });
    newUser.password = undefined
    return newUser
};

export const authService = {
    signUp,
};
