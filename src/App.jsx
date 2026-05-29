import { useState, useEffect, useRef } from "react";

const STORAGE_KEY = "iraqi-poetry-cards";
const loadCards = async () => {
  try {
    const r = await window.storage.get(STORAGE_KEY);
    return r ? JSON.parse(r.value) : [];
  } catch { return []; }
};
const saveCards = async (cards) => {
  try { await window.storage.set(STORAGE_KEY, JSON.stringify(cards)); }
  catch (e) { console.error(e); }
};
