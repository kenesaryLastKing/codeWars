//Rock Paper Scissors
//Let's play! You have to return which player won! In case of a draw return Draw!.

//Solution:
const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  }
  let rules = { rock: 'scissors' }
  if (
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'paper' && p2 === 'rock')
  ) {
    return 'Player 1 won!'
  } else {
    return 'Player 2 won!'
  }
}
