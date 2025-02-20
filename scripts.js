const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockboard = false;
let primeiracarta, segundacarta;

function flipcard() {
	if (lockboard) return;
	if (this === primeiracarta) return;
	
	this.classList.add('flip');
	
	if (!hasFlippedCard){
		
		hasFlippedCard = true;
		primeiracarta = this;
		
		return;
	}	 
		
	segundacarta = this;
		 
	checkformatch();
}


function checkformatch(){
	let ismatch = primeiracarta.dataset.img === segundacarta.dataset.img;
 
	ismatch ? disablecards() : unflipcards();
		
  }
  
  function disablecards(){
			primeiracarta.removeEventListener('click', flipcard);
			segundacarta.removeEventListener('click', flipcard);
			
			resetboard();
  }
  function unflipcards(){
	  lockboard = true;
	  
	  setTimeout(() =>{
			primeiracarta.classList.remove('flip');
			segundacarta.classList.remove('flip');
			
			
			resetboard();
		}, 1500);
}

  function  resetboard() {
	  [hasFlippedCard, lockboard] = [false, false];
	  [primeiracarta, segundacarta] = [null,null];
  }


 ( function shuffle() {
	  cards.forEach(card=>{
		 let randomnum = Math.floor(Math.random() *12);
		 card.style.order = randomnum;
	  });
  })();


cards.forEach(card => card.addEventListener('click', flipcard));










