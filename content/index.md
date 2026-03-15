---
seo:
  title: fsbackup — Rsync snapshot backup for home labs
  description: Docker-native rsync backup system with snapshot tiers, S3 offsite export, and a web UI. Built for home labs.
---

::u-page-hero
---
orientation: horizontal
---
#headline
Frozen snapshot backups

#title
Snapshot backups for your [home lab]{.text-primary}.

#description
fsbackup is an rsync-based snapshot backup system that runs in Docker. Take daily snapshots over SSH, mirror to a second drive, export to S3, and manage everything from a clean web UI.

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/fsbackup/fsbackup
  target: _blank
  ---
  View on GitHub
  :::

#default
  :::prose-pre
  ---
  filename: terminal
  ---
  ```bash
  docker pull ghcr.io/fsbackup/fsbackup:latest
  ```
  :::
::

::u-page-section
#title
Everything your home lab needs

#features
  :::u-page-feature
  ---
  icon: i-lucide-camera
  ---
  #title
  Snapshot tiers

  #description
  Daily, weekly, monthly, and annual snapshot tiers with automatic promotion. Snapshots are incremental via rsync `--link-dest`.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-hard-drive
  ---
  #title
  Mirror to a second drive

  #description
  Automatically mirrors primary snapshots to a secondary drive. Configurable per data class — large archives can be excluded to save space.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-cloud-upload
  ---
  #title
  S3 offsite export

  #description
  Encrypts and uploads weekly, monthly, and annual snapshots to S3 using age public-key encryption. Private key stays off-server.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-monitor
  ---
  #title
  Web UI

  #description
  Browse snapshots, run jobs manually, restore files, and monitor job status from a FastAPI + HTMX web interface.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-activity
  ---
  #title
  Prometheus metrics

  #description
  Emits `.prom` files for node_exporter. Track job status, snapshot counts, orphans, S3 uploads, and more in Grafana.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-container
  ---
  #title
  Docker-native

  #description
  Runs as a single Docker container. supercronic handles scheduling — no systemd required. Pull from ghcr.io and go.
  :::
::

::u-page-section
#title
Three data classes, one system

#features
  :::u-page-feature
  ---
  icon: i-lucide-database
  ---
  #title
  class1 — Application data

  #description
  Frequently changing data: app volumes, databases, personal files. Backed up daily with the full snapshot tier stack.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-settings
  ---
  #title
  class2 — Infrastructure config

  #description
  Docker stack files, nginx, DNS zone files, and other config. Daily backups — lightweight, fast, always current.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-image
  ---
  #title
  class3 — Archives

  #description
  Large archives that change infrequently: photo libraries, video collections, media. Runs monthly. Mirroring is optional — exclude large archives to save secondary drive space.
  :::
::

::u-page-section
  :::u-page-c-t-a
  ---
  links:
    - label: Get started
      to: '/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: View on GitHub
      to: 'https://github.com/fsbackup/fsbackup'
      target: _blank
      variant: subtle
      icon: i-simple-icons-github
  title: Ready to back up your home lab?
  description: One container, one config file, all your machines covered.
  ---
  :::
::
