import commandLineArgs from 'command-line-args';
import path from 'path';
import copy from 'recursive-copy';
import mkdirp from 'mkdirp';

const { outdir } = commandLineArgs({ name: 'outdir', type: String });
const destinationDir = path.join(outdir, 'static');
// const destinationDir = 'dest-test/static';
const sourceDir = path.resolve('./static/');

mkdirp.sync(destinationDir);

try {
  const results = await copy(sourceDir, destinationDir, { overwrite: true });
  console.info('Copy static files (' + results.length + ' files)');
} catch (error) {
  console.error('Copy failed: ' + error);
}
