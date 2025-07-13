document.addEventListener('DOMContentLoaded', () => {
    const initData = window.Telegram.WebApp.initData
    const user = window.Telegram.WebApp.initDataUnsafe.user

    async function getUser() {
        try {
            const users = await fetch('https://tapalka.wizardstech.ru:8443/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'initData': initData
                }
            })

            const usersData = await users.json()

            const foundingActiveUser = usersData.find((userItem) => {
                return String(userItem.tg_id) === String(user.id)
            })

            if (!foundingActiveUser) {
                try {
                    const setNewUser = await fetch('https://tapalka.wizardstech.ru:8443/api/users/me', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'initData': initData
                        }
                    })
                    window.location.href = '/templates/tutorial.html'
                } catch (error) {
                    console.log(error)
                }
            } else {
                window.location.href = '/templates/main.html'
            }

            return usersData
        } catch (error) {
            try {
                const setNewUser = await fetch('https://tapalka.wizardstech.ru:8443/api/users/me', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'initData': initData
                    }
                })
                window.location.href = '/templates/tutorial.html'
            } catch (error) {
                console.log(error)
            }
        }
    }

    if (!user || !user.id) {
        console.error('Данные пользователя недоступны')
        return
    }

    getUser()
})