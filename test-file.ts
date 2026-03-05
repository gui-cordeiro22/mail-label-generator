// Database
import { db } from "./src/database";

export const handleCreateRegister = async () => {
    // await db.clients.add({
    //     name: "Sebastição da Ponte Cordeiro",
    //     address: "Estrada União e Indústria nº 1667",
    //     city: "Petrópolis",
    //     neighborhood: "Corrêas",
    //     cep: "25720062",
    //     uf: "RJ",
    // });

    console.log(await db.clients.toArray());
};
