export default class Ship{


    constructor(size,position,name)
    {
        this.size = size
        this.hit = 0;
        this.sink = false;
        this.position = position;
        this.name = name
    }

    gotHit()
    {
        this.hit +=1 ;
        
        this.isSunk();
    } 

    isSunk()
    {
        if(this.hit >= this.size)
            this.sink = true;
       
    }
}