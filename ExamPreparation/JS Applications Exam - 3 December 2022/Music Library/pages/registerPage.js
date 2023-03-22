import { register } from '../src/data.js';
import { html } from '../src/lib.js'


export function registerPage(ctx){
    ctx.render(reisterTemplate(onSubmit));

    async function onSubmit(ev){
        ev.preventDefault();

        const form = new FormData(ev.target);

        const email = form.get('email');
        const password = form.get('password');
        const rePass = form.get('re-password');

        if(email == '' || password == ''){
            return alert('All fields required');
        }
        if(password != rePass){
            return alert('Passwords don\`t match.');
        }
        await register(email, password)
        ctx.updateNavBar();
        ctx.page.redirect('/dashboard')

    }
};

function reisterTemplate(onSubmit){
    return html`
    <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
          </form>
        </div>
      </section>`
}