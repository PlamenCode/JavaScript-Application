import { html } from '../src/lib.js';

export function homePage(ctx){
    ctx.render(homeTemplate())
};

function homeTemplate(){
    return html `
     <!-- Home page -->
     <section id="home">
          <h1>Learn more about your favorite fruits</h1>
          <img
            src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png"
            alt="home"
          />

        </section>`
}