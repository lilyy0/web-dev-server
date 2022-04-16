import mongoose from 'mongoose';
import schema from './tuits-schema.js'
const tuitsModel = mongoose
              .model('TuitModel', schema);
export default tuitsModel;