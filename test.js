const frm = document.getElementById("frm");
const input_name = document.getElementById("name");
const output = document.getElementById("output");

frm.onsubmit = (evt) => {
    evt.preventDefault();
    output.innerHTML = "Ditt navn er " + input_name.value + ", du er nå registrert";
}