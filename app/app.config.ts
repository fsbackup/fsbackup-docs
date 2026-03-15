export default defineAppConfig({
  ui: {
    colors: {
      primary: 'orange',
      neutral: 'zinc'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'fsbackup'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: 'fsbackup',
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/fsbackup/fsbackup',
      'target': '_blank',
      'aria-label': 'fsbackup on GitHub'
    }]
  },
  footer: {
    credits: `© ${new Date().getFullYear()} Ian Kluhsman — MIT License`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/fsbackup/fsbackup',
      'target': '_blank',
      'aria-label': 'fsbackup on GitHub'
    }, {
      'icon': 'i-lucide-heart',
      'label': 'Sponsor',
      'to': 'https://github.com/sponsors/ikluhsman',
      'target': '_blank',
      'aria-label': 'Sponsor on GitHub'
    }]
  },
  toc: {
    title: 'On this page',
    bottom: {
      title: 'Resources',
      edit: 'https://github.com/fsbackup/fsbackup/edit/main/docs',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/fsbackup/fsbackup',
        target: '_blank'
      }, {
        icon: 'i-lucide-message-circle',
        label: 'Discussions',
        to: 'https://github.com/fsbackup/fsbackup/discussions',
        target: '_blank'
      }]
    }
  }
})
