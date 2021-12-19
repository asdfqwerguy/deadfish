var num = 0;

function input() {
    //var code = document.getElementById("input").value;
    //console.log(code);

    //var funcs = code.split("");
    //console.log(funcs);

    for (let i = 0; i < funcs.length; i++) {
        if (funcs[i] == "i")
        {
            num += 1;
        }
        else if (funcs[i] == "d")
        {
            num -= 1;
        }
        else if (funcs[i] == "s")
        {
            num = num ** 2;
        }
        else if (funcs[i] == "o")
        {
            console.log(num);
        }

        if (num == 256)
        {
            num = 0;
        }
        else if (num == -1)
        {
            num = 255;
        }
    }

    num = 0;
}