/*
 * This is a function written for my work on querying nested objects across collections in Mongoose
 *
 * I want to generate a populate query for 2 collections: 'inners' and 'items',
 * And I want the function to be iterative to avoid stack overflow
 *
 * For example:
 *
 *  const p = getPopulateQuery({path: 'inners', model: 'Inner'}, {path: 'items', model: 'Item'}, 1);
 *
 *  p will become: [
 *      { populate: { path: 'items', model: 'Item' },
 *          path: 'inners',
 *          model: 'Inner'
 *      },
 *      { path: 'items', model: 'Item' }]
 *
 * Then you can use the returned object as:
 *  Outer.findOne(conditions).populate(p).exec();
 *      => get an object with all reference ObjectIds populated
 */

module.exports = (o1, o2, depth = 0, root = o2) => {
    for (let i = 0; i < depth; i++)
        root = [Object.assign({populate: root}, o1), o2];

    return root;
}
