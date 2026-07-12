import { NextResponse } from "next/server"
import { decodeEmail, decodePhoneNumber } from "@/utils/string"
import sharp from "sharp"
import VCard from "vcard-creator"

import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function GET() {
 const card = new VCard()

 card
 .addName(USER.lastName, USER.firstName)
 .addAddress(USER.address)
 .addPhoneNumber(decodePhoneNumber(USER.phoneNumberB64))
 .addEmail(decodeEmail(USER.emailB64))
 .addJobtitle(USER.jobTitle)
 .addURL(USER.website)
 .addURL(SOCIAL.linkedin.href)

 const photo = await getVCardPhoto(USER.avatar)
 if (photo) {
 card.addPhoto(photo.image, photo.mime)
 }

 return new NextResponse(card.toString(), {
 status: 200,
 headers: {
 "Content-Type": "text/x-vcard",
 "Content-Disposition": `attachment; filename=${USER.username}-vcard.vcf`,
 },
 })
}

async function getVCardPhoto(url: string) {
 try {
 const res = await fetch(url)

 if (!res.ok) {
 return null
 }

 const buffer = Buffer.from(await res.arrayBuffer())
 if (buffer.length === 0) {
 return null
 }

 const contentType = res.headers.get("Content-Type") || ""
 if (!contentType.startsWith("image/")) {
 return null
 }

 const jpegBuffer = await convertImageToJpeg(buffer)
 const image = jpegBuffer.toString("base64")

 return {
 image,
 mime: "jpeg",
 }
 } catch {
 return null
 }
}

async function convertImageToJpeg(imageBuffer: Buffer): Promise<Buffer> {
 try {
 const jpegBuffer = await sharp(imageBuffer)
 .jpeg({
 quality: 90,
 progressive: true,
 mozjpeg: true,
 })
 .toBuffer()

 return jpegBuffer
 } catch (error) {
 console.error("Error converting image to JPEG:", error)
 throw error
 }
}
