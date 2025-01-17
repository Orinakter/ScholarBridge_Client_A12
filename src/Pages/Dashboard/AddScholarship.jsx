
import axios from 'axios';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';

const AddScholarship = () => {
    const [subjectCategory,setSubjectCategory] = useState("")
    const [scholarshipCategory,setScholarshipCategory] = useState("")
    const [degree,setDegree] = useState("")
    
    const addscholarshiphandler = async(e)=>{
        e.preventDefault ();
        const scholarshipName = e.target.scholarshipName.value;
        const universityName = e.target.universityName.value;
        // const universityImage = e.target.universityImage.value;
        const universityImage = e.target.universityImage.value;
        const universityCountry = e.target.universityCountry.value;
        const universityCity = e.target.universityCity.value;
        const universityRank = e.target.universityRank.value;
        // const subjectCategory = e.target.subjectCategory.value;
        // const scholarshipCategory = e.target.scholarshipCategory.value;
        // const degree = e.target.degree.value;
        const tutionFee = e.target.tutionFee.value;
        const applicationFees = e.target.applicationFees.value;
        const serviceCharge = e.target.serviceCharge.value;
        const ApplicationDeadline = e.target.ApplicationDeadline.value;
        const postDate = e.target.postDate.value;
        const postEmail = e.target.postEmail.value;

        const addScholarshipInfo = {
            scholarshipName,
            universityName,
            universityImage,
            universityCountry,
            universityCity,
            universityRank,
            tutionFee,
            applicationFees,
            serviceCharge,
            ApplicationDeadline,
            postDate,
            postEmail
        }
       
        await axios.post(`http://localhost:5000/scholarBridge`,addScholarshipInfo)
        .then((data)=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Schoolarship added successfully",
                showConfirmButton: false,
                timer: 1500
              });
        })


    }
    return (
        <div>
             <div className="container mx-auto mt-10 p-5 bg-[#CEE6F2]">
            <h2 className="text-center text-2xl font-bold mb-6 text-[#126e82]">Add Scholarship</h2>
            <form onSubmit={addscholarshiphandler} className="space-y-6 ">
                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Scholarship Name</label>
                    <input type="text" name="scholarshipName"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm " required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">University Name</label>
                    <input type="text" name="universityName"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
            <label className="block text-sm font-medium text-gray-700">
            University Image URL
            </label>
            <input
              type="text"
              name="universityImage"
              placeholder="Enter image URL"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              required
            />
          </div>


                {/* <div>
                    <label className="block text-sm font-medium text-[#126e82]">University Image/Logo</label>
                    <input type="file"  accept="image/*" name="universityImage" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div> */}

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">University Country</label>
                    <input type="text" name="universityCountry"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">University City</label>
                    <input type="text" name="universityCity"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">University World Rank</label>
                    <input type="number" name="universityRank"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Subject Category</label>
                    <select 
                      onChange={(e)=>setSubjectCategory(e.target.value)}
                    name="subjectCategory"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required>
                        <option value="">Select a category</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="engineering">Engineering</option>
                        <option value="doctor">Doctor</option>
                    </select>
                </div>

                <div>
                    <label name="scholarshipCategory"
                     
                     className="block text-sm font-medium text-[#126e82]">Scholarship Category</label>
                    <select 
                     onChange={(e)=>setScholarshipCategory(e.target.value)}
                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:r[#126e82]]] focus:bor[#126e82]]] sm:text-sm" required>
                        <option value="">Select a category</option>
                        <option value="fullfund">Full fund</option>
                        <option value="partial">Partial</option>
                        <option value="selfFund">Self-fund</option>
                    </select>
                </div>

                <div>
                    <label
                     
                    className="block text-sm font-medium text-[#126e82]">Degree</label>
                    <select 
                    onChange={(e)=>setDegree(e.target.value)}
                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus[#126e82]]]] focus:border-[#126e82] sm:text-sm" required>
                        <option value="">Select a degree</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Masters">Masters</option>
                    </select>
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Tuition Fees (optional)</label>
                    <input type="text" name="tutionFee" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Application Fees</label>
                    <input type="text" name="applicationFees"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Service Charge</label>
                    <input type="text" name="serviceCharge"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Application Deadline</label>
                    <input type="date" name="ApplicationDeadline"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Scholarship Post Date</label>
                    <input type="date" name="postDate"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Posted User Email</label>
                    <input type="email" name="postEmail"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <button
            type="submit"
            className="w-full py-2 px-4 bg-[#126e82] text-white font-semibold rounded-md hover:bg-[#126e82] focus:outline-none focus:ring-2 focus:ring-[#126e82] focus:ring-opacity-50"
          >
           Add Scholarship
          </button>
            </form>
        </div>
          
        </div>
    );
};

export default AddScholarship;