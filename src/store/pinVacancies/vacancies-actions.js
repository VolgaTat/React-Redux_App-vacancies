export const ADD_VACANCIES = "ADD_VACANCIES";

export const addVacanciesAction = (vacancies)=>({
  type: ADD_VACANCIES,
  vacancies,
})