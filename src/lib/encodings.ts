export type Encoding = 'utf8' | 'utf16le' | 'latin1' | 'hex';

export const encodingOptions: { value: Encoding; label: string }[] = [
  { value: 'utf8', label: 'UTF-8 (default)' },
  { value: 'utf16le', label: 'UTF-16LE' },
  { value: 'latin1', label: 'Latin1 (ISO-8859-1)' },
  { value: 'hex', label: 'Hex' }
];