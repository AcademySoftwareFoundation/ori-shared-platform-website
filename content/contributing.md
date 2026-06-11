---
title: "Submit a Plugin"
description: "How to contribute a plugin to the Open Review Plugin Registry."
date: 2024-01-01
draft: false
showTableOfContents: true
showReadingTime: false
showDate: false
---

The Open Review Plugin Registry is community-driven. If you have written a plugin for OpenRV or xStudio and want it listed here, follow the process below.

All plugin code and registry entries live in the same repository:
[AcademySoftwareFoundation/ori-shared-platform](https://github.com/AcademySoftwareFoundation/ori-shared-platform)

> **Note:** The full review and acceptance process is still being finalized. The steps below reflect current requirements. Check back here or watch the repository for updates before submitting.

---

## Submission Process

### Step 1 — Sign the Contributor License Agreement (CLA)

Before any contribution can be accepted, you must sign the Academy Software Foundation Contributor License Agreement (CLA) via **EasyCLA**.

When you open your first Pull Request against an ASWF repository, the EasyCLA bot will automatically check your CLA status and guide you through signing if needed. Individual contributors sign on their own behalf; contributors working on behalf of a company require a Corporate CLA signed by an authorized representative.

- Individual CLA: signed directly through the EasyCLA workflow in your PR
- Corporate CLA: your company's legal representative must authorize your GitHub account via the [EasyCLA portal](https://easycla.lfx.linuxfoundation.org/)

You only need to sign the CLA once across all ASWF projects.

### Step 2 — Prepare your plugin

Structure your plugin as a directory under the correct product subdirectory in `ori-shared-platform`. Plugins are organised by host application:

- OpenRV plugins → `plugins/OpenRV/your-plugin-name/`
- xStudio plugins → `plugins/xStudio/your-plugin-name/`

All files must be present and correct before submitting. See the directory structure and file specifications below.

### Step 3 — Open a Pull Request

Fork [AcademySoftwareFoundation/ori-shared-platform](https://github.com/AcademySoftwareFoundation/ori-shared-platform), add your plugin directory under `plugins/OpenRV/` or `plugins/xStudio/`, and open a Pull Request against the `main` branch.

Your PR will be reviewed by a project committer. The review will check that your submission meets the technical and content requirements described on this page. Reviewers may request changes before approval.

### Step 4 — Committer review and merge

A committer will review your PR for:
- CLA compliance (confirmed automatically by EasyCLA)
- Correct directory structure and required files
- Quality and accuracy of the `index.md` registry entry
- Code quality and compatibility with the stated host application(s)

Once approved and merged, the registry site rebuilds automatically and your plugin card appears within minutes.

---

## Plugin Directory Structure

Each plugin lives in its own directory under the relevant product folder in `ori-shared-platform`. The directory name becomes the plugin's URL slug on this site — choose something short and descriptive.

```
ori-shared-platform/
└── plugins/
    ├── OpenRV/
    │   └── your-plugin-name/       ← OpenRV plugin directory
    │       ├── index.md            ← registry entry (required)
    │       ├── feature.svg         ← thumbnail shown on the card (required)
    │       ├── README.md           ← technical documentation (optional)
    │       └── src/                ← plugin source code
    └── xStudio/
        └── your-plugin-name/       ← xStudio plugin directory
            ├── index.md            ← registry entry (required)
            ├── feature.svg         ← thumbnail shown on the card (required)
            ├── README.md           ← technical documentation (optional)
            └── src/                ← plugin source code
```

> **Directory naming:** use lowercase letters, numbers, and hyphens only.
> Example: `color-correction-tool`, `rv-audio-sync`, `xstudio-pipeline-connector`

---

## The Registry Entry: `index.md`

`index.md` is what powers the card on this site. It must be placed at the root of your plugin directory.

### Required front matter

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
  repoPath = "plugins/OpenRV/your-plugin-name"  # or plugins/xStudio/your-plugin-name
+++
```

### Front matter fields

| Field | Required | Description |
|---|---|---|
| `title` | Yes | Display name of the plugin |
| `description` | Yes | One sentence — shown on the card and in search results |
| `date` | Yes | Release or submission date (ISO 8601) |
| `draft` | Yes | Set to `false` to publish |
| `version` | Yes | Current version string |
| `author` | Yes | Your GitHub username or full name |
| `license` | Yes | SPDX identifier, e.g. `Apache-2.0`, `MIT`, `BSD-3-Clause` |
| `host_app` | Yes | Array: `["OpenRV"]`, `["xStudio"]`, or `["OpenRV", "xStudio"]` |
| `tags` | Yes | Array of topic tags (see below) |
| `params.repoPath` | Yes | Full path to your plugin directory, e.g. `plugins/OpenRV/your-plugin-name` |

### Suggested tags

Use lowercase, hyphenated values from this list (add your own if needed):

`color` · `io` · `audio` · `pipeline` · `review` · `export` · `import`
`utility` · `workflow` · `metadata` · `conform` · `annotation` · `ui`

---

## Thumbnail Requirements

The thumbnail (`feature.svg`, `feature.png`, or `feature.jpg`) is displayed as the card image on the registry browse page.

- **Filename:** must start with `feature.` — e.g. `feature.svg`, `feature.png`, `feature.jpg`
- **Dimensions:** 16:9 ratio recommended — `1280×720` or `1920×1080`
- **Content:** show the plugin in action inside the host application
- **Format:** SVG preferred for UI mockups; PNG or JPEG for real screenshots

---

## Body Content

After the front matter, write a description of your plugin in Markdown. This content appears on the individual plugin detail page. Suggested sections:

```markdown
## Overview
What the plugin does and the problem it solves.

## Requirements
- OpenRV x.x or xStudio x.x
- Python 3.x
- Any other dependencies

## Installation
Step-by-step installation instructions.

## Usage
How to configure and use the plugin.
```

---

## Questions

Open an issue in [ori-shared-platform](https://github.com/AcademySoftwareFoundation/ori-shared-platform/issues) with the label `plugin-registry`.
