import { StatusCodes } from 'http-status-codes'
import Joi from 'joi'
import AppError from '~/utils/AppError'

const signUp = async (req, res, next) => {
    const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
    const correctCondition = Joi.object({
        name: Joi.string().required().min(3).max(20).trim().messages({
            'string.empty': `"name" cannot be an empty field`,
            'string.min': `"name" should have a minimum length of {#limit}`,
            'any.required': `"name" is a required field`
        }),
        email: Joi.string().email().required().strict().trim().messages(
            {
                'string.empty': `Please enter a valid email address.`,
                'any.required': `"email" is a required field`
            }
        ),
        password: Joi.string().regex(pattern).required(),
        passwordConfirmation: Joi.valid(Joi.ref('password')).required().messages({
            "any.only": "Password confirm does not match",
        })
    })
    const validationResult = correctCondition.validate(req.body, { abortEarly: false })
    if (!validationResult.error) {
        next()
    }
    else {
        const message = validationResult.error.details[0].message
        next(new AppError(message, StatusCodes.UNPROCESSABLE_ENTITY))
    }

}

export const userValidation = { signUp }