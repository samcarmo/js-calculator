const buttons = document.querySelectorAll("button")
const calc = document.getElementById("calc")
const screenResult = document.getElementById("result")

var a, b, op, result

const buttonPressed = e => {
    if (result !== null && !['=', '-', '+', '/', 'x'].includes(e.target.value)) {
        cleanVariables()
        screenResult.innerText = ""
        calc.innerText = ""
        result = null
    }
    calcule(e.target.value)
}
for (let button of buttons) {
    button.addEventListener("click", buttonPressed)
}
function calcule(value) {
    if (value != "=" && value != "CE" && value != "square" && value != "%") {
        result = null
        if (op == null && (!isNaN(value) || value == ".")) {
            if (a == null) {
                a = value
            } else {
                a += value
            }
            calc.innerText += value
        } else if (a != null && op != null && (!isNaN(value) || value == ".")) {
            if (b == null) {
                b = value
            } else {
                b += value
            }
            calc.innerText += value
        } else if (a != null && isNaN(value)) {
            op = value
            calc.innerText += value

        }
    } else if (value === "=") {
        if (op === "+") {
            result = +a + +b
        } else if (op === "-") {
            result = +a - +b
        } else if (op === "/") {
            result = +a / +b
        } else if (op === "x") {
            result = +a * +b
        } else if (op === "%") {
            result = (+a * +b) / 100
        }

        // console.log(typeof (result))
        // resultString = result.toString()
        // resultString = resultString.split(".")
        // if (resultString.length == 2) {
        //     resultInitial = resultString[0]
        //     resultString = resultString[1]
        //     // console.log(resultString.length)

        //     if (resultString.length > 7) {
        //         remove = 7 - resultString.length
        //         resultFinal = resultString.slice(0, remove)
        //         // console.log(resultInitial.concat('.', resultFinal))
        //         screenResult.innerText = resultInitial.concat('.', resultFinal)
        //     }
        // } else {
        screenResult.innerText = result
        // }

        cleanVariables()
    } else if (value === "CE") {
        cleanVariables()
        result = null
        calc.innerText = ""
        screenResult.innerText = ""
    } else if (value === "square") {
        result = Math.sqrt(a, 2)
        screenResult.innerText = result
    } else if (value === "%") {
        if (op == null) {
            op = "%"
        } else if (op === "x") {
            result = (+a * +b) / 100
        } else if (op === "-") {
            result = ((100 - +b) * +a) / 100
        } else if (op === "+") {
            result = +a * (100 + +b) / 100
        }
        calc.innerText += value
        screenResult.innerText = result
    }
}

function cleanVariables() {
    a = null
    b = null
    op = null
}