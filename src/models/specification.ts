import mongoose from "mongoose";

interface SpecificationAttr {
  purpose: string;
  scope: string;
  definitions: string;
  responsibilities: string;
  materials: string[];
  procedures: string[];
}

interface SpecificationDoc extends mongoose.Document {
  purpose: string;
  scope: string;
  definitions: string;
  responsibilities: string;
  materials: string[];
  procedures: string[];
}

interface SpecificationModel extends mongoose.Model<SpecificationDoc> {
  build(attrs: SpecificationAttr): SpecificationDoc;
}

const specificationSchema = new mongoose.Schema(
  {
    purpose: {
      type: String,
    },
    scope: {
      type: String,
    },
    definitions: {
      type: String,
    },
    responsibilities: {
      type: String,
    },
    materials: {
      type: [String],
    },
    procedures: {
      type: [String],
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
    versionKey: false,
  }
);

specificationSchema.statics.build = (attrs: SpecificationAttr) => {
  return new Specification(attrs);
};

const Specification = mongoose.model<SpecificationDoc, SpecificationModel>(
  "Specification",
  specificationSchema
);

export { Specification };
