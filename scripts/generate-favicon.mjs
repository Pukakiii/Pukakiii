import sharp from "sharp"
import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const svg = readFileSync(join(root, "public/icon.svg"))

const png32 = await sharp(svg).resize(32, 32).png().toBuffer()
const png16 = await sharp(svg).resize(16, 16).png().toBuffer()

function buildIco(buffers) {
  const count = buffers.length
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(count, 4)

  let offset = 6 + count * 16
  const entries = []
  const images = []

  for (const [i, buf] of buffers.entries()) {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(i === 0 ? 16 : 32, 0)
    entry.writeUInt8(i === 0 ? 16 : 32, 1)
    entry.writeUInt8(0, 2)
    entry.writeUInt8(0, 3)
    entry.writeUInt16LE(1, 4)
    entry.writeUInt16LE(32, 6)
    entry.writeUInt32LE(buf.length, 8)
    entry.writeUInt32LE(offset, 12)
    entries.push(entry)
    images.push(buf)
    offset += buf.length
  }

  return Buffer.concat([header, ...entries, ...images])
}

const ico = buildIco([png16, png32])
writeFileSync(join(root, "public/favicon.ico"), ico)
writeFileSync(join(root, "src/app/favicon.ico"), ico)
console.log("Generated favicon.ico")
