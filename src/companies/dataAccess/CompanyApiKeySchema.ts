import mongoose, { Schema } from 'mongoose';
import IServiceModel from '../model/ICompanyApiKeyModel';
import CompanySchema from './CompanySchema';
import ServiceSchema from '../../services/dataAccess/ServiceSchema';

const schemaName = 'companyapikey';

const CompanyApiKeysSchema: Schema = new Schema(
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

    apiKey: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    apiKeyPrefix: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    service: {
      type: mongoose.SchemaTypes.String,
      ref: ServiceSchema,
      required: true,
      autopopulate: true
    },

    expiration: {
      type: mongoose.SchemaTypes.Date,
      required: true,
    },

  },
  {
    timestamps: true
  }
);

CompanyApiKeysSchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model<IServiceModel>(schemaName, CompanyApiKeysSchema);
