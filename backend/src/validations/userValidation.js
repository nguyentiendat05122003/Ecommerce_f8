import Joi from 'joi'
import validationsObject from '~/utils/ValidationError'

const signUp = async (req, res, next) => {
    const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
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
        password: Joi.string().regex(pattern).required(),
        passwordConfirmation: Joi.valid(Joi.ref('password')).required().messages({
            "any.only": "Password confirm does not match",
        }),
        role: Joi.string().valid('user', 'admin'),
    })
    const validationResult = correctCondition.validate(req.body, { abortEarly: false })
    validationsObject(validationResult, next)
}

export const userValidation = { signUp }