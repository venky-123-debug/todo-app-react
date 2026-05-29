import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
      setTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-slate-950 via-slate-900 to-gray-950">
      <div className="flex-1 p-6">
        <div className="max-w-2xl flex-1 mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-2">Todo List</h1>
            <p className="text-slate-400">Stay organized and productive</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-md p-5 shadow-2xl mb-6">
            <div className="flex gap-3">
              <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="What needs to be done?"
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
                className="flex-1 bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition"
              />

              <button
                onClick={addTodo}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105"
              >
                Add
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {todos.length === 0 ? (
              <div className="bg-slate-900/80 border border-slate-800 rounded-md p-8 text-center">
                <p className="text-slate-400 text-lg">No tasks yet</p>
              </div>
            ) : (
              todos.map((item) => (
                <div
                  key={item.id}
                  className={`group rounded-md border p-4 transition-all duration-300 hover:scale-[1.02]
                ${
                  item.completed
                    ? "bg-green-950/30 border-green-800"
                    : "bg-slate-900/80 border-slate-800"
                }`}
                >
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleTodo(item.id)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition
                    ${
                      item.completed
                        ? "bg-green-500 border-green-500"
                        : "border-slate-500 hover:border-blue-500"
                    }`}
                    >
                      {item.completed && (
                        <span className="text-white text-xs">✓</span>
                      )}
                    </button>

                    <span
                      className={`flex-1 text-lg transition ${
                        item.completed
                          ? "line-through text-slate-500"
                          : "text-white"
                      }`}
                    >
                      {item.text}
                    </span>

                    <button
                      onClick={() => deleteTodo(item.id)}
                      className="opacity-0 group-hover:opacity-100 px-3 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {todos.length > 0 && (
            <div className="mt-6 bg-slate-900/80 border border-slate-800 rounded-md p-4 flex justify-between text-sm">
              <span className="text-slate-400">Total: {todos.length}</span>

              <span className="text-green-400">
                Completed: {todos.filter((t) => t.completed).length}
              </span>

              <span className="text-yellow-400">
                Pending: {todos.filter((t) => !t.completed).length}
              </span>
            </div>
          )}
        </div>
      </div>
      <footer className="text-center mt-12 border-t border-slate-800 p-6">
        <p className="text-slate-500 text-sm">
          Crafted with passion by{" "}
          <a
            href="https://venky-123-debug.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors font-medium"
          >
            Venkatesh C
          </a>
        </p>

        <p className="text-slate-600 text-xs mt-2">
          Building clean, modern, and user-focused web experiences.
        </p>
      </footer>
    </div>
  );
}
