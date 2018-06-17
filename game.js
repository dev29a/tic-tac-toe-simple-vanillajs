	var playerChoice = 'X'
	var computerChoice = 'O'

	var gameState = {
		playerTurn: 'playerChoice',
		winner: false,
		winPlayer: ''
	}
	
	
	const resetBoard = function() {
		const tds = document.querySelectorAll('td')
		tds.forEach(function(td) { td.textContent = '' })
	}
	
	var winnerCheck = function(){
			const tds = document.querySelectorAll('td')
			if 	((playerChoice === tds[0].textContent && playerChoice === tds[1].textContent && playerChoice === tds[2].textContent ) ||
				(playerChoice === tds[3].textContent && playerChoice === tds[4].textContent && playerChoice === tds[5].textContent ) ||
				(playerChoice === tds[6].textContent && playerChoice === tds[7].textContent && playerChoice === tds[8].textContent ) ||
				(playerChoice === tds[0].textContent && playerChoice === tds[1].textContent && playerChoice === tds[2].textContent ) ||
				(playerChoice === tds[0].textContent && playerChoice === tds[3].textContent && playerChoice === tds[6].textContent ) ||
				(playerChoice === tds[1].textContent && playerChoice === tds[4].textContent && playerChoice === tds[7].textContent ) ||
				(playerChoice === tds[2].textContent && playerChoice === tds[5].textContent && playerChoice === tds[8].textContent ) ||
				(playerChoice === tds[0].textContent && playerChoice === tds[4].textContent && playerChoice === tds[8].textContent ) ||
				(playerChoice === tds[2].textContent && playerChoice === tds[4].textContent && playerChoice === tds[6].textContent )
				){
				gameState.winner = true
				gameState.winPlayer = 'Player'
				callWinnerAnimate(gameState.winPlayer)
				//resetBoard()
				return true
			}else if 	
				((computerChoice === tds[0].textContent && computerChoice === tds[1].textContent && computerChoice === tds[2].textContent ) ||
				(computerChoice === tds[3].textContent && computerChoice === tds[4].textContent && computerChoice === tds[5].textContent ) ||
				(computerChoice === tds[6].textContent && computerChoice === tds[7].textContent && computerChoice === tds[8].textContent ) ||
				(computerChoice === tds[0].textContent && computerChoice === tds[1].textContent && computerChoice === tds[2].textContent ) ||
				(computerChoice === tds[0].textContent && computerChoice === tds[3].textContent && computerChoice === tds[6].textContent ) ||
				(computerChoice === tds[1].textContent && computerChoice === tds[4].textContent && computerChoice === tds[7].textContent ) ||
				(computerChoice === tds[2].textContent && computerChoice === tds[5].textContent && computerChoice === tds[8].textContent ) ||
				(computerChoice === tds[0].textContent && computerChoice === tds[4].textContent && computerChoice === tds[8].textContent ) ||
				(computerChoice === tds[2].textContent && computerChoice === tds[4].textContent && computerChoice === tds[6].textContent )
				){ 
				
				gameState.winner = true
				gameState.winPlayer = 'Computer'
				callWinnerAnimate(gameState.winPlayer)
				//resetBoard()
				return true
				}
			}  
	
	
	const getEmptySpace = function(){
			const tds = document.querySelectorAll('td')
			let emptyArray = []
			tds.forEach(function(td) {
				if (td.textContent === ''){ 
					emptyArray.push(td.id) }
			}	)
			return emptyArray[Math.floor(Math.random() * emptyArray.length)]
			emptyArray = []
		}

	if (gameState.playerTurn = 'playerChoice') {
			const tds = document.querySelectorAll('td')
				tds.forEach(function(td) {
						td.addEventListener('click', function(e) {
                        e.target.textContent = playerChoice
                        e.target.style.color ='#3FBF70'
						gameState.playerTurn = 'computerChoice'
						if (!winnerCheck() ) 
							{ computerTurn(getEmptySpace()) }
						} )
				} )	}

	const computerTurn = function(idEmptyTile) {
		if 	(idEmptyTile !== undefined) {
				let emptyTitle = document.getElementById(idEmptyTile)
                emptyTitle.textContent = computerChoice
                emptyTitle.style.color ='#BD3FBF'
				winnerCheck()
				gameState.playerTurn = 'playerChoice'}
		else { alert('DRAW')}	
	}
	
	
const callWinnerAnimate	 = function(player) {
	//alert(player)
	document.querySelector('#winner-banner').style.display = 'block'
	document.querySelector('#winner-message').textContent = `${player} Wins!`
}


document.querySelector('button').addEventListener('click', function () {
	resetBoard()
	gameState.playerTurn= 'playerChoice'
	gameState.winner= false
	gameState.winPlayer= ''
	document.querySelector('#winner-message').textContent = ''	
	document.querySelector('#winner-banner').style.display = 'none'
} )
