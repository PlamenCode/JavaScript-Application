import { html } from "../src/lib.js"


export function homePage(ctx){
    ctx.render(homeTemplate())
    ctx.updateNavBar();
};

function homeTemplate(){
    return html`
     <section id="home">
        <img src="./images/landing.png" alt="home" />

        <h2 id="landing-text"><span>Add your favourite albums</span> <strong>||</strong> <span>Discover new ones right
            here!</span></h2>
      </section>
    `
}