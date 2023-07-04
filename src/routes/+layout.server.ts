import type { LayoutServerLoad } from "./$types.js";

export const load: LayoutServerLoad = async (event) => {
    const session = await event.locals.getSession()
    return {
        item: 1,
        user: session?.user,
    };
};