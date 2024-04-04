import mongoose, { Schema } from 'mongoose';
import IClientModel from '../model/IClientModel';

const schemaName = 'client';

const ClientSchema: Schema = new Schema(
  {
    firstName: {
      type: mongoose.SchemaTypes.String,
      index: true,
      required: true,
    },

    secondName: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    lastName: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    secondLastName: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    fullName: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    email: {
      type: mongoose.SchemaTypes.String,
      index: true,
      required: true,
      unique: true,
    },

    phone: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    normalizedFullName: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

  },
  {
    timestamps: true
  }
);

ClientSchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model<IClientModel>(schemaName, ClientSchema);
