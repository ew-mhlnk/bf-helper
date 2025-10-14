// telegram.d.ts
interface TelegramWebApp {
  sendData(data: string): void;
  // Дополнительные методы, если нужны (например, initData, ready)
  initData: string;
  ready(): void;
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}