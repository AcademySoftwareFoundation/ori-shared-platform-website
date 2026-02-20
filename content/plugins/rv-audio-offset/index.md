+++
title       = "Audio Offset Tool"
description = "Precisely adjust and lock per-source audio offsets during multi-track review sessions."
date        = 2024-07-08T00:00:00Z
draft       = false

version = "1.0.3"
author  = "post-tools"
license = "Apache-2.0"

host_app = ["OpenRV", "xStudio"]
tags     = ["audio", "review", "utility"]

[params]
  repoPath = "plugins/rv-audio-offset"
+++

## Overview

Audio Offset Tool provides a simple, non-destructive way to slip audio relative to picture
in both OpenRV and xStudio. Offsets are stored per-source and survive session saves,
making it easy to share corrected sessions with your team.

## Requirements

- OpenRV 2022.x or later **or** xStudio 1.2 or later
- Python 3.9+

## Installation

### OpenRV

1. Copy `src/rv_audio_offset/` to your RV plugins folder.
2. Set `RV_SUPPORT_PATH` to include the plugin directory.
3. Restart OpenRV — find the tool under **Tools > Audio Offset**.

### xStudio

1. Copy `src/xstudio_audio_offset/` to your xStudio plugins directory.
2. Enable in **Preferences > Plugins > Audio Offset Tool**.
3. Restart xStudio.

## Usage

- Open the **Audio Offset** panel from the Tools menu
- Enter an offset in frames or milliseconds using the input field
- Click **Apply** to set the offset on the current source
- Use **Lock** to prevent accidental changes during review
- **Reset** returns the source to zero offset

## Known Limitations

- Offsets are not exported to EDL or AAF formats
- Maximum offset range is ±10,000 ms
