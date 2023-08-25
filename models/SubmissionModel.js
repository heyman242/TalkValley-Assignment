import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    type: {
      type: String,
    },
    url: String,
  },
  { timestamps: true }
);

export default mongoose.model("Submission", SubmissionSchema);
