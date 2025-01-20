import { Request, Response } from 'express';
import { studentServices } from './student.service';
// import studentValidationSchema from './student.validation';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const studentData = req.body.student;

    // data validation using zod
    const zodParsedData = studentValidationSchema.parse(studentData);

    //--------------Joi validation part-2----------------
    // const { error, value } = studentValidationSchema.validate(student);

    const result = await studentServices.createStudentIntoDB(zodParsedData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error.details,
    //   });
    // }
    //-------------------------End-----------------------

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: error,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Student are retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
//
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'student retrieved is successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
// export items
export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
