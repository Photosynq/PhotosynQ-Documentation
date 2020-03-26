module.exports = {
    title: 'PhotosynQ Documentation',
    description: 'Documentation on how to use the PhotosynQ platform, including the web, mobile and desktop applications as well as the instruments.',
    head: [
        ['link', { rel: 'icon', href: '/icons/favicon-32x32.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css' }]
    ],
    base: '/',
    home: true,
    locales: {
        '/': {
            lang: 'en-US',
            title: 'PhotosynQ Documentation',
            description: 'Documentation on how to use the PhotosynQ platform, including the web, mobile and desktop applications as well as the instruments.'
        }
    },
    markdown: {
        lineNumbers: true,
        externalLinks: { target: '_blank', rel: 'noopener noreferrer' },
        toc: { includeLevel: [2, 3] },
        extendMarkdown: md => {
            md.set({ breaks: true });
            md.use(require('markdown-it-katex'));
            md.use(require('markdown-it-mermaid').default);
        }
    },
    extend: '@vuepress/theme-default',
    themeConfig: {
        logo: '/logo.svg',
        nav: [
            {
                text: 'Documents',
                items: [
                    {
                        text: 'Documents (PDF)',
                        items: [
                            { text: 'Help Manual', link: 'https://help.photosynq.org/downloads/PhotosynQ-Help-Manual.pdf' },
                            { text: 'Tutorials', link: 'https://help.photosynq.org/downloads/PhotosynQ-Getting-Started.pdf' },
                            { text: 'MultispeQ v1.0', link: 'https://help.photosynq.org/downloads/PhotosynQ-MultispeQ-v1.0.pdf' },
                            { text: 'MultispeQ v2.0', link: 'https://help.photosynq.org/downloads/PhotosynQ-MultispeQ-v2.0.pdf' },
                            { text: 'CaliQ', link: 'https://help.photosynq.org/downloads/PhotosynQ-CaliQ.pdf' }
                        ]
                    },
                    {
                        text: 'E-Books (epub)',
                        items: [
                            { text: 'Full Documentation', link: 'https://help.photosynq.org/downloads/PhotosynQ-Documentation.epub' }
                        ]
                    }
                ]
            },
            {
                text: 'More',
                items: [
                    {
                        text: 'Resources',
                        items: [
                            { text: 'Forums', link: 'https://photosynq.org/forums' }
                        ]
                    },
                    {
                        text: 'Firmware',
                        items: [
                            { text: 'Latest Firmware', link: 'https://github.com/Photosynq/MultispeQ-Firmware/releases/latest' },
                            { text: 'Changelog', link: 'https://github.com/Photosynq/MultispeQ-Firmware/releases' }
                        ]
                    },
                    {
                        text: 'Documentation',
                        items: [
                            { text: 'Contribute', link: 'https://github.com/Photosynq/PhotosynQ-Documentation/blob/master/contributing.md' },
                            { text: 'Changelog', link: 'https://github.com/photosynq/PhotosynQ-Documentation/releases' }
                        ]
                    }
                ]
            },
            { text: 'PhotosynQ', link: 'https://photosynq.org' }
        ],
        sidebar: [
            '/',
            {
                title: 'Getting Started',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'getting-started/what-is-photosynq',
                    'getting-started/photosynq-glossary'
                ]
            },
            {
                title: 'Account',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'account/create-an-account',
                    'account/edit-your-profile',
                    'account/manage-your-password',
                    'account/sign-in-to-photosynq',
                    'account/change-your-email-address',
                    'account/your-subscriptions',
                    'account/project-invitations',
                    'account/sign-out-of-photosynq',
                    'account/deactivate-an-account'
                ]
            },
            {
                title: 'Mobile Application',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'mobile-application/photosynq-for-android',
                    'mobile-application/installation',
                    'mobile-application/general',
                    'mobile-application/connect-an-instrument',
                    'mobile-application/settings',
                    'mobile-application/projects',
                    'mobile-application/discover',
                    'mobile-application/quick-measurements',
                    'mobile-application/measurements',
                    'mobile-application/adding-notes-and-pictures'
                ]
            },
            {
                title: 'Desktop Application',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'desktop-application/installation',
                    'desktop-application/general',
                    'desktop-application/connect-an-instrument',
                    'desktop-application/settings',
                    'desktop-application/projects',
                    'desktop-application/adding-notes-and-pictures',
                    'desktop-application/notebook',
                    'desktop-application/protocols',
                    'desktop-application/macros',
                    'desktop-application/protocol-editor',
                    'desktop-application/macro-editor',
                    'desktop-application/console'
                ]
            },
            {
                title: 'Projects',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'projects/what-are-projects',
                    'projects/join-a-project',
                    'projects/create-a-new-project',
                    'projects/select-a-protocol',
                    'projects/adding-project-questions',
                    'projects/project-locations',
                    'projects/adding-a-project-description',
                    'projects/editing-a-project',
                    'projects/managing-project-settings',
                    'projects/project-collaborators',
                    'projects/import-custom-data',
                    'projects/barcodes',
                    'projects/large-scale-projects'
                ]
            },
            {
                title: 'View & Analyze Data',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'view-and-analyze-data/view-your-project-data',
                    'view-and-analyze-data/the-dashboard',
                    'view-and-analyze-data/plot-data',
                    'view-and-analyze-data/the-map',
                    'view-and-analyze-data/the-spreadsheet',
                    'view-and-analyze-data/statistics',
                    'view-and-analyze-data/series-data-subsets',
                    'view-and-analyze-data/filter-data',
                    'view-and-analyze-data/set-thresholds',
                    'view-and-analyze-data/viewing-notes-and-pictures',
                    'view-and-analyze-data/advanced-parameters',
                    'view-and-analyze-data/data-issues',
                    'view-and-analyze-data/flag-measurements',
                    'view-and-analyze-data/sessions',
                    'view-and-analyze-data/download-data',
                    'view-and-analyze-data/external-libraries',
                    'view-and-analyze-data/how-to-cite',
                    'view-and-analyze-data/references'
                ]
            },
            {
                title: 'Protocols',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'protocols/protocol-basics',
                    'protocols/run-a-protocol',
                    'protocols/create-edit-protocol',
                    'protocols/structure',
                    'protocols/pulses',
                    'protocols/lights',
                    'protocols/detectors',
                    'protocols/signal-intensities',
                    'protocols/sensors',
                    'protocols/repeats',
                    'protocols/variables',
                    'protocols/mathematical-expressions',
                    'protocols/commands'
                ]
            },
            {
                title: 'Macros',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'macros/macro-basics',
                    'macros/create-edit-a-macro',
                    'macros/coding-and-functions',
                    'macros/provided-functions'
                ]
            },
            {
                title: 'Instruments',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'instruments/overview',
                    'instruments/multispeq-v2.0',
                    'instruments/multispeq-v1.0',
                    'instruments/caliq',
                    'instruments/instrument-settings',
                    'instruments/instrument-calibrations',
                    'instruments/firmware-updates',
                    'instruments/console-commands',
                    'instruments/light-guide-mask',
                    'instruments/leaf-mask-calibration'
                ]
            },
            {
                title: 'Calibration',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'calibrations/overview',
                    'calibrations/multispeq-v2.0',
                    'calibrations/multispeq-v1.0',
                    'calibrations/caliq'
                ]
            },
            {
                title: 'Tutorials',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'tutorials/getting-started',
                    'tutorials/creating-a-project',
                    'tutorials/data-collection',
                    'tutorials/data-viewing',
                    'tutorials/data-quality',
                    'tutorials/data-analysis',
                    'tutorials/building-a-protocol',
                    'tutorials/building-an-advanced-protocol',
                    'tutorials/building-a-macro',
                    'tutorials/building-an-advanced-macro'
                ]
            },
            {
                title: 'Developers',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'developers/general',
                    'developers/instrument-api',
                    'developers/cloud-api'
                ]
            },
            {
                title: 'Enterprise Edition',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'enterprise-edition/general',
                    'enterprise-edition/users',
                    'enterprise-edition/applications',
                    'enterprise-edition/administration'
                ]
            }
        ],
        lastUpdated: 'Last Updated',
        repo: 'photosynq/PhotosynQ-Documentation',
        // repoLabel: 'Contribute!',
        docsRepo: 'photosynq/PhotosynQ-Documentation',
        docsDir: 'docs',
        docsBranch: 'development',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        algolia: {
            apiKey: (require('./.env.json')['algolia-key'] || ''),
            indexName: (require('./.env.json')['algolia-idxName'] || '')
        }
    },
    plugins: [
        ['vuepress-plugin-element-tabs'],
        ['vuepress-plugin-mermaidjs'],
        ['@vuepress/back-to-top', true ],
        ['@vuepress/google-analytics', {
            'ga': (require('./.env.json')['ga-key'] || '')
        }],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['sitemap', {
            hostname: 'https://help.photosynq.org',
            outFile: 'sitemap.xml'
        }],
        ['@vuepress/medium-zoom', {
            selector: '.theme-default-content img',
            options: {
                margin: 16
            }
        }],
        ['autometa',  {
            site: {
              name   : 'PhotosynQ Documentation',
              twitter: 'photosynq',
            },
            canonical_base: 'https://help.photosynq.org'
        }]
    ]
};