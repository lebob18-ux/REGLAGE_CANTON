// Export du rapport PDF
function exporterPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let at1 = document.getElementById("at1").value || "-";
    let at2 = document.getElementById("at2").value || "-";
    let plage = document.querySelector('input[name="tmax"]:checked').value;
    let dateRapport = new Date().toLocaleDateString();
    let nomSupport1 = donneesCanton[0].identifiant;
    let nomSupportLast = donneesCanton[donneesCanton.length - 1].identifiant;
    doc.setFontSize(18);
    doc.text("Rapport de Canton - " + nomCanton, 14, 15);
    doc.setFontSize(11);
    doc.text("Date : " + dateRapport, 14, 25);
    doc.text("Plage Température : 2.5 à " + plage + "°C", 14, 30);
    doc.text("AT1 (" + nomSupport1 + ") : " + at1, 14, 35);
    doc.text("AT2 (" + nomSupportLast + ") : " + at2, 14, 40);
    let rows = [];
    donneesCanton.forEach(s => {
        let v = saisiesEnregistrees[s.identifiant] || {cx:"-", bras:"-", pend:"-", is:"-"};
        rows.push([s.identifiant, formaterPK(s.pointKilometrique), v.cx, v.bras, v.pend, v.is]);
    });
    doc.autoTable({ head: [['Support', 'PK', 'Connexion', 'Bras', 'Pendule', 'IS']], body: rows, startY: 48, theme: 'grid', styles: { fontSize: 10, halign: 'center' }, headStyles: { fillColor: [41, 128, 185] } });
    doc.save(nomCanton + "_Rapport.pdf");
}
