export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9cb7e88e5e5d1c86c63371',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-d7jrymv3',
                  apiId: 'f6e30821-5d10-4e76-af70-371febe29c04'
                },
                {
                  buildHookId: '5d9cb7e8a794c5af97590bca',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6hpkbf2r',
                  apiId: '911486e7-aa0d-4026-9e6b-1ef74d812577'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/williamspiro/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6hpkbf2r.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
