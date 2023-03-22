import { login } from '../src/api.js';
import { html } from '../src/lib.js'

export function loginPage(ctx){
    ctx.render(loginTemplate(OnSubmit))
    ctx.updateNavBar();


    async function OnSubmit(ev){
      ev.preventDefault();

      const formData = new FormData(ev.target);

      const password = formData.get('password');
      const email = formData.get('email');
      if(password == '' || email == ''){
        alert('There shoud not be any empty fields.');
        return
      }

      await login(email,password);
      ctx.page.redirect('/');
    }
};

function loginTemplate(OnSubmit) {
    return html`
     <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${OnSubmit} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </section>`;
};