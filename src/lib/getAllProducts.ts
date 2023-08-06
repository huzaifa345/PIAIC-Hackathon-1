import { client } from "./sanityClients";

export const getAllProducts = async () => {
    const res = await client.fetch(`*[_type=='product']{_id,title,description,image,price}`)
    return res;
}