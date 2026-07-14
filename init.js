// Initialisation au chargement de la page
window.onload = function() {
    chargerSaisies();
    // Affiche le nom du fichier/canton
    document.getElementById("nomCantonDisplay").innerText = nomCanton;
    document.getElementById("labelAt1").innerText = donneesCanton[0].identifiant;
    document.getElementById("labelAt2").innerText = donneesCanton[donneesCanton.length - 1].identifiant;
    let selecteur = document.getElementById("supportList");
    donneesCanton.forEach(s => {
        let opt = document.createElement("option");
        opt.value = s.pointKilometrique;
        opt.text = s.identifiant + " (PK " + formaterPK(s.pointKilometrique) + ")";
        selecteur.add(opt);
    });
    pkAxeCentral = (donneesCanton[0].pointKilometrique + donneesCanton[donneesCanton.length - 1].pointKilometrique) / 2;
    document.getElementById("longueur").value = ((donneesCanton[donneesCanton.length - 1].pointKilometrique - donneesCanton[0].pointKilometrique) * 1000).toFixed(0);
    let supportPlusProche = donneesCanton.reduce((prev, curr) => (Math.abs(curr.pointKilometrique - pkAxeCentral) < Math.abs(prev.pointKilometrique - pkAxeCentral) ? curr : prev));
    selecteur.value = supportPlusProche.pointKilometrique;
    changerDeSupport();
};
