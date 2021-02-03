var flag = true;

function display(event)
{
    let show = document.getElementById("input").value;
    let buttonText = event.target.value;
    if((buttonText==="+" || buttonText==="-" || buttonText==="*" || buttonText==="/") && !(show==="NaN" || show==="Infinity" || show==="SyntaxError"))
        flag = true;
    if(flag)
    { 
        document.getElementById("input").value = show + buttonText;
    }
}

function calculate()
{
    let show = document.getElementById("input").value;
    try
    {
        document.getElementById("input").value = eval(show);
    }
    catch(err)
    {
        document.getElementById("input").value = err.name;
    }
    finally
    {
        flag = false;
    } 
}

function removeLast()
{
    if(flag)
    {
        let show = document.getElementById("input").value;
        document.getElementById("input").value = show.slice(0,show.length-1);
    }
}

function reset()
{
    document.getElementById("input").value = "";
    flag = true;
}