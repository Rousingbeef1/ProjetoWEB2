const db = require("./config/db");


export default async function addPokemon(req, res) {
    if (req.method === "POST") {
        const { nome, sprite } = JSON.parse(req.body);
        console.log(req.body);

        db.Pokemon.create({
            nome: nome,
            sprite: sprite
        }).then((e) => { console.log(e); res.status(200).json(n) });
    }
}