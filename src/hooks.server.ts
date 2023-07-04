import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import type { Handle } from "@sveltejs/kit";
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private";


export const handle = SvelteKitAuth(async (event) => {
    const authOptions = {
        providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
        secret: GITHUB_SECRET,
        trustHost: true
    }
    return authOptions
}) satisfies Handle;