    function mathPlus() {
        const input1 = parseFloat(document.getElementById("input1").value);
        const input2 = parseFloat(document.getElementById("input2").value);
        const sum = input1 + input2;
        
        alert("合計は" + sum);
    }
    function mathMines() {
        const input1 = parseFloat(document.getElementById("input1").value);
        const input2 = parseFloat(document.getElementById("input2").value);
        const mines = input1 - input2;
        
        alert("合計は" + mines);
    }
    function mathMulti() {
        const input1 = parseFloat(document.getElementById("input1").value);
        const input2 = parseFloat(document.getElementById("input2").value);
        const multi = input1 * input2;
        
        alert("合計は" + multi);
    }
    function mathDivision() {
        const input1 = parseFloat(document.getElementById("input1").value);
        const input2 = parseFloat(document.getElementById("input2").value);
        const division = input1 / input2;
        
        alert("合計は" + division);
    }