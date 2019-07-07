export interface Employee{
    id: number,
    name: string,
    salary: number,
    birthdate: Date,
    isDev: boolean,
    projects: [
      {
        id: number,
        name: string,
        startDate: Date
      }
    ]
}