import { html } from '../src/lib.js'
import { login } from '../src/data.js';

export function loginPage(ctx){

    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(ev){
        ev.preventDefault();

        const form = new FormData(ev.target);

        const email = form.get('email');
        const password = form.get('password');

        if(email == '' || password == ''){
          return alert('All fields are required.')
        } else {
          await login(email, password);
          ev.target.reset();
          ctx.updateNavBar();
          ctx.page.redirect('/dashboard');
        }

    }
};

function loginTemplate(onSubmit){
    return html`
    <section id="login">
        <div class="form">
          <h2>Login</h2>
          <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </section>`
}