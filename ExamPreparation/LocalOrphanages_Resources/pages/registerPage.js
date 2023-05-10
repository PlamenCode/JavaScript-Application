import { register } from '../src/data.js';
import { html } from '../src/lib.js';

export function registerPage(ctx){
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(ev){
        ev.preventDefault();

        const form = new FormData(ev.target);
        const email = form.get('email');
        const password = form.get('password');
        const rePass = form.get('repeatPassword');

        if(email == '' || password == ''){
            return alert('All fields are required.');
        }
        if(password != rePass){
            return alert('Passwords don\'t match');
        }

        await register(email, password);
        ev.target.reset();
        ctx.updateNavBar();
        ctx.page.redirect('/dashboard')
    }

};

function registerTemplate(onSubmit){
    return html `
    <section id="register-page" class="auth">
            <form @submit= ${onSubmit} id="register">
                <h1 class="title">Register</h1>

                <article class="input-group">
                    <label for="register-email">Email: </label>
                    <input type="email" id="register-email" name="email">
                </article>

                <article class="input-group">
                    <label for="register-password">Password: </label>
                    <input type="password" id="register-password" name="password">
                </article>

                <article class="input-group">
                    <label for="repeat-password">Repeat Password: </label>
                    <input type="password" id="repeat-password" name="repeatPassword">
                </article>

                <input type="submit" class="btn submit-btn" value="Register">
            </form>
        </section>`
}