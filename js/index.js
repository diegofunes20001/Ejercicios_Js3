function convertKmToM() {
    const km = parseFloat(document.getElementById('km').value);
    const m = km * 1000;
    document.getElementById('resultKmToM').innerText = `${km} km = ${m} m`;
}

function convertMToCm() {
    const m = parseFloat(document.getElementById('m').value);
    const cm = m * 100;
    document.getElementById('resultMToCm').innerText = `${m} m = ${cm} cm`;
}

function convertFtToInch() {
    const ft = parseFloat(document.getElementById('ft').value);
    const inch = ft * 12;
    document.getElementById('resultFtToInch').innerText = `${ft} ft = ${inch} pulg`;
}

function convertYardToInch() {
    const yard = parseFloat(document.getElementById('yard').value);
    const inch = yard * 36;
    document.getElementById('resultYardToInch').innerText = `${yard} yarda = ${inch} pulg`;
}


function Limpiar(){
    document.getElementById("km").value = "";
    document.getElementById("m").value = "";
    document.getElementById("ft").value = "";
    document.getElementById("yard").value = "";
    document.getElementById("resultKmToM").innerText = "";
    document.getElementById("resultMToCm").innerText = "";
    document.getElementById("resultFtToInch").innerText = "";
    document.getElementById("resultYardToInch").innerText = "";
}

