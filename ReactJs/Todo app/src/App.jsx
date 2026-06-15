import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [task, setTask] = useState(() => {
    const saved = localStorage.getItem("task");
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.filter((item) => item !== null) : [];
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input != "") {
      setError(false);
      let copyTask = [...task];
      copyTask.unshift({ task: input });
      setTask(copyTask);
      setInput("");
    } else {
      setError(true);
    }
  }

  function removeTask(id) {
    let copyTask = [...task];
    copyTask.splice(id, 1);
    setTask(copyTask);
  }

  return (
    <div className="bg-neutral-950 text-white min-h-screen w-full flex items-start sm:items-center justify-center px-4 py-10">
      <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 w-full max-w-md flex gap-6 flex-col rounded-2xl shadow-xl shadow-black/40">
        <h1 className="text-xl font-semibold tracking-tight text-center">
          My Tasks
        </h1>

        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex gap-2 w-full mb-3"
        >
          <input
            type="text"
            placeholder="Enter task..."
            className="bg-neutral-800 text-white placeholder-neutral-500 py-2.5 px-3 rounded-lg outline-none ring-1 ring-transparent focus:ring-neutral-500 transition-all flex-1 min-w-0"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button className="px-4 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors shrink-0 active:scale-95">
            Add
          </button>
        </form>
        {error && (
          <p className="text-red-400 text-sm -mt-2 text-center">Can't add empty task...</p>
        )}


        {task.length === 0 && (
          <p className="text-neutral-500 text-sm text-center py-4">
            No tasks yet - add one above...
          </p>
        )}

        <div className=" flex flex-col gap-3 overflow-auto">
          {task.map((u, idx) => {
            return (
              <div
                key={idx}
                className="bg-neutral-800 text-white px-4 py-3 rounded-xl flex items-center justify-between gap-3 task-container"
              >
                <p className="wrap-break-word min-w-0 flex-1 text-sm sm:text-base">
                  {u.task}
                </p>
                <button
                  className="bg-red-800 hover:bg-red-500 transition-colors px-3 py-1.5 rounded-lg text-sm font-medium shrink-0 active:scale-95"
                  onClick={() => {
                    removeTask(idx);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;