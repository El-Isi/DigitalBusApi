import mongoose, { Schema } from 'mongoose';
import ICompanyModel from '../model/ICompanyModel';
import CompanySchema from './CompanySchema';

const schemaName = 'companyconfig';

const CompanyConfigSchema: Schema = new Schema(
  {
    company: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: CompanySchema,
      required: true,
      autopopulate: true
    },

    type: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    payload: {
      type: mongoose.SchemaTypes.Mixed,
      required: true,
    },

  },
  {
    timestamps: true
  }
);

CompanyConfigSchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model<ICompanyModel>(schemaName, CompanyConfigSchema);
