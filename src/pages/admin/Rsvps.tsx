"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

type RSVP = {
  id: string;
  guestName: string;
  email: string;
  phone: string;
  attending: string;
  guestCount: string;
  childrenCount: string;
  childrenNames: string;
  plusOneName: string;
  dietaryRestrictions: string;
  transportDetails: string;
  specialRequests: string;
  createdAt: string;
};

const AdminRSVPsPage = () => {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRSVPs = async () => {
      try {
        const snap = await getDocs(collection(db, "rsvps"));

        const data: RSVP[] = snap.docs.map((doc): RSVP => {
          const d = doc.data() as Partial<RSVP>;
          let createdAt = "";

          if (d.createdAt && d.createdAt instanceof Timestamp) {
          createdAt = d.createdAt.toDate().toISOString();
          } else if (typeof d.createdAt === "string") {
          createdAt = d.createdAt;
          }

          return {
            id: doc.id,
            guestName: d.guestName ?? "",
            email: d.email ?? "",
            phone: d.phone ?? "",
            attending: d.attending ?? "",
            guestCount: d.guestCount ?? "",
            childrenCount: d.childrenCount ?? "",
            childrenNames: d.childrenNames ?? "",
            plusOneName: d.plusOneName ?? "",
            dietaryRestrictions: d.dietaryRestrictions ?? "",
            transportDetails: d.transportDetails ?? "",
            specialRequests: d.specialRequests ?? "",
            createdAt,
          };
        });

        // optional: newest first
        data.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

        setRsvps(data);
      } catch (err) {
        console.error("Error fetching RSVPs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRSVPs();
  }, []);

  const downloadCSV = () => {
    if (!rsvps.length) return;

    const headers = [
      "Guest Name",
      "Email",
      "Phone",
      "Attending",
      "Guest Count",
      "Children Count",
      "Children Names",
      "Plus One Name",
      "Dietary Restrictions",
      "Shuttle Details",
      "Special Requests",
      "Created At",
    ];

    const rows = rsvps.map((r) => [
      r.guestName,
      r.email,
      r.phone,
      r.attending,
      r.guestCount,
      r.childrenCount,
      r.childrenNames,
      r.plusOneName,
      r.dietaryRestrictions,
      r.transportDetails,
      r.specialRequests,
      r.createdAt,
    ]);

    const escape = (value: string) => {
      if (value == null) return "";
      const v = String(value).replace(/"/g, '""');
      if (v.includes(",") || v.includes("\n")) {
        return `"${v}"`;
      }
      return v;
    };

    const csvContent =
      [headers, ...rows]
        .map((row) => row.map(escape).join(","))
        .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10); // YYYY-MM-DD

    link.href = url;
    link.setAttribute("download", `rsvps-${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display text-3xl font-bold">
            Admin – RSVPs
          </h1>
          <button
            onClick={downloadCSV}
            disabled={!rsvps.length}
            className="rounded-md bg-black text-white px-4 py-2 text-sm font-medium disabled:opacity-50"
          >
            Download CSV
          </button>
        </div>

        {loading ? (
          <p>Loading RSVPs...</p>
        ) : !rsvps.length ? (
          <p>No RSVPs yet.</p>
        ) : (
          <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-3 py-2 text-left">Guest Name</th>
                  <th className="px-3 py-2 text-left">Email</th>
                  <th className="px-3 py-2 text-left">Attending</th>
                  <th className="px-3 py-2 text-left">Guests</th>
                  <th className="px-3 py-2 text-left">Children</th>
                  <th className="px-3 py-2 text-left">Children Names</th>
                  <th className="px-3 py-2 text-left">Plus One</th>
                  <th className="px-3 py-2 text-left">Dietary</th>
                  <th className="px-3 py-2 text-left">Shuttle Details</th>
                  <th className="px-3 py-2 text-left">Special Requests</th>
                  <th className="px-3 py-2 text-left">Created At</th>
                </tr>
              </thead>
              <tbody>
                {rsvps.map((r) => (
                  <tr key={r.id} className="border-t align-top">
                    <td className="px-3 py-2">{r.guestName}</td>
                    <td className="px-3 py-2">{r.email}</td>
                    <td className="px-3 py-2 capitalize">
                      {r.attending}
                    </td>
                    <td className="px-3 py-2">{r.guestCount}</td>
                    <td className="px-3 py-2">{r.childrenCount}</td>
                    <td className="px-3 py-2 whitespace-pre-wrap">
                      {r.childrenNames}
                    </td>
                    <td className="px-3 py-2">{r.plusOneName}</td>
                    <td className="px-3 py-2 whitespace-pre-wrap">
                      {r.dietaryRestrictions}
                    </td>
                    <td className="px-3 py-2 whitespace-pre-wrap">
                      {r.transportDetails}
                    </td>
                    <td className="px-3 py-2 whitespace-pre-wrap">
                      {r.specialRequests}
                    </td>
                    <td className="px-3 py-2">
                      {r.createdAt
                        ? new Date(r.createdAt).toLocaleString()
                        : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminRSVPsPage;