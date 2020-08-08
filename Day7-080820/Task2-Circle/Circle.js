class Circle
{
    constructor(radius=undefined, color=undefined)
    {
        this._radius = radius;
        this._color = color;
    }
    get radius()
    {
        return this._radius;
    }
    get color()
    {
        return this._color;
    }
    
    set radius(radius)
    {
        console.log("Setting radius:", radius);
        this._radius = radius;
    }
    set color(value)
    {
        console.log("Setting color:", value);
        this._color = value;
    }
    
    toString()
    {
        return this._radius + ": " + this._color;
    }
    get area()
    {
        if (this._radius === undefined)
        {
            return 0;
        }
        return 3.14*(Math.pow(this._radius,2));
    }
    
}

var c1 = new Circle();
console.log(c1.radius);
console.log(c1.color);
c1.radius = 5;
c1.color = "red";
console.log(c1.toString())
console.log("Area:", c1.area)