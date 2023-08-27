// import { name, age, flag } from "./bases/01-types";
// import { bulbasaur, charmander } from './bases/02-objects';
// import { charmander } from './bases/03-classes';
// import { charmander } from './bases/04-injection.ts';
// import { charmander } from './bases/05-decorators.ts';
import { charmander } from './bases/06-decorators';

import './style.css'
import typescriptLogo from './typescript.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Hello ${charmander.name}</h1>
  </div>
`