import { deleteItem } from "../src/data.js";


export async function deleteItemPage(ctx){
    const itemId = ctx.params.id;
    const isConfirmed = confirm('Are you sure you want to delete this item?')

    if(isConfirmed){
        await deleteItem(itemId);
        ctx.page.redirect('/fruits')
    }
}