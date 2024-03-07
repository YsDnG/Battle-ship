
import Container from '../component/cp-container'
import createElementWithText from '../component/cp-createElementWithText';
import createBoard from '../component/cp-createBoard';
import Ship from '../Class/ship';
import { gameBoardModule } from '../logic/board-logic';
import { DomManipulationModule } from './Dom-Manipulation';
import shipDivSelector from '../component/cp-shipSelector';

export default function initPage()
{
createElementWithText('h1',"SPACE SHIP BATTLE",null,"title")
const shipSelector = shipDivSelector();

const gameGrid= Container("game-grid")

const boardLeft = createBoard(gameGrid);


boardLeft.DomBoard.classList.add("left")

const boardRight = createBoard(gameGrid);
boardRight.DomBoard.classList.add("right")
const ship = new Ship(3,[[0, 1], [0, 2], [0, 3]])
const ship2 = new Ship(2,[[2, 1], [2, 2]])
const ship3 = new Ship(2,[[5, 1], [4, 1]])
const ship4 = new Ship(1,[[0,0]])

const leftBoardShip ={
   
}




// DomManipulationModule.addShipOnTheBoard(4,'BattleShip',2);
const btnPlaceShip = document.querySelector(".btnShipDirection")
const numberUnitsDiv =document.querySelector('.numberUnitsDiv')
let direction = null
let numberUnits = {
    1:["Destroyer",5],
    2:["BattleShip",4],
    3:["Cruiser",3],
    4:["SubMarine",2],
}
let unitsPlaced = 0;

let cancelToken = { isCancelled: false };

// Fonction pour réinitialiser le token
function resetCancelToken() {
    cancelToken = { isCancelled: false };
}
let ships;
let lastShip ={positionPlaced:null}


function handlePlaceShipClick(e) {
    e.preventDefault();
   
    // console.log("position deja placé Avant appel ->",lastShip.positionPlaced)

    
    if (!direction) 
            direction = 'h';
            else 
            {
                
                direction = (direction === "h") ? 'v' : 'h';
                cancelToken.isCancelled = true;
            }

    (async () => {
        for (const key of Object.keys(numberUnits)) {
            
            btnPlaceShip.innerHTML = "Direction";

            let k = parseInt([Object.keys(leftBoardShip).length])+1
            let icon = numberUnits[k][0]
            let unit = {Destroyer : 5,BattleShip:4,Cruiser:3,SubMarine:2}
            let number ={5:1,4:2,3:3,2:4}
            let size = unit[icon];
            let unitNb= number[size];
            let bateau =[] ;
            numberUnitsDiv.innerHTML =icon+" : "+unitNb+" Unit(s)";
        if(lastShip.positionPlaced &&Object.keys(leftBoardShip)[Object.keys(leftBoardShip).length - 1] !==icon )
        {
            
                unitNb = (unitNb*size - lastShip.positionPlaced.length)/size
                // console.log(size,icon,unitNb,"->missing " + "dernier cles ->" ,Object.keys(leftBoardShip)[Object.keys(leftBoardShip).length - 1] )
               
                let shipsPositionAfter = [];
                let index = 0;
                let shipsPosition =lastShip.positionPlaced;
               
                while(lastShip.positionPlaced.length>0)
                {
                    shipsPositionAfter[index]=[]
                    for(let i =0;i<size;i++)
                    {
                        
                        shipsPositionAfter[index].push(shipsPosition[0])
                        shipsPosition.shift();
                    }
                    
                    //  console.log(shipsPositionAfter[index],"My man ->")
                    const tempUnits =new Ship(size,shipsPositionAfter[index],icon)
                    bateau.push(tempUnits)
                    index++;
                    
                }
                // console.log(bateau,"My Units already on Dom ->")
                lastShip.positionPlaced =null;
                ships = await DomManipulationModule.waitForAllShipsPlaced(size, icon, unitNb,direction,cancelToken,lastShip);
                cancelToken.isCancelled=false;
               shipsPosition =lastShip.positionPlaced;
                
        }

        else
        {

            ships = await DomManipulationModule.waitForAllShipsPlaced(size, icon, unitNb,direction,cancelToken,lastShip);
            cancelToken.isCancelled=false;
            
        }
        if(Object.keys(ships).length === 0 || cancelToken.isCancelled)
        {   
            
           
            cancelToken.isCancelled=false;
          
            ships =   await DomManipulationModule.waitForAllShipsPlaced(size, icon, unitNb,direction,cancelToken,lastShip);   
            
        }
        // console.log(ships,"My Units from wait->"+"My Units already on Dom ->",bateau)
        
         for(const shipName of Object.keys(ships))
         {
            let shipsPosition=ships[shipName]
          
            let shipsPositionAfter = []; 
            let index = 0;
            leftBoardShip[shipName] =[]
            //si des untis sont déja placé sur le dom 
            if(bateau.length>0)
            {
                bateau.forEach(element => {
                    leftBoardShip[shipName].push(element);
                    unitsPlaced++;
                });
            }
                
        while(shipsPosition.length>0)
        {
            shipsPositionAfter[index]=[];

            for(let i = 0;i<size;i++)
           {
            
            shipsPositionAfter[index].push(shipsPosition[0])
            shipsPosition.shift();

           }
           
            leftBoardShip[shipName].push( new Ship(size,shipsPositionAfter[index],shipName)) 
           index++;
           unitsPlaced++;
           console.log(leftBoardShip)
           console.log(unitsPlaced,"--> The End")

        }
                
        }
   
            if (unitsPlaced === 10) {
                
                btnPlaceShip.removeEventListener('click', handlePlaceShipClick);
                gameBoardModule.placeShipOnTheBoardArray(boardLeft.ArrayBoard,leftBoardShip)
                console.log(boardLeft.ArrayBoard)
               DomManipulationModule.getPositionHitFromTheBoardDom(boardLeft.ArrayBoard,leftBoardShip)
               
                break; 
            }
        }
    })();
}



// Attachez l'écouteur d'événements en utilisant la fonction nommée
btnPlaceShip.addEventListener('click', handlePlaceShipClick);



}







