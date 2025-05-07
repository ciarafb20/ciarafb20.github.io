// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ciarafb20', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ciarafb20/GenomeAssembly', 'ciarafb20/microbiome-assembly'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'BIOL 4650 Final Presentation',
          description:
            'Independent research project on the variation in dissolved oxygen levels in freshwater rivers.',
          imageUrl:
            'https://github.com/ciarafb20/ciarafb20.github.io/raw/main/BIOL%204650%20Final%20Presentation.png',
          link: 'https://github.com/ciarafb20/ciarafb20.github.io/raw/main/Project%20Presentation_Blanco%2C%20Ciara.pdf',
        },
        {
          title: 'CHEM 1112 Final Presentation',
          description:
            'Partnered research project on identyfying two different cations in an unknown mixture.',
          imageUrl:
            'https://github.com/ciarafb20/ciarafb20.github.io/raw/main/CHEM%201112%20Final%20Presentation.png',
          link: 'https://github.com/ciarafb20/ciarafb20.github.io/raw/main/Quantitative%20Analysis%20of%20Unknown%20Cations.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ciara Blanco',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'ciarafb20.github.io',
    phone: '',
    email: 'ciarafb20@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/ciarafb20/ciarafb20.github.io/raw/main/Blanco%2C%20Ciara_CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PCR',
    'Gel Electrophoresis',
    'Pipetting',
    'Cell Culture',
    'Google Suite',
    'QuickBooks',
    'Microsoft Office',
  ],
  experiences: [
    {
      company: 'Brian Costa LLC',
      position: 'Office Assistant / Bookkeeper',
      from: 'November 2023',
      to: 'Present',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'California State University, Stanislaus',
      degree: 'Expected B.S. in Biological Sciences',
      from: '2021',
      to: '2026',
    },
  ],
  publications: [
    {
      title: 'Draft Genome Sequence of Phascolarbacterium faecium DSM 14760 isolated from koala feces in Australia',
      journalName: 'Microbiology Resource Announcements',
      authors: 'Ciara Blanco, Vignesh Lal, Evelyn Valvodinos, Alan Vinzant, Tricia A. Van Laar',
      link: 'https://github.com/ciarafb20/ciarafb20.github.io/raw/main/MRA%20Group%204.pdf',
      description:
        'Phascolarctobacterium faecium was originally isolated from koala feces in 1992. Here, we sequence and analyze the type strain, with a length of 2,317,131 bp, 27 contigs, and average G+C content of 43.73%, and three virulence factors that are potential health hazards to humans. Manuscript in preparation.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
