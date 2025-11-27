import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  Pill, 
  Camera, 
  Upload, 
  Calendar,
  Clock,
  Info,
  Plus,
  Trash2,
  CheckCircle2
} from 'lucide-react'
import LayOut from '../components/LayOut/LayOut'

const MedicineInput = () => {
  const [medicines, setMedicines] = useState([])
  const [currentMedicine, setCurrentMedicine] = useState({
    name: '',
    dosage: '',
    frequency: '',
    time: '',
    notes: '',
    photo: null
  })
  const [uploadedImage, setUploadedImage] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCurrentMedicine(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setUploadedImage(imageUrl)
      setCurrentMedicine(prev => ({
        ...prev,
        photo: file
      }))
    }
  }

  const addMedicine = () => {
    if (currentMedicine.name && currentMedicine.dosage) {
      setMedicines(prev => [...prev, { ...currentMedicine, id: Date.now() }])
      setCurrentMedicine({
        name: '',
        dosage: '',
        frequency: '',
        time: '',
        notes: '',
        photo: null
      })
      setUploadedImage(null)
    }
  }

  const removeMedicine = (id) => {
    setMedicines(prev => prev.filter(med => med.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (medicines.length > 0) {
      console.log('Medicines submitted:', medicines)
      // Handle form submission here
      alert('Medication information saved successfully!')
    }
  }

  return (
    <LayOut>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="flex">
          {/* Left Side - Back to Home */}
          <div className="hidden lg:flex lg:w-1/4 lg:items-start lg:justify-start p-8">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Center - Main Content */}
          <div className="flex-1 p-4 lg:p-8">
            {/* Mobile Back to Home */}
            <div className="lg:hidden mb-6">
              <Link
                to="/"
                className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <Pill className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Medication Input</h1>
              <p className="text-gray-600">Add your medications to create a personalized health plan</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Input Form */}
                <div className="bg-white rounded-xl shadow-lg border border-emerald-100 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Plus className="h-5 w-5 text-emerald-600" />
                    Add New Medication
                  </h2>

                  <form className="space-y-4">
                    {/* Medicine Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Medicine Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={currentMedicine.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="e.g., Metformin, Lisinopril"
                        required
                      />
                    </div>

                    {/* Dosage and Frequency */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Dosage *
                        </label>
                        <input
                          type="text"
                          name="dosage"
                          value={currentMedicine.dosage}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="e.g., 500mg, 10mg"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Frequency
                        </label>
                        <select
                          name="frequency"
                          value={currentMedicine.frequency}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="">Select frequency</option>
                          <option value="once-daily">Once daily</option>
                          <option value="twice-daily">Twice daily</option>
                          <option value="thrice-daily">Three times daily</option>
                          <option value="as-needed">As needed</option>
                        </select>
                      </div>
                    </div>

                    {/* Time and Notes */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          <Clock className="h-4 w-4 inline mr-1" />
                          Preferred Time
                        </label>
                        <input
                          type="time"
                          name="time"
                          value={currentMedicine.time}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          <Info className="h-4 w-4 inline mr-1" />
                          Notes
                        </label>
                        <input
                          type="text"
                          name="notes"
                          value={currentMedicine.notes}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Special instructions"
                        />
                      </div>
                    </div>

                    {/* Photo Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Camera className="h-4 w-4 inline mr-1" />
                        Medicine Photo (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-emerald-400 transition-colors">
                        {uploadedImage ? (
                          <div className="space-y-2">
                            <img 
                              src={uploadedImage} 
                              alt="Uploaded medicine" 
                              className="w-32 h-32 object-cover rounded-lg mx-auto"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setUploadedImage(null)
                                setCurrentMedicine(prev => ({ ...prev, photo: null }))
                              }}
                              className="text-sm text-red-600 hover:text-red-700"
                            >
                              Remove Photo
                            </button>
                          </div>
                        ) : (
                          <div>
                            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 mb-2">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                              id="medicine-photo"
                            />
                            <label
                              htmlFor="medicine-photo"
                              className="inline-block mt-2 px-4 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 cursor-pointer transition-colors"
                            >
                              Choose File
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Add Medicine Button */}
                    <button
                      type="button"
                      onClick={addMedicine}
                      disabled={!currentMedicine.name || !currentMedicine.dosage}
                      className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all shadow-md"
                    >
                      <Plus className="h-5 w-5 inline mr-2" />
                      Add to List
                    </button>
                  </form>
                </div>

                {/* Right Column - Medicine List */}
                <div className="bg-white rounded-xl shadow-lg border border-emerald-100 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    Your Medications ({medicines.length})
                  </h2>

                  {medicines.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Pill className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                      <p>No medications added yet</p>
                      <p className="text-sm">Add your first medication using the form</p>
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {medicines.map((medicine) => (
                        <div key={medicine.id} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900">{medicine.name}</h3>
                              <div className="text-sm text-gray-600 mt-1 space-y-1">
                                <p><span className="font-medium">Dosage:</span> {medicine.dosage}</p>
                                {medicine.frequency && (
                                  <p><span className="font-medium">Frequency:</span> {medicine.frequency}</p>
                                )}
                                {medicine.time && (
                                  <p><span className="font-medium">Time:</span> {medicine.time}</p>
                                )}
                                {medicine.notes && (
                                  <p><span className="font-medium">Notes:</span> {medicine.notes}</p>
                                )}
                              </div>
                            </div>
                            <button
                              onClick={() => removeMedicine(medicine.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          {medicine.photo && (
                            <div className="mt-2">
                              <span className="text-xs text-emerald-600">✓ Photo attached</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Submit Button */}
                  {medicines.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <button
                        onClick={handleSubmit}
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg"
                      >
                        Generate Health Plan
                      </button>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        AI will create personalized routine based on your medications
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Help Text */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">How it works</h3>
                    <p className="text-sm text-blue-700">
                      Add all your medications to generate a personalized daily health routine. 
                      Our AI will create reminders, suggest optimal times, and provide health tips 
                      specific to your medication regimen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Empty for balance */}
          <div className="hidden lg:block lg:w-1/4"></div>
        </div>
      </div>
    </LayOut>
  )
}

export default MedicineInput