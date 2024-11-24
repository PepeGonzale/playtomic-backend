import { AbstractDocument } from "@app/common";
import { Schema, Prop } from "@nestjs/mongoose";

@Schema({ versionKey: false })

export class Reservations extends AbstractDocument {
    @Prop()
}