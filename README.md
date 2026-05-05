# 🚀 Bonsai Bot - Telegram Tap Game

<p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=FFF" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=FFF" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" 
</p>

> **Bonsai** - это Telegram-тапалка с туториалом, внутриигровым магазином, ежедневными наградами, персональными заданиями, бустами, реферальной системой, настройками профиля, управлением анимациями и множеством других возможностей.

---

## 🚀 Локальный запуск

Чтобы запустить проект локально:

```bash
# 1. Клонируйте репозиторий
git clone https://github.com/4min-dev/Bonsai-bot.git

# 2. Перейдите в папку проекта
cd Bonsai-bot

# 3. Установите зависимости
npm install

# 4. Запустите бекенд
docker compose -f backend/docker-compose.dev.yaml up --build -d

# 5. Запустите фронт
cd front npm run start
```

## 📸 Скриншоты игры

<table align="center" border="0" cellpadding="0" cellspacing="10" style="border-collapse: collapse; width: 100%;">
  <tr>
     <td valign="top" align="center" style="width: 25%; padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%92%D1%85%D0%BE%D0%B4%20%D0%B2%20%D1%82%D1%83%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB.png" width="300" />
      <br><sub><b>Первый запуск</b></sub>
    </td>
     <td valign="top" align="center" style="width: 25%; padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%A2%D1%83%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB%201.png" width="300" />
      <br><sub><b>Туториал-1</b></sub>
    </td>
     <td valign="top" align="center" style="width: 25%; padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%A2%D1%83%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB%202.png" width="300" />
      <br><sub><b>Туториал-2</b></sub>
    </td>
     <td valign="top" align="center" style="width: 25%; padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%A2%D1%83%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB%203.png" width="300" />
      <br><sub><b>Туториал-3</b></sub>
  </tr>

  <tr>
        </td>
     <td valign="top" align="center" style="width: 25%; padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%A2%D1%83%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB%204.png" width="300" />
      <br><sub><b>Туториал-4</b></sub>
    </td>
    <td valign="top" align="center" style="width: 25%; padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F.png" width="300" />
      <br><sub><b>Главная</b></sub>
    </td>
     <td valign="top" align="center" style="width: 25%; padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F.png" width="300" />
      <br><sub><b>Задания</b></sub>
    </td>
    <td valign="top" align="center" style="width: 25%; padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F_message.png" width="300" />
      <br><sub><b>Успешный сбор награды</b></sub>
    </td>
  </tr>

  <tr>
    <td valign="top" align="center" style="width: 25%; padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F_message-1.png" width="300" />
      <br><sub><b>Сообщение об ошибке</b></sub>
    </td>
     <td valign="top" align="center" style="width: 25%; padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BC%D0%BE%D0%B4%D0%B0%D0%BB%D0%BA%D0%B0.png" width="300" />
      <br><sub><b>Выбранное задание</b></sub>
    </td>
     <td valign="top" align="center" style="padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%95%D0%B6%D0%B5%D0%B4%D0%BD%D0%B5%D0%B2%D0%BD%D0%B0%D1%8F%20%D0%BD%D0%B0%D0%B3%D1%80%D0%B0%D0%B4%D0%B0.png" width="300" />
      <br><sub><b>Ежедневные награды</b></sub>
    </td>
    <td valign="top" align="center" style="padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%9C%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD_%D0%91%D1%83%D1%81%D1%82%D0%B5%D1%80%D1%8B.png" width="300" />
      <br><sub><b>Магазин предметов</b></sub>
    </td>
  </tr>

  <tr>
    <td valign="top" align="center" style="padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%9C%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD_%D0%91%D1%83%D1%81%D1%82%D0%B5%D1%80%D1%8B_%D0%9C%D0%BE%D0%B4%D0%B0%D0%BB%D0%BA%D0%B0-1.png" width="300" />
      <br><sub><b>Подтверждение покупки предмета</b></sub>
    </td>
    <td valign="top" align="center" style="padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%9C%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD_%D0%A1%D0%B0%D0%B4_%D0%9C%D0%BE%D0%B4%D0%B0%D0%BB%D0%BA%D0%B0.png" width="300" />
      <br><sub><b>Улучшение предмета</b></sub>
    </td>
        <td valign="top" align="center" style="padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%9C%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD_%D0%91%D1%83%D1%81%D1%82%D0%B5%D1%80%D1%8B_%D0%9C%D0%BE%D0%B4%D0%B0%D0%BB%D0%BA%D0%B0.png" width="300" />
      <br><sub><b>Покупка бустера</b></sub>
    </td>
    <td valign="top" align="center" style="padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C/%D0%A0%D0%B5%D0%B9%D1%82%D0%B8%D0%BD%D0%B3%20%D0%B8%D0%B3%D1%80%D0%BE%D0%BA%D0%BE%D0%B2.png" width="300" />
      <br><sub><b>Профиль/Рейтинг</b></sub>
    </td>
  </tr>

  <tr>
    <td valign="top" align="center" style="padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C/%D0%A0%D0%B5%D0%B9%D1%82%D0%B8%D0%BD%D0%B3%20%D0%B8%D0%B3%D1%80%D0%BE%D0%BA%D0%BE%D0%B2/%D0%98%D0%BD%D0%BF%D1%83%D1%82%20%D1%81%20%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BC.png" width="300" />
      <br><sub><b>Изменение никнейма</b></sub>
    </td>
    <td valign="top" align="center" style="padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B8.png" width="300" />
      <br><sub><b>Настройки</b></sub>
    </td>
      <td valign="top" align="center" style="padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B8/%D0%A3%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B0%D0%BA%D0%BA%D0%B0%D1%83%D0%BD%D1%82%D0%B0.png" width="300" />
      <br><sub><b>Подтверждение удаления аккаунта</b></sub>
    </td>
    <td valign="top" align="center" style="padding: 5px;">
      <img src="https://github.com/4min-dev/screenshots/blob/bonsai-bot/%D0%A0%D0%B5%D1%84%D0%B5%D1%80%D0%B0%D0%BB%D0%BA%D0%B0.png" width="300" />
      <br><sub><b>Рефералка</b></sub>
    </td>
  </tr>
</table>
