// import Cohort from "./cityQuery.model";
// import statusCode from "../../enums/statusCode.enum";

// const fetchCohorts = async () => {
//   try {
//     let list = await Cohort.find().lean();
//     return {
//       list,
//       total: list.length,
//     };
//   } catch (e) {
//     throw e;
//   }
// };

// export const updateCohortCounter = async (number, field, value) => {
//   try {
//     let qkey = field;
//     const updatedCohort = await Cohort.findOneAndUpdate(
//       { number, [qkey]: { $ne: value < 0 ? 0 : "" } },
//       { $inc: { [qkey]: value } },
//       { new: true, lean: true }
//     );
//     return updatedCohort;
//   } catch (err) {
//     throw err;
//   }
// };

// const create = async ({ payload }) => {
//   try {
//     let activeCohort = await Cohort.findOne({ active: true });
//     if (!activeCohort || !activeCohort._id) {
//       payload.active = true;
//     }
//     const data = await Cohort.create(payload);
//     return data;
//   } catch (err) {
//     console.log("erorr", err);
//     throw err;
//   }
// };

// const update = async (condition, payload) => {
//   try {
//     const data = await Cohort.findOneAndUpdate(condition, payload, {
//       new: true,
//     });
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };

// const removeCohort = async ({ _id }) => {
//   try {
//     const result = await Cohort.deleteOne({ _id }).exec();
//     console.log("reult=========", result);
//     return { message: "Cohort  deleted!", statusCode: statusCode.OK };
//   } catch (err) {
//     throw err;
//   }
// };

// const setCohortActive = async ({ _id }) => {
//   try {
//     await Cohort.updateMany({}, { active: false });
//     const result = await Cohort.findOneAndUpdate(
//       { _id },
//       { active: true },
//       { new: true }
//     ).exec();
//     return {
//       data: result,
//       message: "Cohort  active!",
//       statusCode: statusCode.OK,
//     };
//   } catch (err) {
//     throw err;
//   }
// };

// const fetchCohort = async (condition) => {
//   try {
//     return await Cohort.findOne(condition);
//   } catch (e) {
//     throw e;
//   }
// };

// export default {
//   fetchCohorts,
//   create,
//   update,
//   removeCohort,
//   setCohortActive,
//   fetchCohort,
// };
