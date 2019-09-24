getById = id => document.getElementById(id);

const mainPage = getById('choose-level-page');
const levelEasy = getById('easy-lavel-page');
const levelMedium = getById('medium-lavel-page');
const levelHard = getById('hard-lavel-page');



function chooseLevel() {

    const btn = getById('button');
    const level = document.getElementsByClassName('choose-difficulty');

    for (i = 0; i < level.length; i++) {

        btn.addEventListener('click', function () {
            if (level[0].checked) {
                mainPage.style.display = 'none';
                levelEasy.style.display = 'flex';
            }
            else if (level[1].checked) {
                mainPage.style.display = 'none';
                levelMedium.style.display = 'flex';
            }
            else if (level[2].checked) {
                mainPage.style.display = 'none';
                levelHard.style.display = 'flex';
            }
        })
    }
}

chooseLevel()



function turnCard() {

    const card = document.querySelectorAll('.card-back');

    card.forEach(function (item) {
        item.addEventListener('click', function () {
            if (this.className === 'card-back') {
                this.classList.remove('card-back')
                this.classList.add('card-front')
            }
            else if (this.className === 'card-front') {
                document.location.reload(true);
            }
        });
    })
};

turnCard();
