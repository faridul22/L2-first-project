import { z } from 'zod';

// Zod schemas for sub-documents
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, 'First name cannot be more than 20 characters')
    .trim(),
  middleName: z.string().optional(),
  lastName: z.string().trim(),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().trim(),
  fatherOccupation: z.string().trim(),
  fatherContactNo: z.string().trim(),
  motherName: z.string().trim(),
  motherOccupation: z.string().trim(),
  motherContactNo: z.string().trim(),
});

const localGuardianValidationSchema = z.object({
  name: z.string().trim(),
  occupation: z.string().trim(),
  address: z.string().trim(),
});

// Main student schema
const studentValidationSchema = z.object({
  id: z.string().nonempty('Student ID is required'),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'others']),
  dateOfBirth: z.string().nonempty('Date of birth is required'),
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email address is required'),
  contactNo: z.string().nonempty('Contact number is required'),
  emergencyContactNo: z
    .string()
    .nonempty('Emergency contact number is required'),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
    message:
      'Invalid blood group. Allowed values: A+, A-, B+, B-, AB+, AB-, O+, O-',
  }),
  presentAddress: z.string().nonempty('Present address is required').trim(),
  permanentAddress: z.string().nonempty('Permanent address is required').trim(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z
    .string()
    .url('Invalid URL for profile image')
    .nonempty('Profile image is required'),
  isActive: z
    .enum(['active', 'inActive'], {
      message: 'Invalid status. Allowed values: active, inActive',
    })
    .default('active'),
});
export default studentValidationSchema;
