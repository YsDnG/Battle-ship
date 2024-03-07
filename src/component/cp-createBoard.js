import Container from './cp-container'
import createElementWithText from './cp-createElementWithText';


export default function createBoard(gameGrid){


    const boardDiv = Container("board",gameGrid)
    let board = [];
    let numRows = 10;
    let numCols = 10;
   
    
    for (let i = 0; i < numRows; i++) {
        board[i] = [];
        for (let j = 0; j < numCols; j++) {
           
            board[i][j] = 0;
        }
    }
    
    let element; 
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            
            
                element= createElementWithText('div',``,boardDiv,"cases")
                element.classList.add(`${i}/${j}`)  
        }
    }



        return { 
            DomBoard:boardDiv,
            ArrayBoard : board,
        };
            

}