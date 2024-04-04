import mongoose, { Schema } from 'mongoose';
import ITicketModel from '../model/ITicketModel';
import ClientSchema from '../../clients/dataAccess/ClientSchema';

const schemaName = 'ticket';

const TicketSchema: Schema = new Schema(
  {
    client: {
      type: mongoose.SchemaTypes.String,
      index: true,
      ref: ClientSchema,
      required: true,
    },

    pdf: {
      type: Buffer,
      required: true,
    },

    iosTicket: {
      type: Buffer,
      requiered: true,
    },

    data: {
      type: mongoose.SchemaTypes.Mixed,
      required: true,
    },

    externalId: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

  },
  {
    timestamps: true
  }
);

TicketSchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model<ITicketModel>(schemaName, TicketSchema);
