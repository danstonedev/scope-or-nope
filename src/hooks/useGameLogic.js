import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { CASE_BANK, SCORING } from '../data/caseBank';

export const GLOBAL_FEEDBACK = {
    match_treat_title: "It's a Match! 😍",
    match_treat_sub: "Green Flag! Safe to Treat.",
    match_refer_title: "Dodged a Bullet 🚩",
    match_refer_sub: "You spotted the red flags. Hard pass.",
    missed: "Dealbreaker 💔",
    sub_missed_pt: "You could have treated this! Don't over-refer.",
    sub_missed_refer: "Unsafe! This patient needs medical eyes."
};

export function useGameLogic() {
    const [queue, setQueue] = useState([]);
    const [currentCard, setCurrentCard] = useState(null);
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState('start');
    const [feedback, setFeedback] = useState(null);
    const [streak, setStreak] = useState(0);
    const [level, setLevel] = useState(1);
    const [showExitConfirm, setShowExitConfirm] = useState(false);
    const [showJuicyOverlay, setShowJuicyOverlay] = useState(null);
    const [highScore, setHighScore] = useState(0);
    const [totalCards, setTotalCards] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);

    // ============================================
    // LIFTED SCAFFOLD STATE
    // ============================================
    const [scaffoldStage, setScaffoldStage] = useState(null);
    const [chatMessages, setChatMessages] = useState([]);
    const [chatNotification, setChatNotification] = useState(null);

    // Refs
    const addedStagesRef = useRef(new Set());
    const scaffoldStageRef = useRef(scaffoldStage);
    const levelRef = useRef(level);

    useEffect(() => { scaffoldStageRef.current = scaffoldStage; }, [scaffoldStage]);
    useEffect(() => { levelRef.current = level; }, [level]);

    // Load High Score on Mount
    useEffect(() => {
        const saved = localStorage.getItem('scopeOrNope_highScore');
        if (saved) setHighScore(parseInt(saved, 10));
    }, []);

    // Save High Score
    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('scopeOrNope_highScore', score.toString());
        }
    }, [score, highScore]);

    // Get current stage's data
    const getCurrentStageData = (stage = scaffoldStage) => {
        if (!currentCard?.scaffolding || !stage) return null;
        return stage === 'DIALOGUE'
            ? currentCard.scaffolding.level2
            : currentCard.scaffolding.level3;
    };

    // Reset chat when card changes
    useEffect(() => {
        setChatMessages([]);
        setChatNotification(null);
        addedStagesRef.current = new Set();
    }, [currentCard?.id]);

    // Add initial messages when stage changes
    useEffect(() => {
        if (!scaffoldStage || !currentCard?.scaffolding) return;

        const stageKey = `${currentCard.id}-${scaffoldStage}`;
        if (addedStagesRef.current.has(stageKey)) return;
        addedStagesRef.current.add(stageKey);

        const stageData = getCurrentStageData(scaffoldStage);
        if (!stageData) return;

        const isDialogue = scaffoldStage === 'DIALOGUE';
        const text = isDialogue ? stageData.question : stageData.update;
        const timeLabel = stageData.time_label || (isDialogue ? "Session Started" : "Later");
        const baseId = `${scaffoldStage}-${Date.now()}`;

        const newMsgs = [
            { id: `${baseId}-divider`, text: timeLabel, type: 'divider' },
            { id: `${baseId}-text`, text, sender: 'patient', type: 'text' }
        ];

        if (stageData.media?.type === 'image') {
            newMsgs.push({ id: `${baseId}-img`, url: stageData.media.url, sender: 'patient', type: 'image' });
        }

        setChatMessages(prev => [...prev, ...newMsgs]);
    }, [scaffoldStage, currentCard?.id]);

    // ============================================
    // HANDLERS
    // ============================================

    const handleChatOptionSelect = (opt) => {
        const userMsg = { id: `user-${Date.now()}`, text: opt.text, sender: 'me', type: 'text' };
        setChatMessages(prev => [...prev, userMsg]);

        setTimeout(() => {
            setChatNotification({
                title: opt.correct ? "Great Job! 🎓" : "Hold up... 🛑",
                body: opt.feedback,
                isCorrect: opt.correct
            });

            if (opt.correct) {
                if (navigator.vibrate) navigator.vibrate(20);
                setTimeout(() => {
                    setChatNotification(null);
                    advanceScaffold(opt);
                }, 3000);
            } else {
                if (navigator.vibrate) navigator.vibrate([50, 50, 50]);
                setTimeout(() => {
                    setChatNotification(null);
                }, 4000);
            }
        }, 500);
    };

    const advanceScaffold = (option) => {
        const currentStage = scaffoldStageRef.current;
        const currentLevel = levelRef.current;
        const c = currentCard;

        if (!c) return;

        if (!option.correct) {
            handleIncorrect(c, null, option.feedback);
            return;
        }

        if (currentStage === 'DIALOGUE') {
            if (currentLevel === 3 && c.scaffolding?.level3) {
                setScaffoldStage('MANAGEMENT');
            } else {
                setScaffoldStage(null);
                handleMissionComplete(c, 10);
            }
        } else if (currentStage === 'MANAGEMENT') {
            setScaffoldStage(null);
            handleMissionComplete(c, 20);
        }
    };

    const startGame = (selectedLevel) => {
        setLevel(selectedLevel);

        let bank = CASE_BANK;
        if (selectedLevel > 1) {
            bank = CASE_BANK.filter(c => c.scaffolding);
        }
        if (bank.length === 0) bank = CASE_BANK;

        const shuffled = [...bank].sort(() => Math.random() - 0.5);
        setQueue(shuffled);
        setTotalCards(shuffled.length);
        setCurrentCard(shuffled.pop());
        setScore(0);
        setCorrectCount(0);
        setStreak(0);
        setGameState('playing');
    };

    const handleHomeClick = () => {
        if (gameState === 'start') return;
        if (gameState === 'playing' || gameState === 'feedback') {
            setShowExitConfirm(true);
        } else {
            goHome();
        }
    };

    const goHome = () => {
        setShowExitConfirm(false);
        setGameState('start');
        setScaffoldStage(null);
        setFeedback(null);
        setChatMessages([]);
        setChatNotification(null);
    };

    const handleAction = (direction) => {
        const c = currentCard;
        let isCorrect = false;
        let feedbackSub = "";

        if (direction === 'left') {
            // LEFT is now SCOPE/TREAT
            if (c.correct_swipe === 'RIGHT_PT') isCorrect = true;
            else feedbackSub = GLOBAL_FEEDBACK.sub_missed_refer;
        }
        else if (direction === 'right') {
            // RIGHT is now NOPE/REFER
            if (c.correct_swipe === 'LEFT_REFER' || c.correct_swipe === 'LEFT_911') isCorrect = true;
            else feedbackSub = GLOBAL_FEEDBACK.sub_missed_pt;
        }

        if (isCorrect) {
            handleCorrect(c, direction);
        } else {
            handleIncorrect(c, direction, feedbackSub);
        }
    };

    const handleCorrect = (c, direction) => {
        if (level >= 2 && c.scaffolding?.level2) {
            setScaffoldStage('DIALOGUE');
            if (navigator.vibrate) navigator.vibrate(20);
        } else {
            // New Flow: Mission Complete -> Show Feedback -> Next
            handleMissionComplete(c);
        }
    };

    const handleSortingComplete = () => {
        confetti({ particleCount: 30, spread: 40, origin: { y: 0.6 } });
        if (navigator.vibrate) navigator.vibrate(50);

        const c = currentCard;
        if (level >= 2 && c.scaffolding?.level2) {
            setScaffoldStage('DIALOGUE');
        } else {
            handleMissionComplete(c);
        }
    };

    const handleMissionComplete = (c, bonus = 0) => {
        let points = (SCORING[c.id] || 20) + bonus;
        if (c.sorting_items) points += 15;

        setScore(prev => prev + points);
        setCorrectCount(prev => prev + 1);
        setStreak(prev => prev + 1);

        let msg = "PERFECT!";
        if (c.sorting_items) msg = "CO-MANAGED!";
        if (c.correct_swipe === 'LEFT_911') msg = "LIFESAVER!";

        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
        setShowJuicyOverlay({ points: points, message: msg });

        // Show Feedback Screen after brief celebration
        setTimeout(() => {
            setShowJuicyOverlay(null);

            // Show Correct Feedback
            setFeedback({
                status: 'correct',
                points: points,
                card: c,
                title: "Spot On!",
                subTitle: "You made the right clinical call.",
                direction: null,
                canRetry: false
            });
            setGameState('feedback');
        }, 900);
    };

    const handleIncorrect = (c, direction, customFeedback = null) => {
        setStreak(0);
        setScaffoldStage(null);
        setChatMessages([]);
        setChatNotification(null);
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]);

        let title = GLOBAL_FEEDBACK.missed;
        let subTitle = customFeedback || "Swipe didn't match the clinical need.";

        setFeedback({
            status: 'missed',
            points: 0,
            card: c,
            title,
            subTitle,
            direction,
            canRetry: true
        });
        setGameState('feedback');
    };

    const retryCard = () => {
        setFeedback(null);
        setGameState('playing');
    };

    const nextCard = () => {
        setScaffoldStage(null);
        setChatMessages([]);
        setChatNotification(null);
        if (queue.length === 0) {
            setGameState('end');
        } else {
            setCurrentCard(queue.pop());
            setGameState('playing');
        }
    };

    return {
        // State
        queue, currentCard, score, gameState, feedback, streak, level,
        showExitConfirm, showJuicyOverlay, highScore,
        scaffoldStage, chatMessages, chatNotification,
        // Handlers
        startGame, handleHomeClick, goHome, handleAction, handleSortingComplete,
        retryCard, nextCard, setShowExitConfirm,
        handleChatOptionSelect, setChatNotification, getCurrentStageData,
        totalCards, correctCount
    };
}
