// Text hashing (FR-01, FR-02)
export async function computeSHA512Text(text: string, encoding: 'utf8' | 'utf16le' | 'latin1' | 'hex'): Promise<ArrayBuffer> {
  const data = encodeText(text, encoding);
  return await crypto.subtle.digest('SHA-512', data);
}

// File hashing with streaming (FR-03, FR-08)
export async function computeSHA512File(
  file: File,
  onProgress: (percent: number, speedMBs: number) => void
): Promise<ArrayBuffer> {
  const chunkSize = 1024 * 1024; // 1 MB
  let loaded = 0;
  const startTime = performance.now();

  let hash = new Uint8Array(0);

  for (let offset = 0; offset < file.size; offset += chunkSize) {
    const chunk = file.slice(offset, offset + chunkSize);
    const buffer = await chunk.arrayBuffer();
    const data = new Uint8Array(buffer);

    const combined = new Uint8Array(hash.length + data.length);
    combined.set(hash);
    combined.set(data, hash.length);

    hash = new Uint8Array(await crypto.subtle.digest('SHA-512', combined));

    loaded += buffer.byteLength;
    const percent = (loaded / file.size) * 100;
    const elapsedSec = (performance.now() - startTime) / 1000;
    const speedMBs = loaded / (1024 * 1024) / elapsedSec || 0;
    onProgress(percent, speedMBs);
  }

  onProgress(100, 0);
  return hash.buffer;
}

// Shared encoding logic
function encodeText(text: string, encoding: 'utf8' | 'utf16le' | 'latin1' | 'hex'): ArrayBuffer {
  switch (encoding) {
    case 'utf8':
      return new TextEncoder().encode(text);
    case 'utf16le':
      return new TextEncoder('utf-16le').encode(text);
    case 'latin1': {
      const arr = new Uint8Array(text.length);
      for (let i = 0; i < text.length; i++) arr[i] = text.charCodeAt(i) & 0xff;
      return arr.buffer;
    }
    case 'hex': {
      const clean = text.replace(/[^0-9a-fA-F]/g, '');
      if (clean.length % 2) throw new Error('Invalid hex string');
      const bytes = new Uint8Array(clean.length / 2);
      for (let i = 0; i < clean.length; i += 2) {
        bytes[i / 2] = parseInt(clean.substr(i, 2), 16);
      }
      return bytes.buffer;
    }
    default:
      return new TextEncoder().encode(text);
  }
}