import Joi from 'joi';

// creating a ValidationSchema validation using joi
const userNameValidationSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    'string.empty': 'First name is required',
  }),
  middleName: Joi.string().trim().allow(null, '').optional(),
  lastName: Joi.string().trim().required().messages({
    'string.empty': 'Last name is required',
  }),
});

// Joi ValidationSchema for guardian
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'string.empty': 'Father name is required',
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    'string.empty': 'Father occupation is required',
  }),
  fatherContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Father contact number is required',
  }),
  motherName: Joi.string().trim().required().messages({
    'string.empty': 'Mother name is required',
  }),
  motherOccupation: Joi.string().trim().required().messages({
    'string.empty': 'Mother occupation is required',
  }),
  motherContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Mother contact number is required',
  }),
});

// Joi ValidationSchema for localGuardian
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian name is required',
  }),
  occupation: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian occupation is required',
  }),
  address: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian address is required',
  }),
});

// Joi ValidationSchema for the main student
const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'Student ID is required',
  }),
  name: userNameValidationSchema.required().messages({
    'object.base': 'Student name is required',
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.only':
      '{#value} is not a valid gender. Choose either "male" or "female".',
    'string.empty': 'Gender is required',
  }),
  dateOfBirth: Joi.string().required().messages({
    'string.empty': 'Date of birth is required',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Email address is required',
    'string.email': '{#value} is not a valid email address',
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.empty': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Emergency contact number is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required()
    .messages({
      'any.only':
        '{#value} is not a valid blood group. Allowed values are A+, A-, B+, B-, AB+, AB-, O+, O-',
      'string.empty': 'Blood group is required',
    }),
  presentAddress: Joi.string().trim().required().messages({
    'string.empty': 'Present address is required',
  }),
  permanentAddress: Joi.string().trim().required().messages({
    'string.empty': 'Permanent address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'object.base': 'Guardian information is required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'object.base': 'Local guardian information is required',
  }),
  profileImg: Joi.string().uri().required().messages({
    'string.empty': 'Profile image URL is required',
    'string.uri': 'Profile image must be a valid URL',
  }),
  isActive: Joi.string()
    .valid('active', 'inActive')
    .default('active')
    .required()
    .messages({
      'any.only': '{#value} is not valid. Use "active" or "inActive".',
      'string.empty': 'Account status (active/inActive) is required',
    }),
});

export default studentValidationSchema;
