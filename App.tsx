
import React, { useState } from 'react';
import Header from './components/Header';
import ScheduleSection from './components/ScheduleSection';
import PlanSection from './components/PlanSection';
import TipsSection from './components/TipsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);

  const handleWeekSelect = (week: number) => {
    setSelectedWeek(week);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <ScheduleSection />
        <PlanSection selectedWeek={selectedWeek} onWeekSelect={handleWeekSelect} />
        <TipsSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
