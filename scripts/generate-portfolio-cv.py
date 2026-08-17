#!/usr/bin/env python3
"""Generate the public, general-purpose portfolio CV from verified profile facts."""

from pathlib import Path
from shutil import copy2

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_OUTPUT = ROOT / "public" / "Igor_Pukalski_CV.pdf"
CANONICAL_OUTPUT = ROOT / "resume collection" / "applications" / "Igor_Pukalski_CV.pdf"
FONT_DIR = ROOT / "src" / "assets" / "fonts"

pdfmetrics.registerFont(TTFont("Geist", FONT_DIR / "Geist-Medium.ttf"))
pdfmetrics.registerFont(TTFont("GeistSemiBold", FONT_DIR / "Geist-SemiBold.ttf"))
pdfmetrics.registerFont(TTFont("GeistMono", FONT_DIR / "GeistMono-Regular.ttf"))

INK = HexColor("#18181B")
MUTED = HexColor("#5F6068")
LINE = HexColor("#D9D9DE")


def styles():
    return {
        "name": ParagraphStyle(
            "Name", fontName="GeistSemiBold", fontSize=24, leading=27, textColor=INK
        ),
        "contact": ParagraphStyle(
            "Contact", fontName="GeistMono", fontSize=7.8, leading=11, textColor=MUTED
        ),
        "section": ParagraphStyle(
            "Section",
            fontName="GeistSemiBold",
            fontSize=10.5,
            leading=13,
            textColor=INK,
            spaceBefore=9,
            spaceAfter=5,
        ),
        "role": ParagraphStyle(
            "Role", fontName="GeistSemiBold", fontSize=9.5, leading=12, textColor=INK
        ),
        "meta": ParagraphStyle(
            "Meta", fontName="GeistMono", fontSize=7.6, leading=10, textColor=MUTED
        ),
        "body": ParagraphStyle(
            "Body", fontName="Geist", fontSize=8.4, leading=11.5, textColor=INK
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            fontName="Geist",
            fontSize=8.2,
            leading=11.2,
            leftIndent=9,
            firstLineIndent=-6,
            bulletIndent=0,
            textColor=INK,
            spaceAfter=1.5,
        ),
        "small": ParagraphStyle(
            "Small", fontName="Geist", fontSize=7.4, leading=10, textColor=MUTED
        ),
    }


S = styles()


def section(title):
    return [
        Spacer(1, 2 * mm),
        Table(
            [[Paragraph(title.upper(), S["section"]), ""]],
            colWidths=[75 * mm, 95 * mm],
            hAlign="LEFT",
            style=TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                    ("LINEBELOW", (0, 0), (-1, -1), 0.6, LINE),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                ]
            ),
        ),
        Spacer(1, 3 * mm),
    ]


def role(title, organization, period, location, bullets):
    header = Table(
        [
            [Paragraph(title, S["role"]), Paragraph(period, S["meta"])],
            [Paragraph(organization, S["body"]), Paragraph(location, S["meta"])],
        ],
        colWidths=[128 * mm, 42 * mm],
        style=TableStyle(
            [
                ("ALIGN", (1, 0), (1, -1), "RIGHT"),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
            ]
        ),
    )
    content = [header, Spacer(1, 1.5 * mm)]
    content.extend(Paragraph(f"• {item}", S["bullet"]) for item in bullets)
    content.append(Spacer(1, 2.5 * mm))
    return KeepTogether(content)


