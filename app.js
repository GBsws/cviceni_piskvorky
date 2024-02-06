import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4' 

const hry = document.querySelectorAll('.hra')
hry.forEach((hra)=>{
	const policka=hra.querySelectorAll('.policko')
	const zjednodusenaPolicka = Array.from(policka).map((policko)=>{
		if(policko.classList.contains('kolecko')){
			return'o'
		}
		if(policko.classList.contains('krizek')){
			return'x'
		}
		return('_')
	})
	const vitez= findWinner(zjednodusenaPolicka)
	const vysledek = hra.querySelector('.vysledek')
	if(vitez==='o'){
		vysledek.textContent='vyhralo kolecko'
	}
	if(vitez==='x'){
		vysledek.textContent='vyhral krizek'
	}
	if(vitez==='tie'){
		vysledek.textContent='Nerozhodne'
	}
	if(vitez==='o'){
		vysledek.textContent='vyhralo kolecko'
	}
	if(vitez===null){
		vysledek.textContent='Hra jeste probiha'
	}
})

// import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4' // Tento řádek vám umožňuje používat funkci findWinner od jiného programátora. Více se o zápisu s import dozvíte v pozdějších lekcích.

// const hry = document.querySelectorAll('.hra')
// hry.forEach((hra) => {
// 	const policka = hra.querySelectorAll('.policko')
// 	const zjednodusenaPolicka = Array.from(policka).map((policko) => {
// 		if (policko.classList.contains('kolecko')) {
// 			return 'o'
// 		}
// 		if (policko.classList.contains('krizek')) {
// 			return 'x'
// 		}
// 		return '_'
// 	})
// 	const vitez = findWinner(zjednodusenaPolicka)
// 	const vysledek = hra.querySelector('.vysledek')
// 	if (vitez === 'o') {
// 		vysledek.textContent = 'Vyhrálo kolečko!'
// 	} else if (vitez === 'x') {
// 		vysledek.textContent = 'Vyhrál křížek!'
// 	} else if (vitez === 'tie') {
// 		vysledek.textContent = 'Nerozhodně!'
// 	} else if (vitez === null) {
// 		vysledek.textContent = 'Hra ještě probíhá.'
// 	}
// })