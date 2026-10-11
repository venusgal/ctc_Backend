module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/courses/:documentId/view',
      handler: 'course.incrementViews',
      config: {
        auth: false,
      },
    },
  ],
};