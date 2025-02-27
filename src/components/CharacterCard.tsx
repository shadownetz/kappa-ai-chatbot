import Link from 'next/link';

interface Character {
    id: string;
    name: string;
    description: string;
}

interface CharacterCardProps {
    character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
    return (
        <Link href={`/chat?characterId=${character.id}`} className="block bg-gray-200 p-6 rounded-lg shadow-neu hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
            <p className="text-gray-700">{character.description}</p>
        </Link>
    );
}
