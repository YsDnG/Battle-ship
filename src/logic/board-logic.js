

const gameBoardModule =(() => {


    const placeShipOnTheBoardArray =(board,objetNavires) =>{
        
        
        for (let typeNavire in objetNavires) {
            const navires = objetNavires[typeNavire];
            // console.log(`Type de navire: ${typeNavire}`);
            navires.forEach(function(navire) {
                navire.position.forEach(([x,y])=>{
                    board[x][y] ="S"+ navire.size
                })
                
            });
           
        }
        
        // ship.position.forEach(([x,y]) => {
            
        //     board[x][y]='S' 
           
        // });
    }

    const hitTheBoardArray =(board,objetShips,hitPosition)=>{

       let  allShipSunk= true
        if(board[hitPosition[0]][hitPosition[1]]="0")
        {
            board[hitPosition[0]][hitPosition[1]]="M"
        }
        

        for(let key in objetShips )
        {
            const ship = objetShips[key];
            ship.forEach(s =>{
                s.position.forEach(p=>{
                   
                    if(p[0]===hitPosition[0]&& p[1]===hitPosition[1])
                    {
                        s.gotHit()
                        board[p[0]][p[1]]="X"
                        
                    }
                })
                
                    allShipSunk = allShipSunk && s.sink;
                
            })
            
        }
        
        return allShipSunk;
        
    }
    
    return {
        placeShipOnTheBoardArray,
        hitTheBoardArray,



    }

})();
export {gameBoardModule}


