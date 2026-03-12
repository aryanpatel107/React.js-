import React from "react";

const users = [
  { id: "U-101", name: "Krish", email: "krish@email.com", role: "Admin", status: "Active" },
  { id: "U-102", name: "Amit", email: "amit@email.com", role: "Member", status: "Inactive" },
  { id: "U-103", name: "Dhruv", email: "dhruv@email.com", role: "Member", status: "Active" },
  { id: "U-104", name: "Patel", email: "patel@email.com", role: "Manager", status: "Active" },
  { id: "U-105", name: "Nina", email: "nina@email.com", role: "Member", status: "Inactive" },
];

export default function UserTable() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-white">Users</h2>
          <p className="text-sm text-slate-400">Latest registered users</p>
        </div>

        <button className="rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition">
          + Add User
        </button>
      </div>

      <div className="mt-5 overflow-x-auto">
        <div className="min-w-[720px] overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-300">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/10 text-slate-200">
              {users.map((u, idx) => (
                <tr key={u.id} className={idx % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-3 font-medium">{u.id}</td>
                  <td className="px-4 py-3">{u.name}</td>
                  <td className="px-4 py-3 text-slate-300">{u.email}</td>
                  <td className="px-4 py-3">{u.role}</td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        u.status === "Active"
                          ? "rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200"
                          : "rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs text-amber-200"
                      }
                    >
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-slate-400">
          Table is horizontally scrollable on small screens.
        </p>
      </div>
    </section>
  );
}