class calc{
    add(a,b)
    {
        return a+b;
    }
    sub(a,b)
    {
        return a-b;
    }
    div(a,b)
    {
        return a/b;
    }
    mul(a,b)
    {
        return a*b;
    }
}

var c = new calc();
console.log("Addition:", c.add(5,2));
console.log("Subtraction:",c.sub(5,2));
console.log("Multiplication", c.mul(5,5));
console.log("Division:", c.div(5,2));