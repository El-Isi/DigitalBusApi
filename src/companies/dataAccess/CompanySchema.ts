import mongoose, { Schema } from 'mongoose';
import ICompanyModel from '../model/ICompanyModel';

const schemaName = 'company';

const CompanySchema: Schema = new Schema(
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

  },
  {
    timestamps: true
  }
);

CompanySchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model<ICompanyModel>(schemaName, CompanySchema);
