import { Component } from "vue";
import { routes } from "@/routes";
import { RouteRecordRaw } from "vue-router";
import { store } from "@/store";
import { router } from "@/main";

export class Language {
    readonly id: string;
    readonly name: string = '';
    readonly path: string = '';
    readonly menu: Partial<RouteRecordRaw>[] = [];

  constructor(id: string, data: Partial<Language>) {
    this.id = id;
    Object.assign(this, data);
  }
}

export class LanguageMenuItem {
  constructor(
    readonly label: string,
    readonly path: string,
    readonly component: Component,
  ) {}
}

const dutch = new Language('dutch', {
  name: 'Nederlands',
  path: '/nl/',
  menu: routes.filter(item => ([
    '/nl/',
    '/nl/over-mij/'
  ].includes(item.path!)))
});

const hungarian = new Language('hungarian', {
  name: 'Magyar',
  path: '/hu/',
  menu: routes.filter(item => ([
    '/hu/'
  ].includes(item.path!)))
});

const english = new Language('english', {
  name: 'English',
  path: '/en/',
  menu: routes.filter(item => ([
    '/en/'
  ].includes(item.path!)))
});

export const Languages = {
  Dutch: dutch,
  Hungarian: hungarian,
  English: english,
} as const;

export function setLanguage(language: Language | null, redirect: boolean = false): void {
  if(language) {
    window.localStorage.setItem('language', language.id);

    if(store) {
      store.language = language;
      
      if(redirect) {
        router.push(store.language.path);
      }
    }
  } else {
    window.localStorage.removeItem('language');

    if(redirect) {
      router.push('/');
    }
  }
}

export function getLanguage(): Language | null {
  const value = window.localStorage.getItem('language');

  if(value) {
    return Object.values(Languages).find(language => language.id === value) ?? null;
  }

  return null;
}

export function getTitleFromPath(path: string): string {
  return routes.find(route => route.path === path)?.title ?? '';
}