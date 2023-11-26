import { LocaleObject } from "yup";

export const ar: LocaleObject & { string: any } = {
  mixed: {
    default: "${path} غير صالح.",
    required: "${path} هو حقل مطلوب",
    oneOf: "${path} يجب أن تكون واحدة من القيم التالية: ${values}",
    notOneOf: "${path} لا يجب أن تكون واحدة من القيم التالية: ${values}",
  },
  string: {
    length: "${path} يجب أن يكون بالضبط ${length} حرفا",
    min: "${path} يجب أن تكون على الأقل ${min} حرفا",
    max: "${path} يجب أن تكون على الأكثر ${max} حرفا",
    matches: "${path} غير صالح.",
    email: "${path} يجب أن يكون عنوان بريد إلكتروني صالح",
    url: "${path} يجب أن يكون عنوان URL صالحا",
    trim: "${path} يجب أن تكون سلسلة قلص",
    lowercase: "${path} يجب أن تكون سلسلة صغيرة",
    uppercase: "${path} يجب أن تكون سلسلة الحالة العلوي",
    required: "${path} هو حقل مطلوب",
  },
  number: {
    min: "${path} يجب أن تكون أكبر من أو يساوي ${min}",
    max: "${path} يجب أن يكون أقل من أو يساوي ${max}",
    lessThan: "${path} يجب أن يكون أقل من ${less}",
    moreThan: "${path} يجب أن تكون أكبر من ${more}",
    positive: "${path} يجب أن يكون رقما موجبا",
    negative: "${path} يجب أن يكون رقما سالبا",
    integer: "${path} يجب أن يكون رقما",
  },
  date: {
    min: "${path} يجب أن يكون حقل في وقت لاحق من ${min}",
    max: "${path} يجب أن يكون حقل في وقت سابق من ${max}",
  },
  boolean: {},
  object: {
    noUnknown: "${path} حقل لا يمكن أن يكون مفاتيح غير محددة في شكل وجوه",
  },
  array: {
    min: "يجب أن يكون ${path} حقل على الأقل ${min} من العناصر",
    max: "${path} يجب أن يكون الحقل أقل من أو يساوي إلى ${max} من العناصر",
  },
};

export const en: LocaleObject = {
  mixed: {
    default: "${path} is invalid",
    required: "${path} is a required field",
    oneOf: "${path} must be one of the following values: ${values}",
    notOneOf: "${path} must not be one of the following values: ${values}",
    defined: "${path} must be defined",
  },
  string: {
    length: "${path} must be exactly ${length} characters",
    min: "${path} must be at least ${min} characters",
    max: "${path} must be at most ${max} characters",
    matches: "${path} is invalid",
    email: "${path} must be a valid email",
    url: "${path} must be a valid URL",
    uuid: "${path} must be a valid UUID",
    trim: "${path} must be a trimmed string",
    lowercase: "${path} must be a lowercase string",
    uppercase: "${path} must be a upper case string",
  },
  number: {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer",
  },
  date: {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}",
  },
  object: {
    noUnknown: "${path} field has unspecified keys: ${unknown}",
  },
  array: {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items",
  },
  boolean: {
    isValue: "${path} field must be ${value}",
  },
};
