function startQuestions() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (!name || !age) {
        alert("Veuillez entrer votre nom et votre âge.");
        return;
    }


    sessionStorage.setItem('userName', name);
    sessionStorage.setItem('userAge', age);

    document.getElementById('home').style.display = 'none';
    document.getElementById('questions').style.display = 'block';
}

function evaluateSymptoms() {

    const symptoms = {
        fever: document.getElementById('fever').checked,
        cough: document.getElementById('cough').checked,
        headache: document.getElementById('headache').checked,
        rash: document.getElementById('rash').checked,
        nausea: document.getElementById('nausea').checked,
        fatigue: document.getElementById('fatigue').checked,
        soreThroat: document.getElementById('soreThroat').checked,
        shortnessBreath: document.getElementById('shortnessBreath').checked,
    };

    let diagnosis = "Aucun diagnostic disponible.";

    // Logique pour déterminer la maladie en fonction des symptômes
    if (symptoms.fever && symptoms.cough && symptoms.soreThroat) {
        diagnosis = "Grippe";
    } else if (symptoms.fever && symptoms.rash) {
        diagnosis = "Varicelle";
    } else if (symptoms.headache && symptoms.nausea) {
        diagnosis = "Migraine";
    } else if (symptoms.shortnessBreath && symptoms.fatigue) {
        diagnosis = "Asthme";
    } else if (symptoms.fever && symptoms.shortnessBreath) {
        diagnosis = "Pneumonie";
    } else if (symptoms.rash && symptoms.nausea) {
        diagnosis = "Allergie alimentaire";

    }

    const name = sessionStorage.getItem('userName');
    const age = sessionStorage.getItem('userAge');


    document.getElementById('userName').innerText = name;
    document.getElementById('userAge').innerText = age;
    document.getElementById('diagnosis').innerText = diagnosis;

    document.getElementById('questions').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}

function goHome() {
   
    document.getElementById('result').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('questions').style.display = 'none';
    document.getElementById('home').style.display = 'block';


    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => (checkbox.checked = false));
}

function showAbout() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'block';
}
