import createContainer from "./cp-container";
import createElementWithText from "./cp-createElementWithText";


import destroyerImage from '../img/destroyer1.png'
import BattleShipImage from '../img/battleship.png'
import CruiserImage from '../img/cruiser.png'
import SubMarineImage from '../img/submarine.png'



export default function shipDivSelector() {

    const shipSelector = createContainer("Ship-Selector")
    const shipsUnits = createContainer("ships-Units",shipSelector)
    const shipbtndiv =createContainer('Ship-Btn-Div',shipSelector)
    const shipDirectionBtn=createElementWithText('button',"Place Ship",shipbtndiv,"btnShipDirection")
    createElementWithText('div',null,shipbtndiv,"numberUnitsDiv")
    const destroyerSelector = createElementWithText('div',"Destroyer : 5 Units",shipsUnits,"Destroyer-selector")
    const battleshipSelector = createElementWithText('div',"Battle Ship: 4 Units",shipsUnits,"BattleShip-selector")
    const cruiserSelector = createElementWithText('div',"Cruiser: 3 Units",shipsUnits,"Cruiser-selector")
    const SubMarineSelector = createElementWithText('div',"SubMarine: 2 Units",shipsUnits,"SubMarine-selector")

    createShipImg(destroyerImage,destroyerSelector)
    createShipImg(BattleShipImage,battleshipSelector)
    createShipImg(CruiserImage,cruiserSelector)
    createShipImg(SubMarineImage,SubMarineSelector)
    
    destroyerSelector.classList.add('ship-info')
    battleshipSelector.classList.add('ship-info')
    cruiserSelector.classList.add('ship-info')
    SubMarineSelector.classList.add('ship-info')
    
    destroyerSelector.classList.add('ship-img')
    battleshipSelector.classList.add('ship-img')
    cruiserSelector.classList.add('ship-img')
    SubMarineSelector.classList.add('ship-img')



    
    
     shipSelector;
}

function createShipImg(url,conteneur)
{
    const img = document.createElement('img')
    img.src = url
    img.classList.add("ShipIcon")
   
    conteneur.appendChild(img);
}