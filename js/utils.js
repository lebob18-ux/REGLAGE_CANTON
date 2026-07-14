// Fonctions utilitaires
function formaterPK(pk) {
    let s = pk.toFixed(3);
    let parties = s.split('.');
    return parties[0].padStart(3, '0') + "," + parties[1];
}
