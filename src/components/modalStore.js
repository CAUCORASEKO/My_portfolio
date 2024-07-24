import { writable } from 'svelte/store';

export const modalState = writable({
  show: false,
  canOpen: true
});