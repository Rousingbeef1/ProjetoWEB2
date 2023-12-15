import db from "./config/db";

export default async function fetchPokemons(req, res){
    db.Pokemon.findAll().then((e)=>{console.log(e); res.status(200).json(e)}).catch((err) => {console.log(err)});
}