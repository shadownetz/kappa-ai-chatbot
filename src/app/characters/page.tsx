'use client'
import { useState, FormEvent } from "react";
import Layout from "@/components/Layout";
import CharacterCard from "@/components/CharacterCard";

interface Character {
    id: string;
    name: string;
    description: string;
}

export default function Characters() {
    const [characters, setCharacters] = useState<Character[]>([
        { id: "1", name: "Albert", description: "A wise, philosophical AI." },
        { id: "2", name: "Betty", description: "Friendly and conversational." }
    ]);

    const [customName, setCustomName] = useState("");
    const [customDescription, setCustomDescription] = useState("");

    const handleAddCharacter = (e: FormEvent) => {
        e.preventDefault();
        if (customName.trim() && customDescription.trim()) {
            const newCharacter: Character = {
                id: Date.now().toString(),
                name: customName,
                description: customDescription,
            };
            setCharacters((prev) => [...prev, newCharacter]);
            setCustomName("");
            setCustomDescription("");
        }
    };

    return (
        <Layout>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Select an AI Character
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {characters.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>

                <div className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-neu">
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        Create Your Own Character
                    </h2>
                    <form onSubmit={handleAddCharacter} className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium" htmlFor="name">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={customName}
                                onChange={(e) => setCustomName(e.target.value)}
                                className="w-full p-2 rounded outline-none shadow-neu"
                                placeholder="Enter character name"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                id="description"
                                value={customDescription}
                                onChange={(e) => setCustomDescription(e.target.value)}
                                className="w-full p-2 rounded outline-none shadow-neu"
                                placeholder="Enter character description"
                                rows={3}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-neu hover:bg-blue-600 transition"
                        >
                            Add Character
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
