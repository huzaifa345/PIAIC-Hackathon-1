import { getAllProducts } from "@/lib/getAllProducts"
import { productInterface } from "./Products/page"



export let data : productInterface[] ;
 try {
    getAllProducts("all").then((res) => { return data = res })
} catch (error) {
    console.log(error)
}