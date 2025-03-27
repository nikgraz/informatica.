document.getElementById('capacitor-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let voltage = parseFloat(document.getElementById('voltage').value);
    let resistance = parseFloat(document.getElementById('resistance').value);
    let capacitance = parseFloat(document.getElementById('capacitance').value);
    let time = resistance * capacitance; // Tempo di carica
    document.getElementById('result').innerText = `Tempo di Carica: ${time.toFixed(2)} secondi`;
});

document.getElementById('inductor-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let inductance = parseFloat(document.getElementById('inductance').value);
    let resistance = parseFloat(document.getElementById('resistance-inductor').value);
    let timeConstant = inductance / resistance; // Costante di tempo
    document.getElementById('inductor-result').innerText = `Tempo di Carica: ${timeConstant.toFixed(2)} secondi`;
});
