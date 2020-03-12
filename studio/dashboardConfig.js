export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e6a2056d6d3eb413ebc7316',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-szy8v5hb',
                  apiId: '15998573-0dd3-4d9a-8b9b-cc2c58bb0f07'
                },
                {
                  buildHookId: '5e6a2056d6d3eb2ed0bc739d',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-dv94barj',
                  apiId: '14ff14d9-8473-43b7-8947-12e98ab4da1e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hp-e/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-dv94barj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
