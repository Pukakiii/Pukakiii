#!/usr/bin/env node
/**
 * Ensures `resume collection/` in the repo root is a symlink to the canonical
 * resume folder (default: ~/Documents/resume collection).
 */
import { existsSync, lstatSync, mkdirSync, readFileSync, rmSync, symlinkSync } from "node:fs"
import { homedir } from "node:os"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const linkPath = join(repoRoot, "resume collection")
const configPath = join(repoRoot, "resume.config.json")
const examplePath = join(repoRoot, "resume.config.example.json")

function expandPath(value) {
 if (value.startsWith("~/")) {
 return join(homedir(), value.slice(2))
 }
 return value
}

function resolveTargetPath() {
 if (existsSync(configPath)) {
 const config = JSON.parse(readFileSync(configPath, "utf8"))
 if (config.path) {
 return expandPath(config.path)
 }
 }

 if (existsSync(examplePath)) {
 const example = JSON.parse(readFileSync(examplePath, "utf8"))
 if (example.path) {
 return expandPath(example.path)
 }
 }

 return join(homedir(), "Documents", "resume collection")
}

function main() {
 const targetPath = resolveTargetPath()

 if (!existsSync(targetPath)) {
 console.error(`Resume folder not found: ${targetPath}`)
 console.error("Create it or set the path in resume.config.json")
 process.exit(1)
 }

 if (existsSync(linkPath)) {
 const stat = lstatSync(linkPath)
 if (stat.isSymbolicLink()) {
 const current = resolve(linkPath)
 if (current === targetPath) {
 console.log(`OK: resume collection -> ${targetPath}`)
 return
 }
 rmSync(linkPath)
 } else {
 console.error(
 "resume collection exists and is not a symlink. Move or remove it, then re-run.",
 )
 process.exit(1)
 }
 }

 mkdirSync(dirname(linkPath), { recursive: true })
 symlinkSync(targetPath, linkPath)
 console.log(`Linked resume collection -> ${targetPath}`)
}

main()
