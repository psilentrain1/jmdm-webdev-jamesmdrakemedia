import { Header } from "../components/Header.jsx"
import { Footer } from "../components/Footer.jsx"
import { useState, useEffect } from "react"

function clearFilters(setCreditsList, setPositionFilterOptions, setTypeFilterOptions) {
  document.getElementById("position").selectedIndex = 0
  document.getElementById("type").selectedIndex = 0
  /*   document.getElementById("select3").selectedIndex = 0
  document.getElementById("select4").selectedIndex = 0 */
  getCredits(setCreditsList, setPositionFilterOptions, setTypeFilterOptions)
}

function filterCreditRow(credit, i, positionFilter, typeFilter) {
  if (positionFilter === "" && typeFilter === "") {
    return getCreditRow(credit, i)
  } else if (positionFilter === credit.position && typeFilter === "") {
    return getCreditRow(credit, i)
  } else if (positionFilter === "" && typeFilter === credit.type) {
    return getCreditRow(credit, i)
  } else if (positionFilter === credit.position && typeFilter === credit.type) {
    return getCreditRow(credit, i)
  } else {
    return
  }
}

function getCreditRow(credit, i) {
  return (
    <tr className="border-b-2 hover:bg-primary-100" key={i}>
      <td>{credit.position}</td>
      <td>{credit.title}</td>
      <td>{credit.type}</td>
      <td>{credit.network}</td>
      <td>{credit.production}</td>
      <td>
        {credit.start[0]}/{credit.start[1]}-{credit.end[0]}/{credit.end[1]}
      </td>
    </tr>
  )
}

function getCredits(setCreditsList, setPositionFilterOptions, setTypeFilterOptions) {
  const data = fetch("src/store/credits.json")
  data
    .then(res => {
      return res.json()
    })
    .then(credits => {
      const positionFilter = document.getElementById("position").value
      const typeFilter = document.getElementById("type").value
      const newCreditElement = credits.map((credit, i) => filterCreditRow(credit, i, positionFilter, typeFilter))
      const getNewPositionFilterOption = new Set(credits.map(credit => credit.position))
      const newPositionFilterOption = [...getNewPositionFilterOption].map((position, i) => {
        return (
          <option key={i} value={position}>
            {position}
          </option>
        )
      })
      const getNewTypeFilterOption = new Set(credits.map(credit => credit.type))
      const newTypeFilterOption = [...getNewTypeFilterOption].map((type, i) => {
        return (
          <option key={i} value={type}>
            {type}
          </option>
        )
      })
      const positions = new Set(newPositionFilterOption)
      const types = new Set(newTypeFilterOption)
      setCreditsList(newCreditElement)
      setPositionFilterOptions(positions)
      setTypeFilterOptions(types)
    })
}

export function Credits() {
  const [filter, setFilter] = useState(false)
  const [positionFilterOptions, setPositionFilterOptions] = useState([])
  const [typeFilterOptions, setTypeFilterOptions] = useState([])
  const [creditsList, setCreditsList] = useState([])
  useEffect(() => {
    getCredits(setCreditsList, setPositionFilterOptions, setTypeFilterOptions)
  }, [])

  return (
    <>
      <Header />
      <section id="top" className="mt-14 bg-primary-50 p-10">
        <div className="mx-auto w-3/4">
          <h1 className="text-3xl font-bold">Credits</h1>
          <div className="font-sm text-primary-500">
            <span
              className="cursor-pointer"
              onClick={() => {
                setFilter(filter === false)
              }}>
              {filter ? "↓" : "→"}
              Filters
            </span>
          </div>
          <div className={`${filter ? "" : "hidden"}`}>
            <div className="flex flex-row gap-4">
              <label htmlFor="position">
                Position:{" "}
                <select
                  className="px-3 py-1"
                  name="position"
                  id="position"
                  onChange={() => getCredits(setCreditsList, setPositionFilterOptions, setTypeFilterOptions)}>
                  <option value="">Filter by position</option>
                  {positionFilterOptions}
                </select>
              </label>
              <label htmlFor="type">
                Genre:{" "}
                <select
                  className="px-3 py-1"
                  name="type"
                  id="type"
                  onChange={() => getCredits(setCreditsList, setPositionFilterOptions, setTypeFilterOptions)}>
                  <option value="">Filter by genre</option>
                  {typeFilterOptions}
                </select>
              </label>
              {/* <label htmlFor="select3">
                Select3:{" "}
                <select className="px-3 py-1" name="select3" id="select3">
                  <option value="">Filter by Select3</option>
                  <option value="1">Test option 1</option>
                  <option value="2">Test option 2</option>
                  <option value="3">Test option 3</option>
                  <option value="4">Test option 4</option>
                </select>
              </label>
              <label htmlFor="select4">
                Select4:{" "}
                <select className="px-3 py-1" name="select4" id="select4">
                  <option value="">Filter by Select4</option>
                  <option value="1">Test option 1</option>
                  <option value="2">Test option 2</option>
                  <option value="3">Test option 3</option>
                  <option value="4">Test option 4</option>
                </select>
              </label> */}
            </div>
            <div className="text-xs underline">
              <span
                className="cursor-pointer"
                onClick={() => clearFilters(setCreditsList, setPositionFilterOptions, setTypeFilterOptions)}>
                Clear filters
              </span>
            </div>
          </div>
          <div className="w-full pt-6">
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="border-b-4">
                  <th>Position</th>
                  <th>Show Title</th>
                  <th>Show Type</th>
                  <th>Network</th>
                  <th>Production Company</th>
                  <th>Dates</th>
                </tr>
              </thead>
              <tbody>{creditsList}</tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}