import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SwipeCard from './components/SwipeCard';
import ScaffoldModal from './components/ScaffoldModal';
import { Heart, X, Trophy, ChevronRight, RotateCcw, ArrowLeft, ArrowRight, AlertCircle, Check } from 'lucide-react';
import { useGameLogic, GLOBAL_FEEDBACK } from './hooks/useGameLogic';
import undPoster from './assets/und_poster.png';

export default function App() {
  const {
    // State
    queue, currentCard, score, gameState, feedback, streak, level,
    showExitConfirm, showJuicyOverlay, highScore,
    scaffoldStage, chatMessages, chatNotification,
    // Handlers
    startGame, handleHomeClick, goHome, handleAction, handleSortingComplete,
    retryCard, nextCard, setShowExitConfirm,
    handleChatOptionSelect, setChatNotification, getCurrentStageData,
    totalCards, correctCount
  } = useGameLogic();

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="h-screen w-full bg-gray-50 flex flex-col items-center overflow-hidden font-sans">
      <header className="w-full max-w-md bg-white p-4 shadow-sm flex justify-between items-center z-10">
        <button onClick={handleHomeClick} className="focus:outline-none hover:scale-105 active:scale-95 transition-transform">
          <h1 className="text-xl font-black text-black">
            Scope-or-Nope
          </h1>
        </button>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-orange-100/50 px-2 py-1 rounded-full text-xs font-bold text-orange-600">
            🔥 {streak}
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
            <Trophy size={14} className="text-yellow-500" />
            <span className="font-bold text-gray-700 text-sm">Correct: {correctCount}</span>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-md relative flex justify-center items-start pt-2 px-4 pb-4">

        <AnimatePresence>
          {gameState === 'start' && (
            <motion.div
              key="start-screen"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center gap-2 px-4"
            >
              {/* Poster image - sized to fit with room for browser nav */}
              <div className="w-full max-h-[55dvh] flex items-center justify-center">
                <img
                  src={undPoster}
                  alt="Scope Or Nope Poster"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Bottom Button - right below image */}
              <button onClick={() => startGame(1)} className="w-full bg-[#009A44] text-white font-black py-4 rounded-xl text-xl shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all flex items-center justify-center gap-2">
                <span>START SHIFT</span>
                <ChevronRight strokeWidth={4} size={20} />
              </button>

            </motion.div>
          )}

          {gameState === 'playing' && currentCard && (
            <React.Fragment key="playing-screen">
              <motion.div
                key={currentCard.id}
                initial={{ x: 300, opacity: 0, rotate: 5 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="absolute inset-0 flex items-start justify-center pointer-events-none pt-4"
              >
                <div className="relative w-full h-full flex items-start justify-center pointer-events-auto">
                  <SwipeCard
                    data={currentCard}
                    onSwipe={handleAction}
                    onSortingComplete={handleSortingComplete}
                  />
                </div>
              </motion.div>

              {/* 2-Option Bottom Bar (Only for non-sorting cards without scaffold) */}
              {!scaffoldStage && (!currentCard.sorting_items || currentCard.sorting_items.length === 0) && (
                <div className="absolute inset-x-0 bottom-2 px-3 z-20 flex flex-col gap-1">
                  {/* Progress Indicator */}
                  <div className="mx-auto bg-black/40 backdrop-blur-md text-white px-2 py-0.5 rounded-full text-[9px] font-bold pointer-events-none">
                    Case {totalCards - (queue?.length || 0)} of {totalCards}
                  </div>
                  <div className="flex justify-between items-center gap-2 bg-white/95 backdrop-blur-md p-1.5 rounded-xl border border-gray-200 shadow-lg">
                    <button
                      onClick={() => handleAction('left')}
                      className="flex-1 bg-green-50 hover:bg-green-100 active:scale-95 transition-all text-green-600 rounded-lg py-2 flex items-center justify-center gap-2 group"
                    >
                      <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                      <span className="text-xs font-black uppercase tracking-wider">Treat</span>
                    </button>

                    <button
                      onClick={() => handleAction('right')}
                      className="flex-1 bg-red-50 hover:bg-red-100 active:scale-95 transition-all text-red-600 rounded-lg py-2 flex items-center justify-center gap-2 group"
                    >
                      <span className="text-xs font-black uppercase tracking-wider">Refer</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}


              {/* SCAFFOLDING MODAL (Parent-Controlled) */}
              <AnimatePresence>
                {scaffoldStage && currentCard.scaffolding && (
                  <ScaffoldModal
                    key="scaffold-modal"
                    messages={chatMessages}
                    options={getCurrentStageData()?.options || []}
                    notification={chatNotification}
                    onOptionSelect={handleChatOptionSelect}
                    onDismissNotification={() => setChatNotification(null)}
                  />
                )}
              </AnimatePresence>
            </React.Fragment>
          )}

          {gameState === 'playing' && showJuicyOverlay && (
            <motion.div
              key="juicy-overlay"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              className="absolute z-[60] flex flex-col items-center justify-center pointer-events-none"
            >
              {/* Points Removed as per user request */}
              <div className="text-2xl font-black text-white bg-green-500 px-4 py-1 rounded-full mt-2 font-mono shadow-lg">
                {showJuicyOverlay.message}
              </div>
            </motion.div>
          )}

          {gameState === 'feedback' && feedback && (
            <motion.div
              key="feedback-screen"
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 z-40 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center"
            >
              <div className={`w-20 h-20 rounded-full flex flex-col items-center justify-center mb-4 border-4 bg-white shadow-lg ${feedback.status === 'correct' ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}>
                {feedback.status === 'correct' ? <Check size={40} strokeWidth={4} /> : <X size={40} />}
              </div>

              <h2 className="text-3xl font-black text-gray-900 mb-1 leading-tight">
                {feedback.title}
              </h2>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 leading-normal px-4">
                {feedback.subTitle}
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 w-full text-left mb-6 shadow-sm">
                <p className="text-gray-800 font-medium leading-relaxed text-sm">
                  {feedback.card.reveal.best_answer_rationale}
                </p>
              </div>

              <div className="w-full flex gap-3 mt-4">
                {feedback.canRetry && (
                  <button onClick={retryCard} className="flex-1 bg-white text-gray-900 border-2 border-gray-200 font-bold py-4 rounded-full shadow-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                    <RotateCcw size={20} /> Try Again
                  </button>
                )}
                <button onClick={nextCard} className="flex-1 bg-gray-900 text-white font-bold py-4 rounded-full shadow-xl">
                  Next Profile
                </button>
              </div>
            </motion.div>
          )}

          {gameState === 'end' && (
            <motion.div
              key="end-screen"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center text-center p-8"
            >
              <h2 className="text-3xl font-black text-gray-900 mb-2">Shift Complete</h2>
              <p className="text-xl text-gray-500 mb-8">Score: <span className="font-bold text-pink-500">{correctCount} / {totalCards} Correct</span></p>
              <button onClick={goHome} className="w-full bg-gray-900 text-white font-bold py-4 rounded-full text-lg shadow-lg">
                Back to Lobby
              </button>
            </motion.div>
          )}

          {/* EXIT CONFIRM MODAL */}
          {showExitConfirm && (
            <div key="exit-confirm" className="absolute inset-0 z-[70] bg-black/50 backdrop-blur-sm flex items-center justify-center p-8">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-3xl p-6 shadow-2xl w-full max-w-sm text-center"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                  <AlertCircle size={32} />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Abandon Shift?</h3>
                <p className="text-gray-500 mb-6 font-medium">
                  You'll lose your current streak and score.
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowExitConfirm(false)}
                    className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Keep Playing
                  </button>
                  <button
                    onClick={goHome}
                    className="flex-1 bg-red-500 text-white font-bold py-3 rounded-xl hover:bg-red-600 transition-colors"
                  >
                    Exit
                  </button>
                </div>
              </motion.div>
            </div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}
