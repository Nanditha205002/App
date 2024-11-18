import React, { useState, useEffect } from 'react';
import './Settings.css';

function Settings() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'usd');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey') || '');
  const [notifications, setNotifications] = useState(localStorage.getItem('notifications') === 'true' || false);

  // Update theme when it's changed
  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle currency change
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    localStorage.setItem('currency', e.target.value);
  };

  // Handle language change
  const handleLanguageChange = (e) => { 
    setLanguage(e.target.value);
    localStorage.setItem('language', e.target.value);
  };

  // Handle API Key change
  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
    localStorage.setItem('apiKey', e.target.value);
  };

  // Handle notification preference
  const handleNotificationChange = () => {
    setNotifications(!notifications);
    localStorage.setItem('notifications', !notifications);
  };

  // Reset all settings to default
  const resetSettings = () => {
    setTheme('light');
    setCurrency('usd');
    setLanguage('en');
    setApiKey('');
    setNotifications(false);
    localStorage.clear();  // Clear all settings from localStorage
  };

  return (
    <div className="settings">
      <h1>Settings</h1>

      <div>
        <label>Dark Mode</label>
        <input type="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} checked={theme === 'dark'} />
      </div>

      <div>
        <label>Preferred Currency</label>
        <select value={currency} onChange={handleCurrencyChange}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
          {/* Add more currencies as needed */}
        </select>
      </div>

      <div>
        <label>Language</label>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          {/* Add more languages as needed */}
        </select>
      </div>

      <div>
        <label>API Key</label>
        <input
          type="text"
          placeholder="Enter your API Key"
          value={apiKey}
          onChange={handleApiKeyChange}
        />
      </div>

      <div>
        <label>Receive Notifications</label>
        <input
          type="checkbox"
          onChange={handleNotificationChange}
          checked={notifications}
        />
      </div>

      <button onClick={resetSettings}>Reset Settings</button>
    </div>
  );
}

export default Settings;

