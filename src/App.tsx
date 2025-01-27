import React from 'react';
import { Utensils, Cake } from 'lucide-react';

function App() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url("https://i.imgur.com/L7aN1E4.png")',
        backgroundColor: '#f8f4f1'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col gap-6 items-center">
          <a 
            href="https://webapp.ninegrid.com.br/aGVsZW5hbm9sbGV0bw=="
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/80 hover:bg-white/95 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-[280px] backdrop-blur-sm"
          >
            <Utensils className="w-6 h-6 text-[#C4A484]" />
            <span className="text-xl font-semibold text-[#C4A484]">Cardápio Bistrô</span>
          </a>

          <a 
            href="https://webapp.ninegrid.com.br/aGVsZW5hbm9sbGV0bw==/table/MQ==/TUVTQQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/80 hover:bg-white/95 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-[280px] backdrop-blur-sm"
          >
            <Cake className="w-6 h-6 text-[#C4A484]" />
            <span className="text-xl font-semibold text-[#C4A484] whitespace-nowrap">Cardápio Confeitaria</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;