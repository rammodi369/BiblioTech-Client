import { useState, useEffect } from "react"
import axios from "axios"
import Loader from "../components/Loader"
import { Search, Filter, FileText, User, Calendar, Download } from "lucide-react"

const SearchMaterialsPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("")
  const [allMaterials, setAllMaterials] = useState([])
  const [materials, setMaterials] = useState([])
  const [loading, setLoading] = useState(false)
  const [author, setAuthor] = useState("")
  const [year, setYear] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    const fetchMaterials = async () => {
      setLoading(true)
      const token = localStorage.getItem("token")
      try {
        const response = await axios.get("http://localhost:5000/api/material", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
       
        setAllMaterials(response.data)
        setMaterials(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching study materials:", error)
        setLoading(false)
      }
    }

    fetchMaterials()
  }, [])

  const handleSearch = () => {
    let filtered = allMaterials

    if (searchTerm) {
      filtered = filtered.filter((mat) => mat.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    if (filterCategory) {
      filtered = filtered.filter((mat) => mat.category.toLowerCase() === filterCategory.toLowerCase())
    }

    if (author) {
      filtered = filtered.filter((mat) => mat.author.toLowerCase().includes(author.toLowerCase()))
    }

    if (year) {
      filtered = filtered.filter((mat) => mat.year.toString() === year)
    }

    setMaterials(filtered)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setFilterCategory("")
    setAuthor("")
    setYear("")
    setMaterials(allMaterials)
  }

  const handleDownload = async (fileUrl, title) => {
    try {
      // Construct proper file URL
      const fullUrl = `http://localhost:5000/${fileUrl}`
      
      // Fetch the file as blob
      const response = await fetch(fullUrl)
      const blob = await response.blob()
      
      // Create object URL and trigger download
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = title // Sets the suggested filename
      document.body.appendChild(link)
      link.click()
      
      // Cleanup
      window.URL.revokeObjectURL(url)
      document.body.removeChild(link)
    } catch (error) {
      console.error("Download failed:", error)
      alert("Failed to download file. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 md:mb-0">Study Materials</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-600 px-4 py-2 rounded-lg shadow-sm transition-all border border-blue-200"
              >
                <Filter size={18} />
                <span>{isFilterOpen ? "Hide Filters" : "Show Filters"}</span>
              </button>
              {(searchTerm || filterCategory || author || year) && (
                <button
                  onClick={clearFilters}
                  className="bg-white hover:bg-red-50 text-red-600 px-4 py-2 rounded-lg shadow-sm transition-all border border-red-200"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={18} />
                <input
                  type="text"
                  placeholder="Search for materials..."
                  className="w-full pl-10 p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
                onClick={handleSearch}
              >
                <Search size={18} />
                Search
              </button>
            </div>

            {isFilterOpen && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 pt-4 border-t border-blue-100">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-blue-700 mb-2 flex items-center gap-1">
                    <FileText size={16} />
                    Category
                  </label>
                  <select
                    className="p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none bg-white"
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    <option value="notes">Notes</option>
                    <option value="assignments">Assignments</option>
                    <option value="previous-papers">Previous Papers</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                {/* <div className="flex flex-col">
                  <label className="text-sm font-medium text-blue-700 mb-2 flex items-center gap-1">
                    <User size={16} />
                    Author
                  </label>
                  <input
                    type="text"
                    placeholder="Author name"
                    className="p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div> */}

                {/* <div className="flex flex-col">
                  <label className="text-sm font-medium text-blue-700 mb-2 flex items-center gap-1">
                    <Calendar size={16} />
                    Year
                  </label>
                  <input
                    type="text"
                    placeholder="Year"
                    className="p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div> */}
              </div>
            )}
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader />
            </div>
          ) : materials?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material) => (
                <div key={material._id} className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800">{material.title}</h4>
                    {/* <p className="text-sm text-gray-600 mt-1">By {material.author}</p> */}
                    <p className="text-sm text-gray-500 mt-1">Category: {material.category}</p>
                    <p className="text-sm text-gray-500">Description: {material.description}</p>
                  </div>
                  <button
                    onClick={() => handleDownload(material.fileUrl, material.title)}
                    className="mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
                  >
                    <Download size={18} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm">
              <FileText size={48} className="mx-auto text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Study Materials Found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchMaterialsPage
