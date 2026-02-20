+++
title       = "RV LUT Manager"
description = "Load, organize, and hot-swap LUTs inside OpenRV with a dockable panel interface."
date        = 2024-03-15T00:00:00Z
draft       = false

version = "1.2.0"
author  = "vfx-pipeline"
license = "Apache-2.0"

host_app = ["OpenRV"]
tags     = ["color", "utility", "ui"]

[params]
  repoPath = "plugins/rv-lut-manager"
+++

## Overview

RV LUT Manager adds a persistent dockable panel to OpenRV that lets colorists and artists manage
their LUT library without leaving the review session. Supports .cube, .3dl, and .csp formats.
Apply LUTs per-shot or globally across the entire session with a single click.

## Requirements

- OpenRV 2023.x or later
- Python 3.9+

## Installation

1. Clone or download the plugin directory from the repository.
2. Copy the `rv-lut-manager/src/` directory to your RV plugins folder.
3. Set the `RV_SUPPORT_PATH` environment variable to include the plugin directory.
4. Restart OpenRV — the LUT Manager panel will appear under **Views > LUT Manager**.

## Usage

- Open the panel from **Views > LUT Manager**
- Click **Add LUT** to browse for `.cube`, `.3dl`, or `.csp` files
- Double-click any LUT in the list to apply it to the active source
- Use the **Session** toggle to apply the selected LUT globally

## Known Limitations

- Does not yet support 1D LUTs
- LUT lists are not persisted between sessions (planned for v1.3)
