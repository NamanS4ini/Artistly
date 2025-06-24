"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";


// All the categories, languages, and fee ranges for the form
// These can be fetched from an API or defined statically
const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["Hindi", "English", "Punjabi", "Tamil"];
const feeRanges = [
  "₹5,000 - ₹10,000",
  "₹10,000 - ₹20,000",
  "₹20,000 - ₹35,000",
  "₹35,000 - ₹50,000",
  "Above ₹50,000"
];

// Define the data structure for the form inputs
type DataProp = {
  name: string;
  bio: string;
  categories: string[];
  languages: string[];
  feeRange: string;
  location: string;
}

export default function ArtistOnboardingForm() {
  // Initialize the form with react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<DataProp>();

  const [profileImage, setProfileImage] = useState<File | null>(null);


  // Handle form submission
  const onSubmit = (data: DataProp) => {
    console.log({ ...data, profileImage });
    alert("Artist submitted. Check console for details.");
    reset();
    setProfileImage(null);
  };

  return (
    <div className="bg-gradient-to-br md:p-20 from-blue-100 via-purple-100 to-pink-100 min-h-screen">
      <div className="max-w-3xl text-gray-800 pt-20 mx-auto p-8 bg-white/80 rounded-2xl shadow-2xl backdrop-blur-md">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-blue-600">
          Artist Onboarding
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Name */}
          <div>
            <label className="block font-semibold mb-2 text-blue-700">Name</label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                maxLength: { value: 50, message: "Name cannot exceed 50 characters" },
                minLength: { value: 2, message: "Name must be at least 2 characters" }
              })}
              className="w-full border-2 border-blue-200 focus:border-blue-400 p-3 rounded-lg outline-none transition"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-pink-600 text-xs mt-1">
              {`${errors.name.message}`}
              </p>}
          </div>

          {/* Bio */}
          <div>
            <label className="block font-semibold mb-2 text-blue-700">Bio</label>
            <textarea
              {...register("bio", {
                required: "Bio is required",
                maxLength: { value: 500, message: "Bio cannot exceed 500 characters" },
                minLength: { value: 10, message: "Bio must be at least 10 characters" }
              })}
              className="w-full border-2 border-blue-200 focus:border-blue-400 p-3 rounded-lg outline-none transition"
              rows={3}
              placeholder="Tell us about yourself"
            />
            <div className="text-xs text-gray-500 text-right mt-1">

              {`${watch("bio")?.length || 0}/500`}

            </div>
            {errors.bio && <p className="text-pink-600 text-xs mt-1">
              {`${errors.bio.message}`}
            </p>}
          </div>

          {/* Categories (multi-select with checkboxes) */}
          <div>
            <label className="block font-semibold mb-2 text-blue-700">Category</label>
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full shadow-sm cursor-pointer hover:bg-blue-100 transition">
                  <input
                    type="checkbox"
                    value={cat}
                    {...register("categories", { required: "Select at least one category" })}
                    className="accent-pink-500"
                  />
                  <span className="text-sm">{cat}</span>
                </label>
              ))}
            </div>
            {errors.categories && <p className="text-pink-600 text-xs mt-1">
              {`${errors.categories.message}`}
            </p>}
          </div>

          {/* Languages (multi-select with checkboxes) */}
          <div>
            <label className="block font-semibold mb-2 text-blue-700">Languages Spoken</label>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang) => (
                <label key={lang} className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full shadow-sm cursor-pointer hover:bg-purple-100 transition">
                  <input
                    type="checkbox"
                    value={lang}
                    {...register("languages", { required: "Select at least one language" })}
                    className="accent-blue-500"
                  />
                  <span className="text-sm">{lang}</span>
                </label>
              ))}
            </div>
            {errors.languages && <p className="text-pink-600 text-xs mt-1">
              {`${errors.languages.message}`}
            </p>}
          </div>

          {/* Fee Range */}
          <div>
            <label className="block font-semibold mb-2 text-blue-700">Fee Range</label>
            <select
              {...register("feeRange", { required: "Fee range is required" })}
              className="w-full border-2 border-blue-200 focus:border-blue-400 p-3 rounded-lg outline-none transition bg-white"
            >
              <option value="">Select a range</option>
              {feeRanges.map((fee) => (
                <option key={fee} value={fee}>{fee}</option>
              ))}
            </select>
            {errors.feeRange && <p className="text-pink-600 text-xs mt-1">
              {`${errors.feeRange.message}`}
            </p>}
          </div>

          {/* Profile Image Upload */}
          <div>
            <label className="block font-semibold mb-2 text-blue-700">Profile Image <span className="text-gray-400 text-xs">(optional)</span></label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfileImage(e.target.files?.[0] || null)}
              className="w-full border-2 border-blue-200 focus:border-blue-400 p-3 rounded-lg outline-none transition bg-white"
            />
            {profileImage && (
              <div className="mt-2 flex items-center gap-2">
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Preview"
                  className="w-12 h-12 object-cover rounded-full border-2 border-pink-400 shadow"
                />
                <span className="text-xs text-gray-600">{profileImage.name}</span>
              </div>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold mb-2 text-blue-700">Location</label>
            <input
              type="text"
              {...register("location", { required: "Location is required" })}
              className="w-full border-2 border-blue-200 focus:border-blue-400 p-3 rounded-lg outline-none transition"
              placeholder="City, State"
            />
            {errors.location && <p className="text-pink-600 text-xs mt-1">
              {`${errors.location.message}`}
            </p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 cursor-pointer text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition text-lg"
          >
            Submit Artist
          </button>
        </form>
      </div>
    </div>
  );
}
