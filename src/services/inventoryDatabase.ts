import { z } from "zod";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase"

const Item = z.object({
    contributors: z.array(z.string()),
    name: z.string(),
    description: z.string().optional(),
    photoURLs: z.array(z.string().url()).optional()
});

type Item = z.infer<typeof Item>;

export async function createItem(id: string, newItem: Item) {
    Item.parse(newItem);
    return setDoc(doc(db, "items", id), newItem)
}

export function getItems() {

}

export function updateItem() {

}

export function deleteItem() {

}