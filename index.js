import chalk from 'chalk';

const bgMethods = [
  'bgRed',
  'bgGreen',
  'bgYellow',
  'bgBlue',
  'bgMagenta',
  'bgCyan',
];

export function rainbow(str) {
  const chars = [...String(str)];
  const len = bgMethods.length;
  const startIdx = Math.floor(Math.random() * len);
  console.log(
    chars
      .map((char, idx) =>
        /\s/.test(char)
          ? ' '
          : chalk[bgMethods[(idx + startIdx) % len]](chalk.black(char))
      )
      .join('')
  );
}
