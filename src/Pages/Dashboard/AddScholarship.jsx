import React from 'react';

const AddScholarship = () => {
    return (
        <div>
             <div className="container mx-auto mt-10 p-5 bg-[#CEE6F2]">
            <h2 className="text-center text-2xl font-bold mb-6 text-[#126e82]">Add Scholarship</h2>
            <form className="space-y-6 ">
                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Scholarship Name</label>
                    <input type="text"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm " required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">University Name</label>
                    <input type="text"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#126e82]">University Image/Logo</label>
                    <input type="file"  accept="image/*" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">University Country</label>
                    <input type="text"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">University City</label>
                    <input type="text"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">University World Rank</label>
                    <input type="number"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Subject Category</label>
                    <select  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required>
                        <option value="">Select a category</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Doctor">Doctor</option>
                    </select>
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Scholarship Category</label>
                    <select  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:r[#126e82]]] focus:bor[#126e82]]] sm:text-sm" required>
                        <option value="">Select a category</option>
                        <option value="Full fund">Full fund</option>
                        <option value="Partial">Partial</option>
                        <option value="Self-fund">Self-fund</option>
                    </select>
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Degree</label>
                    <select  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus[#126e82]]]] focus:border-[#126e82] sm:text-sm" required>
                        <option value="">Select a degree</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Masters">Masters</option>
                    </select>
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Tuition Fees (optional)</label>
                    <input type="text"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Application Fees</label>
                    <input type="text"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Service Charge</label>
                    <input type="text"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Application Deadline</label>
                    <input type="date"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Scholarship Post Date</label>
                    <input type="date"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
                </div>

                <div>
                    <label  className="block text-sm font-medium text-[#126e82]">Posted User Email</label>
                    <input type="email"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm" required />
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