"use client"
import Header from "@/components/header";
import Styles from "@/styles/capturados.module.css";
import React, { useEffect, useState } from 'react'
import { puxaPokemon } from "./buscapokemon";
import { useRouter } from 'next/router';

export async function adicionar(pokemon) {
    var pokeadd = {"nome": "", "sprite": ""}
    if (pokemon !== null) {
        puxaPokemon(pokemon)
            .then((e) => {
                pokeadd.nome = e?.name;
                pokeadd.sprite = e?.sprites?.versions['generation-v']['black-white']?.animated?.front_default;
            })
            .finally(() => {
                if (pokeadd.nome !== null) {
                    fetch("./api/addLista", {
                        method: "POST",
                        body: JSON.stringify(pokeadd)
                    }).then((e) => { console.log(e) });
                }
            });
    }
}

async function getLista(){
    var resp = await fetch("./api/puxaLista");
    var resp2 = await resp.json();
    return resp2;
}

export default function Capturados() {
    const [pokemon, setPokemon] = useState("");
    const [lista, setLista] = useState([]);
    const [pokeadd, setPokeadd] = useState({ "nome": "", "sprite": "" })
    const [carregar, setCarregar] = useState(true);
    const router = useRouter();

    let enviar = (e) => {
        e.preventDefault();
        adicionar(pokemon);
        setPokemon("");
        router.reload()
    }

    useEffect(() => {
        getLista().then((e) => setLista(e));
        setTimeout(() => {
            setCarregar(false);
        }, 500)

    }, []);
    return (
        <>
            <Header />
            <form className={Styles.form} onSubmit={enviar}>
                <input type="text" name='pokemon' onChange={(e) => {console.log(pokemon); setPokemon(e.target.value)}} placeholder='Digite o Nome do Pokemon...' />
                <input type="submit" value="Adicionar ao Time" />
            </form>
            <div className={Styles.grade}>
                {lista.map((e, index) =>{ return(
                    <div key={index} className={Styles.card}>
                        <img src={e?.sprite}/>
                        <label>{e?.nome}</label>
                    </div>
                )})}
            </div>
        </>
    );
}