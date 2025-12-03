#!/bin/bash
set -e

echo "Starting deployment..."
cd /opt/bf-helper

# Получить обновления из Git
git fetch --all
git reset --hard origin/main

# Обновить backend
echo "Updating backend..."
cd backend
source .venv/bin/activate
pip install -r requirements.txt

# Обновить frontend
echo "Building frontend..."
cd ../frontend
npm ci
npm run build

# Перезапустить backend
echo "Restarting backend..."
sudo systemctl restart bf-helper-bot.service

echo "Deployment completed at $(date)"