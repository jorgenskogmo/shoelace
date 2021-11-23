import defaultLibrary from './library.default';
import systemLibrary from './library.system';
import klikLibrary from './library.klik';
import klikFlagsLibrary from './library.klik-flags';
import type KlikIcon from '../icon/icon';

export type IconLibraryResolver = (name: string) => string;
export type IconLibraryMutator = (svg: SVGElement) => void;
export interface IconLibrary {
  name: string;
  resolver: IconLibraryResolver;
  mutator?: IconLibraryMutator;
}

let registry: IconLibrary[] = [defaultLibrary, systemLibrary, klikLibrary, klikFlagsLibrary];
let watchedIcons: KlikIcon[] = [];

export function watchIcon(icon: KlikIcon) {
  watchedIcons.push(icon);
}

export function unwatchIcon(icon: KlikIcon) {
  watchedIcons = watchedIcons.filter(el => el !== icon);
}

export function getIconLibrary(name?: string) {
  return registry.filter(lib => lib.name === name)[0];
}

export function registerIconLibrary(
  name: string,
  options: { resolver: IconLibraryResolver; mutator?: IconLibraryMutator }
) {
  unregisterIconLibrary(name);
  registry.push({
    name,
    resolver: options.resolver,
    mutator: options.mutator
  });

  // Redraw watched icons
  watchedIcons.map(icon => {
    if (icon.library === name) {
      icon.redraw();
    }
  });
}

export function unregisterIconLibrary(name: string) {
  registry = registry.filter(lib => lib.name !== name);
}
