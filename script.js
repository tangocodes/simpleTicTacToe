
let flagX = false
let target = {}
let diagonal = ['A0', 'A2', 'B1', 'C0', 'C2']
let gameOver = false

const resetGame=(value)=>{
  if(value=="Draw" && gameOver==false)
  {
    alert("Game Drawn NoBody Won")
    reset();
  }
  else
  {
    if(flagX)
    {
      alert("Game over player X won")

    }
    else
    {
      alert("Game over player O won")
    }
    let count=5
    let interval=null
    interval = setInterval(()=>{
    
    
    document.getElementById('countdown').innerHTML=`The game is resetting in ${count} seconds`
        count--;
    if(count==-1)
    {
      reset();
      document.getElementById('countdown').innerHTML=``
      clearInterval(interval)
    }
    },1000)
    
  
  }
  
  

}

const reset = ()=>{
  target={}
  flagX=false
  gameOver=false
  let childElements = ticTac.querySelectorAll('.tabData');
  childElements.forEach(element => {
    element.innerHTML=''
  });
}

document.getElementById('reset').addEventListener('click',reset)

function checkDiagnols(id, value) {
    if (id == 'B1') {
        if (target['A0'] == value && target['C2'] == value || target['A2'] == value && target['C0'] == value) {
            gameOver=true
            return true
            
        }
    } else if (id == 'A0' || id == 'C2') {
        if (target['B1'] == value && target['C2'] == value && target['A0'] == value) {
              gameOver=true
            return true
        }
    } else if (id == 'A2' || id == 'C0') {
        if (target['B1'] == value && target['C0'] == value && target['A2'] == value) {
              gameOver=true
            return true
        }
    }
      return false
}

function checkVertical(id, value) {
    if (id == 'A0' || id == 'B0' || id == 'C0') {
        if (target['A0'] == value && target['B0'] == value && target['C0'] == value) {
              gameOver=true
            return true
        }
    } else if (id == 'A1' || id == 'B1' || id == 'C1') {
        if (target['A1'] == value && target['B1'] == value && target['C1'] == value) {
              gameOver=true
            return true
        }
    } else if (id == 'A2' || id == 'B2' || id == 'C2') {
        if (target['A2'] == value && target['B2'] == value && target['C2'] == value) {
              gameOver=true
            return true
        }
    }
      return false
}

function checkHorizontal(id, value) {
    if (id == 'A0' || id == 'A1' || id == 'A2') {
        if (target['A0'] == value && target['A1'] == value && target['A2'] == value) {
              gameOver=true
            return true
        }
    } else if (id == 'B0' || id == 'B1' || id == 'B2') {
        if (target['B0'] == value && target['B1'] == value && target['B2'] == value) {
              gameOver=true
            return true
            
        }
    } else if (id == 'C0' || id == 'C1' || id == 'C2') {
        if (target['C0'] == value && target['C1'] == value && target['C2'] == value) {
              gameOver=true
            return true
        }
    }
    return false
}
let ticTac = document.getElementById("ticTac") 
ticTac.addEventListener("click", (event) => {
  if(gameOver)
  {
    return
  }
  else{
    if (flagX == false) {
        if (event.target.innerHTML == '') {
            event.target.innerHTML = 'X'
            let id = event.target.id 
            target[id] = 'X'
            if (diagonal.includes(id)) {
                checkDiagnols(id, 'X')
            }
            if(!gameOver)
            {
               checkHorizontal(id, 'X')            
              
            }
            if(!gameOver)
            {
              checkVertical(id, 'X')           
            }
            flagX = true
        }
        
    } 
    else {
        if (event.target.innerHTML == '') {
            event.target.innerHTML = 'O'
            let id = event.target.id 
            target[id] = 'O'
            if (diagonal.includes(id)) {
              checkDiagnols(id, 'O')
            }
        if(!gameOver)
        {
           checkHorizontal(id, 'O')

        }
        if(!gameOver)
        {
            checkVertical(id, 'O')
        }
           
            flagX = false
        }
        
       
    }
    
     if(gameOver)
        {
          resetGame();
        }
        
        if(Object.keys(target).length==9 && !gameOver)
        {
              setTimeout(()=> resetGame("Draw"), 500);
        }
  }
    
})
