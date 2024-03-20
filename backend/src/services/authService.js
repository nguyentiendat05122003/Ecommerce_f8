import User from "~/models/user.model";
import { keyTokenService } from "./keyTokenService";
import getInfoData from "~/utils/getInfoData";
import crypto from 'crypto'
import AppError from "~/utils/AppError";
import KeyToken from "~/models/keyToken.model";
import jwt from 'jsonwebtoken'
const createSendToken = async (user) => {
    const { _id, email } = user
    const privateKey = crypto.randomBytes(64).toString('hex')
    const publicKey = crypto.randomBytes(64).toString('hex')
    const tokens = keyTokenService.createTokenPair({ userId: _id, email }, publicKey, privateKey)
    const { accessToken, refreshToken } = tokens
    const keyStore = keyTokenService.updateKeyAndToken(_id, publicKey, privateKey, refreshToken)
    return tokens
}

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

const login = async (reqBody) => {
    const { email, password } = reqBody;

    if (!email || !password) {
        throw new AppError('Please provide email and password!', 400);
    }
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        throw new AppError('Incorrect email or password', 401);
    }
    const tokens = await createSendToken(user)
    return {
        user: getInfoData(user, ['_id', 'name', 'email']),
        tokens
    }
}

const refreshToken = async (req) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
        throw new AppError('You are not logged in! Please log in to get access.', 401)
    const foundToken = await KeyToken.findOne({ refreshToken: refreshToken })
    if (!foundToken) {
        throw new AppError('Token not valid', 400)
    }
    else {
        if (!foundToken.refreshTokensUsed.includes(refreshToken)) {
            const validRefreshToken = await jwt.verify(refreshToken, foundToken.privateKey);
            if (validRefreshToken) {
                const { userId, email } = validRefreshToken
                const tokens = await keyTokenService.createTokenPair({ userId, email }, foundToken.publicKey, foundToken.privateKey)
                await foundToken.updateOne({
                    $set: {
                        refreshToken: tokens.refreshToken
                    },
                    $addToSet: {
                        refreshTokensUsed: refreshToken
                    }
                })
                return {
                    user: { userId, email },
                    tokens
                }
            }
            else {
                throw new AppError('Token not valid', 400)
            }
        }
        else {
            await KeyToken.deleteOne({ refreshToken: refreshToken })
            throw new AppError('Something wrong, Please login again', 401)
        }

    }

}

export const authService = {
    signUp,
    login,
    refreshToken
};
