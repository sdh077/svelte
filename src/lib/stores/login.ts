import type { User } from '$lib/interface/user.js';
import { writable, type Writable } from 'svelte/store';
export const user: Writable<User> = writable({ name: '', email: '', image: '' });
