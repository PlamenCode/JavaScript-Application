import { login } from '../src/data.js';
import { html } from '../src/lib.js';

export function loginPage(ctx){
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(ev){
        ev.preventDefault();

        const form = new FormData(ev.target);
        const email = form.get('email');
        const password = form.get('password');

        if(email == '' || password == ''){
            return alert('all fields are required');
        }

        await login(email, password)
        ctx.updateNavBar();
        ev.target.reset();
        ctx.page.redirect('/dashboard')
    }

};

function loginTemplate(onSubmit){
    return html `
     <section id="login-page" class="auth">
            <form @submit=${onSubmit} id="login">
                <h1 class="title">Login</h1>

                <article class="input-group">
                    <label for="login-email">Email: </label>
                    <input type="email" id="login-email" name="email">
                </article>

                <article class="input-group">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password">
                </article>

                <input type="submit" class="btn submit-btn" value="Log In">
            </form>
        </section>`
}
