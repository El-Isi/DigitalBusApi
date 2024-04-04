import mongoose, { Schema } from 'mongoose';
import ICompanyModel from '../model/ICompanyModel';

const schemaName = 'companyconfigtype';

const CompanyConfigTypeSchema: Schema = new Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
  },
  {
    timestamps: true
  }
);

CompanyConfigTypeSchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model<ICompanyModel>(schemaName, CompanyConfigTypeSchema);
