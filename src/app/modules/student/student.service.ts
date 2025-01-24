import { TStudent } from './student.interface';
import { Student } from './student.model';

//
const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(student); // build in static method

  const student = new Student(studentData);
  const result = await student.save(); // build in instance method
  return result;
};
//
const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};
//
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};
// export items
export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
