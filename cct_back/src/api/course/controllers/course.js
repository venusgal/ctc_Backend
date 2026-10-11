'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::course.course', ({ strapi }) => ({

  async incrementViews(ctx) {
  const { documentId } = ctx.params;

  const cursos = await strapi.documents("api::course.course").findMany({
    filters: {
      documentId,
    },
  });

  console.log(cursos);

  const curso = cursos[0];

  const actualizado = await strapi.documents("api::course.course").update({
    documentId,
    data: {
      views: (curso.views ?? 0) + 1,
    },
  });

  console.log(actualizado);

  ctx.send(actualizado);
}

}));
