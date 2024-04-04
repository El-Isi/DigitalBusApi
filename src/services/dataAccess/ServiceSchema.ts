import mongoose, { Schema } from 'mongoose';
import IServiceModel from '../model/IServiceModel';
import CompanySchema from '../../companies/dataAccess/CompanySchema';

const schemaName = 'service';

const ServiceSchema: Schema = new Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    normalizedName: {
      type: mongoose.SchemaTypes.String,
      index: true,
      required: true,
      unique: true,
    },

    company: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: CompanySchema,
      required: true,
      autopopulate: true
    },

    active: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

  },
  {
    timestamps: true
  }
);

ServiceSchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model<IServiceModel>(schemaName, ServiceSchema);
