

export default {
  name: 'pin',
  title: 'Pin',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About',
      type: 'string',
    },
    {
      name: 'destination',
      title: 'Destination',
      type: 'url',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'userId',
      title: 'UserID',
      type: 'string',
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy', // Make sure you have defined this type
    },
    {
      name: 'save',
      title: 'Save',
      type: 'array',
      of: [{ type: 'save' }], // Make sure you have defined "save" type
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{ type: 'comment' }], // Make sure you have defined "comment" type
    },
  ],
}
