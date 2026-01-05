import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userData, setUserData } = useContext(AuthContext);

  // Calculate task counts from the tasks array
  const getTaskCounts = (tasks) => {
    let newTask = 0, active = 0, completed = 0, failed = 0;
    
    if (tasks && Array.isArray(tasks)) {
      tasks.forEach(task => {
        newTask += task.newTask || 0;
        active += task.active || 0;
        completed += task.completed || 0;
        failed += task.failed || 0;
      });
    }
    
    return { newTask, active, completed, failed };
  };

  if (!userData || !userData.employees) {
    return (
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 rounded-2xl mt-5 border border-slate-800">
        <p className="text-slate-400 text-center text-lg font-medium">
          No employees data found
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8 rounded-2xl mt-5 border border-slate-800 shadow-2xl overflow-hidden relative">
      {/* Header Row */}
      <div className="bg-gradient-to-r from-red-900/80 to-red-800/80 mb-3 py-4 px-6 flex justify-between rounded-xl text-white font-bold text-sm md:text-base tracking-wider shadow-lg backdrop-blur-sm border border-red-700/50 hover:border-red-600/70 transition-all duration-300">
        <h2 className="w-1/5 flex items-center gap-2">
          <span className="w-2 h-2 bg-red-300 rounded-full"></span>
          Employee Name
        </h2>
        <h3 className="w-1/5 text-center text-red-200">New Task</h3>
        <h5 className="w-1/5 text-center text-red-200">Active Task</h5>
        <h5 className="w-1/5 text-center text-red-200">Completed</h5>
        <h5 className="w-1/5 text-center text-red-200">Failed</h5>
      </div>

      {/* Employee Rows */}
      <div className="space-y-2 max-h-[calc(100vh-300px)] overflow-y-auto custom-scrollbar">
        {userData.employees.map((elem, index) => {
          const counts = getTaskCounts(elem.tasks);
          return (
            <div
              key={elem.id || index}
              className="group mb-2 py-4 px-6 flex justify-between rounded-xl backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-0.5 border border-slate-700/40 hover:border-red-700/60 cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, rgba(51, 65, 85, 0.4) 0%, rgba(30, 41, 59, 0.6) 100%)",
                animation: `slideIn 0.4s ease-out ${index * 0.05}s both`,
              }}
            >
              {/* Employee Name */}
              <h2 className="w-1/5 text-slate-100 font-semibold text-sm md:text-base flex items-center gap-3 group-hover:text-white transition-colors duration-200">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-md group-hover:shadow-lg transition-shadow duration-200">
                  {elem.firstname?.charAt(0).toUpperCase()}
                </div>
                <span className="truncate">{elem.firstname}</span>
              </h2>

              {/* New Task */}
              <div className="w-1/5 flex justify-center">
                <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 text-blue-300 font-bold text-sm md:text-base rounded-lg border border-blue-500/40 shadow-md group-hover:shadow-lg group-hover:bg-blue-500/30 group-hover:border-blue-500/60 transition-all duration-200">
                  {counts.newTask}
                </span>
              </div>

              {/* Active Task */}
              <div className="w-1/5 flex justify-center">
                <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-yellow-500/20 text-yellow-300 font-bold text-sm md:text-base rounded-lg border border-yellow-500/40 shadow-md group-hover:shadow-lg group-hover:bg-yellow-500/30 group-hover:border-yellow-500/60 transition-all duration-200">
                  {counts.active}
                </span>
              </div>

              {/* Completed */}
              <div className="w-1/5 flex justify-center">
                <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-green-500/20 text-green-300 font-bold text-sm md:text-base rounded-lg border border-green-500/40 shadow-md group-hover:shadow-lg group-hover:bg-green-500/30 group-hover:border-green-500/60 transition-all duration-200">
                  {counts.completed}
                </span>
              </div>

              {/* Failed */}
              <div className="w-1/5 flex justify-center">
                <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-red-500/20 text-red-300 font-bold text-sm md:text-base rounded-lg border border-red-500/40 shadow-md group-hover:shadow-lg group-hover:bg-red-500/30 group-hover:border-red-500/60 transition-all duration-200">
                  {counts.failed}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Stats */}
      <div className="mt-6 pt-6 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-slate-400">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          Total Employees: <span className="text-white font-semibold">{userData.employees.length}</span>
        </span>
        <span className="text-slate-500">
          Last synced: {new Date().toLocaleTimeString()}
        </span>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AllTask;
