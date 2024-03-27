import Joi from 'joi'
import { patternPassword } from '~/constants'
import validationsObject from '~/utils/ValidationError'

const signUp = async (req, res, next) => {
    const correctCondition = Joi.object({
        name: Joi.string().required().min(3).max(20).trim().messages({
            'string.empty': `"name" cannot be an empty field`,
            'any.required': `"name" is a required field`
        }),
        email: Joi.string().email().required().strict().trim().messages(
            {
                'string.empty': `Please enter a valid email address.`,
                'any.required': `"email" is a required field`
            }
        ),
        password: Joi.string().regex(patternPassword).required(),
        passwordConfirmation: Joi.valid(Joi.ref('password')).required().messages({
            "any.only": "Password confirm does not match",
        }),
        role: Joi.string().valid('user', 'admin'),
    })
    const validationResult = correctCondition.validate(req.body, { abortEarly: false })
    validationsObject(validationResult, next)
}

const login = async (req, res, next) => {
    const correctCondition = Joi.object({
        email: Joi.string().email().required().strict().trim().messages(
            {
                'string.empty': `Please enter a valid email address.`,
                'any.required': `"email" is a required field`
            }
        ),
        password: Joi.string().regex(patternPassword).required(),
    })
    const validationResult = correctCondition.validate(req.body, { abortEarly: false })
    validationsObject(validationResult, next)
}

const updatePassword = async (req, res, next) => {
    const correctCondition = Joi.object({
        passwordCurrent: Joi.string().regex(patternPassword).required(),
        password: Joi.string().regex(patternPassword).required(),
        passwordConfirmation: Joi.valid(Joi.ref('password')).required().messages({
            "any.only": "Password confirm does not match",
        }),
    })
    const validationResult = correctCondition.validate(req.body, { abortEarly: false })
    validationsObject(validationResult, next)
}

export const userValidation = { signUp, login, updatePassword }