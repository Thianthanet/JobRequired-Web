import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAuth from '../../useAuth/useAuth';
import { resumeId, userData } from '../../api/user';

const PrintResume = () => {
  const { id } = useParams();
  const user = useAuth((state) => state.user);
  const token = useAuth((state) => state.token);
  const [resume, setResume] = useState({});
  const [usersData, setUsersData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    handleGetResume(token);
    handleGetUser(token);
  }, [token]);

  const handleGetResume = async (token) => {
    try {
      const resumes = await resumeId(token, id);
      setResume(resumes.data);
    } catch (err) {
      console.error('Error fetching resume:', err);
    }
  };

  const handleGetUser = async (token) => {
    try {
      const getUser = await userData(token, user.id);
      setUsersData(getUser.data);
    } catch (err) {
      console.error('Error fetching user data:', err);
    }
  };

  const handleToBack = () => {
    navigate(-1);
  };

  const handlePrint = () => {
    const content = document.getElementById('resume-content').innerHTML;
    const printWindow = window.open('', '', 'height=800,width=800');
    printWindow.document.write('<html><head><title>Print Resume</title>');
    printWindow.document.write('<style>@media print { body { margin: 0; padding: 0; } .border { border: none; } .bg-gradient-to-b { background: none; } }</style>');
    printWindow.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b py-6">
      <div className="container mx-auto">
        <div className="flex justify-between mb-6">
          <button
            onClick={handleToBack}
            className="btn bg-blue-500 text-white px-5 py-2 hover:bg-blue-700 rounded-md shadow-lg mx-2"
          >
            ⮜ Back
          </button>
          <button
            onClick={handlePrint}
            className="btn bg-green-500 text-white px-5 py-2 hover:bg-green-700 rounded-md shadow-lg mx-2"
          >
            🖨 Print
          </button>
        </div>
        <div className="flex justify-center">
          <div id="resume-content" className="border shadow-2xl w-full max-w-[210mm] h-auto px-8 py-10 rounded-lg bg-gradient-to-b from-yellow-300 via-red-400 to-pink-500">
            <div className="bg-blue-300 rounded-lg shadow-lg py-4 mb-4">
              <h1 className="font-extrabold text-4xl text-center text-white">RESUME</h1>
            </div>
            <div className="text-lg">
              <section className="mb-6">
                <div className="flex gap-2 mb-2">
                  <span className="font-bold">Name:</span>
                  <span>{usersData.firstname} {usersData.lastname}</span>
                </div>
                <div className="flex gap-2 mb-2">
                  <span className="font-bold">Email:</span>
                  <span>{usersData.email}</span>
                </div>
                <div className="flex gap-2 mb-2">
                  <span className="font-bold">Phone:</span>
                  <span>{resume.phone}</span>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="font-bold">Address:</span>
                  <span>{resume.address}</span>
                </div>
              </section>
              <section className="mb-6">
                <h2 className="font-bold text-2xl mb-2">Description</h2>
                <p className="pl-4 border-l-4 border-blue-500 text-gray-800">{resume.description}</p>
              </section>
              <section className="mb-6">
                <h2 className="font-bold text-2xl mb-2">Skills</h2>
                <p className="pl-4 border-l-4 border-blue-500 text-gray-800">{resume.skill}</p>
              </section>
              <section className="mb-6">
                <h2 className="font-bold text-2xl mb-2">Experience</h2>
                <div className="flex items-center pl-4 border-l-4 border-blue-500 text-gray-800">
                  <span>{resume.experience}</span>
                  <span className="ml-2">year(s)</span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintResume;
