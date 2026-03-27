const BASE_URL = "https://fakestoreapi.com";

export async function getProdutos() {
  try {
    const res = await fetch(`${BASE_URL}/products`);

    if (!res.ok) {
      throw new Error("Erro ao buscar produtos");
    }

    return await res.json();
  } catch (error) {
    console.error("Erro na API:", error);
    return [];
  }
}
