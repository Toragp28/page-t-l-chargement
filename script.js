document.getElementById('downloadBtn').addEventListener('click', function () {

    const fileUrl = 'Secrets du Morpion.pptx';

    // Créer un lien temporaire pour télécharger le fichier
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Secrets du Morpion.pptx'; // Nom du fichier téléchargé
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a); // Supprimer le lien après téléchargement
});
