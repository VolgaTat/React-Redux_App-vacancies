export const selectorVacancies = (state)=> state.vacancies;

export const sortPosVacancies = (state, filters= [])=>{
  if(filters.length === 0) return state.vacancies;
  return state.vacancies.filter(pos => {
    const sortCurrentVacancies = []
      .concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
    return filters.every(filter => sortCurrentVacancies.includes(filter))
  })
}