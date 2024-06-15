import { Header } from "../components/Header.jsx"
import { Footer } from "../components/Footer.jsx"
import { useState, useEffect } from "react"

function clearFilters() {
  document.getElementById("position").selectedIndex = 0
  document.getElementById("genre").selectedIndex = 0
  document.getElementById("select3").selectedIndex = 0
  document.getElementById("select4").selectedIndex = 0
}

const GetCredits = () => {
  const [credits, setCredits] = useState([])
  useEffect(() => {
    fetch("src/store/credits.json")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setCredits(data)
      })
  }, [])

  return (
    <>
      {credits.map((credit, i) => (
        <tr key={i}>
          <td>{credit.position}</td>
          <td>{credit.title}</td>
          <td>{credit.type}</td>
          <td>{credit.network}</td>
          <td>{credit.production}</td>
          <td>
            {credit.start[0]}/{credit.start[1]}-{credit.end[0]}/{credit.end[1]}
          </td>
        </tr>
      ))}
    </>
  )
}

export function Credits() {
  const [filter, setFilter] = useState(false)

  return (
    <>
      <Header />
      <section className="mt-14 bg-primary-50 p-10">
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
                <select className="px-3 py-1" name="position" id="position">
                  <option>Filter by position</option>
                  <option value="1">Test option 1</option>
                  <option value="2">Test option 2</option>
                  <option value="3">Test option 3</option>
                  <option value="4">Test option 4</option>
                </select>
              </label>
              <label htmlFor="genre">
                Genre:{" "}
                <select className="px-3 py-1" name="genre" id="genre">
                  <option value="">Filter by genre</option>
                  <option value="1">Test option 1</option>
                  <option value="2">Test option 2</option>
                  <option value="3">Test option 3</option>
                  <option value="4">Test option 4</option>
                </select>
              </label>
              <label htmlFor="select3">
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
              </label>
            </div>
            <div className="text-xs underline">
              <span className="cursor-pointer" onClick={clearFilters}>
                Clear filters
              </span>
            </div>
          </div>
          <div className="w-full pt-6">
            <table className="w-full table-auto text-left">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Show Title</th>
                  <th>Show Type</th>
                  <th>Network</th>
                  <th>Production Company</th>
                  <th>Dates</th>
                </tr>
              </thead>
              <tbody>
                <GetCredits />
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
