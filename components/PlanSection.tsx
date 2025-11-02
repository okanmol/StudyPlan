
import React, { useRef, useEffect } from 'react';
import { PLAN_DATA, PHASES } from '../constants';
import { PhaseKey } from '../types';

interface PlanSectionProps {
  selectedWeek: number;
  onWeekSelect: (week: number) => void;
}

const PlanSection: React.FC<PlanSectionProps> = ({ selectedWeek, onWeekSelect }) => {
  const detailsRef = useRef<HTMLDivElement>(null);
  
  // Effect to scroll to details when a new week is selected (but not on initial load)
  useEffect(() => {
    if (detailsRef.current) {
        detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedWeek]);


  const activeWeekData = PLAN_DATA[selectedWeek];
  const activePhase = PHASES.find(p => p.weeks.includes(selectedWeek));

  return (
    <section id="plan" className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-stone-800 text-center mb-4">The 12-Week Breakdown</h2>
      <p className="text-lg text-stone-600 text-center max-w-3xl mx-auto mb-12">
        Here is the detailed 12-week study plan, broken into four 3-week phases. Click on any week below to see the detailed topics and goals for that week.
      </p>

      {PHASES.map((phase) => (
        <div key={phase.title} className={`bg-white p-6 md:p-8 rounded-xl shadow-lg mb-8 border-t-4 ${phase.theme.border}`}>
          <h3 className={`text-2xl font-semibold mb-6 ${phase.theme.text}`}>{phase.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {phase.weeks.map((weekNum) => {
              const isActive = selectedWeek === weekNum;
              const buttonClasses = `
                p-4 font-medium rounded-lg shadow-sm transition-all hover:scale-105 hover:shadow-md
                ${phase.theme.bg} ${phase.theme.hoverBg}
                ${isActive ? `${phase.theme.activeBg} ${phase.theme.activeShadow} scale-105` : ''}
              `;
              return (
                <button
                  key={weekNum}
                  onClick={() => onWeekSelect(weekNum)}
                  className={buttonClasses}
                >
                  Week {weekNum}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {activeWeekData && (
        <div
          ref={detailsRef}
          id="week-details-container"
          className={`bg-white p-8 md:p-10 rounded-xl shadow-xl border-t-4 transition-all duration-300 ${activePhase?.theme.border || 'border-transparent'}`}
        >
          <h3 id="detail-title" className="text-2xl md:text-3xl font-bold mb-4">{activeWeekData.phase}: {activeWeekData.title}</h3>
          <p id="detail-focus" className="text-lg text-stone-500 mb-6 italic">Focus: {activeWeekData.focus}</p>
          
          <div className="border-t border-stone-200 pt-6 space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-stone-800">Topics:</h4>
              <p id="detail-topics" className="text-stone-700 leading-relaxed">{activeWeekData.topics}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-stone-800">Weekday Goal:</h4>
              <p id="detail-weekday" className="text-stone-700 leading-relaxed">{activeWeekData.weekday}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-stone-800">Weekend Goal:</h4>
              <p id="detail-weekend" className="text-stone-700 leading-relaxed">{activeWeekData.weekend}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PlanSection;
