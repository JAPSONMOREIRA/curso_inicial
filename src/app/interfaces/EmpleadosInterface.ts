export interface IEmpleado{
    status: String
    message: String
    data: IDataEmpleado[]

}

export interface IDataEmpleado{
    id: number
    employee_name: String
    employee_salary: number
    employee_age: number
    profile_image: String
}