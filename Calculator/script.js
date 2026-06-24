const expressionDisplay =
document.getElementById("expression");

const resultDisplay =
document.getElementById("result");

let expression = "";

function appendValue(value)
{
    expression += value;

    expressionDisplay.textContent =
    expression;

    expressionDisplay.scrollLeft =
    expressionDisplay.scrollWidth;

    updateResult();
}

function clearDisplay()
{
    expression = "";

    expressionDisplay.textContent = "0";
    resultDisplay.textContent = "0";
}

function deleteLast()
{
    expression = expression.slice(0,-1);

    expressionDisplay.textContent =
    expression || "0";

    updateResult();
}

function updateResult()
{
    try
    {
        if(expression.trim() === "")
        {
            resultDisplay.textContent = "0";
            return;
        }

        let calcExpression =
        expression.replace(/%/g,"/100");

        let result =
        eval(calcExpression);

        resultDisplay.textContent =
        result;

        resultDisplay.scrollLeft =
        resultDisplay.scrollWidth;
    }
    catch
    {
        resultDisplay.textContent = "";
    }
}

function calculate()
{
    try
    {
        let calcExpression =
        expression.replace(/%/g,"/100");

        let result =
        eval(calcExpression);

        resultDisplay.textContent =
        result;

        expression =
        result.toString();

        expressionDisplay.textContent =
        expression;
    }
    catch
    {
        resultDisplay.textContent =
        "Error";
    }
}

document.addEventListener("keydown", function(event){

    const key = event.key;

    if("0123456789+-*/.%()".includes(key))
    {
        appendValue(key);
    }

    if(key === "Enter")
    {
        event.preventDefault();
        calculate();
    }

    if(key === "Backspace")
    {
        deleteLast();
    }

    if(key === "Escape")
    {
        clearDisplay();
    }
});
function toggleTheme()
{
    document.body.classList.toggle("light-theme");

    const btn =
    document.getElementById("themeToggle");

    if(
        document.body.classList.contains(
            "light-theme"
        )
    )
    {
        btn.textContent = "☀️";

        localStorage.setItem(
            "theme",
            "light"
        );
    }
    else
    {
        btn.textContent = "🌙";

        localStorage.setItem(
            "theme",
            "dark"
        );
    }
}

window.onload = function()
{
    const theme =
    localStorage.getItem("theme");

    const btn =
    document.getElementById("themeToggle");

    if(theme === "light")
    {
        document.body.classList.add(
            "light-theme"
        );

        btn.textContent = "☀️";
    }
}