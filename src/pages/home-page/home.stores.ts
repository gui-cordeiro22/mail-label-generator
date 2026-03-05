// Types
import { FormResponseData } from "@/components/compositions/form";

// Service
import { restApi } from "@/services/rest-api";

export const contractGenerate = async (data: FormResponseData) => {
    const response = await restApi.post("/criar-contrato", data, {
        responseType: "blob",
    });

    const blob = new Blob([response.data], {
        type: "application/pdf",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "contrato-de-locacao.pdf";

    document.body.appendChild(a);
    a.click();

    a.remove();
    window.URL.revokeObjectURL(url);
};
