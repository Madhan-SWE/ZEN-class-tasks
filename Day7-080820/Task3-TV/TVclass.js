class TV
{
    constructor(brand, price, inches)
    {
        this.brand = brand;
        this.price = price;
        this.inches = inches;
        this.channel = 1;
        this.volume = 50;
        this.power = "ON";
    }
    increaseVolume()
    {
        if(this.volume === 100)
        {
            console.log("Volume limit exceeded")
            return 100;
        }
        this.volume +=1;
        return this.volume;
    }
    decreaseVolume()
    {
        if(this.volume === 0)
        {
            console.log("Volume can't be below 0");
            return 0;
        }
        this.volume -=1;
        return this.volume;
    }
    setChannel(channelNo)
    {
        if(channelNo>50)
        {
            console.log("TV has only 50 channels");
            return this.channel;
        }
        this.channel = channelNo;
        return this.channel;
    }
    resetTV()
    {
        this.channel = 1;
        this.volume = 50;
    }
    get information()
    {
        return this.brand + " @ channel " + this.channel + ", volume " + this.volume;
    }

}

class Plasma extends TV
{
    constructor(brand, price, inches, screenThickness, energyUsage, lifeSpan, refreshRate)
    {
        super(brand, price, inches);
        this.screenThickness = screenThickness;
        this.energyUsage = energyUsage;
        this.lifeSpan = lifeSpan;
        this.refreshRate = refreshRate;
        this._viewingAngle = 75;
        this._backLight = 50;
    }
    get ViewingAngle()
    {
        return this._viewingAngle;
    }
    get BackLight()
    {
        return this._backLight;
    }
    get displayDetails()
    {
        return "Brand: " + this.brand + "\n"
            + "Price:" + this.price + "\n"
            + "Inches:" + this.inches + "\n"
            + "Screen Thickness:" + this.screenThickness + "\n"
            + "Energy Usage:" + this.energyUsage + "\n"
            + "Life Span:" + this.lifeSpan + "\n"
            + "Refresh State:" + this.refreshRate + "\n"
            + "Viewing Angle:" + this.ViewingAngle + "\n"
            + "BackLight:" + this.BackLight + "\n";
    }

}



class LED extends TV
{
    constructor(brand, price, inches, screenThickness, energyUsage, lifeSpan, refreshRate)
    {
        super(brand, price, inches);
        this.screenThickness = screenThickness;
        this.energyUsage = energyUsage;
        this.lifeSpan = lifeSpan;
        this.refreshRate = refreshRate;
        this._viewingAngle = 75;
        this._backLight = 50;
    }
    get ViewingAngle()
    {
        return this._viewingAngle;
    }
    get BackLight()
    {
        return this._backLight;
    }
    get displayDetails()
    {
        return "Brand: " + this.brand + "\n"
            + "Price:" + this.price + "\n"
            + "Inches:" + this.inches + "\n"
            + "Screen Thickness:" + this.screenThickness + "\n"
            + "Energy Usage:" + this.energyUsage + "\n"
            + "Life Span:" + this.lifeSpan + "\n"
            + "Refresh State:" + this.refreshRate + "\n"
            + "Viewing Angle:" + this.ViewingAngle + "\n"
            + "BackLight:" + this.BackLight + "\n";
    }

}

var t1 = new LED("panasonic", 22000, 32, 3000, "22000W", "12years", "60fps")
console.log(t1.displayDetails);
console.log(t1.setChannel(100));
console.log(t1.information);
for(var i=0;i<52;i++)
{
    console.log(t1.decreaseVolume());
}
console.log(t1.information);
for(var i=0;i<101;i++)
{
    console.log(t1.increaseVolume());
}
console.log(t1.information);