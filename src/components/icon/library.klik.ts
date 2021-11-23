import { getBasePath } from '../../utilities/base-path';
import type { IconLibrary } from './library';

const library: IconLibrary = {
  name: 'klik',
  resolver: name => `${getBasePath()}/assets/klik-icons/${name}.svg`
};

export default library;
