import * as zod from "zod"

export const schema = zod
.object({

    name: zod
    .string()
    .nonempty("name is required")
    .min(3,'Name min 3 char')
    .max(8,'Name max 5 char')
    .regex(/^[A-Za-z]+$/),

    email: zod
        .string()
        .nonempty("Email is required")
        .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Invalid email format"),

    password: zod
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must be at most 20 characters long")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, 
    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),

    rePassword: zod
    .string()
    .nonempty("RePassword is required"),

    dateOfBirth: zod.coerce
    .date('Invalid Date').refine((date)=>{
        const year =date.getFullYear();
        const currentYear = new Date().getFullYear();
        const age = currentYear - year;
        return age >= 18;
    } , 'You must be at least 18 years old'
    ),

    gender: zod
    .string()
    .nonempty("Gender is required"),

    })
    .refine((data) => data.password === data.rePassword,
    { path: ['rePassword'],
        message: "Passwords do not match"
    });