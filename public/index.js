/* global CONVARGO*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('ul');
    div.className = "vertical medium-horizontal menu expanded text-center";
    const template = actors.map(actor => {
      return `
          <li><a href="#"><div class="stat">${actor.amount}€</div><span>${actor.who} </span><span> ${actor.type}</span></a></li>
      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const trucker = CONVARGO.getTrucker();
    const distance = document.querySelector('.distance').value;
    const volume = document.querySelector('.volume').value;
    const option = document.querySelector('.option').checked;
    const actors = CONVARGO.payActors(trucker, distance, volume, option);

    render(actors);

    return;
  });
})();
