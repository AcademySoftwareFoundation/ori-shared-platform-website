---
title: "Submit a Plugin"
description: "How to list your plugin in the Open Review Plugin Registry."
date: 2024-01-01
draft: false
showTableOfContents: true
showReadingTime: false
showDate: false
---

The Open Review Plugin Registry is a **discovery site** — it links to community plugins hosted in their own GitHub repositories. The registry itself does not host source code. To list your plugin, you submit a small registry entry (two files) as a Pull Request to:

[AcademySoftwareFoundation/ori-shared-platform](https://github.com/AcademySoftwareFoundation/ori-shared-platform)

Before submitting, review the [acceptance criteria](https://github.com/AcademySoftwareFoundation/ori-shared-platform/blob/main/ACCEPTANCE-CRITERIA.md) to confirm your plugin is eligible.

---

## Create a listing

### Step 1 — Sign the CLA

Before any contribution can be accepted, you must sign the Academy Software Foundation Contributor License Agreement via **EasyCLA**.

When you open your first Pull Request against an ASWF repository, the EasyCLA bot checks your status automatically and guides you through signing if needed. Individual contributors sign directly; contributors acting on behalf of a company require a Corporate CLA authorised by a company representative via the [EasyCLA portal](https://easycla.lfx.linuxfoundation.org/).

You only need to sign the CLA once across all ASWF projects.

### Step 2 — Host your plugin on GitHub

Your plugin source code must live in a **public GitHub repository** that you own or maintain. The registry links to it — reviewers, users, and the automated metrics fetch all read from that repository directly.

- Any repository visibility other than public is not supported.
- The repository must contain an open-source licence file (e.g. `LICENSE` or `LICENSE.txt`).

### Step 3 — Prepare your registry entry

Fork [AcademySoftwareFoundation/ori-shared-platform](https://github.com/AcademySoftwareFoundation/ori-shared-platform) and create a directory for your plugin under the correct product folder:

- OpenRV plugins → `plugins/OpenRV/your-plugin-name/`
- xStudio plugins → `plugins/xStudio/your-plugin-name/`

> **Directory naming:** use lowercase letters, numbers, and hyphens only.
> Example: `color-correction-tool`, `rv-audio-sync`, `xstudio-pipeline-connector`

Your directory must contain exactly two files:

```
plugins/
└── OpenRV/
    └── your-plugin-name/
        ├── index.md       ← registry entry (required)
        └── feature.svg    ← thumbnail shown on the card (required)
```

### Step 4 — Write `index.md`

`index.md` is what powers the plugin card on this site. See the [registry entry reference](#the-registry-entry-indexmd) below for the full schema.

### Step 5 — Open a Pull Request

Open a PR from your fork against the `main` branch of `ori-shared-platform`. Your PR should add only the two files for your plugin — no source code.

A committer will review your PR for:
- CLA compliance (confirmed automatically by EasyCLA)
- Correct directory structure (two files only)
- Valid `index.md` schema — `repoUrl` pointing at a live, public GitHub repository
- Thumbnail present and legible at card size

Once approved and merged, the registry site rebuilds automatically and your plugin card appears **within minutes**.

---

## Update a listing

To update your plugin's metadata (description, version, tags, thumbnail), open a PR that modifies the files inside your plugin directory. Because you are listed as the **CODEOWNER** of your directory, GitHub will automatically request your review on any PR that touches it — including your own updates.

> **CODEOWNERS enforcement** requires a one-time admin action to enable "Require review from Code Owners" in branch protection (tracked in [ori-shared-platform#61](https://github.com/AcademySoftwareFoundation/ori-shared-platform/issues/61)).

---

## Remove a listing

To remove your plugin from the registry, open a PR that deletes your plugin directory (`plugins/OpenRV/your-plugin-name/` or `plugins/xStudio/your-plugin-name/`). A committer will approve and merge.

Removing a listing does not affect your source repository — only the registry entry is deleted.

---

## The registry entry: `index.md`

### Front matter

```toml
+++
title       = "Your Plugin Name"
description = "A one-sentence summary shown on the plugin card."
date        = 2024-06-15T00:00:00Z
draft       = false

version = "1.0.0"
author  = "your-github-username"
license = "Apache-2.0"

host_app = ["OpenRV"]          # "OpenRV", "xStudio", or both
tags     = ["color", "utility"] # see tag list below

[params]
  repoUrl   = "https://github.com/your-username/your-repo"
  repoOwner = "your-github-username"
+++
```

### Front matter fields

| Field | Required | Description |
|---|---|---|
| `title` | Yes | Display name shown on the card |
| `description` | Yes | One sentence — shown on the card and in search |
| `date` | Yes | Release or submission date (ISO 8601) |
| `draft` | Yes | Set to `false` to publish |
| `version` | Yes | Current version string |
| `author` | Yes | Your GitHub username |
| `license` | Yes | SPDX identifier — e.g. `Apache-2.0`, `MIT`, `BSD-3-Clause` |
| `host_app` | Yes | `["OpenRV"]`, `["xStudio"]`, or `["OpenRV", "xStudio"]` |
| `tags` | Yes | Array of topic tags (see below) |
| `params.repoUrl` | Yes | Full URL of your public GitHub repository |
| `params.repoOwner` | Yes | GitHub username or org that owns the repository |

### Suggested tags

`color` · `io` · `audio` · `pipeline` · `review` · `export` · `import`
`utility` · `workflow` · `metadata` · `conform` · `annotation` · `ui`

---

## Thumbnail requirements

The thumbnail (`feature.svg`, `feature.png`, or `feature.jpg`) is displayed as the card image on the registry browse page.

- **Filename:** must start with `feature.` — e.g. `feature.svg`
- **Dimensions:** 16:9 ratio — `1280×720` or `1920×1080` recommended
- **Content:** show the plugin in context inside the host application
- **Format:** SVG preferred for UI mockups; PNG or JPEG for real screenshots

---

## Body content

After the front matter, write a description of your plugin in Markdown. This content appears on the plugin detail page. Suggested sections:

```markdown
## Overview
What the plugin does and the problem it solves.

## Requirements
Host application version, Python version, OS support.

## Installation
Step-by-step instructions.

## Usage
How to configure and run the plugin.
```

---

## Questions

Open an issue in [ori-shared-platform](https://github.com/AcademySoftwareFoundation/ori-shared-platform/issues) with the label `plugin-registry`.
