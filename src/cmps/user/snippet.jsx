

const getAvgRates = reviews => {
  let count = 0
  const rateMap = reviews.reduce((acc, review) => { 
    count++
    const { rate } = review
    for (const category in rate) {
      const categoryRate = rate[category]
      if (acc[category]) acc[category] += categoryRate
      else acc[category] = categoryRate
    }
    return acc
  }, {})

  for (const category in rateMap) {
    const categoryTotalRate = rateMap[category]
    rateMap[category] = categoryTotalRate / count
  }

  return rateMap
}