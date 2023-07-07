import * as Yup from "yup";

export const jsonSchema = Yup.object({
  PaymentNo: Yup.number().required("ReleaseNo is required").min(1).max(50),
  // orderDate: Yup.string().required("Platform Name is required").min(3).max(20),
  paymentDate: Yup.string().required("Page is required").min(1).max(20),
  dbOrderId: Yup.string().required("language Name is required").min(1).max(20),
  dbClientId: Yup.number().required("Label is required").min(3).max(20),
  paymentMethod: Yup.number().required("Value Name is required").min(1).max(50),
  paymentRefNo: Yup.number().required("Please select any one"),
  paymentAmount: Yup.number().required("Label is required").min(1).max(50),
});
