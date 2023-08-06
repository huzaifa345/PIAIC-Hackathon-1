import { client } from "./sanityClients";

export const getProductDetails = async (productId: string) => {
    const res = await client.fetch(`*[_id == $productId]{_id,title,description,image,price}`,{productId})
    return res;
}