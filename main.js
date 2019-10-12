getById = id => document.getElementById(id);

const mainPage = getById('choose-level-page');
const levelEasyPage = getById('easy-level-page');
const levelMediumPage = getById('medium-level-page');
const levelHardPage = getById('hard-level-page');
const startGameBtn = getById('button');

const easyDifficulty = getById('easy');
const mediumDifficulty = getById('medium');
const hardDifficulty = getById('hard');

const frontCardEasyBug = document.querySelectorAll('.easy .front');
const frontCardMediumBug = document.querySelectorAll('.medium .front');
const frontCardHardBug = document.querySelectorAll('.hard .front');

let bugNumber;



function chooseLevel() {

    startGameBtn.addEventListener('click', function () {
        if (easyDifficulty.checked) {
            mainPage.style.display = 'none';
            levelEasyPage.style.display = 'flex';
            bugNumber = Math.floor(Math.random() * 3);
            frontCardEasyBug[bugNumber].classList.add('bug');
        }
        else if (mediumDifficulty.checked) {
            mainPage.style.display = 'none';
            levelMediumPage.style.display = 'flex';
            bugNumber = Math.floor(Math.random() * 6);
            frontCardMediumBug[bugNumber].classList.add('bug');
        }
        else if (hardDifficulty.checked) {
            mainPage.style.display = 'none';
            levelHardPage.style.display = 'flex';
            bugNumber = Math.floor(Math.random() * 10);
            frontCardHardBug[bugNumber].classList.add('bug');
        }
    })
}
chooseLevel()


function turnCard() {

    let card = document.getElementsByClassName('wrap');

    for (i = 0; i < card.length; i++) {

        card[i].addEventListener('click', function () {

            if (this.className === 'wrap') {
                this.classList.add('rotated')
            }
            else {
                this.className = 'wrap';
            }
        })
    }
}
turnCard()

function reloadGame() {

    let cardFrontOrBug = document.getElementsByClassName('card front');

    for (i = 0; i < cardFrontOrBug.length; i++) {

        cardFrontOrBug[i].addEventListener('click', function () {
            if (this.className === 'card front' || this.className === 'card front bug') {
                document.location.reload(true);
            }
        })
    }
}
reloadGame()