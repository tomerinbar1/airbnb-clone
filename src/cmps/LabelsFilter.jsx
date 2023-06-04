import { filterService } from "../services/filter.service"
import filterIcon from '../assets/img/icons/filter.svg'




export function LabelsFilter() {

  const categories = filterService.getCategories()

  return (
    <section className="categories-container">
      <section className="categories">
      {categories.map((category) => {
        return (
          <section className="category"
            // className={
            //   category.url === currCategory ? 'category active' : 'category'
            // }
            key={category.url}
            onClick={() => {
              // onSelectCategory(category.url)
            }}>
            <span className="category-icon">
              <img
                style={{ width: '25px', height: '25px' }}
                src={require(`../assets/img/categories/${category.url}.png`)}
                alt={category.name}
              />
            </span>
            <p className='category-name'>{category.name}</p>
          </section>
        )
      })}
      </section>
      <section className="categories-filter-buttons">
      <button className="categories-filter-button"> <img className=""  src={filterIcon} alt="" /> Filters</button>
      </section>
    </section>
  )
}
