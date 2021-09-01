import './sass/main.scss';
import bootstrap from 'bootstrap';
// import * as bootstrap from 'bootstrap';

import { randomIntegerFromInterval } from './js/rndColor';
import { colors } from './js/colors';
import { refs } from './js/refs';

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
    refs.startBtn.setAttribute('disabled', true);
    const startChangeColorBg = setInterval(changeBgColor, 1000);
    refs.stopBtn.addEventListener('click', () => {
        clearInterval(startChangeColorBg);
        refs.startBtn.removeAttribute('disabled');
    });
};

const changeBgColor = () => {
    const rndColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    refs.body.style.backgroundColor = `${rndColor}`;
};

