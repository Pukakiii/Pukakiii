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
    CondPageBreak,
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
pdfmetrics.registerFont(TTFont("GeistMonoMedium", FONT_DIR / "GeistMono-Medium.ttf"))
pdfmetrics.registerFont(TTFont("GeistMonoSemiBold", FONT_DIR / "GeistMono-SemiBold.ttf"))
# Subset carrying only P, K and I — just enough for the PKKI wordmark.
pdfmetrics.registerFont(TTFont("Silkscreen", FONT_DIR / "Silkscreen-Bold-subset.ttf"))

# Palette sampled from the pkki letterhead; see /Users/pukaki/Documents/pkki_template.
PAPER = HexColor("#FAF9F6")
INK = HexColor("#111110")
MUTED = HexColor("#A3A39E")
LINE = MUTED

# Letterhead geometry, read out of pkki_template.pdf (A4, 595.28 x 842 pt).
RULE_LEFT = 33.36
RULE_RIGHT = 561.86
RULE_TOP = 808.64
RULE_BOTTOM = 33.51
RULE_WIDTH = 0.75
MARGIN = 46.5           # content inset; aligns with the wordmark's left edge
WORDMARK_BASELINE = 815.0
WORDMARK_SIZE = 28.5
WORDMARK_TRACKING = 27.2
FOOTER_URL = "https://pukaki.vercel.app"


def styles():
    return {
        "name": ParagraphStyle(
            "Name",
            fontName="GeistMonoSemiBold",
            fontSize=17,
            leading=21,
            textColor=INK,
            charSpace=1.6,
        ),
        "contact": ParagraphStyle(
            "Contact", fontName="GeistMono", fontSize=7.2, leading=10.5, textColor=MUTED
        ),
        "section": ParagraphStyle(
            "Section",
            fontName="GeistMonoSemiBold",
            fontSize=8.8,
            leading=12,
            textColor=INK,
            charSpace=1.8,
            spaceBefore=8,
            spaceAfter=4,
        ),
        "role": ParagraphStyle(
            "Role", fontName="GeistMonoSemiBold", fontSize=8.4, leading=11.5, textColor=INK
        ),
        "meta": ParagraphStyle(
            "Meta", fontName="GeistMono", fontSize=7, leading=10, textColor=MUTED
        ),
        "body": ParagraphStyle(
            "Body", fontName="GeistMono", fontSize=7.6, leading=11.2, textColor=INK
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            fontName="GeistMono",
            fontSize=7.4,
            leading=10.8,
            leftIndent=9,
            firstLineIndent=-6,
            bulletIndent=0,
            textColor=INK,
            spaceAfter=1.6,
        ),
        "small": ParagraphStyle(
            "Small", fontName="GeistMono", fontSize=7, leading=10, textColor=MUTED
        ),
    }


S = styles()


def section(title):
    return [
        # Never leave a heading stranded with nothing under it.
        CondPageBreak(32 * mm),
        Spacer(1, 2 * mm),
        Table(
            [[Paragraph(title.upper(), S["section"]), ""]],
            colWidths=[80 * mm, 97 * mm],
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
        colWidths=[132 * mm, 45 * mm],
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


def page_furniture(canvas, doc):
    """Paint the pkki letterhead: paper, frame rules, wordmark, footer URL."""
    canvas.saveState()

    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, A4[0], A4[1], stroke=0, fill=1)

    canvas.setStrokeColor(MUTED)
    canvas.setLineWidth(RULE_WIDTH)
    canvas.line(0, RULE_TOP, A4[0], RULE_TOP)
    canvas.line(0, RULE_BOTTOM, A4[0], RULE_BOTTOM)
    canvas.line(RULE_LEFT, 0, RULE_LEFT, A4[1])
    canvas.line(RULE_RIGHT, 0, RULE_RIGHT, A4[1])

    canvas.setFillColor(MUTED)
    canvas.setFont("Silkscreen", WORDMARK_SIZE)
    x = MARGIN
    for letter in "PKKI":
        canvas.drawString(x, WORDMARK_BASELINE, letter)
        x += WORDMARK_TRACKING

    canvas.setFont("GeistMono", 7.4)
    canvas.drawCentredString(A4[0] / 2, 15.5, FOOTER_URL)
    if doc.page > 1:
        canvas.drawRightString(RULE_RIGHT - 13, 15.5, str(doc.page))

    canvas.restoreState()


def build_story():
    story = [
        Paragraph("IGOR PUKALSKI", S["name"]),
        Spacer(1, 2.5 * mm),
        Paragraph(
            "+48 789 191 644  ·  pkki.ip.work@gmail.com  ·  Warsaw, Poland  ·  "
            "github.com/Pukakiii  ·  linkedin.com/in/00me",
            S["contact"],
        ),
    ]

    story += section("Profile")
    story.append(
        Paragraph(
            "Fullstack developer and University of Warsaw student in Artificial Intelligence "
            "and Cognitive Science. Most recently led a four-developer team building JobAgent "
            "across architecture, frontend, backend, UI/UX, QA, and documentation, after a "
            "production frontend role at Flowtly and an earlier background in creative production. "
            "Also coaches youth football in Warsaw, currently running the 2016–2017 age "
            "groups, alongside 20+ individual players.",
            S["body"],
        )
    )

    story += section("Selected Experience")
    story += [
        role(
            "Team Lead / Fullstack Developer",
            "JobAgent · Freelance",
            "Apr 2026 – Jul 2026",
            "Remote",
            [
                "Led a four-developer team and owned technical direction, architecture, and cross-functional delivery.",
                "Shipped frontend, backend integration, authentication, state management, responsive UI, accessibility, testing, and documentation.",
            ],
        ),
        role(
            "Youth Football Coach",
            "Lider Wilanów · Part-time",
            "Sep 2026 – Present",
            "Wilanów, Warsaw, Poland",
            [
                "Coach groups of 8–15 players born in 2016–2017 through the full in-season weekly cycle.",
                "Plan and deliver complete sessions covering first touch, dribbling, passing, finishing, weaker-foot work, and age-appropriate game understanding.",
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
        rightMargin=MARGIN,
        leftMargin=MARGIN,
        topMargin=A4[1] - RULE_TOP + 16,
        bottomMargin=RULE_BOTTOM + 16,
        title="Igor Pukalski CV",
        author="Igor Pukalski",
    )
    doc.build(build_story(), onFirstPage=page_furniture, onLaterPages=page_furniture)
    CANONICAL_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    copy2(PUBLIC_OUTPUT, CANONICAL_OUTPUT)
    print(f"Generated {PUBLIC_OUTPUT}")
    print(f"Synced {CANONICAL_OUTPUT}")


if __name__ == "__main__":
    main()