def page_number(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(18 * mm, 13 * mm, 192 * mm, 13 * mm)
    canvas.setFont("GeistMono", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 8.5 * mm, "IGOR PUKALSKI")
    canvas.drawRightString(192 * mm, 8.5 * mm, f"PAGE {doc.page}")
    canvas.restoreState()


def build_story():
    story = [
        Paragraph("IGOR PUKALSKI", S["name"]),
        Spacer(1, 2.5 * mm),
        Paragraph(
            "+48 789 191 644  ·  pukaki.ip@gmail.com  ·  Warsaw, Poland  ·  "
            "github.com/Pukakiii  ·  linkedin.com/in/00me",
            S["contact"],
        ),
    ]

    story += section("Profile")
    story.append(
        Paragraph(
            "Fullstack developer and University of Warsaw student in Artificial Intelligence "
            "and Cognitive Science. Leads a four-developer team building JobAgent across "
            "architecture, frontend, backend, UI/UX, QA, and documentation. Former production "
            "frontend engineer at Flowtly, with an earlier background in creative production. "
            "Also provides private football coaching and has worked with 20+ players.",
            S["body"],
        )
    )

    story += section("Selected Experience")
    story += [
        role(
            "Team Lead / Fullstack Developer",
            "JobAgent · Freelance",
            "Apr 2026 – Present",
            "Remote",
            [
                "Lead a four-developer team and own technical direction, architecture, and cross-functional delivery.",
                "Ship frontend, backend integration, authentication, state management, responsive UI, accessibility, testing, and documentation.",
            ],
        ),
        role(
            "Private Football Coach",
            "Private Clients · Paid freelance",
            "2024 – Present",
            "Warsaw, Poland",
            [
                "Deliver personalized one-to-one coaching for 20+ players across age groups and ability levels.",
                "Develop ball mastery, first touch, dribbling, passing, finishing, weaker-foot ability, coordination, speed, agility, and decision-making.",
            ],
        ),
        role(
            "Youth Football Coach Intern",
            "Shakhtar Academy Warsaw",
            "Jul – Aug 2026",
            "Warsaw, Poland",
            [
                "Independently planned and led sessions for groups of 8–12 children born in 2020–2021.",
                "Managed age-appropriate technical work, small-sided games, group rotations, equipment, discipline, and player safety.",
            ],
        ),
        role(
            "Frontend Engineer",
            "Flowtly",
            "Jun 2025 – Jul 2026",
            "Remote",
            [
                "Built accessible production UI in React 18 and TypeScript with MUI, Emotion, Redux Toolkit, RTK Query, and Redux Saga.",
                "Delivered complex forms, multilingual UI, charts, scheduling views, and automated tests with Jest, Cypress, and Playwright.",
            ],
        ),
        role(
            "Creative Producer / Multimedia Project Manager",
            "Dreampire · Part-time",
            "2021 – 2024",
            "Serock, Poland",
            [
                "Led branding, web, video, photography, and print projects from client briefing through final delivery.",
                "Coordinated creative workflows for corporate clients, foundations, public institutions, and educational initiatives.",
            ],
        ),
    ]

    story += section("Education")
    story += [
        role(
            "BSc Artificial Intelligence and Cognitive Science",
            "University of Warsaw",
            "2026 – Present",
            "Warsaw, Poland",
            [
                "Interdisciplinary study combining artificial intelligence, computer science, mathematics, and cognition.",
            ],
        ),
        role(
            "Liceum (High School)",
            "Polish Matura",
            "Graduated 2025",
            "Poland",
            [
                "Advanced Mathematics 88%; English 97% speaking and 93% written; Informatics 66%.",
            ],
        ),
        role(
            "Technik Reklamy (Advertising Technician)",
            "Technikum im. Bolesława Prusa",
            "2020 – 2024",
            "Pułtusk, Poland",
            [
                "Advertising, marketing, graphic design, print production, prepress, photography, and multimedia.",
            ],
        ),
    ]

    story += section("Core Skills")
    skill_rows = [
        ("Software", "TypeScript, JavaScript, React, Redux, Next.js, Node.js, Python, FastAPI, SQL"),
        ("Engineering", "API integration, typed state, accessible UI, testing, CI/CD, Docker, Git/GitHub"),
        ("AI", "Agent workflows, Claude, Cursor, Ollama, ML basics, LLM fundamentals"),
        ("Coaching", "Session planning, youth coaching, individual development, technical demonstrations, player observation, safety"),
        ("Design", "UX/UI, Figma, Photoshop, Illustrator, After Effects, branding, photo and video production"),
    ]
    story.append(
        Table(
            [[Paragraph(a, S["role"]), Paragraph(b, S["body"])] for a, b in skill_rows],
            colWidths=[31 * mm, 139 * mm],
            style=TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LINEBELOW", (0, 0), (-1, -2), 0.35, LINE),
                    ("TOPPADDING", (0, 0), (-1, -1), 3),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                ]
            ),
        )
    )

    story += section("Certifications & Awards")
    certifications = [
        "Introduction to the UEFA C Coaching Course — PZPN, Aug 2026",
        "Child Safety in Football — PZPN, Aug 2026",
        "Football Animator — PZPN, Aug 2026",
        "9th place, #MłodyInformatyk competition — SAN, Mar 2026",
        "Front-End Engineer Path and UX/UI Design Certificate — Codecademy",
        "Web Services & Mobile Application Programming — IBS, May 2023",
        "Polish Language C1 — State Certificate",
    ]
    story.extend(Paragraph(f"• {item}", S["bullet"]) for item in certifications)

    story += section("Languages")
    story.append(
        Paragraph(
            "Polish — Native / C1 certificate  ·  Ukrainian — Native  ·  Russian — Native  ·  "
            "English — C1  ·  Italian — A2",
            S["body"],
        )
    )
    story.append(Spacer(1, 6 * mm))
    story.append(
        Paragraph(
            "I agree to the processing of personal data provided in this document for the purposes of recruitment in accordance with applicable data-protection law.",
            S["small"],
        )
    )
    return story


def main():
    PUBLIC_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(PUBLIC_OUTPUT),
        pagesize=A4,
        rightMargin=18 * mm,
        leftMargin=18 * mm,
        topMargin=15 * mm,
        bottomMargin=18 * mm,
        title="Igor Pukalski CV",
        author="Igor Pukalski",
    )
    doc.build(build_story(), onFirstPage=page_number, onLaterPages=page_number)
    CANONICAL_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    copy2(PUBLIC_OUTPUT, CANONICAL_OUTPUT)
    print(f"Generated {PUBLIC_OUTPUT}")
    print(f"Synced {CANONICAL_OUTPUT}")


if __name__ == "__main__":
    main()
