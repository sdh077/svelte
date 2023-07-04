export const load = async (e) => {
    try {
        const response = await e.fetch('/api');
        const navs = await response.json()
        return { ...e.data, navs };
    } catch (error) {
        console.error(`Error in load function for : ${error}`);
    }
};