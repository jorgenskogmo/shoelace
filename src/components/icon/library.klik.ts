import { getBasePath } from '../../utilities/base-path';
import type { IconLibrary } from './library';

const library: IconLibrary = {
  name: 'klik',
  resolver: name => `${getBasePath()}/assets/klik-icons/${name}.svg`
  // resolver: name => {
  //   const url = `${getBasePath()}/assets/klik-icons/${name}.svg`;
  //   console.log('klik icon', url);
  //   return url;
  // }
};

export default library;
