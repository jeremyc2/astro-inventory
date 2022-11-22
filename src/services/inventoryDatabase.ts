import { z } from "zod";

const User = z.object({
    contributors: z.array(z.string()),
    name: z.string(),
    description: z.string().optional(),
    photoURLs: z.array(z.string().url()).optional()
});

type User = z.infer<typeof User>;

export function createItem(newUser: User) {

}

export function getItem() {

}

export function getItems() {

}

export function updateItem() {

}

export function deleteItem() {

}