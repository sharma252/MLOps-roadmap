import { useState, useEffect } from "react";

export const useProgress = () => {
  const [completedItems, setCompletedItems] = useState({});

  // Load progress from localStorage
  useEffect(() => {
    const loadProgress = () => {
      try {
        const saved = localStorage.getItem("mlops-progress");
        if (saved) {
          setCompletedItems(JSON.parse(saved));
        }
      } catch (error) {
        console.error("Failed to load progress:", error);
      }
    };
    loadProgress();
  }, []);

  // Save progress to localStorage
  const saveProgress = (newProgress) => {
    try {
      localStorage.setItem("mlops-progress", JSON.stringify(newProgress));
    } catch (error) {
      console.error("Failed to save progress:", error);
    }
  };

  const toggleItem = (itemId) => {
    const newCompleted = {
      ...completedItems,
      [itemId]: !completedItems[itemId],
    };
    setCompletedItems(newCompleted);
    saveProgress(newCompleted);
    return newCompleted;
  };

  return {
    completedItems,
    toggleItem,
  };
};
