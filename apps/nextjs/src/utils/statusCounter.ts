export const statusCounter = (code: [string, string, string]) => () => {
    function randomNum() {
        "use strict";
        return Math.floor(Math.random() * 9) + 1;
    }

    var loop1: any,
        loop2: any,
        loop3: any,
        time = 30,
        i = 0,
        number,
        selector3 = document.querySelector(".thirdDigit"),
        selector2 = document.querySelector(".secondDigit"),
        selector1 = document.querySelector(".firstDigit");
    loop3 = setInterval(function () {
        "use strict";
        if (i > 40) {
            clearInterval(loop3);
            if (selector3?.textContent) selector3.textContent = code[0];
        } else {
            if (selector3?.textContent)
                selector3.textContent = randomNum().toString();
            i++;
        }
    }, time);
    loop2 = setInterval(function () {
        "use strict";
        if (i > 80) {
            clearInterval(loop2);
            if (selector2?.textContent) selector2.textContent = code[1];
        } else {
            if (selector2?.textContent)
                selector2.textContent = randomNum().toString();
            i++;
        }
    }, time);
    loop1 = setInterval(function () {
        "use strict";
        if (i > 100) {
            clearInterval(loop1);
            if (selector1?.textContent) selector1.textContent = code[2];
        } else {
            if (selector1?.textContent)
                selector1.textContent = randomNum().toString();
            i++;
        }
    }, time);

    return () => { };
}