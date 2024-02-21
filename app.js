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
		vysledek.textContent='Vyhrálo kolečko.'
	}
	if(vitez==='x'){
		vysledek.textContent='Vyhrál křížek.'
	}
	if(vitez==='tie'){
		vysledek.textContent='Nerozhodně.'
	}
	if(vitez==='o'){
		vysledek.textContent='Vyhrálo kolečko.'
	}
	if(vitez===null){
		vysledek.textContent='Hra ještě probíhá.'
	}
})

