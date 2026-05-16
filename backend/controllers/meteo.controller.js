const { recupererDonnee } = require("../services/meteo.service");

const afficherVille = async (req, res) => {
    try {
        const ville = req.query.ville;

        if (!ville) {
            return res.status(400).json({
                error: "La ville est introuvable"
            });
        }

        const data = await recupererDonnee(ville);

        return res.json(data);

    } catch (error) {
        return res.status(500).json({
            error: "Erreur serveur lors de la récupération des données"
        });
        
        
    }
};

module.exports = { afficherVille };