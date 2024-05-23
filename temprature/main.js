const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    //this is to convert cel to fahr
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;

    }
    //this is to convert fahr to cel
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }
    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; celsius";
    }
}