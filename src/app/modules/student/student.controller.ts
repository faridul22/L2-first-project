import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    const result = await studentServices.createStudentIntoDB(student);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const StudentControllers = {
  createStudent,
};
