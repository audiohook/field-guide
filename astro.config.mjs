import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const sections = [
  ['01-company', '01. Company'],
  ['02-people', '02. People'],
  ['03-sales', '03. Sales'],
  ['04-customer-success', '04. Customer Success'],
  ['05-ad-operations', '05. Ad Operations'],
  ['06-product', '06. Product'],
  ['07-engineering', '07. Engineering'],
  ['08-finance', '08. Finance'],
  ['09-sop-library', '09. SOP Library'],
];

export default defineConfig({
  site: 'https://fieldguide.audiohook.com',
  integrations: [
    starlight({
      title: 'Audiohook Field Guide',
      description: "Audiohook's company operator's manual.",
      editLink: {
        baseUrl: 'https://github.com/audiohook/field-guide/edit/main/',
      },
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Field Guide', slug: 'index' },
            { label: 'Leadership Guide', slug: 'LEADERSHIP_GUIDE' },
            { label: 'Process Template', slug: 'PROCESS_TEMPLATE' },
          ],
        },
        ...sections.map(([directory, label]) => ({
          label,
          items: [{ autogenerate: { directory } }],
        })),
      ],
    }),
  ],
});
