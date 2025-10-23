"use client";

import { useState } from "react";
import JoinButton from "./JoinButton";

export default function JoinForm() {
    const [form, setForm] = useState({ name: "", email: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: form.email,
                    source: `gamms-waitlist - ${form.name}`,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong!");
            }

            setSuccess(true);
            setForm({ name: "", email: "" });
        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : "Something went wrong!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3 w-full max-w-sm mx-auto"
        >
            <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
                required
            />
            <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
                required
            />
            <JoinButton loading={loading} />
            {success && (
                <p className="text-green-500 text-sm mt-2">
                    ✅ You have joined successfully!
                </p>
            )}
            {error && (
                <p className="text-red-500 text-sm mt-2">
                    ❌ {error}
                </p>
            )}
        </form>
    );
}
