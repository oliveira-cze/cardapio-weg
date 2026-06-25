'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { User } from '../types/User'

export async function login(formData : FormData) {

    const userNameInput = formData.get('name') as string

    const response = await fetch("https://randomuser.me/api/?results=1")
    const data = await response.json()

    const apiUser = data.results[0]

    const user : User = {
        uuid: apiUser.login.uuid,
        name: userNameInput,
        image: apiUser.picture.large
    }

    const cookieStore = await cookies()

    cookieStore.set('auth_token', 'logado', {
        path: '/',
        maxAge: 3600,
        httpOnly: true
    })

    cookieStore.set('user_data', JSON.stringify(user), {
        path: '/',
        maxAge: 3600,
        httpOnly: true
    })

    redirect('/admin')
}

export async function logout() {

    const cookieStore = await cookies()

    cookieStore.delete('auth_token')
    cookieStore.delete('user_data')

    redirect('/login')
}

