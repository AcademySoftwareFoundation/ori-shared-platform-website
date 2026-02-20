+++
# ---------------------------------------------------------------------------
# Required fields
# ---------------------------------------------------------------------------
title       = "{{ replace .File.ContentBaseName "-" " " | title }}"
description = "A one-sentence summary shown on the plugin card."
date        = {{ .Date }}
draft       = true

# ---------------------------------------------------------------------------
# Plugin metadata
# ---------------------------------------------------------------------------
version = "1.0.0"
author  = "your-github-username"
license = "Apache-2.0"   # e.g. Apache-2.0, MIT, BSD-3-Clause

# ---------------------------------------------------------------------------
# Taxonomies — controls which filter pages this plugin appears on
# Use exactly: "OpenRV", "xStudio", or both
# ---------------------------------------------------------------------------
host_app = ["OpenRV"]

# Freeform topic tags (lowercase, hyphenated)
# Examples: color, io, audio, utility, workflow, pipeline, review
tags = []

# ---------------------------------------------------------------------------
# Link back to this plugin's directory in the main repository
# Set to the path of your plugin folder within ori-shared-platform
# ---------------------------------------------------------------------------
[params]
  repoPath = "plugins/{{ .File.ContentBaseName }}"
+++

<!--
  Write a fuller description of your plugin here.
  This content appears on the individual plugin detail page.

  Suggested sections:
  - What the plugin does
  - Requirements (Python version, host app version, dependencies)
  - Installation steps
  - Usage / configuration
  - Known limitations
-->

## Overview

Describe what this plugin does and the problem it solves.

## Requirements

- OpenRV x.x or xStudio x.x
- Python 3.x
- Any other dependencies

## Installation

Step-by-step instructions for installing the plugin.

## Usage

How to configure and use the plugin once installed.
