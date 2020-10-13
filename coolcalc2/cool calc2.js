bt = document.getElementById("bt");
ipt = document.getElementById("ipt");
ipt1 = document.getElementById("ipt1");
ipt2 = document.getElementById("ipt2");

t = 0;
t1 = 0;
a = document.getElementById("a_in").value;
b = document.getElementById("b_in").value;
c = document.getElementById("c_in").value;
document.getElementById("bt2").onclick = function fa() {
    if (t == 0) t = 1;
    else t = 0;
    console.log(t);
};

document.getElementById("auto").onclick = function fb() {
    if (t1 == 0) t1 = 1;
    else t1 = 0;
    console.log(t1);
    document.getElementById("auto?").value = t1;
};

function solve(num) {
    a = eval(document.getElementById("a_in").value);
    b = eval(document.getElementById("b_in").value);
    c = eval(document.getElementById("c_in").value);
    at = eval(document.getElementById("txt").value);
    bt = eval(document.getElementById("txt1").value);
    ct = eval(document.getElementById("txt2").value);
    return eval(num);
}

ipt.ondblclick = function f() {
    i = document.getElementById("ipt").value;
    i1 = document.getElementById("ipt1").value;
    i2 = document.getElementById("ipt2").value;
    a1 = solve(i);
    a2 = solve(i1);
    a3 = solve(i2);
    document.title = a1;
    document.getElementById("txt").value = a1;
    document.getElementById("txt1").value = a2;
    document.getElementById("txt2").value = a3;
    if (t == 1) alert(a1);
    console.log(t);
};

document.getElementById("bt").onclick = function f1() {
    i = document.getElementById("ipt").value;
    i1 = document.getElementById("ipt1").value;
    i2 = document.getElementById("ipt2").value;
    a1 = solve(i);
    a2 = solve(i1);
    a3 = solve(i2);
    document.title = a1;
    document.getElementById("txt").value = a1;
    document.getElementById("txt1").value = a2;
    document.getElementById("txt2").value = a3;
    if (t == 1) alert(a1);
    console.log(t);
};
document.ondblclick = function f2() {
    i = document.getElementById("ipt").value;
    i1 = document.getElementById("ipt1").value;
    i2 = document.getElementById("ipt2").value;
    a1 = solve(i);
    a2 = solve(i1);
    a3 = solve(i2);
    document.title = a1;
    document.getElementById("txt").value = a1;
    document.getElementById("txt1").value = a2;
    document.getElementById("txt2").value = a3;
    if (t == 0.01) alert(a1);
    console.log(t);
};
setInterval(f4, 0.1);

function f4() {
    document.getElementById("txt").value = a1;
    fx = document.getElementById("fx").value;
    i = document.getElementById("ipt").value;
    i1 = document.getElementById("ipt1").value;
    i2 = document.getElementById("ipt2").value;
    a1 = solve(i);
    a2 = solve(i1);
    a3 = solve(i2);
    document.title = a1;
    document.getElementById("txt").value = a1;
    document.getElementById("txt1").value = a2;
    document.getElementById("txt2").value = a3;
    if (t1 == 1 && document.getElementById("txt").value == "false")
        if (fx == 5)
            document.getElementById("a_in").value = (
                eval(document.getElementById("a_in").value) + 0.00001
            ).toFixed(5);
        else if (fx == 4)
        document.getElementById("a_in").value = (
            eval(document.getElementById("a_in").value) + 0.0001
        ).toFixed(4);
    else if (fx == 3)
        document.getElementById("a_in").value = (
            eval(document.getElementById("a_in").value) + 0.001
        ).toFixed(3);
    else if (fx == 2)
        document.getElementById("a_in").value = (
            eval(document.getElementById("a_in").value) + 0.01
        ).toFixed(2);
    else if (fx == 1)
        document.getElementById("a_in").value = (
            eval(document.getElementById("a_in").value) + 0.1
        ).toFixed(1);
    else if (fx == 0)
        document.getElementById("a_in").value = (
            eval(document.getElementById("a_in").value) + 1
        ).toFixed(0);
    else if (fx == -5)
        document.getElementById("a_in").value = (
            eval(document.getElementById("a_in").value) - 0.00001
        ).toFixed(5);
    else if (fx == -4)
        document.getElementById("a_in").value = (
            eval(document.getElementById("a_in").value) - 0.0001
        ).toFixed(4);
    else if (fx == -3)
        document.getElementById("a_in").value = (
            eval(document.getElementById("a_in").value) - 0.001
        ).toFixed(3);
    else if (fx == -2)
        document.getElementById("a_in").value = (
            eval(document.getElementById("a_in").value) - 0.01
        ).toFixed(2);
    else if (fx == -1)
        document.getElementById("a_in").value = (
            eval(document.getElementById("a_in").value) - 0.1
        ).toFixed(1);
    else if (fx == "-0")
        document.getElementById("a_in").value = (
            eval(document.getElementById("a_in").value) - 1
        ).toFixed(0);
    a = eval(document.getElementById("a_in").value);
}
f4();