---
seo:
  title: fsbackup — ZFS-native backup for home labs
  description: ZFS-native rsync backup system with snapshot history, S3 offsite export, and a web UI. Built for home labs.
---

::u-page-hero
---
orientation: horizontal
---
#headline
ZFS-native backups

#title
Snapshot backups for your [home lab]{.text-primary}.

#description
fsbackup pulls backups from your machines over SSH, stores them as ZFS snapshots, and exports to S3. Daily, weekly, and monthly retention — all managed from a clean web UI.

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
  curl -fsSL https://raw.githubusercontent.com/fsbackup/fsbackup/main/bin/fs-install.sh | sudo bash
  ```
  :::
::

::u-page-section
#title
Everything your home lab needs

#features
  :::u-page-feature
  ---
  icon: i-lucide-layers
  ---
  #title
  ZFS snapshot history

  #description
  Each successful rsync run creates a ZFS snapshot. Daily, weekly, monthly, and annual retention — managed automatically by `fs-retention.sh`. Browse any point in time from the web UI.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-hard-drive
  ---
  #title
  Built-in mirroring

  #description
  Run a ZFS mirrored vdev and both drives are always in sync — no separate mirror job needed. Lose a disk, replace it, and ZFS resilvers automatically.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-cloud-upload
  ---
  #title
  S3 offsite export

  #description
  Encrypts and uploads weekly and monthly snapshots to S3 using age public-key encryption. Private key stays off-server. Idempotent — safe to re-run.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-monitor
  ---
  #title
  Web UI

  #description
  Browse snapshots, trigger jobs, restore files, view S3 archives, and monitor job status from a FastAPI + HTMX web interface.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-activity
  ---
  #title
  Prometheus metrics

  #description
  Emits `.prom` files for node_exporter. Track job status, snapshot counts, orphans, S3 uploads, dataset sizes, and more in Grafana.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-timer
  ---
  #title
  systemd-native scheduling

  #description
  Per-class runner timers managed by systemd. Schedules are configured in `fsbackup.conf` and applied with `fs-schedule-apply.sh` — no crontab editing required.
  :::
::

::u-page-section
#title
Three data classes, one system

#description
All class schedules, snapshot tiers, and retention periods are fully configurable to fit your home lab.

#features
  :::u-page-feature
  ---
  icon: i-lucide-database
  ---
  #title
  class1 — Application data

  #description
  Frequently changing data: app volumes, databases, personal files. Default: daily, weekly, and monthly snapshots.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-settings
  ---
  #title
  class2 — Infrastructure config

  #description
  Docker stack files, nginx, DNS zone files, and other config. Default: daily — lightweight, fast, always current.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-image
  ---
  #title
  class3 — Archives

  #description
  Large archives that change infrequently: photo libraries, video collections, media. Default: monthly snapshots.
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
  description: One installer, one config file, all your machines covered.
  ---
  :::
::
