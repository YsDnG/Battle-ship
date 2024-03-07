
import { gameBoardModule } from "../logic/board-logic";

import missTarget from '../img/miss.png'

import destroyerImage from '../img/destroyer1.png'
import BattleShipImage from '../img/battleship.png'
import CruiserImage from '../img/cruiser.png'
import SubMarineImage from '../img/submarine.png'
import explosion from '../img/explosion.png'



const DomManipulationModule =(() => {

    const refreshTheDomAfterHit=(board,doubleDomArray) =>{


      board.forEach((row, x) => {  // Iterating over rows
            row.forEach((cell, y) => {  // Iterating over cells in each row
                if (cell !== 0) {
                    if(cell ==='X')
                    {
                       
                        doubleDomArray[x][y].innerText = "";
                        doubleDomArray[x][y].classList.add('hit')
                        doubleDomArray[x][y].style.backgroundImage = `url('${explosion}')`

                    }
                    if(cell==="M")
                    {
                    doubleDomArray[x][y].innerText = "";
                    doubleDomArray[x][y].classList.add('hit')
                    doubleDomArray[x][y].style.backgroundImage = `url('${missTarget}')`

                    }
                    

                    

                }
            });
        });
        
    }
    const getPositionHitFromTheBoardDom = (board, leftBoardShip) => {
       
       
        const domBoard = document.querySelectorAll(`.left > *`)
        const doubleDomArray = MakeDomNodeListIntoDoubleArray(domBoard)
        // Nettoyer les gestionnaires d'événements précédents
        doubleDomArray.forEach((row) => {
            row.forEach((element) => {
                element.removeEventListener("click", element.clickHandler);
            });
        });
    
        // Ajouter de nouveaux gestionnaires d'événements
        doubleDomArray.forEach((row, x) => {
            row.forEach((element, y) => {
                // Créer un écouteur unique pour chaque élément
                const clickHandler = function(event) {
                  const allShipSunk =  gameBoardModule.hitTheBoardArray(board, leftBoardShip, [x, y]);
                 
                    // Supprimer l'écouteur d'événements
                    event.target.removeEventListener('click', clickHandler);
                    // // Supprimer l'élément du tableau
                    // doubleDomArray[x].splice(y, 1, null); // Remplacer par null pour garder la structure
                    // Rendre la div non cliquable
                    event.target.style.pointerEvents = "none";
                    refreshTheDomAfterHit(board, doubleDomArray);
                    if(allShipSunk)
                        alert('tout les bateau ont coulés ')
                };
    
                // Stocker la référence de l'écouteur dans l'élément même
                element.clickHandler = clickHandler;
    
                element.addEventListener("click", clickHandler);
            });
        });
    };
    
 
    const MakeDomNodeListIntoDoubleArray = (DomBoard) => {
        const tableauFinal = [];
        for (let i = 0; i < DomBoard.length; i += 10) {
            const sousTableau = [];
            for (let j = i; j < i + 10 && j < DomBoard.length; j++) {
                sousTableau.push(DomBoard[j]);
            }
            tableauFinal.push(sousTableau);
        }
        return tableauFinal;
    };
    const checkifpossible = (index, rowIndex, doubleDomArray, size, direction) => {
        
        let availableSpaceAfter = 0;
        let availableSpaceBefore = 0;
       
    
        if (direction === 'h') {
            
            for (let i = rowIndex; i < doubleDomArray[rowIndex].length && availableSpaceAfter < size; i++) {
                if (!doubleDomArray[index][i].classList.contains('locked')) {
                    availableSpaceAfter++;
                } else {
                    break; // Rencontre un 'locked', arrêtez le comptage
                }   
            }
            
            if(availableSpaceAfter<size)
            {
                for (let i = rowIndex - 1; i >= 0&&  availableSpaceBefore < (size - availableSpaceAfter); i--) {
                    if (!doubleDomArray[index][i].classList.contains('locked')) {
                        availableSpaceBefore++;
                    } 
                    else 
                    {
                        return false;
                    }
                }
                

            }
            
           
        } else if (direction === 'v') {
              // Compter l'espace disponible en bas
              for (let i = index ; i < 10 && availableSpaceAfter < size ; i++) {
                if (!doubleDomArray[i][rowIndex].classList.contains('locked')) {
                    availableSpaceAfter++;
                } else {
                    break; // Rencontre un 'locked', arrêtez le comptage
                }
            }
            // Compter l'espace disponible en haut
            for (let i = index; i >= 0 && availableSpaceBefore < (size-availableSpaceAfter); i--) {
                if (!doubleDomArray[i][rowIndex].classList.contains('locked')) {
                    availableSpaceBefore++;
                } else {
                    return false;
                }
            }
          
        }
        
        
        return availableSpaceBefore + availableSpaceAfter >= size;
    };
    
    
    
    const waitForAllShipsPlaced = (size, icon, numberUnits,direction,cancelToken,lastShip) => {
        
        const domBoard = document.querySelectorAll('.left > *');
        const doubleDomArray = MakeDomNodeListIntoDoubleArray(domBoard);
        let ships = {}; // Conserve les positions de tous les navires
        let position = []; // Initialisation de l'entrée pour ce type d'unité
            
           
            const removeMouseoverListeners = () => {
                domBoard.forEach(element => {
                    if (element.handleMouseover) {
                        element.removeEventListener("mouseover", element.handleMouseover);
                        delete element.handleMouseover;
                    }
                });

            };
        
            const removeAllClickListeners = () => {
                doubleDomArray.forEach(subArray => {
                    subArray.forEach(element => {
                        if (element.handleClick) {
                            element.removeEventListener("click", element.handleClick);
                            delete element.handleClick; // Clean up to avoid memory leaks
                        }
                    });
                });
            };
            
            console.log(direction,icon,"-> en, cours")
       
        return new Promise((resolve,reject) => {
            
                if(cancelToken.isCancelled)
                {
                   removeMouseoverListeners();
                   removeAllClickListeners();
                    resolve(ships)
                    console.log(direction,icon,"-> annulée dans time out")
                    return;     
                }                                
    
            // Parcours de chaque cellule du plateau de jeu
            doubleDomArray.forEach((subArray, rowIndex) => {
                subArray.forEach((element, columnIndex) => {
    
                    // Gestion du mouseover
                    element.handleMouseover = () => {


                        if (numberUnits <= 0) return;
                        
                        
                        removeHighlights(doubleDomArray, icon);

                     
                       
    
                        if (checkifpossible(rowIndex, columnIndex, doubleDomArray, size, direction)) {
                            let elementsToPlace = size;
                           
                            
                            if (direction === 'h') {
                                removeHighlights(doubleDomArray, icon);
                                let placed = 0; // Nombre d'unités placées
                                // Essayez de placer à droite
                                for (let i = columnIndex; placed < size && i < subArray.length; i++) {
                                    if (!subArray[i].classList.contains('locked')) {
                                        subArray[i].classList.add(icon, 'ship-img');
                                        placed++;
                                    } else {
                                        // Rencontré un élément locked, arrêtez la boucle
                                        break;
                                    }
                                }
                            
                                // Si tous les éléments n'ont pas été placés et aucun élément locked rencontré, compléter à gauche
                                if (placed < size) {
                                    for (let i = columnIndex - 1; placed < size && i >= 0; i--) {
                                        if (!subArray[i].classList.contains('locked')) {
                                            subArray[i].classList.add(icon, 'ship-img');
                                            placed++;
                                        } else {
                                            // Rencontré un élément locked, arrêtez la boucle
                                            break;
                                        }
                                    }
                                }
                            }
                            else
                            if (direction === 'v') 
                            {
                                removeHighlights(doubleDomArray, icon);
                                let placed = 0; // Nombre d'unités placées
                                // Essayez de placer en bas
                                for (let i = rowIndex; placed < size && i < doubleDomArray.length; i++) {
                                    if (!doubleDomArray[i][columnIndex].classList.contains('locked')) {
                                        doubleDomArray[i][columnIndex].classList.add(icon, 'ship-img');
                                        placed++;
                                    } else {
                                        // Rencontré un élément locked, arrêtez la boucle
                                        break;
                                    }
                                }
                            
                                // Si tous les éléments n'ont pas été placés et aucun élément locked rencontré, compléter en haut
                                if (placed < size) {
                                    for (let i = rowIndex - 1; placed < size && i >= 0; i--) {
                                        if (!doubleDomArray[i][columnIndex].classList.contains('locked')) {
                                            doubleDomArray[i][columnIndex].classList.add(icon, 'ship-img');
                                            placed++;
                                        } else {
                                            // Rencontré un élément locked, arrêtez la boucle
                                            break;
                                        }
                                    }
                                }
                            }
                            
                            
                        }
                    };
                  
                    element.addEventListener("mouseover", element.handleMouseover);
    
                    // Gestion du click
                    element.handleClick = () => {
                        if (numberUnits <= 0) return;

                    
                        if (checkifpossible(rowIndex, columnIndex, doubleDomArray, size, direction)) {
                            let elementsToPlace = size;
                            let placed = 0;

                            
                           
                            if (direction === 'h') {
                                // Placement à droite
                                for (let i = columnIndex; placed < size && i < subArray.length; i++) {
                                    if (!subArray[i].classList.contains('locked')) {
                                        subArray[i].classList.add('locked', icon, 'ship-img');
                                        position.push([rowIndex, i]);
                                        
                                        placed++;
                                    } else {
                                        break; // Arrêtez si un élément locked est rencontré
                                    }
                                }
        
                                // Compléter à gauche si nécessaire
                                for (let i = columnIndex - 1; placed < size && i >= 0; i--) {
                                    if (!subArray[i].classList.contains('locked')) {
                                        subArray[i].classList.add('locked', icon, 'ship-img');
                                        position.push([rowIndex, i]);
                                        
                                        placed++;
                                    } else {
                                        break; // Arrêtez si un élément locked est rencontré
                                    }
                                }
                               
                            } else 
                            if (direction === 'v') {
                                // Placement en bas
                                for (let i = rowIndex; placed < size && i < doubleDomArray.length; i++) {
                                    if (!doubleDomArray[i][columnIndex].classList.contains('locked')) {
                                        doubleDomArray[i][columnIndex].classList.add('locked', icon, 'ship-img');
                                        position.push([i, columnIndex]);
                                        

                                        placed++;
                                    } else {
                                        break; // Arrêtez si un élément locked est rencontré
                                    }
                                }
        
                                // Compléter en haut si nécessaire
                                for (let i = rowIndex - 1; placed < size && i >= 0; i--) {
                                    if (!doubleDomArray[i][columnIndex].classList.contains('locked')) {
                                        doubleDomArray[i][columnIndex].classList.add('locked', icon, 'ship-img');
                                        position.push([i, columnIndex]);
                                        

                                        placed++;
                                    } else {
                                        break; // Arrêtez si un élément locked est rencontré
                                    }
                                }
                                
                             
                            }
                            
    
                            numberUnits--;
                            ships[icon]=position;
                            lastShip.positionPlaced = position;
                           
                            
                            
    
                            if (numberUnits <= 0) {
                                removeAllClickListeners();
                                removeMouseoverListeners();
                                resolve(ships);
                            }
                        }
                    };
    
                    element.addEventListener("click", element.handleClick);
                });
            });
        });
    
        (async () => {
            try {
                await waitForAllShipsPlaced();
                console.log("Tous les navires ont été placés !");
            } catch (error) {
                console.error("Une erreur s'est produite :", error);
            }
        })();
    }
        
    
    // Function to remove highlights from all elements
    const removeHighlights = (doubleDomArray, icon) => {
        doubleDomArray.forEach(subArray => {
            subArray.forEach(element => {
                if(!element.classList.contains('locked'))
                    element.classList.remove(icon, 'ship-img');
            });
        });
    };
    
    
    
    return {
        getPositionHitFromTheBoardDom,
        waitForAllShipsPlaced,



    }

})();
export {DomManipulationModule}
