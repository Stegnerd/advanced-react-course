import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Product = list({
  // TODO ACCESS
  // access:
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      // ties reference to image object based on property
      ref: 'ProductImage.product',
      // this allows us to create a product image from the product page
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: {
          fields: ['image', 'altText'],
        },
        inlineEdit: {
          fields: ['image', 'altText'],
        },
      },
    }),
    status: select({
      options: [
        {
          label: 'Draft',
          value: 'DRAFT',
        },
        {
          label: 'Available',
          value: 'AVAILABLE',
        },
        {
          label: 'Unavailable',
          value: 'UNAVAILABLE',
        },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    price: integer(),
  },
});
