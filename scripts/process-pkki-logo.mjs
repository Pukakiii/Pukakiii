import { mkdir, copyFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")
const source = path.join(root, "pkki.png")
const outDir = path.join(root, "public", "images", "brand")

function isBackgroundSeed(r, g, b) {
 const brightness = (r + g + b) / 3
 const saturation = Math.max(r, g, b) - Math.min(r, g, b)
 return saturation < 55 && brightness > 88
}

function isBackgroundNeighbor(r, g, b) {
 const brightness = (r + g + b) / 3
 const saturation = Math.max(r, g, b) - Math.min(r, g, b)
 return saturation < 60 && brightness > 72
}

async function removeBackground(input, output) {
 const { data, info } = await sharp(input)
 .ensureAlpha()
 .raw()
 .toBuffer({ resolveWithObject: true })

 const { width, height } = info
 const pixels = new Uint8Array(data)
 const total = width * height
 const background = new Uint8Array(total)
 const queue = []

 const index = (x, y) => (y * width + x) * 4
 const cell = (x, y) => y * width + x

 for (let x = 0; x < width; x += 1) {
 for (const y of [0, height - 1]) {
 const i = cell(x, y)
 const p = index(x, y)
 if (isBackgroundSeed(pixels[p], pixels[p + 1], pixels[p + 2])) {
 background[i] = 1
 queue.push(i)
 }
 }
 }

 for (let y = 0; y < height; y += 1) {
 for (const x of [0, width - 1]) {
 const i = cell(x, y)
 if (background[i]) continue
 const p = index(x, y)
 if (isBackgroundSeed(pixels[p], pixels[p + 1], pixels[p + 2])) {
 background[i] = 1
 queue.push(i)
 }
 }
 }

 while (queue.length > 0) {
 const i = queue.pop()
 const x = i % width
 const y = (i - x) / width

 for (const [nx, ny] of [
 [x - 1, y],
 [x + 1, y],
 [x, y - 1],
 [x, y + 1],
 ]) {
 if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue
 const ni = cell(nx, ny)
 if (background[ni]) continue

 const p = index(nx, ny)
 const r = pixels[p]
 const g = pixels[p + 1]
 const b = pixels[p + 2]

 if (isBackgroundNeighbor(r, g, b)) {
 background[ni] = 1
 queue.push(ni)
 }
 }
 }

 for (let i = 0; i < total; i += 1) {
 const p = i * 4
 if (background[i]) {
 pixels[p + 3] = 0
 }
 }

 const hasTransparentNeighbor = (i) => {
 const x = i % width
 const y = (i - x) / width
 for (const [nx, ny] of [
 [x - 1, y],
 [x + 1, y],
 [x, y - 1],
 [x, y + 1],
 ]) {
 if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue
 if (background[cell(nx, ny)]) return true
 }
 return false
 }

 for (let i = 0; i < total; i += 1) {
 if (background[i]) continue

 const p = i * 4
 const r = pixels[p]
 const g = pixels[p + 1]
 const b = pixels[p + 2]
 const brightness = (r + g + b) / 3
 const saturation = Math.max(r, g, b) - Math.min(r, g, b)

 if (
 hasTransparentNeighbor(i) &&
 saturation < 45 &&
 brightness > 78 &&
 brightness < 210
 ) {
 pixels[p + 3] = 0
 }
 }

 await sharp(pixels, {
 raw: { width, height, channels: 4 },
 })
 .png()
 .toFile(output)
}

async function main() {
 await mkdir(outDir, { recursive: true })

 const logoWithBg = path.join(outDir, "pkki-logo.png")
 const logoMark = path.join(outDir, "pkki-mark.png")

 await copyFile(source, logoWithBg)
 await removeBackground(source, logoMark)

 await sharp(logoWithBg).resize(32, 32).png().toFile(path.join(root, "public", "favicon.png"))
 await sharp(logoWithBg).resize(180, 180).png().toFile(path.join(root, "public", "apple-touch-icon.png"))

 console.log("Created brand assets in public/images/brand/ and favicon files in public/")
}

main().catch((error) => {
 console.error(error)
 process.exit(1)
})
