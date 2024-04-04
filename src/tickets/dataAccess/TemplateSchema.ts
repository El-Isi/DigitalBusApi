import mongoose, { Schema } from 'mongoose';
import ITemplateModel from '../model/ITemplateModel';

const schemaName = 'template';

const TemplateSchema: Schema = new Schema(
  {
    pdf: {
      type: Buffer,
      index: true,
      required: true,
    },
    version: {
      type: mongoose.SchemaTypes.String,
      index: true,
      required: true,
    },
    coordinates: {
      type: Array,
      required: false, 
    },
    config: {
      type: Object,
      required: false, 
    },
    active: {
      type: mongoose.SchemaTypes.Boolean, 
      default: true,
    },
  },
  {
    timestamps: true
  }
);

TemplateSchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model<ITemplateModel>(schemaName, TemplateSchema);
