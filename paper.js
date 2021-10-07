class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2	

        }
		this.x = x,
		this.y = y
		this.r = r
        display()
        {
			var paperPos=this.body.position;		

			push();
			translate(paperPos.x, paperPos.y);
			fill(128,128,128);
            ellipse()
			pop();
        }
	}
}