import { env } from "~/configs/environment";
import nodemailer from "nodemailer"
import pug from 'pug';
export class Email {
    constructor(user, url) {
        this.to = user.email;
        this.firstName = user.name.split(' ')[0];
        this.url = url;
        this.from = `Nguyen dat <${env.EMAIL_FROM}>`;
    }
    newTransport() {
        if (env.NODE_ENV === 'pro') {

        }
        return nodemailer.createTransport({
            host: env.HOST_MAIL_DEV,
            port: env.PORT_MAIL_DEV,
            auth: {
                user: env.USERNAME_MAIL_DEV,
                pass: env.PASSWORD_MAIL_DEV
            }
        })
    }

    // Send the actual email
    async send(template, subject) {
        const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
            firstName: this.firstName,
            url: this.url,
            subject
        });

        const mailOptions = {
            from: this.from,
            to: this.to,
            subject,
            html,
            text: html
        };

        await this.newTransport().sendMail(mailOptions);
    }

    async sendWelcome() {
        await this.send('welcome', 'Welcome to the Natours Family!');
    }

    async sendPasswordReset() {
        await this.send(
            'passwordReset',
            'Your password reset token (valid for only 10 minutes)'
        );
    }
}

