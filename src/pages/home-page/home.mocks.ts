export const data = {
    menus: {
        label: "Menu",
        links: [
            {
                label: "Home",
                path: "/",
                isComingSoon: false,
                isExpandable: false,
            },
            {
                label: "Cadastro",
                path: "/cadastrar-cliente",
                isComingSoon: true,
                isExpandable: false,
            },
            {
                label: "Clientes",
                path: "/clientes",
                isComingSoon: true,
                isExpandable: false,
            },
            {
                label: "Gerar etiqueta",
                path: "/gerar-etiqueta",
                isComingSoon: true,
                isExpandable: false,
            },
        ],
    },

    clients: {
        report: [
            { uf: "RJ", clients: 50 },
            { uf: "SP", clients: 35 },
            { uf: "MG", clients: 15 },
            { uf: "RS", clients: 10 },
            { uf: "MS", clients: 6 },
            { uf: "AC", clients: 1 },
        ],
    },

    footer: {
        message: "Capas de Gaiola | Vera Brito",
    },
};
