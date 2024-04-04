import mongoose, { Schema } from 'mongoose';
import IRole from '../model/interfaces/IRole';
import CompanySchema from '../../companies/dataAccess/CompanySchema';

const schemaName = 'role';

const RoleSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    permissions: [
      {
        module: {
          type: mongoose.SchemaTypes.String,
        },
        permissions: {
          type: mongoose.SchemaTypes.Mixed,
        }
      }
    ],

    sections: [
      {
        _id: false,
        name: {
          type: mongoose.SchemaTypes.String,
        },
        items: {
          type: mongoose.SchemaTypes.Mixed,
        }
      }
    ],

    company: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: CompanySchema,
      required: true,
      autopopulate: true,
      index: true
    },

    use: {
      type: String,
      required: true,
      default: 'user',
      enum: ['user', 'guest']
    }
  },
  {
    timestamps: true
  }
);

RoleSchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model<IRole>(schemaName, RoleSchema);
