// Dependencies
import Dexie, { Table } from "dexie";

// Types
import { ClientProps } from "./database.types";

class Database extends Dexie {
    clients!: Table<ClientProps>;

    constructor() {
        super("EtiquetaDB");

        this.version(1).stores({
            clients: "++id, nome, cep",
        });
    }
}

export const db = new Database();
