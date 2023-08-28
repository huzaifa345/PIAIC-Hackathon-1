import { client } from "./sanityClients";

export const getAllProducts = async (dataCategory : string) => {
    
    if (dataCategory === "all") { 
        const res = await client.fetch(`*[_type=='product']{_id,title,description,image,price,moreImages}`)
        return res
    
    }
    else {
        
        const res = await client.fetch(`*[_type=='product' && category==$dataCategory]{_id,title,description,image,price,moreImages}`,{dataCategory}) 
       return res;
    }
} 