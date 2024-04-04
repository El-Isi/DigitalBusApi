import mongoose, { Schema } from 'mongoose';
import IUserModel from '../model/IUserModel';
import RoleSchema from './RoleSchema';
import CompanySchema from '../../companies/dataAccess/CompanySchema';

const schemaName = 'user';

const UserSchema: Schema = new Schema(
  {
    email: {
      type: mongoose.SchemaTypes.String,
      unique: true,
      index: true,
      required: true,
    },

    password: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    firstName: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    secondName: {
      type: mongoose.SchemaTypes.String,
      required: false,
    },

    lastName: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    secondLastName: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    phone: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    active: {
      type: mongoose.SchemaTypes.Boolean,
      required: true,
      default: true,
    },

    role: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: RoleSchema,
      required: true,
      autopopulate: true,
    },

    company: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: CompanySchema,
      autopopulate: true,
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

UserSchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model<IUserModel>(schemaName, UserSchema);
