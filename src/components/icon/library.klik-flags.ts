import { getBasePath } from '../../utilities/base-path';
import type { IconLibrary } from './library';

const library: IconLibrary = {
  name: 'klik-flags',
  resolver: name => `${getBasePath()}/assets/klik-flags/${name}.svg`
};

export default library;
