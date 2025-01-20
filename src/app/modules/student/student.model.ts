import { model, Schema } from 'mongoose';
// import validator from 'validator';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    maxlength: [20, 'First name cannot be more than 50 characters'],
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required'],
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father contact number is required'],
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, 'Mother name is required'],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother contact number is required'],
    trim: true,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required'],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
    trim: true,
  },
});

// Main schema
const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Student name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['female', 'male'],
      message:
        '{VALUE} is not a valid gender. Choose either "male" or "female".',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: {
    type: String,
    required: [true, 'Date of birth is required'],
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    unique: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
    trim: true,
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required'],
    trim: true,
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message:
        '{VALUE} is not a valid blood group. Allowed values are A+, A-, B+, B-, AB+, AB-, O+, O-',
    },
    required: [true, 'Blood group is required'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
    trim: true,
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
    trim: true,
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required'],
    trim: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required'],
    trim: true,
  },
  profileImg: {
    type: String,
    required: [true, 'Profile image URL is required'],
    trim: true,
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'inActive'],
      message: '{VALUE} is not valid. Use "active" or "inActive".',
    },
    default: 'active',
    required: [true, 'Account status (active/inActive) is required'],
  },
});

export const StudentModel = model<Student>('student', studentSchema);
