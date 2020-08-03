'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.order.create(data, { files });
    } else {
      entity = await strapi.services.order.create(ctx.request.body);
    }
    let entry = sanitizeEntity(entity, { model: strapi.models.order });
    await strapi.plugins['email'].services.email.send({
      to: 'hayabusazxy@gmail.com',
      from: 'lamodeclassique2017@gmail.com',
      subject: 'Order Confirmed!',
      text: `hello world`
    })
    return entry
  }
};
