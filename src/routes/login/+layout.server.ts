import { user } from "$lib/stores/login.js";
import type { LayoutServerLoad } from "../$types.js";

export const load: LayoutServerLoad = async (event) => {
    const session = await event.locals.getSession()
    user.set(session.user);
    return {
        session: await event.locals.getSession(),
    };
};