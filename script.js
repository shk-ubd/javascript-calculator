let buttons = document.querySelectorAll('.btn');
buttons = Array.from(buttons)

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let screen = document.querySelector('input');
        if (e.target.innerHTML == '=') {
            document.getElementsByTagName('p')[0].innerHTML = screen.value
            screen.value = eval(screen.value)
        }
        else if (e.target.innerHTML == 'AC') {
            screen.value = ''
            document.getElementsByTagName('p')[0].innerHTML = ''
        }
        else if (e.target.innerHTML == 'D') {
            screen.value = screen.value.slice(0, -1)
        }
        else {
            screen.value += e.target.innerHTML;
        }
    })

})

function changeElementsColor(color) {
    let cont = document.getElementById('cont')
    const allElements = cont.querySelectorAll('*');

    allElements.forEach((element) => {
        element.style.color = color;
    });

    document.getElementsByTagName('p')[0].style.color = "#a7a2a2"
}

function changebtnBackground(color) {
    if (color == "toDark") {
        const allbtns = document.querySelectorAll('.btn')
        allbtns.forEach((btn) => {
            btn.classList.add('dark-btn')
        })
        const roundBars = document.querySelectorAll('.round-bar')
        roundBars.forEach((bar)=>{
            if ( !bar.classList.contains('dark-round-bar')) {
                bar.classList.add('dark-round-bar')
            }
        }) 
    }
    else if (color == 'toLight'){
        const allbtns = document.querySelectorAll('.btn')
        allbtns.forEach((btn) => {
            btn.classList.remove('dark-btn')
        })
        const roundBars = document.querySelectorAll('.round-bar')
        roundBars.forEach((bar)=>{
            if ( bar.classList.contains('dark-round-bar')) {
                bar.classList.remove('dark-round-bar')
            }
        }) 
    }
}

function turnOnDarkMode() {
    if (dark.classList.contains('light-unactive-theme-button')) {
        dark.classList.remove('light-unactive-theme-button')
        dark.classList.add('dark-active-theme-button')
        light.classList.add('dark-unactive-theme-button')
        changeElementsColor('white')
        changebtnBackground('toDark')
        tbtn_div.style.background = '#1b699b';
        document.getElementById('screen').style.background = '#414345';
        document.getElementById('cont').style.background = '#414345';
        document.getElementById('all-btns').style.background = 'linear-gradient(45deg, #0d2a47 39%, #194d69 100%)'
        document.body.querySelector('.main-section').style.background = '#121212';
    }
}

function turnOnLightMode() {
    if (light.classList.contains('dark-unactive-theme-button')) {
        dark.classList.add('light-unactive-theme-button')
        dark.classList.remove('dark-active-theme-button')
        light.classList.remove('dark-unactive-theme-button')
        changeElementsColor('black')
        changebtnBackground('toLight')
        tbtn_div.style.background = '#a1d7ff';
        document.getElementById('screen').style.background = '#fff';
        document.getElementById('cont').style.background = '#fff';
        document.getElementById('all-btns').style.background= 'linear-gradient(299deg, #a1d7ff 0%, #7ed2f9 31%, #ffffff 100%)';
        document.body.querySelector('.main-section').style.background = 'linear-gradient(315deg, #d2d8d6 0%, #dce8e0 74%)';
    }
}



let light = document.getElementById('sun');
let dark = document.getElementById('moon')
let tbtn_div = document.getElementById('theme-button')
dark.addEventListener('click', () => {
    turnOnDarkMode()
})
light.addEventListener('click', () => {
    turnOnLightMode()
})
