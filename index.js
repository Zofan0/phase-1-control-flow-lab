function scuberGreetingForFeet(a){
  if (a <= 400) {
    return 'This one is on me!'
  } 
  if (a <= 2000 && a >= 400) {
    return 'That will be twenty bucks.'
  }
  if (a >= 2500) {
    return 'No can do.'
  } else {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(a){
  if (a == 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(a){
  if (a == 'generous') {
    return 'Thank you so much.'
  }
  if (a == 'not as generous') {
    return 'Thank you.'
  } else {
    return 'Bye.'
  }
}