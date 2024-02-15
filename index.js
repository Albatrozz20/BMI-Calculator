function calc()
{

    const we = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const he = height/100;
    const print = we/(he*he);
    const back = document.getElementById("back");
    const output = document.getElementById("output");
    output.innerHTML = "";
    document.getElementById("result").innerHTML = `${print.toFixed(2)}`;

    if(print<18.5)
    {
        output.innerHTML = "You are Underweight";
        document.body.style.backgroundImage = 'url("neg.jpg")';
        back.style.backgroundImage = 'url("neg.jpg")';

    }
    if(print>=18.5 && print<25)
    {
        output.innerHTML = "You are Healthy";
        document.body.style.backgroundImage = 'url("pos.jpg")';
        back.style.backgroundImage = 'url("pos.jpg")';
    }
    if(print>=25)
    {
        output.innerHTML = "Your are Overweight";
        document.body.style.backgroundImage = 'url("neg.jpg")';
        back.style.backgroundImage = 'url("neg.jpg")';
    }
}