class Ball
{
    private diameter:number; //the diameter of the ball
    private x:number; //the ball's x position
    private y:number; //the ball's y position
    private dx:number; //the speed the ball is moving along the x-axis
    private dy:number; //the speed the ball is moving along the y-axis
    private color:string; //the color of the ball

    private static readonly TOP_BOUNDARY = 50;
    private static readonly LEFT_BOUNDARY = 50;
    private static readonly BOTTOM_BOUNDARY = 350;
    private static readonly RIGHT_BOUNDARY = 350;
    
    constructor() {
      this.diameter = 40;
      this.x = Math.floor(Math.random()*(Ball.RIGHT_BOUNDARY-Ball.LEFT_BOUNDARY))+Ball.LEFT_BOUNDARY;
      this.y = Math.floor(Math.random()*(Ball.BOTTOM_BOUNDARY-Ball.TOP_BOUNDARY))+Ball.TOP_BOUNDARY;
      this.dx = 3.5;
      this.dy = 3.5;
      this.color = "red";
    }
    
    public move():void {
        this.x += this.dx;
        this.y += this.dy;
        
        // check f hit the left wall
        if(this.x < Ball.LEFT_BOUNDARY)
        {
            this.x = Ball.LEFT_BOUNDARY;
            this.dx = -1*this.dx;
        }
        else if(this.x+this.diameter > Ball.RIGHT_BOUNDARY)
        {
            this.x = Ball.RIGHT_BOUNDARY - this.diameter;
            this.dx = -1*this.dx;
        }
        if(this.y < Ball.TOP_BOUNDARY)
        {
            this.y = Ball.TOP_BOUNDARY;
            this.dy = -1*this.dy;
        }
        else if(this.y+this.diameter > Ball.BOTTOM_BOUNDARY)
        {
            this.y = Ball.BOTTOM_BOUNDARY - this.diameter;
            this.dy = -1*this.dy;
        }
    }
        
    public isTouching(other:Ball): boolean {
        let distance:number = Math.sqrt(
              (this.x-other.x)*(this.x-other.x) + (this.y-other.y)*(this.y-other.y)
            );            
        return distance < (this.diameter/2.0+other.diameter/2.0);
    }
    
    public bounceOff(other:Ball):void {
        this.dx = -1*this.dx;
        this.dy = -1*this.dy;

        let distance:number = Math.sqrt(
              (this.x-other.x)*(this.x-other.x) + (this.y-other.y)*(this.y-other.y)
            );            

        let overlap = (this.diameter+other.diameter)/2.0 - distance;
        if(overlap > 0) {
          console.log("Bounce ! " + overlap);
          this.x += Math.sign(this.dx)*(overlap*Math.sqrt(2)/2);
          this.y += Math.sign(this.dy)*(overlap*Math.sqrt(2)/2);
        }
    }   
}

//workaround for targeting ES5 (https://github.com/Microsoft/TypeScript/issues/6907)
interface Math { sign(x: number): number; }