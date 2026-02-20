+++
title       = "xStudio ShotGrid Sync"
description = "Bidirectional sync between xStudio review sessions and ShotGrid/Flow Production Tracking."
date        = 2024-05-22T00:00:00Z
draft       = false

version = "0.9.1"
author  = "pipeline-tools-org"
license = "MIT"

host_app = ["xStudio"]
tags     = ["pipeline", "metadata", "workflow"]

[params]
  repoPath = "plugins/xstudio-shotgrid-sync"
+++

## Overview

xStudio ShotGrid Sync connects your xStudio review sessions directly to ShotGrid
(now Autodesk Flow Production Tracking). Load playlists from ShotGrid, submit notes back,
and update version statuses — all without leaving xStudio.

## Requirements

- xStudio 2.x or later
- Python 3.10+
- ShotGrid Python API (`shotgun_api3`)
- A valid ShotGrid site URL and script credentials

## Installation

1. Install the ShotGrid Python API: `pip install shotgun_api3`
2. Copy `xstudio-shotgrid-sync/src/` to your xStudio plugins directory.
3. Add your ShotGrid credentials to `config/shotgrid.yaml`:
   ```yaml
   site_url: "https://yoursite.shotgridstudio.com"
   script_name: "xstudio_sync"
   api_key: "your_api_key_here"
   ```
4. Enable the plugin in xStudio under **Preferences > Plugins**.

## Usage

- **Load Playlist:** Use the **ShotGrid** menu → **Load Playlist** to browse and open any ShotGrid playlist
- **Submit Notes:** After adding notes in xStudio, click **ShotGrid** → **Push Notes** to publish them
- **Update Status:** Right-click any version → **Set Status** to update the ShotGrid version status

## Known Limitations

- Note attachments (images, PDFs) are not yet supported
- Requires network access to the ShotGrid site at all times
