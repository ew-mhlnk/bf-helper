import asyncio
import json
from aiogram import Bot, Dispatcher
from aiogram.filters import Command
from aiogram.types import Message, WebAppInfo, ReplyKeyboardMarkup, KeyboardButton
from dotenv import load_dotenv
import os

load_dotenv()

bot = Bot(token=os.getenv("BOT_TOKEN"))
dp = Dispatcher()

@dp.message(Command("start"))
async def start(message: Message):
    keyboard = ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(text="Открыть Mini App", web_app=WebAppInfo(url=os.getenv("MINI_APP_URL")))]
        ],
        resize_keyboard=True
    )
    await message.reply("Привет, водитель! Нажми кнопку ниже:", reply_markup=keyboard)

@dp.message(lambda message: message.web_app_data is not None)
async def handle_mini_app_data(message: Message):
    try:
        data = json.loads(message.web_app_data.data)
        command = data.get('command', 'Неизвестная команда')
    except json.JSONDecodeError:
        command = 'Ошибка парсинга данных'
        await message.reply(f"Ошибка в данных из Mini App: {command}")
        return

    await bot.send_photo(chat_id=message.chat.id, photo="photo/BF.png", caption=f"Инструкция: {command}")
    await message.reply(f"Инструкция для '{command}' отправлена!")

async def main():
    await dp.start_polling(bot)

if __name__ == '__main__':
    asyncio.run(main())