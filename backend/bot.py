import asyncio
from aiogram import Bot, Dispatcher
from aiogram.filters import Command
from dotenv import load_dotenv
import os

load_dotenv()

bot = Bot(token=os.getenv("BOT_TOKEN"))
dp = Dispatcher()

@dp.message(Command("start"))
async def start(message):
    await message.reply("Привет, водитель! Открой Mini App и выбери инструкцию.", reply_markup=None)

@dp.message(lambda message: message.text == "Как заправляться?")
async def send_fuel_instruction(message):
    await bot.send_photo(chat_id=message.chat.id, photo="photo/BF.png", caption="Инструкция: Как заправляться?")
    await message.reply("Инструкция отправлена!")

@dp.message(lambda message: message.text == "Топливный калькулятор")
async def send_calculator_instruction(message):
    await bot.send_photo(chat_id=message.chat.id, photo="photo/BF.png", caption="Инструкция: Топливный калькулятор")
    await message.reply("Инструкция отправлена!")

@dp.message(lambda message: message.text == "Мой переход")
async def send_transition_instruction(message):
    await bot.send_photo(chat_id=message.chat.id, photo="photo/BF.png", caption="Инструкция: Мой переход")
    await message.reply("Инструкция отправлена!")

@dp.message(lambda message: message.text == "Как открыть рейс?")
async def send_open_trip_instruction(message):
    await bot.send_photo(chat_id=message.chat.id, photo="photo/BF.png", caption="Инструкция: Как открыть рейс?")
    await message.reply("Инструкция отправлена!")

@dp.message(lambda message: message.text == "Как закрыть рейс?")
async def send_close_trip_instruction(message):
    await bot.send_photo(chat_id=message.chat.id, photo="photo/BF.png", caption="Инструкция: Как закрыть рейс?")
    await message.reply("Инструкция отправлена!")

@dp.message(lambda message: message.text == "Как добавить CMR?")
async def send_cmr_instruction(message):
    await bot.send_photo(chat_id=message.chat.id, photo="photo/BF.png", caption="Инструкция: Как добавить CMR?")
    await message.reply("Инструкция отправлена!")

@dp.message(lambda message: message.text == "Как добавить карту простоя?")
async def send_idle_card_instruction(message):
    await bot.send_photo(chat_id=message.chat.id, photo="photo/BF.png", caption="Инструкция: Как добавить карту простоя?")
    await message.reply("Инструкция отправлена!")

@dp.message(lambda message: message.text == "Как добавить чек?")
async def send_receipt_instruction(message):
    await bot.send_photo(chat_id=message.chat.id, photo="photo/BF.png", caption="Инструкция: Как добавить чек?")
    await message.reply("Инструкция отправлена!")

@dp.message(lambda message: message.text == "Перечень. Что я должен знать?")
async def send_list_instruction(message):
    await bot.send_photo(chat_id=message.chat.id, photo="photo/BF.png", caption="Инструкция: Перечень. Что я должен знать?")
    await message.reply("Инструкция отправлена!")

@dp.message(lambda message: message.text == "Я приехал из рейса. Что дальше?")
async def send_post_trip_instruction(message):
    await bot.send_photo(chat_id=message.chat.id, photo="photo/BF.png", caption="Инструкция: Я приехал из рейса. Что дальше?")
    await message.reply("Инструкция отправлена!")

async def main():
    await dp.start_polling(bot)

if __name__ == '__main__':
    asyncio.run(main())