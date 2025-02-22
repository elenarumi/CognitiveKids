import React, { useState } from 'react';
import { Brain, Search } from 'lucide-react';
import ActivityCard from './components/ActivityCard';
import AgeInput from './components/AgeInput';
import { Activity, AgeValue } from './types';

function App() {
  const [age, setAge] = useState<AgeValue>({ years: 0, months: 0 });
  const [searchAge, setSearchAge] = useState<AgeValue>({ years: 0, months: 0 });
  const [hasSearched, setHasSearched] = useState(false);
  const [activities] = useState<Activity[]>([
    {
      id: 1,
      title: "Juego de Clasificación por Colores",
      description: "Ayuda a desarrollar la capacidad de categorización y reconocimiento de colores",
      ageRange: "1-3",
      duration: "15 min",
      category: "Cognitivo",
      thumbnail: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=500",
      difficulty: "Fácil"
    },
    {
      id: 2,
      title: "Construcción con Bloques",
      description: "Mejora la coordinación mano-ojo y el pensamiento espacial",
      ageRange: "2-4",
      duration: "20 min",
      category: "Motor",
      thumbnail: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=500",
      difficulty: "Medio"
    },
    {
      id: 3,
      title: "Cuentacuentos Interactivo",
      description: "Estimula el desarrollo del lenguaje y la imaginación",
      ageRange: "3-5",
      duration: "25 min",
      category: "Lenguaje",
      thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=500",
      difficulty: "Fácil"
    },
    {
      id: 4,
      title: "Juego de Sonidos y Música",
      description: "Desarrolla la discriminación auditiva y el ritmo musical",
      ageRange: "0-2",
      duration: "10 min",
      category: "Sensorial",
      thumbnail: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80&w=500",
      difficulty: "Fácil"
    },
    {
      id: 5,
      title: "Ejercicios de Gateo",
      description: "Fortalece los músculos y mejora la coordinación motora gruesa",
      ageRange: "0-1",
      duration: "15 min",
      category: "Motor",
      thumbnail: "https://images.unsplash.com/photo-1590649880765-91b1956b8276?auto=format&fit=crop&q=80&w=500",
      difficulty: "Fácil"
    },
    {
      id: 6,
      title: "Juego de Escondite",
      description: "Desarrolla la permanencia del objeto y habilidades sociales",
      ageRange: "0-2",
      duration: "10 min",
      category: "Social",
      thumbnail: "https://images.unsplash.com/photo-1596463059283-da257325bab8?auto=format&fit=crop&q=80&w=500",
      difficulty: "Fácil"
    },
    {
      id: 7,
      title: "Pintura con Dedos",
      description: "Estimula la creatividad y el desarrollo sensorial",
      ageRange: "1-3",
      duration: "20 min",
      category: "Artístico",
      thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=500",
      difficulty: "Medio"
    },
    {
      id: 8,
      title: "Juego de Roles",
      description: "Fomenta la imaginación y las habilidades sociales",
      ageRange: "3-5",
      duration: "30 min",
      category: "Social",
      thumbnail: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=500",
      difficulty: "Medio"
    },
    {
      id: 9,
      title: "Rompecabezas Simples",
      description: "Desarrolla la resolución de problemas y la coordinación fina",
      ageRange: "2-4",
      duration: "15 min",
      category: "Cognitivo",
      thumbnail: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&q=80&w=500",
      difficulty: "Medio"
    },
    {
      id: 10,
      title: "Juegos de Memoria",
      description: "Mejora la memoria y la concentración",
      ageRange: "3-5",
      duration: "15 min",
      category: "Cognitivo",
      thumbnail: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=500",
      difficulty: "Medio"
    },
    {
      id: 11,
      title: "Ejercicios de Equilibrio",
      description: "Desarrolla el equilibrio y la coordinación corporal",
      ageRange: "2-5",
      duration: "20 min",
      category: "Motor",
      thumbnail: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80&w=500",
      difficulty: "Medio"
    },
    {
      id: 12,
      title: "Canciones con Gestos",
      description: "Estimula el lenguaje y la coordinación motora",
      ageRange: "1-4",
      duration: "15 min",
      category: "Musical",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500",
      difficulty: "Fácil"
    }
  ]);

  const handleSearch = () => {
    setSearchAge(age);
    setHasSearched(true);
  };

  const filteredActivities = activities.filter(activity => {
    if (searchAge.years === 0 && searchAge.months === 0) return false;
    
    const ageInYears = searchAge.years + (searchAge.months / 12);
    const [minAge, maxAge] = activity.ageRange.split('-').map(Number);
    return ageInYears >= minAge && ageInYears <= maxAge;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Logo and Search Section */}
      <div className="container mx-auto px-4 pt-8 pb-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-3 mb-8">
            <Brain className="h-12 w-12 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-800">CognitiveKids</h1>
          </div>
          <div className="w-full max-w-2xl flex flex-col items-center space-y-4">
            <AgeInput value={age} onChange={setAge} />
            <button
              onClick={handleSearch}
              className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition flex items-center space-x-2 text-lg"
            >
              <Search className="h-5 w-5" />
              <span>Buscar Actividades</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {hasSearched && (
        <main className="container mx-auto px-4 py-8">
          {/* Message when no activities match the age */}
          {filteredActivities.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600 text-lg">
                No hay actividades disponibles para la edad seleccionada ({searchAge.years} años y {searchAge.months} meses).
                <br />
                Por favor, selecciona una edad diferente.
              </p>
            </div>
          )}

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map(activity => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

export default App;