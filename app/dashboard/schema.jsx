import * as yup from "yup";

export const schema = yup.object({
    name: yup.string().length(5, "ต้องเกิน 5").required("กรุณากรอกชื่อ"),
    age: yup.number().required("กรุณากรอกอายุ"),
    gender: yup.string().required("กรุณากรอกเพศ"),
});
