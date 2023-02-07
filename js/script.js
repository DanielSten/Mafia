let role = ['мирный', 'мирный', 'мирный', 'мирный', 'мирный', 'мафия', 'мафия', 'босс', 'шериф', 'мирный'];
let numberPlayers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numberCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cards = document.querySelectorAll('.block_card');
const nums = document.querySelectorAll('.block_card_front');
let btnOne = document.querySelector('.btn_number');
let btnTwo = document.querySelector('.btn_role');
let count = 9;


function changeBtnAmoutPlayers() {
	let btnPlayersNine = document.querySelector('.btn_nine');
	let btnPlayersTen = document.querySelector('.btn_ten');

	btnPlayersNine.addEventListener('click', () => {
		role = ['мирный', 'мирный', 'мирный', 'мирный', 'мирный', 'мафия', 'мафия', 'босс', 'шериф', 'мирный']
		numberPlayers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		numberCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		if (btnPlayersNine.classList.contains("active")) {
		    btnPlayersNine.classList.remove("active");
		    btnPlayersTen.classList.add("active");
		    document.querySelectorAll('.block_card_front')
		    	.forEach(el => {
		    		if (el.innerHTML == 10){
	    			el.parentNode.parentNode.classList.remove('hidden_nine_players')
	    		}
			});
	}
	useNumPlayers()
	btnOne.classList.add("active");
	btnTwo.classList.remove("active");
	
	})
	btnPlayersTen.addEventListener('click', () => {
		role = ['мирный', 'мирный', 'мирный', 'мирный', 'мирный', 'мафия', 'мафия', 'босс', 'шериф', 'мирный']
		numberPlayers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		numberCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		role.pop()
		numberPlayers.pop()
		numberCard.pop()
		if (btnPlayersTen.classList.contains("active")) {
		    btnPlayersTen.classList.remove("active");
		    btnPlayersNine.classList.add("active");
		    document.querySelectorAll('.block_card_front')
				.forEach(el => {
		    		if (el.innerHTML == 10){
		    			el.parentNode.parentNode.classList.add('hidden_nine_players')
		    		}
				})
		}
		btnOne.classList.add("active");
		btnTwo.classList.remove("active");
		useNumPlayers()
		
	})
}
changeBtnAmoutPlayers()


function reCount() {
	const nums = document.querySelectorAll('.block_card_front');

	nums.forEach((n, i) => n.textContent = i + 1);
}
nums.forEach((n, i) => n.textContent = i + 1);


function useRole() {
	role.sort(()=>Math.random()-0.5);
	console.log(role);
	document.querySelectorAll('.card:not(.hidden) .block_card_back')	
			.forEach((n, i) => n.textContent = role[i]);
	reCount()
}
function useNumPlayers() {
	numberPlayers.sort(()=>Math.random()-0.5);
	console.log(numberPlayers);
	document.querySelectorAll('.card:not(.hidden) .block_card_back')
			.forEach((n, i) => n.textContent = numberPlayers[i]);
	reCount()
}
useNumPlayers()



function changeBtn() {

	btnOne.addEventListener('click', () => {
		if (btnOne.classList.contains("active")) {
		    btnOne.classList.remove("active");
		    btnTwo.classList.add("active");
		    document.querySelectorAll('.card.hidden')
				.forEach(el => {
					el.classList.remove('hidden');
					el.querySelector('.active').classList.remove('active');
				})
			useRole()
		}
	})
	btnTwo.addEventListener('click', () => {
		if (btnTwo.classList.contains("active")) {
		    btnTwo.classList.remove("active");
		    btnOne.classList.add("active");
		    document.querySelectorAll('.card.hidden')
				.forEach(el =>{
					el.classList.remove('hidden');
					el.querySelector('.active').classList.remove('active');
				})
			useNumPlayers()
		}
	})
}
changeBtn()






const flipCard = e => {
	const target = e.target.parentElement;

	if(target.classList.contains('active')){
		if(target.parentElement.classList.contains('card')) {
			target.parentElement.classList.add('hidden');
		}
		numberCard = numberCard.slice(0, count);
		count = count - 1
		document.querySelectorAll('.card:not(.hidden) .block_card_front')
				.forEach((n, i) => n.textContent = i + 1);
	} else {
		target.classList.add('active')
	}


}


cards.forEach(card => {
	card.addEventListener('click', flipCard)
})



function cardReset() {
	let btnRes = document.querySelector('.btn_reset');
	btnRes.addEventListener('click', () => {
		document.querySelectorAll('.card.hidden')
				.forEach(el =>{
					el.classList.remove('hidden');
					el.querySelector('.active').classList.remove('active');
				})
		reCount()
	})
	btnRes.addEventListener('click', () => {
		document.querySelectorAll('.block_card.active')
				.forEach(el =>{
					el.classList.remove('active');
				})
	})
}
cardReset()

function cardMix() {
	let btnMix = document.querySelector('.btn_mix');

	btnMix.addEventListener('click', () => {
		if(btnOne.classList.contains("active")) {
			useNumPlayers()
		} else {
			useRole()
		}
	})
}
cardMix()