import { html} from '../src/lib.js'

export function homePage(ctx){
  const img = ''
    ctx.render(homeTemplate())
    ctx.updateNavBar();

};

function homeTemplate() {
    return html`
     <section id="home">
          <img
            src="./images/beauty-g0d19af267_1920-removebg.png"
            alt="home"
          />
          <h2>Looking for the best beauty products?</h2>
          <h3>You are in the right place!</h3>
        </section>`;
}